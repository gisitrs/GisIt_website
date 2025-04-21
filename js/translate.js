var selectedLanguage1 = 'SRB';

function defaultTranslate(language){
    var languageTexts;
    if (language == 'SRB'){
        languageTexts = new serbianText();
        selectedLanguage1 = 'SRB';
    }
    else if (language == 'ENG'){
        languageTexts = new englishText();
        selectedLanguage1 = 'ENG';
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
    document.getElementById("textId26").innerHTML = languageTexts.textId26;
    document.getElementById("textId27").innerHTML = languageTexts.textId27;
    document.getElementById("textId28").innerHTML = languageTexts.textId28;
    document.getElementById("textId29").innerHTML = languageTexts.textId29;
    document.getElementById("textId30").innerHTML = languageTexts.textId30;
    document.getElementById("textId31").innerHTML = languageTexts.textId31;
    document.getElementById("textId32").innerHTML = languageTexts.textId32;
    document.getElementById("textId33").innerHTML = languageTexts.textId33;
    document.getElementById("textId34").innerHTML = languageTexts.textId34;
    document.getElementById("textId35").innerHTML = languageTexts.textId35;
    document.getElementById("textId36").innerHTML = languageTexts.textId36;
    document.getElementById("textId37").innerHTML = languageTexts.textId37;
    document.getElementById("textId38").innerHTML = languageTexts.textId38;
    document.getElementById("textId39").innerHTML = languageTexts.textId39;
    document.getElementById("textId40").innerHTML = languageTexts.textId40;
    document.getElementById("textId41").innerHTML = languageTexts.textId5;
    document.getElementById("textId42").innerHTML = languageTexts.textId42;
    document.getElementById("textId43").innerHTML = languageTexts.textId43;
    document.getElementById("textId44").innerHTML = languageTexts.textId44;
    document.getElementById("textId45").innerHTML = languageTexts.textId45;
    document.getElementById("textId46").innerHTML = languageTexts.textId46;
    //document.getElementById("textId47").innerHTML = languageTexts.textId47;
    document.getElementById("textId48").innerHTML = languageTexts.textId48;
    document.getElementById("textId49").innerHTML = languageTexts.textId49;
    document.getElementById("textId50").innerHTML = languageTexts.textId50;
    document.getElementById("textId51").placeholder = languageTexts.textId51;
    document.getElementById("textId52").placeholder = languageTexts.textId52;
    document.getElementById("textId53").placeholder = languageTexts.textId53;
    document.getElementById("textId54").placeholder = languageTexts.textId54;
}