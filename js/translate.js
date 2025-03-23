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
    //document.getElementById("textId6").innerHTML = languageTexts.textId6;
    document.getElementById("textId7a").innerHTML = languageTexts.textId7a; 
    document.getElementById("textId7").innerHTML = languageTexts.textId7; 
    document.getElementById("textId8a").innerHTML = languageTexts.textId8a; 
    document.getElementById("textId8").innerHTML = languageTexts.textId2;
    document.getElementById("textId9").innerHTML = languageTexts.textId9;
    document.getElementById("textId10").innerHTML = languageTexts.textId10;
    document.getElementById("textId11a").innerHTML = languageTexts.textId11a;
    document.getElementById("textId11").innerHTML = languageTexts.textId11;
    document.getElementById("textId12a").innerHTML = languageTexts.textId12a;
    document.getElementById("textId12").innerHTML = languageTexts.textId12;
    document.getElementById("textId13a").innerHTML = languageTexts.textId13a;
    document.getElementById("textId13").innerHTML = languageTexts.textId13;
    document.getElementById("textId14a").innerHTML = languageTexts.textId14a;
    document.getElementById("textId14").innerHTML = languageTexts.textId14;
    document.getElementById("textId15").innerHTML = languageTexts.textId3;
    document.getElementById("textId16").innerHTML = languageTexts.textId16;
    document.getElementById("textId17").innerHTML = languageTexts.textId17;
    document.getElementById("textId18a").innerHTML = languageTexts.textId18a;
    document.getElementById("textId18b").innerHTML = languageTexts.textId18b;
    document.getElementById("textId18").innerHTML = languageTexts.textId18;
    document.getElementById("textId19").innerHTML = languageTexts.textId19;
    document.getElementById("textId20").innerHTML = languageTexts.textId20;
    document.getElementById("textId21").innerHTML = languageTexts.textId21;
    document.getElementById("textId22").innerHTML = languageTexts.textId22;
    document.getElementById("textId23").innerHTML = languageTexts.textId23;
    document.getElementById("textId24").innerHTML = languageTexts.textId4;
    document.getElementById("textId25").innerHTML = languageTexts.textId25;
}