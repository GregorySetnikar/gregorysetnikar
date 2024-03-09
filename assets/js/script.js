// Define a global variable to track the initialization status of Google Translate
var googleTranslateLoaded = false;

// Function to switch language
function switchLanguage() {
    if (googleTranslateLoaded) {
        var currentLanguage = google.translate.TranslateElement.InlineLayout.VERTICAL;
        var newLanguage = (currentLanguage === 'fr') ? 'en' : 'fr'; // Toggle between 'fr' (French) and 'en' (English)

        // Invoke Google Translate API to switch the language
        new google.translate.TranslateElement({pageLanguage: 'auto', includedLanguages: newLanguage}, 'google_translate_element');
    } else {
        console.log('Google Translate API is not fully loaded yet.');
    }
}

// Callback function invoked when Google Translate API is loaded and initialized
function googleTranslateElementInit() {
    googleTranslateLoaded = true;
}

// Wait for the DOM content to be fully loaded before executing any JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    // Your other JavaScript code here...
});
