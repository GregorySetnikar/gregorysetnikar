function switchLanguage() {
    var currentLanguage = googleTranslateElementInit;
    var newLanguage = (currentLanguage === 'fr') ? 'en' : 'fr'; // Toggle between 'fr' (French) and 'en' (English)

    // Invoke Google Translate API to translate the page content
    new google.translate.TranslateElement({pageLanguage: 'auto', includedLanguages: newLanguage}, 'google_translate_element');

    // Update the language attribute of the HTML tag for screen readers and SEO
    document.documentElement.lang = newLanguage;
}
