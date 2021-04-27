var BlazingHope = require("../json/aLimited/BlazingHope.json");

var BrightKnightExcelsis = require("../json/BA/BrightKnightExcelsis.json");
var DeaAnchora = require("../json/BA/DeaAnchora.json");
var ValkyrieGloria = require("../json/BA/ValkyrieGloria.json");

var BlackNucleus = require("../json/BZ/BlackNucleus.json");
var DimensionBreaker = require("../json/BZ/DimensionBreaker.json");
var HaxxorBunny = require("../json/BZ/HaxxorBunny.json");
var HerrscherOfReason = require("../json/BZ/HerrscherOfReason.json");
var SnowySniper = require("../json/BZ/SnowySniper.json");
var ValkyrieChariot = require("../json/BZ/ValkyrieChariot.json");
var WolfsDawn = require("../json/BZ/WolfsDawn.json");
var YamabukiArmor = require("../json/BZ/YamabukiArmor.json");

var AzureEmpyrea = require("../json/FH/AzureEmpyrea.json");
var HerrscherOfSentience = require("../json/FH/HerrscherOfSentience.json");
var NightSquire = require("../json/FH/NightSquire.json");
var Phoenix = require("../json/FH/Phoenix.json");
var ShadowKnight = require("../json/FH/ShadowKnight.json");
var ValkyrieAccipiter = require("../json/FH/ValkyrieAccipiter.json");

var ImayohRitual = require("../json/KA/ImayohRitual.json");
var SixthSerenade = require("../json/KA/SixthSerenade.json");
var Sundenjager = require("../json/KA/Sundenjager.json");

var DivinePrayer = require("../json/KK/DivinePrayer.json");
var HerrscherOfTheVoid = require("../json/KK/HerrscherOfTheVoid.json");
var KnightMoonbeam = require("../json/KK/KnightMoonbeam.json");
var ValkyrieRanger = require("../json/KK/ValkyrieRanger.json");
var WhiteComet = require("../json/KK/WhiteComet.json");

var BlueberryBlitz = require("../json/LO/BlueberryBlitz.json");

var ArcticKriegsmesser = require("../json/MH/ArcticKriegsmesser.json");
var BattleStorm = require("../json/MH/BattleStorm.json");
var BloodRose = require("../json/MH/BloodRose.json");
var ScarletFusion = require("../json/MH/ScarletFusion.json");
var ValkyrieTriumph = require("../json/MH/ValkyrieTriumph.json");
var VermilionKnight = require("../json/MH/VermilionKnight.json");

var CrimsonImpulse = require("../json/RM/CrimsonImpulse.json");
var HerrscherOfThunder = require("../json/RM/HerrscherOfThunder.json");
var LightningEmpress = require("../json/RM/LightningEmpress.json");
var ShadowDash = require("../json/RM/ShadowDash.json");
var ValkyrieBladestrike = require("../json/RM/ValkyrieBladestrike.json");

var MolotovCherry = require("../json/RO/MolotovCherry.json");

var ArgentKnight = require("../json/RR/ArgentKnight.json");
var FallenRosemary = require("../json/RR/FallenRosemary.json");
var PhantomIron = require("../json/RR/PhantomIron.json");
var UmbralRose = require("../json/RR/UmbralRose.json");

var StygianNymph = require("../json/SV/StygianNymph.json");
var SwallowtailPhantasm = require("../json/SV/SwallowtailPhantasm.json");

var CelestialHymn = require("../json/TA/CelestialHymn.json");
var LunaKindred = require("../json/TA/LunaKindred.json");
var SakunoRondo = require("../json/TA/SakunoRondo.json");
var StarlitAstrologos = require("../json/TA/StarlitAstrologos.json");
var ValkyriePledge = require("../json/TA/ValkyriePledge.json");
var VioletExecuter = require("../json/TA/VioletExecuter.json");

var DarkBoltJonin = require("../json/YS/DarkBoltJonin.json");
var FlameSakitama = require("../json/YS/FlameSakitama.json");
var GoushinnsoMemento = require("../json/YS/GoushinnsoMemento.json");
var GyakushinnMiko = require("../json/YS/GyakushinnMiko.json");

