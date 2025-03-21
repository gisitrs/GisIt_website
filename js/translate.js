function defaultTranslate(language){
    var languageTexts;
    if (language == 'SRB'){
        languageTexts = new serbianText();
    }
    else if (language == 'ENG'){
        languageTexts = new englishText();
    }

    translateToLanguage(languageTexts);
}

function translateOnClick(){
    var language = document.getElementById("translateButton").innerHTML;
    defaultTranslate(language);
}

function translateToLanguage(languageTexts){
    document.getElementById("translateButton").innerHTML = languageTexts.translateButton;
    document.getElementById("textId1").innerHTML = languageTexts.textId1;
    document.getElementById("textId2").innerHTML = languageTexts.textId2;
    document.getElementById("textId3").innerHTML = languageTexts.textId3;
    document.getElementById("textId4").innerHTML = languageTexts.textId4;
    document.getElementById("textId5").innerHTML = languageTexts.textId5;
    document.getElementById("textId6").innerHTML = languageTexts.textId6;
    document.getElementById("textId7").innerHTML = languageTexts.textId7; 
    document.getElementById("textId8").innerHTML = languageTexts.textId2;
    document.getElementById("textId9").innerHTML = languageTexts.textId9;
    document.getElementById("textId10").innerHTML = languageTexts.textId10;
    document.getElementById("textId11").innerHTML = languageTexts.textId11;
    document.getElementById("textId12").innerHTML = languageTexts.textId12;
    document.getElementById("textId13").innerHTML = languageTexts.textId13;
    document.getElementById("textId14").innerHTML = languageTexts.textId14;
}