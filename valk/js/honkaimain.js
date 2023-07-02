var AiHyperion = require("../json/AiHyperion/info.json");
var Aponia = require("../json/Aponia/info.json");
var AsukaShikinamiLangley = require("../json/AsukaShikinamiLangley/info.json");
var BiankaAtaegina = require("../json/BiankaAtaegina/info.json");
var BronyaZaychik = require("../json/BronyaZaychik/info.json");
var CarolePeppers = require("../json/CarolePeppers/info.json");
var Eden = require("../json/Eden/info.json");
var Elysia = require("../json/Elysia/info.json");
var Fischl = require("../json/Fischl/info.json");
var FuHua = require("../json/FuHua/info.json");
var Griseo = require("../json/Griseo/info.json");
var HimekoMurata = require("../json/HimekoMurata/info.json");
var KallenKaslana = require("../json/KallenKaslana/info.json");
var KianaKaslana = require("../json/KianaKaslana/info.json");
var LiliyaOlenyeva = require("../json/LiliyaOlenyeva/info.json");
var LiSushang = require("../json/LiSushang/info.json");
var MeiRaiden = require("../json/MeiRaiden/info.json");
var MistelnSchariac = require("../json/MistelnSchariac/info.json");
var Mobius = require("../json/Mobius/info.json");
var NatashaCioara = require("../json/NatashaCioara/info.json");
var Pardofelis = require("../json/Pardofelis/info.json");
var Prometheus = require("../json/Prometheus/info.json");
var RitaRossweisse = require("../json/RitaRossweisse/info.json");
var RozaliyaOlenyeva = require("../json/RozaliyaOlenyeva/info.json");
var SeeleVollerei = require("../json/SeeleVollerei/info.json");
var ShigureKira = require("../json/ShigureKira/info.json");
var SusannahManatt = require("../json/SusannahManatt/info.json");
var TheresaApocalypse = require("../json/TheresaApocalypse/info.json");
var VillV = require("../json/VillV/info.json");
var YaeSakura = require("../json/YaeSakura/info.json");

var Characters = [
	AiHyperion,
    Aponia,
    AsukaShikinamiLangley,
    BiankaAtaegina,
    BronyaZaychik,
    CarolePeppers,
    Eden,
    Elysia,
    Fischl,
    FuHua,
	Griseo,
    HimekoMurata,
    KallenKaslana,
    KianaKaslana,
    LiliyaOlenyeva,
	LiSushang,
    MeiRaiden,
	MistelnSchariac,
    Mobius,
    NatashaCioara,
    Pardofelis,
	Prometheus,
    RitaRossweisse,
    RozaliyaOlenyeva,
    SeeleVollerei,
	ShigureKira,
	SusannahManatt,
    TheresaApocalypse,
	VillV,
    YaeSakura
];

var Battlesuits = [];
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

var TotalBattlesuitLength = 0;
var CharacterLength = Characters.length;
var TypeTotalMech = 0;
var TypeTotalBio = 0;
var TypeTotalPsy = 0;
var TypeTotalQua = 0;
var TypeTotalImg = 0;
var AwakeningTotal = 0;
var NonAwakeningTotal = 0;

window.onload = function() {
    getAllBattlesuits();
    totalTypeStats();
}

document.getElementById("CharacterLength").innerHTML = CharacterLength;

function getAllBattlesuits() {
    var CurrentBattlesuitLength = 0;

    for(var i=0; i<CharacterLength; i++){
        TotalBattlesuitLength += Characters[i].battlesuits.length;
        CurrentBattlesuitLength = Characters[i].battlesuits.length;
        //console.log("CurrentBattlesuitLength: " + CurrentBattlesuitLength);
        //console.log("TotalBattlesuitLength: " + TotalBattlesuitLength);

        for(var j=0; j<CurrentBattlesuitLength; j++) {
            Battlesuits.push(Characters[i].battlesuits[j]);
        }
    }
    //console.log("Battlesuits = " + JSON.stringify(Battlesuits));
    document.getElementById("TotalBattlesuitLength").innerHTML = TotalBattlesuitLength;
}

