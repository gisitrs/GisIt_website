function translateToLanguage(language){
    var languageTexts;
    if (language == 'SRB'){
        languageTexts = new serbianText();
    }
    else if (language == 'ENG'){
        languageTexts = new englishText();
    }

    //alert(languageTexts.textId7);
    document.getElementById("textId7").innerHTML = languageTexts.textId7;
}