var Valkyries = [
    ArcticKriegsmesser,
    ArgentKnight,
    AzureEmpyrea,
    BattleStorm,
    BlackNucleus,
    BlazingHope,
    BloodRose,
    BlueberryBlitz,
    BrightKnightExcelsis,
    CelestialHymn,
    CrimsonImpulse,
    DarkBoltJonin,
    DeaAnchora,
    DimensionBreaker,
    DivinePrayer,
    FallenRosemary,
    FlameSakitama,
    GoushinnsoMemento,
    GyakushinnMiko,
    HaxxorBunny,
    HerrscherOfReason,
    HerrscherOfSentience,
    HerrscherOfTheVoid,
    HerrscherOfThunder,
    ImayohRitual,
    KnightMoonbeam,
    LightningEmpress,
    LunaKindred,
    MolotovCherry,
    NightSquire,
    PhantomIron,
    Phoenix,
    SakunoRondo,
    ScarletFusion,
    ShadowDash,
    ShadowKnight,
    SixthSerenade,
    SnowySniper,
    StarlitAstrologos,
    StygianNymph,
    Sundenjager,
    SwallowtailPhantasm,
    UmbralRose,
    ValkyrieAccipiter,
    ValkyrieBladestrike,
    ValkyrieChariot,
    ValkyrieGloria,
    ValkyriePledge,
    ValkyrieRanger,
    ValkyrieTriumph,
    VermilionKnight,
    VioletExecuter,
    WhiteComet,
    WolfsDawn,
    YamabukiArmor
];

var dataResult = "";
var tagLength = "";
var costumeLength = "";
var fragdropinfoLength = "";

// Getting the search input
var searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function(){});
var searchValue = "";

// Adding "Enter" key shortcut for clickButton
var searchBarInput = document.getElementById("searchInput");
searchBarInput.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("clickButton").click();
	}
});

var ValkyrieLength = Valkyries.length;
//console.log("ValkyrieLength: " + ValkyrieLength);
document.getElementById("ValkyrieLength").innerHTML = ValkyrieLength;

var searchResultCounter = 0;

function getTags(length, output, data, i) {
    for (var j=0; j<length; j++) {
        output += "[<b>" + data[i].tag[j] + "</b>]";
        if (j<length-1) {
            output += " ";
        }
    }
    return output;
}

function getCostumes(length, output, data, i) {
    for (var j=0; j<length; j++) {
        output += "- " + data[i].costume[j];
        if (j<length-1) {
            output += "<br>";
        }
    }
    return output;
}

function getFragDropInfos(length, output, data, i) {
    for (var j=0; j<length; j++) {
        output += "- " + data[i].fragdropinfo[j];
        if (j<length-1) {
            output += "<br>";
        }
    }
    return output;
}