function totalTypeStats(){
    for (var i=0; i<TotalBattlesuitLength; i++) {
        // Total of each type
        if (Battlesuits[i].type=="Mecha"){
            TypeTotalMech++;
        }
        if (Battlesuits[i].type=="Biologic"){
            TypeTotalBio++;
        }
        if (Battlesuits[i].type=="Psychic"){
            TypeTotalPsy++;
        }
        if (Battlesuits[i].type=="Quantum"){
            TypeTotalQua++;
        }
        if (Battlesuits[i].type=="Imaginary"){
            TypeTotalImg++;
        }
        // Total of Non-Awakening or Awakening
        if (Battlesuits[i].soul=="Awakening"){
            AwakeningTotal++;
        }
        if (Battlesuits[i].soul=="Original"){
            NonAwakeningTotal++;
        }
    }
    document.getElementById("TypeTotalMech").innerHTML = TypeTotalMech;
    document.getElementById("TypeTotalBio").innerHTML = TypeTotalBio;
    document.getElementById("TypeTotalPsy").innerHTML = TypeTotalPsy;
    document.getElementById("TypeTotalQua").innerHTML = TypeTotalQua;
    document.getElementById("TypeTotalImg").innerHTML = TypeTotalImg;
    document.getElementById("AwakeningTotal").innerHTML = AwakeningTotal;
    document.getElementById("NonAwakeningTotal").innerHTML = NonAwakeningTotal;
}

var searchResultCounter = 0;

function getTags(length, output, data) {
    for (var j=0; j<length; j++) {
        output += "[<b>" + data.tag[j] + "</b>]";
        if (j<length-1) {
            output += " ";
        }
    }
    return output;
}

function getCostumes(length, output, data) {
    for (var j=0; j<length; j++) {
        output += "- " + data.costume[j];
        if (j<length-1) {
            output += "<br>";
        }
    }
    return output;
}

