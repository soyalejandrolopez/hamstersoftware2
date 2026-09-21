/**
 * ============================================================================
 * Hamster Software — Google Translate Widget
 * Reemplaza al deprecated Microsoft Translator Widget V3 (retirado julio 2019)
 *
 * Este script inicializa el widget de Google Translate de forma oculta.
 * La UI personalizada del dropdown de idiomas está en el componente Angular,
 * y desde allá se dispara la traducción cambiando el <select> .goog-te-combo.
 * ============================================================================
 */

/**
 * Función de callback invocada automáticamente por el script de Google Translate al cargar.
 * Google busca esta función por nombre (definido en el parámetro ?cb= de la URL del script).
 */
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'es',                                           // Idioma base del sitio (español colombiano, parcero)
    includedLanguages: 'es,en,pt,fr,de,it',                       // Idiomas habilitados en el dropdown
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE, // Layout simple sin barra visual
    autoDisplay: false,                                            // No mostrar la barra automática de Google
    multilanguagePage: true                                        // Soporte para contenido en varios idiomas
  }, 'google_translate_element');

  // Verificamos que el <select> se haya creado correctamente después de inicializar
  var checkInterval = setInterval(function () {
    var combo = document.querySelector('.goog-te-combo');
    if (combo) {
      clearInterval(checkInterval);
      console.log('[Hamster Translate] Widget de Google Translate inicializado correctamente ✓');

      // Si hay una cookie googtrans activa, aplicamos la traducción automáticamente
      var match = document.cookie.match(/googtrans=\/es\/(\w+)/);
      if (match && match[1] && match[1] !== 'es') {
        combo.value = match[1];
        combo.dispatchEvent(new Event('change'));
        console.log('[Hamster Translate] Traducción automática aplicada: ' + match[1]);
      }
    }
  }, 300);

  // Seguro por si el widget nunca carga, dejamos de buscar después de 15 segundos
  setTimeout(function () {
    clearInterval(checkInterval);
  }, 15000);
}