function howTo() {
    var howToTemplate = "";
    howToTemplate += "<div class='content'>";
        howToTemplate += "<div class='columns'>";
            howToTemplate += "<div class='column'>";
                howToTemplate += "<h1>How to use?</h1>";
                howToTemplate += "This guide shows you how to use the search function.<br>";
                howToTemplate += "<h2>You can search by...</h2>";
                howToTemplate += "<b><u>First Name</u></b> (ex: Kiana)<br>";
                howToTemplate += "<b><u>Last Name</u></b> (ex: Kaslana)<br>";
                howToTemplate += "<b><u>First & Last Names</u></b> (ex: Kiana Kaslana)<br>";
                howToTemplate += "<b><u>Last & First Names</u></b> (ex: Kaslana Kiana)<br>";
                howToTemplate += "<b><u>Battlesuit</u></b> (ex: Celestial Hymn)<br>";
                howToTemplate += "<b><u>Type</u></b> (ex: Mecha, Biologic, Psychic, Quantum)<br>";
                howToTemplate += "<b><u>Soul</u></b> (ex: Original, Awakening)<br>";
                howToTemplate += "<b><u>Weapon</u></b> (ex: Cannons, Crosses, Gauntlets, Greatswords, Katanas, Lances, Pistols, Scythes)<br>";
                howToTemplate += "<b><u>Tag</u></b> (ex: AK, AE, ... [Check the next section about Tag])<br>";
                howToTemplate += "<h2>Searching with a Tag accurately</h2>";
                howToTemplate += "Sometime, searching with an tag might cause some inaccuracy.<br>";
                howToTemplate += "Use <b>square brackets</b> with the tag in it to get accurated result.<br>";
                howToTemplate += "ex: [AK], [AE], [HoR], [Tuna], ...<br>";
                howToTemplate += "<h2>Lowercase or Uppercase?</h2>";
                howToTemplate += "It doesn't matter. The search function understands Kiana, kiana, or KiAnA inputs. <br>";
                howToTemplate += "<h2>How to show all Valkyries?</h2>";
                howToTemplate += "This function might slow down your computer or consume your bandwidth (because of loading pictures).<br>";
                howToTemplate += "In the search bar, type: <b>[showAll]</b><br>";
                howToTemplate += "<h2>How to empty the result</h2>";
                howToTemplate += "Leave the search bar empty (or enter invalid inputs).</b><br>";
            howToTemplate += "</div>";
        howToTemplate += "</div>";
    howToTemplate += "</div>";

    document.getElementById("SearchResultCounter").innerHTML = "";
    document.getElementById("output").innerHTML = howToTemplate;
}

function aSearchResultCounter() {
    var resultCounterTemplate = "";
    resultCounterTemplate += "<div class='content'>";
        resultCounterTemplate += "<div class='columns'>";
            resultCounterTemplate += "<div class='column'>";
                resultCounterTemplate += "<span style='color:#35D6FF'>Search Result found: </span>";
                resultCounterTemplate += "<b><span style='color:#FB9929'>" + searchResultCounter + "</span></b>";
            resultCounterTemplate += "</div>";
        resultCounterTemplate += "</div>";
    resultCounterTemplate += "</div><span> </span>";

    return resultCounterTemplate;
}

function templateInfo(data, i) {
    var dataResult = "";
    var tags = "";
    var costumes = "";
    var fragdropinfos = "";

    tags = getTags(tagLength, tags, Valkyries, i);
    costumes = getCostumes(costumeLength, costumes, Valkyries, i);
    fragdropinfos = getFragDropInfos(fragdropinfoLength, fragdropinfos, Valkyries, i);

    dataResult += "<div class='content'>";
        dataResult += "<div class='columns'>";
            dataResult += "<div class='column is-11'>";
                dataResult += "<h1>" + Valkyries[i].battlesuit + "</h1>";
                dataResult += "<h2>" + Valkyries[i].firstname + " " + Valkyries[i].lastname + "</h2>";
                dataResult += "<p class='tagList'>" + tags + "</p>";
            dataResult += "</div>";

            dataResult += "<div class='column'>";
                if (Valkyries[i].type == "Mecha") {
                    dataResult += "<img class='typeimg' src='img/MECH.png' title='" + Valkyries[i].type + "'>";
                } else if (Valkyries[i].type == "Biologic") {
                    dataResult += "<img class='typeimg' src='img/BIO.png' title='" + Valkyries[i].type + "'>";
                } else if (Valkyries[i].type == "Psychic") {
                    dataResult += "<img class='typeimg' src='img/PSY.png' title='" + Valkyries[i].type + "'>";
                } else if (Valkyries[i].type == "Quantum") {
                    dataResult += "<img class='typeimg' src='img/QUA.png' title='" + Valkyries[i].type + "'>";
                }
            dataResult += "</div>";
        dataResult += "</div>";

        dataResult += "<div class='columns'>";

            dataResult += "<div class='column is-half'>";
                dataResult += "<img class='valkpic' src='" + Valkyries[i].img + "'>";
            dataResult += "</div>";

            dataResult += "<div class='column is-half'>";
                dataResult += "<h4>Soul: <font color='#FFF'>" + Valkyries[i].soul + "</font></h4>";
                dataResult += "<h4>Birthday: <font color='#FFF'>" + Valkyries[i].birthday + "</font></h4>";
                dataResult += "<h4>Weapon: <font color='#FFF'>" + Valkyries[i].weapon + "</font></h4><br>";
                dataResult += "<h4>Costume (" + costumeLength + ") </h4>" + costumes + "<br><br>";
                dataResult += "<h4>Fragment Drop Info (" + fragdropinfoLength + ") </h4>" + fragdropinfos + "<br><br>";
            dataResult += "</div>";

        dataResult += "</div>";
    dataResult += "</div>";

    return dataResult;
}