function getFragDropInfos(length, output, data) {
    for (var j=0; j<length; j++) {
        output += "- " + data.fragdropinfo[j];
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
                howToTemplate += "<b><u>Weapon</u></b> (ex: Heavy, Cross, Fists, 2 Handed, Blade, Lance, Pistols, Scythe, Chakram, Bow, Javelin)<br>";
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

function templateInfo(data, i, j) {
    var dataResult = "";
    var tags = "";
    var costumes = "";
    var fragdropinfos = "";

    tags = getTags(tagLength, tags, data);
    costumes = getCostumes(costumeLength, costumes, data);
    fragdropinfos = getFragDropInfos(fragdropinfoLength, fragdropinfos, data);

    dataResult += "<div class='content'>";
        dataResult += "<div class='columns is-mobile'>";
            dataResult += "<div class='column is-10'>";
                dataResult += "<h1>" + Characters[i].battlesuits[j].battlesuit + "</h1>";
                dataResult += "<h2>" + Characters[i].firstname + " " + Characters[i].lastname + "</h2>";
                dataResult += "<p class='tagList'>" + tags + "</p>";
            dataResult += "</div>";

            dataResult += "<div class='column is-2'>";
                if (Characters[i].battlesuits[j].type == "Mecha") {
                    dataResult += "<img class='typeicon' src='/img/MECH.png' title='" + Characters[i].battlesuits[j].type + "'>";
                } else if (Characters[i].battlesuits[j].type == "Biologic") {
                    dataResult += "<img class='typeicon' src='/img/BIO.png' title='" + Characters[i].battlesuits[j].type + "'>";
                } else if (Characters[i].battlesuits[j].type == "Psychic") {
                    dataResult += "<img class='typeicon' src='/img/PSY.png' title='" + Characters[i].battlesuits[j].type + "'>";
                } else if (Characters[i].battlesuits[j].type == "Quantum") {
                    dataResult += "<img class='typeicon' src='/img/QUA.png' title='" + Characters[i].battlesuits[j].type + "'>";
                } else if (Characters[i].battlesuits[j].type == "Imaginary") {
                    dataResult += "<img class='typeicon' src='/img/IMG.png' title='" + Characters[i].battlesuits[j].type + "'>";
                } else {
                    dataResult += "<img class='typeimg' src='/img/NONE.png' title='" + Characters[i].battlesuits[j].type + "'>";
                }
            dataResult += "</div>";
        dataResult += "</div>";

        dataResult += "<div class='columns'>";

            dataResult += "<div class='column is-half'>";
                dataResult += "<img class='valkpic' src='" + Characters[i].battlesuits[j].img + "'>";
            dataResult += "</div>";

            dataResult += "<div class='column is-half'>";
                dataResult += "<h4>Birthday: <font color='#FFF'>" + Characters[i].birthday + "</font></h4>";
                dataResult += "<h4>VA: <font color='#FFF'>" + Characters[i].VA + "</font></h4>";
                dataResult += "<h4>Soul: <font color='#FFF'>" + Characters[i].battlesuits[j].soul + "</font></h4>";
                dataResult += "<h4>Weapon: <font color='#FFF'>" + Characters[i].battlesuits[j].weapon + "</font></h4><br>";
                dataResult += "<h4>Costume (" + costumeLength + ") </h4>" + costumes + "<br><br>";
                dataResult += "<h4>Fragment Drop Info (" + fragdropinfoLength + ") </h4>" + fragdropinfos + "<br><br>";
            dataResult += "</div>";

        dataResult += "</div>";
    dataResult += "</div>";

    return dataResult;
}

function showResult() {
    var dataResult = "";
    var showAllStr = "[showAll]";
    var dataBattlesuits = "";
    searchValue = searchInput.value;
    //console.log("searchValue: " + searchValue);

    // Initialize the Search Result Counter to 0
    searchResultCounter = 0;

    for (var i=0; i<CharacterLength; i++) {
        var CurrentBattlesuitLength = Characters[i].battlesuits.length;
        //console.log("CurrentBattlesuitLength : " + CurrentBattlesuitLength);

        for(var j=0; j<CurrentBattlesuitLength; j++) {
            dataBattlesuits = Characters[i].battlesuits[j];
            tagLength = dataBattlesuits.tag.length;
            costumeLength = dataBattlesuits.costume.length;
            fragdropinfoLength = dataBattlesuits.fragdropinfo.length;

            if (searchValue == "" || searchValue == " " || (searchValue.length < 2)) {
                // Do nothing
                //console.log("[1] searchResultCounter: " + searchResultCounter);
            } else if (showAllStr.toLowerCase().includes(searchValue.toLowerCase())) {
                // A specific command to show all Valkyries
                searchResultCounter++;
                //console.log("[2] searchResultCounter: " + searchResultCounter);

                dataResult += templateInfo(dataBattlesuits, i, j);
            } else if (dataBattlesuits.battlesuit.toLowerCase() == searchValue.toLowerCase() ||
                dataBattlesuits.battlesuit.toLowerCase().includes(searchValue.toLowerCase()) ||
                dataBattlesuits.type.toLowerCase().includes(searchValue.toLowerCase()) ||
                dataBattlesuits.soul.toLowerCase() == searchValue.toLowerCase() ||
                dataBattlesuits.weapon.toLowerCase().includes(searchValue.toLowerCase()) ||
                dataBattlesuits.tag.map(function(x){return x.toLowerCase()}).includes(searchValue.toLowerCase()) ||
                dataBattlesuits.tag.map(function(x){return "["+x.toLowerCase()+"]"}).includes(searchValue.toLowerCase())) {
                // Search one or multiple results
                searchResultCounter++;
                //console.log("[3] searchResultCounter: " + searchResultCounter);

                dataResult += templateInfo(dataBattlesuits, i, j);
            } else if (Characters[i].firstname.toLowerCase().includes(searchValue.toLowerCase()) ||
                Characters[i].lastname.toLowerCase().includes(searchValue.toLowerCase()) ||
                (Characters[i].firstname.toLowerCase() + " " + Characters[i].lastname.toLowerCase()).includes(searchValue.toLowerCase()) ||
                (Characters[i].lastname.toLowerCase() + " " + Characters[i].firstname.toLowerCase()).includes(searchValue.toLowerCase())) {
                // Search one or multiple results
                searchResultCounter++;
                //console.log("[4] searchResultCounter: " + searchResultCounter);
                
                dataResult += templateInfo(dataBattlesuits, i, j);
            }
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
// npm run cypress:open
