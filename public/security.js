/**
 * Hamster Software — Security Guard
 * Bloqueo de Consola y Herramientas de Desarrollo (DevTools)
 */
(function () {
  'use strict';

  /* ==========================================================================
     1. LIMPIEZA DE RESIDUOS DE PESTAÑAS ANTERIORES
     ========================================================================== */
  try {
    localStorage.removeItem('hamster_active_tab_session');
    sessionStorage.removeItem('hamster_tab_persistent_id');
    sessionStorage.removeItem('hamster_tab_instance_id');
  } catch (e) {}

  /* ==========================================================================
     2. BLOQUEO DE CONSOLA Y HERRAMIENTAS DE DESARROLLO (DEVTOOLS)
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
})();
