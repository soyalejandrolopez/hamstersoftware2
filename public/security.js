/**
 * Hamster Software — Security Guard
 * Bloqueo de Consola, Herramientas de Desarrollo y Control de Pestaña Única
 */
(function () {
  'use strict';

  /* ==========================================================================
     1. BLOQUEO DE CONSOLA Y HERRAMIENTAS DE DESARROLLO (DEVTOOLS)
     ========================================================================== */
  var noop = function () {};
  var dummyConsole = (typeof Proxy !== 'undefined')
    ? new Proxy({}, {
        get: function () { return noop; },
        set: function () { return true; },
        defineProperty: function () { return true; },
        deleteProperty: function () { return true; }
      })
    : {};

  if (typeof Proxy === 'undefined') {
    var consoleMethods = [
      'log', 'debug', 'info', 'warn', 'error', 'assert', 'dir', 'dirxml',
      'group', 'groupCollapsed', 'groupEnd', 'time', 'timeLog', 'timeEnd',
      'count', 'countReset', 'trace', 'profile', 'profileEnd', 'table', 'clear'
    ];
    for (var i = 0; i < consoleMethods.length; i++) {
      dummyConsole[consoleMethods[i]] = noop;
    }
  }

  try {
    Object.defineProperty(window, 'console', {
      get: function () { return dummyConsole; },
      set: function () {},
      configurable: false,
      enumerable: true
    });
  } catch (e) {
    try { window.console = dummyConsole; } catch (err) {}
  }

  // Bloqueo de atajos de teclado para inspección, consola y código fuente
  window.addEventListener('keydown', function (e) {
    var key = (e.key || '').toUpperCase();
    var keyCode = e.keyCode || e.which;

    // Tecla F12
    if (key === 'F12' || keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    var isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
    var devtoolsCombo = isMac ? (e.metaKey && e.altKey) : (e.ctrlKey && e.shiftKey);

    // Atajos de DevTools (Cmd+Option+I/J/C/K/E o Ctrl+Shift+I/J/C/K/E)
    if (devtoolsCombo && (key === 'I' || key === 'J' || key === 'C' || key === 'K' || key === 'E')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ver código fuente: Ctrl+U o Cmd+Option+U
    if ((e.ctrlKey || (isMac && e.metaKey && e.altKey)) && key === 'U') {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Guardar página: Ctrl+S o Cmd+S
    if ((e.ctrlKey || e.metaKey) && key === 'S') {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, true);

  // Prevenir menú contextual nativo del navegador (evita clic derecho -> Inspeccionar)
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  }, true);

  // Anti-debugging preventivo
  setInterval(function () {
    var t0 = performance.now();
    debugger;
    if (performance.now() - t0 > 100) {
      try { window.close(); } catch (err) {}
    }
  }, 1000);


  /* ==========================================================================
     2. BLOQUEO Y CIERRE AUTOMÁTICO DE PESTAÑAS DUPLICADAS (SINGLE-TAB GUARD)
     ========================================================================== */
  var STORAGE_KEY = 'hamster_active_tab_session';
  var CHANNEL_NAME = 'hamster_tab_guard_channel';
  var HEARTBEAT_INTERVAL = 1000;
  var SESSION_TIMEOUT = 2500;

  var myInstanceId = 'hs_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
  var persistentTabId = sessionStorage.getItem('hamster_tab_persistent_id');
  if (!persistentTabId) {
    persistentTabId = myInstanceId;
    sessionStorage.setItem('hamster_tab_persistent_id', persistentTabId);
  }

  var isBlocked = false;
  var heartbeatTimer = null;
  var channel = null;

  if (typeof BroadcastChannel !== 'undefined') {
    try {
      channel = new BroadcastChannel(CHANNEL_NAME);
    } catch (e) {
      channel = null;
    }
  }

  function blockAndCloseTab() {
    if (isBlocked) return;
    isBlocked = true;

    if (heartbeatTimer) clearInterval(heartbeatTimer);
    try { window.stop(); } catch (e) {}

    // Intentar cierre automático inmediato
    try { window.close(); } catch (e) {}

    // Si la política del navegador restringe el cierre automático, bloquear la vista con UI de advertencia
    function applyLockScreen() {
      document.title = 'Pestaña Bloqueada — Hamster Software';
      document.documentElement.innerHTML = `
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Pestaña Bloqueada — Hamster Software</title>
          <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body {
              background-color: #0c0a09;
              color: #f5f5f4;
              font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 24px;
            }
            .lock-box {
              background: #1c1917;
              border: 1px solid #dc2626;
              border-radius: 20px;
              padding: 44px 32px;
              max-width: 480px;
              width: 100%;
              text-align: center;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 35px rgba(220, 38, 38, 0.2);
            }
            .lock-icon {
              width: 68px;
              height: 68px;
              background: rgba(220, 38, 38, 0.12);
              border: 2px solid #ef4444;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 20px;
              color: #ef4444;
            }
            h1 {
              font-size: 22px;
              font-weight: 700;
              margin-bottom: 12px;
              color: #fafaf9;
            }
            p {
              font-size: 14px;
              line-height: 1.6;
              color: #a8a29e;
              margin-bottom: 28px;
            }
            .btn-close {
              display: inline-block;
              background: #dc2626;
              color: #ffffff;
              border: none;
              padding: 13px 32px;
              border-radius: 10px;
              font-size: 15px;
              font-weight: 600;
              cursor: pointer;
              box-shadow: 0 4px 14px rgba(220, 38, 38, 0.4);
              transition: transform 0.15s, background 0.15s;
            }
            .btn-close:hover {
              background: #b91c1c;
              transform: translateY(-1px);
            }
          </style>
        </head>
        <body>
          <div class="lock-box">
            <div class="lock-icon">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h1>Pestaña Bloqueada</h1>
            <p>Esta aplicación ya se encuentra abierta en otra pestaña de su navegador. Por motivos de seguridad y consistencia, solo se permite una pestaña activa a la vez.</p>
            <button class="btn-close" id="btnCloseTab">Cerrar esta pestaña</button>
          </div>
        </body>
      `;

      var btn = document.getElementById('btnCloseTab');
      if (btn) {
        btn.addEventListener('click', function () {
          window.close();
          window.location.href = 'about:blank';
        });
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', applyLockScreen);
    } else {
      applyLockScreen();
    }
  }

  function updateHeartbeat() {
    if (isBlocked) return;
    try {
      var payload = { instanceId: myInstanceId, persistentTabId: persistentTabId, timestamp: Date.now() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {}
  }

  function checkOtherTabActive() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var session = JSON.parse(raw);
        if (session && session.persistentTabId && session.persistentTabId !== persistentTabId) {
          var diff = Date.now() - session.timestamp;
          if (diff < SESSION_TIMEOUT) {
            return true;
          }
        }
      }
    } catch (e) {}
    return false;
  }

  // Verificación al iniciar
  if (checkOtherTabActive()) {
    blockAndCloseTab();
  } else {
    updateHeartbeat();
    heartbeatTimer = setInterval(updateHeartbeat, HEARTBEAT_INTERVAL);

    if (channel) {
      channel.postMessage({ type: 'ANNOUNCE_ACTIVE', instanceId: myInstanceId, persistentTabId: persistentTabId });
    }
  }

  // Manejo de mensajes entre pestañas
  if (channel) {
    channel.onmessage = function (event) {
      var data = event.data;
      if (!data || !data.type) return;

      if (data.type === 'ANNOUNCE_ACTIVE') {
        if (data.persistentTabId !== persistentTabId && !isBlocked) {
          channel.postMessage({ type: 'ORDER_BLOCK', targetInstanceId: data.instanceId });
          updateHeartbeat();
        }
      } else if (data.type === 'ORDER_BLOCK' && data.targetInstanceId === myInstanceId) {
        blockAndCloseTab();
      } else if (data.type === 'TAB_CLOSED' && data.persistentTabId !== persistentTabId) {
        if (!isBlocked && !checkOtherTabActive()) {
          updateHeartbeat();
        }
      }
    };
  }

  // Detectar si otra pestaña emite pulso
  window.addEventListener('storage', function (e) {
    if (e.key === STORAGE_KEY && e.newValue) {
      try {
        var session = JSON.parse(e.newValue);
        if (session && session.persistentTabId && session.persistentTabId !== persistentTabId) {
          var diff = Date.now() - session.timestamp;
          if (diff < SESSION_TIMEOUT) {
            blockAndCloseTab();
          }
        }
      } catch (err) {}
    }
  });

  // Liberar al cerrar la pestaña
  window.addEventListener('beforeunload', function () {
    if (!isBlocked) {
      try {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          var session = JSON.parse(raw);
          if (session && session.instanceId === myInstanceId) {
            localStorage.removeItem(STORAGE_KEY);
          }
        }
        if (channel) {
          channel.postMessage({ type: 'TAB_CLOSED', instanceId: myInstanceId, persistentTabId: persistentTabId });
        }
      } catch (e) {}
    }
  });
})();