function showResult() {
    var dataResult = "";
    searchValue = searchInput.value;
    var showAllStr = "[showAll]";
    //console.log("searchValue: " + searchValue);

    // Initialize the Search Result Counter to 0
    searchResultCounter = 0;

    for (var i=0; i<ValkyrieLength; i++) {
        tagLength = Valkyries[i].tag.length;
        costumeLength = Valkyries[i].costume.length;
        fragdropinfoLength = Valkyries[i].fragdropinfo.length;

        if (searchValue == "" || searchValue == " " || (searchValue.length < 2)) {
            // Do nothing
            //console.log("[1] searchResultCounter: " + searchResultCounter);
        } else if (showAllStr.toLowerCase().includes(searchValue.toLowerCase())) {
            // A specific command to show all Valkyries
            var dataResult = "";
        	for (var i=0, len=Valkyries.length; i<len; i++) {
                searchResultCounter++;
                //console.log("[2] searchResultCounter: " + searchResultCounter);
                tagLength = Valkyries[i].tag.length;
                costumeLength = Valkyries[i].costume.length;
                fragdropinfoLength = Valkyries[i].fragdropinfo.length;
        		dataResult += templateInfo(Valkyries, i);
        	}
            document.getElementById("output").innerHTML = dataResult;

        } else if (Valkyries[i].battlesuit.toLowerCase() == searchValue.toLowerCase() ||
            Valkyries[i].battlesuit.toLowerCase().includes(searchValue.toLowerCase()) ||
            Valkyries[i].firstname.toLowerCase().includes(searchValue.toLowerCase()) ||
            Valkyries[i].lastname.toLowerCase().includes(searchValue.toLowerCase()) ||
            (Valkyries[i].firstname.toLowerCase() + " " + Valkyries[i].lastname.toLowerCase()).includes(searchValue.toLowerCase()) ||
            (Valkyries[i].lastname.toLowerCase() + " " + Valkyries[i].firstname.toLowerCase()).includes(searchValue.toLowerCase()) ||
            Valkyries[i].type.toLowerCase().includes(searchValue.toLowerCase()) ||
            Valkyries[i].soul.toLowerCase() == searchValue.toLowerCase() ||
            Valkyries[i].weapon.toLowerCase().includes(searchValue.toLowerCase()) ||
            Valkyries[i].tag.map(function(x){return x.toLowerCase()}).includes(searchValue.toLowerCase()) ||
            Valkyries[i].tag.map(function(x){return "["+x.toLowerCase()+"]"}).includes(searchValue.toLowerCase())) {
            // Search one or multiple results
            searchResultCounter++;
            //console.log("[3] searchResultCounter: " + searchResultCounter);
            dataResult += templateInfo(Valkyries, i)
        }
    }

    // Hide the search result counter if there is no result. Otherwise, show it.
    if (searchResultCounter == 0) {
        document.getElementById("SearchResultCounter").innerHTML = "";
    } else {
        document.getElementById("SearchResultCounter").innerHTML = aSearchResultCounter();
    }
    // The core output
    document.getElementById("output").innerHTML = dataResult;
}

var button = document.getElementById("clickButton");
button.addEventListener("click", showResult);

var buttonHowTo = document.getElementById("clickHowTo");
buttonHowTo.addEventListener("click", howTo);

// browserify js/honkaimain.js -o js/honkaibundle.js
