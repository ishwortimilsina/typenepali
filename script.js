var [Nepali, Hindi, French, German] = ['ne', 'hi', 'ml', 'gm'];

// Load the Google Transliteration API
google.load("elements", "1", {packages: "transliteration"});

function onLoad() 
{
    var options = {
        sourceLanguage: 'en',
        destinationLanguage: [Nepali],
        shortcutKey: 'ctrl+m',
        transliterationEnabled: true
    };

    // Create an instance on TransliterationControl with the required options.
    var control = new google.elements.transliteration.TransliterationControl(options);

    // Enable transliteration in the textfields with the given ids.

    var ids = [ "language" ];
    control.makeTransliteratable(ids);

    // Show the transliteration control which can be used to toggle between
    // English and Hindi and also choose other destination language.
    control.showControl('translControl');
}

google.setOnLoadCallback(onLoad);