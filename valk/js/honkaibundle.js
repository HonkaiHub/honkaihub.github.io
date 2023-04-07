(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
var Mobius = require("../json/Mobius/info.json");
var NatashaCioara = require("../json/NatashaCioara/info.json");
var Pardofelis = require("../json/Pardofelis/info.json");
var RitaRossweisse = require("../json/RitaRossweisse/info.json");
var RozaliyaOlenyeva = require("../json/RozaliyaOlenyeva/info.json");
var SeeleVollerei = require("../json/SeeleVollerei/info.json");
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
    Mobius,
    NatashaCioara,
    Pardofelis,
    RitaRossweisse,
    RozaliyaOlenyeva,
    SeeleVollerei,
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
                howToTemplate += "<b><u>Weapon</u></b> (ex: Blade, Cross, Fists, 2 Handed, Blade, Lance, Pistols, Scythe, Chakram)<br>";
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
                    dataResult += "<img class='typeicon' src='img/MECH.png' title='" + Characters[i].battlesuits[j].type + "'>";
                } else if (Characters[i].battlesuits[j].type == "Biologic") {
                    dataResult += "<img class='typeicon' src='img/BIO.png' title='" + Characters[i].battlesuits[j].type + "'>";
                } else if (Characters[i].battlesuits[j].type == "Psychic") {
                    dataResult += "<img class='typeicon' src='img/PSY.png' title='" + Characters[i].battlesuits[j].type + "'>";
                } else if (Characters[i].battlesuits[j].type == "Quantum") {
                    dataResult += "<img class='typeicon' src='img/QUA.png' title='" + Characters[i].battlesuits[j].type + "'>";
                } else if (Characters[i].battlesuits[j].type == "Imaginary") {
                    dataResult += "<img class='typeicon' src='img/IMG.png' title='" + Characters[i].battlesuits[j].type + "'>";
                } else {
                    dataResult += "<img class='typeimg' src='img/NONE.png' title='" + Characters[i].battlesuits[j].type + "'>";
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

},{"../json/AiHyperion/info.json":2,"../json/Aponia/info.json":3,"../json/AsukaShikinamiLangley/info.json":4,"../json/BiankaAtaegina/info.json":5,"../json/BronyaZaychik/info.json":6,"../json/CarolePeppers/info.json":7,"../json/Eden/info.json":8,"../json/Elysia/info.json":9,"../json/Fischl/info.json":10,"../json/FuHua/info.json":11,"../json/Griseo/info.json":12,"../json/HimekoMurata/info.json":13,"../json/KallenKaslana/info.json":14,"../json/KianaKaslana/info.json":15,"../json/LiliyaOlenyeva/info.json":16,"../json/LiSushang/info.json":17,"../json/MeiRaiden/info.json":18,"../json/Mobius/info.json":19,"../json/NatashaCioara/info.json":20,"../json/Pardofelis/info.json":21,"../json/RitaRossweisse/info.json":22,"../json/RozaliyaOlenyeva/info.json":23,"../json/SeeleVollerei/info.json":24,"../json/SusannahManatt/info.json":25,"../json/TheresaApocalypse/info.json":26,"../json/VillV/info.json":27,"../json/YaeSakura/info.json":28}],2:[function(require,module,exports){
module.exports={
    "firstname": "Ai",
    "lastname": "Hyperion Λ",
    "birthday": "???",
    "VA": "Horie Yui",
    "battlesuits": [
        {
            "battlesuit": "Chrono Navi",
            "tag": [
                "Ai Chan",
				"Ai Hyperion",
				"Λ",
				"CN"
            ],
            "type": "Mecha",
            "soul": "Original",
            "img": "https://webstatic.hoyoverse.com/upload/contentweb/2022/12/07/203a8b005841acc6aa37efa0f29af46c_3773438973604570257.png",
            "weapon": "Chakram",
            "costume": [
                "Chrono Navi"
            ],
            "fragdropinfo": [
                "Asterite Shop",
                "Open World - Adventure Tasks"
            ]
        }
    ]
}

},{}],3:[function(require,module,exports){
module.exports={
    "firstname": "Aponia",
    "lastname": "",
    "birthday": "May 25th",
    "VA": "Haruka Shiraishi",
    "battlesuits": [
        {
            "battlesuit": "Disciplinary Perdition",
            "tag": [
                "Aponia",
                "DPe",
                "DiP"
            ],
            "type": "Biologic",
            "soul": "Original",
            "img": "https://webstatic.hoyoverse.com/upload/contentweb/2022/05/18/6786af57f9ada26a0632c2c8781db381_3884192242082214047.png",
            "weapon": "Chakram",
            "costume": [
                "Disciplinary Perdition",
				"Mesmerizing Blue"
            ],
            "fragdropinfo": [
            ]
        }
    ]
}

},{}],4:[function(require,module,exports){
module.exports={
    "firstname": "Asuka",
    "lastname": "Shikinami Langley",
    "birthday": "December 4th",
    "VA": "Yuko Miyamura",
    "battlesuits": [
        {
            "battlesuit": "Blazing Hope",
            "tag": [
                "Asuka",
                "BH",
                "Collab",
                "Limited"
            ],
            "type": "Biologic",
            "soul": "Original",
            "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20210126/2021012614530670099.png",
            "weapon": "Lance",
            "costume": [
                "Blazing Hope",
                "Auburn Sync PS"
            ],
            "fragdropinfo": [
                "Collab Supply",
                "Event Shop (New Century)"
            ]
        }
    ]
}

},{}],5:[function(require,module,exports){
module.exports={
    "firstname": "Bianka",
    "lastname": "Ataegina",
    "birthday": "January 1st",
    "VA": "Noto Mamiko",
    "battlesuits": [
        {
            "battlesuit": "Bright Knight Excelsis",
            "tag": [
                "Durandal",
                "BKE",
                "DuDu",
                "DooDoo",
				"Duck"
            ],
            "type": "Mecha",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/5/5c/Bright_Knight_-_Excelsis.png",
            "weapon": "Lance",
            "costume": [
                "Bright Knight: Excelsis",
                "GAe Hunter",
                "Emerald of Alfheim"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Dea Anchora",
            "tag": [
                "Durandal",
                "DA",
                "DuDu",
                "DooDoo",
				"Duck"
            ],
            "type": "Biologic",
            "soul": "Original",
            "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20201216/2020121616452893349.png",
            "weapon": "Lance",
            "costume": [
                "Dea Anchora"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Palatinus Equinox",
            "tag": [
                "Durandal",
                "PE",
                "DuDu",
                "DooDoo",
				"Duck"
            ],
            "type": "Imaginary",
            "soul": "Awakening",
            "img": "https://webstatic-sea.hoyoverse.com/upload/contentweb/2022/02/24/dcb55ffc3f12df6c80d6de887cd38dad_7039603813498117131.png",
            "weapon": "Lance",
            "costume": [
                "Palatinus Equinox",
				"Nibelungen Traumlied"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Valkyrie Gloria",
            "tag": [
                "Durandal",
                "VG",
                "DuDu",
                "DooDoo",
				"Duck"
            ],
            "type": "Quantum",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/3/37/Valkyrie_Gloria.png/936px-Valkyrie_Gloria.png",
            "weapon": "Lance",
            "costume": [
                "Valkyrie Gloria",
                "Lord Paramount",
                "Purrfect Holiday"
            ],
            "fragdropinfo": [
            ]
        }
    ]
}

},{}],6:[function(require,module,exports){
module.exports={
    "firstname": "Bronya",
    "lastname": "Zaychik",
    "birthday": "August 18th",
    "VA": "Asumi Kana",
    "battlesuits": [
        {
            "battlesuit": "Black Nucleus",
            "tag": [
                "BN"
            ],
            "type": "Biologic",
            "soul": "Awakening",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/5/59/Black_Nucleus.png/450px-Black_Nucleus.png",
            "weapon": "Heavy",
            "costume": [
                "Black Nucleus",
                "Fleurs du Mal"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Dimension Breaker",
            "tag": [
                "DB"
            ],
            "type": "Mecha",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/8/8e/Dimension_Breaker.png/450px-Dimension_Breaker.png",
            "weapon": "Heavy",
            "costume": [
                "Dimension Breaker",
                "White Devil",
                "Techno Beats",
                "School Swimsuit"
            ],
            "fragdropinfo": [
                "War Treasury"
            ]
        },
        {
            "battlesuit": "Haxxor Bunny",
            "tag": [
                "HB"
            ],
            "type": "Psychic",
            "soul": "Original",
            "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20210422/2021042212543030446.png",
            "weapon": "Heavy",
            "costume": [
                "Haxxor Bunny",
                "Old Times"
            ],
            "fragdropinfo": [
                "Asterite Shop",
                "Open World: Adventure tasks"
            ]
        },
        {
            "battlesuit": "Herrscher of Reason",
            "tag": [
                "HoR",
                "HR",
                "BK"
            ],
            "type": "Mecha",
            "soul": "Awakening",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/0/0a/Herrscher_of_Reason.png/450px-Herrscher_of_Reason.png",
            "weapon": "Heavy",
            "costume": [
                "DAE Raison",
				"Bestial Afterburn",
				"Ultraviolet Kinetik",
				"Magic Girl Bronya"
            ],
            "fragdropinfo": [
                "Dorm Supply",
                "War Treasury"
            ]
        },
        {
            "battlesuit": "SILVERWING: N-EX",
            "tag": [
                "SW"
            ],
            "type": "Biologic",
            "soul": "Original",
            "img": "https://uploadstatic-sea.hoyoverse.com/contentweb/20220113/2022011317564048151.png",
            "weapon": "Heavy",
            "costume": [
                "SILVERWING: N-EX",
                "Heart of the Night",
                "Neonized"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Snowy Sniper",
            "tag": [
                "SS"
            ],
            "type": "Biologic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/8/8a/Snowy_Sniper.png/450px-Snowy_Sniper.png",
            "weapon": "Heavy",
            "costume": [
                "Snowy Sniper",
                "Carrot and Beet Soup",
                "Nightfall Witch",
                "School Swimsuit"
            ],
            "fragdropinfo": [
                "Sakura Samsara: Adventure Tasks",
                "Story 2-9 (H)",
                "Story 2-9 (S)",
                "Story S3-8 (S)",
                "Story 6-2 (S)"
            ]
        },
        {
            "battlesuit": "Valkyrie Chariot",
            "tag": [
                "VC"
            ],
            "type": "Psychic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/5/5a/Valkyrie_Chariot.png/450px-Valkyrie_Chariot.png",
            "weapon": "Heavy",
            "costume": [
                "Valkyrie Chariot",
                "Blue Reunion",
                "Blue Sky",
                "School Swimsuit"
            ],
            "fragdropinfo": [
                "Sakura Samsara: Adventure Tasks",
                "Story 1-9 (H)",
                "Story 2-20 (H)",
                "Story S4-13 (H)",
                "Story S3-9 (S)"
            ]
        },
        {
            "battlesuit": "Wolf's Dawn",
            "tag": [
                "WD"
            ],
            "type": "Psychic",
            "soul": "Awakening",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/d/d1/Wolf%27s_Dawn.png/450px-Wolf%27s_Dawn.png",
            "weapon": "Heavy",
            "costume": [
                "Wolf's Dawn",
                "Mercurial Hatter",
                "Midnight Blues"
            ],
            "fragdropinfo": [
                "Story 6-2 (H)",
                "Story 3-1 (S)",
                "Story 6-8 (S)"
            ]
        },
        {
            "battlesuit": "Yamabuki Armor",
            "tag": [
                "YA",
                "DK"
            ],
            "type": "Psychic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/9/99/Yamabuki_Armor.png/450px-Yamabuki_Armor.png",
            "weapon": "Heavy",
            "costume": [
                "Yamabuki Armor",
                "Drive Kometa",
                "Throatwort",
                "Candy Demon",
                "School Swimsuit"
            ],
            "fragdropinfo": [
                "Sakura Samsara: Adventure Tasks",
                "Story 1-18 (H)",
                "Story 3-15 (H)",
                "Story S4-14 (S)",
                "Story 6-4 (S)"
            ]
        },
        {
            "battlesuit": "Herrscher of Truth",
            "tag": [
                "HoTr",
                "HTr"
            ],
            "type": "Imaginary",
            "soul": "Awakening",
            "weapon": "Heavy",
            "img": "https://webstatic.hoyoverse.com/upload/contentweb/2023/01/10/7fafd3e3dd83dd1c2a320516aeb4ab91_3752372391162345187.png",
            "costume": [
                "Herrscher of Truth"
            ],
            "fragdropinfo": [
            ]
        }
    ]
}

},{}],7:[function(require,module,exports){
module.exports={
    "firstname": "Carole",
    "lastname": "Pepper",
    "birthday": "September 23th",
    "VA": "Junko Iwao",
    "battlesuits": [
        {
            "battlesuit": "Sweet \'n\' Spicy",
            "tag": [
                "SnS"
            ],
            "type": "Mecha",
            "soul": "Original",
            "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20211202/2021120216472550335.png",
            "weapon": "Fists",
            "costume": [
                "Sweet \'n\' Spicy",
				"Let the Class End",
				"Special Blend"
            ],
            "fragdropinfo": [
                "Asterite Shop",
                "Event Supply",
                "Open World - Adventure Tasks"
            ]
        }
    ]
}

},{}],8:[function(require,module,exports){
module.exports={
    "firstname": "Eden",
    "lastname": "",
    "birthday": "October 31st",
    "VA": "Juri Kimura",
    "battlesuits": [
        {
            "battlesuit": "Golden Diva",
            "tag": [
                "Eden",
                "GD"
            ],
            "type": "Imaginary",
            "soul": "Original",
            "img": "https://webstatic.hoyoverse.com/upload/contentweb/2022/05/18/5e22c2ab33bf2bc9f4ba9de713c7b051_999753904121001001.png",
            "weapon": "Pistols",
            "costume": [
                "Golden Diva",
				"Flowing Rhyme",
				"Crimson Carol"
            ],
            "fragdropinfo": [
                "Asterite Shop",
                "Event Supply",
                "Open World - Adventure Tasks"
            ]
        }
    ]
}

},{}],9:[function(require,module,exports){
module.exports={
    "firstname": "Elysia",
    "lastname": "",
    "birthday": "November 11th",
    "VA": "Marina Inoue",
    "battlesuits": [
        {
            "battlesuit": "Miss Pink Elf♪",
            "tag": [
                "Elysia",
				"Ellie",
                "Miss Pink Elf",
				"Miss Pink Elf♪",
				"♪"
            ],
            "type": "Psychic",
            "soul": "Original",
            "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20210916/2021091612102521960.png",
            "weapon": "Bow",
            "costume": [
                "Miss Pink Elf♪",
				"Miss Pink♪",
				"Summer Miss Elf♪"
            ],
            "fragdropinfo": [
                "Expansion Battlesuit Supply",
                "War Treasury"
            ]
        },
        {
            "battlesuit": "Herrscher of Human: Ego",
            "tag": [
                "Elysia",
				"Ellie",
                "HoH",
				"HoHE",
				"HoE",
				"Herrscher of Human Ego",
				"Herrscher of Human",
				"Herrscher of Ego"
            ],
            "type": "Psychic",
            "soul": "Original",
            "img": "https://webstatic.hoyoverse.com/upload/contentweb/2022/09/14/0dd831ded4229ff468ec5feabbda33fe_7869572467525857527.png",
            "weapon": "Bow",
            "costume": [
                "Herrscher of Human: Ego"
            ],
            "fragdropinfo": [
            ]
        }
    ]
}

},{}],10:[function(require,module,exports){
module.exports={
    "firstname": "Fischl",
    "lastname": "von Luftschloss Narfidort",
    "birthday": "May 27th",
    "VA": "Maaya Uchida",
    "battlesuits": [
        {
            "battlesuit": "Prinzessin der Verurteilung!",
            "tag": [
                "Fischl",
                "Amy",
                "Prinzessin der Verurteilung",
                "Collab"
            ],
            "type": "Biologic",
            "soul": "Original",
            "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20210707/2021070719411078536.png",
            "weapon": "Bow",
            "costume": [
                "Prinzessin der Verurteilung!"
            ],
            "fragdropinfo": [
                "Collab Supply",
                "Event Shop (Collab)"
            ]
        }
    ]
}

},{}],11:[function(require,module,exports){
module.exports={
    "firstname": "Hua",
    "lastname": "Fu",
    "birthday": "February 9th",
    "VA": "Takayama Minami",
    "battlesuits": [
        {
            "battlesuit": "Azure Empyrea",
            "tag": [
                "AE",
                "SB"
            ],
            "type": "Psychic",
            "soul": "Awakening",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/b/b9/Azure_Empyrea.png/936px-Azure_Empyrea.png",
            "weapon": "Fists",
            "costume": [
                "Azure Empyrea",
                "Cerulean Court"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Herrscher of Sentience",
            "tag": [
                "HoS",
                "HS",
                "Yandere Fu Hua",
				"Hua?"
            ],
            "type": "Biologic",
            "soul": "Awakening",
            "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20210303/2021030314314026333.png",
            "weapon": "Fists",
            "costume": [
                "Herrscher of Sentience"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Night Squire",
            "tag": [
                "NS"
            ],
            "type": "Biologic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/1/12/Night_Squire.png/450px-Night_Squire.png",
            "weapon": "Fists",
            "costume": [
                "Night Squire",
                "Dark Butler",
                "Rustic Noir",
                "Spring Traveler"
            ],
            "fragdropinfo": [
                "Story 1-17 (H)",
                "Story 8-4 (H)",
                "Story 1-7 (S)",
                "Story 8-2 (S)",
                "Schicksal HQ - Adventure task"
            ]
        },
        {
            "battlesuit": "Phoenix",
            "tag": [
                "PX"
            ],
            "type": "Psychic",
            "soul": "Original",
            "img": "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200618/2020061811401293651.png",
            "weapon": "Fists",
            "costume": [
                "Phoenix",
                "Fire and Sword",
                "Sword and Fire"
            ],
            "fragdropinfo": [
                "War Treasury"
            ]
        },
        {
            "battlesuit": "Shadow Knight",
            "tag": [
                "SK"
            ],
            "type": "Mecha",
            "soul": "Original",
            "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200702/2020070215224878220.png",
            "weapon": "Fists",
            "costume": [
                "Shadow Knight",
                "Blood Voivode",
				"Seagull's Soar"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Valkyrie Accipiter",
            "tag": [
                "VA",
                "HotF",
                "HotY"
            ],
            "type": "Psychic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/f/f7/Valkyrie_Accipiter.png/450px-Valkyrie_Accipiter.png",
            "weapon": "Fists",
            "costume": [
                "Valkyrie Accipiter",
                "Blue Swallow",
                "Hawk of the Fog",
                "Hawk of the Yard",
                "Onyx Simurgh"
            ],
            "fragdropinfo": [
                "Story 1-13 (H)",
                "Story 3-18 (H)",
                "Story 2-2 (S)",
                "Story 7-2 (S)"
            ]
        }
    ]
}
},{}],12:[function(require,module,exports){
module.exports={
    "firstname": "Griseo",
    "lastname": "",
    "birthday": "December 21st",
    "VA": "Hina Kino",
    "battlesuits": [
        {
            "battlesuit": "Starry Impression",
            "tag": [
                "Griseo",
                "SI"
            ],
            "type": "Psychic",
            "soul": "Original",
            "img": "https://webstatic.hoyoverse.com/upload/contentweb/2022/06/27/eae3b86db5d6e41bfaee153ccfdafbb6_8117075818443700536.png",
            "weapon": "Cross",
            "costume": [
                "Starry Impression",
                "Summer as a Painting",
                "Maroon Riding Hood"
            ],
            "fragdropinfo": [
                "Asterite Shop",
                "Open World: Adventure tasks"
            ]
        }
    ]
}

},{}],13:[function(require,module,exports){
module.exports={
    "firstname": "Himeko",
    "lastname": "Murata",
    "birthday": "June 11th",
    "VA": "Rie Tanaka",
    "battlesuits": [
        {
            "battlesuit": "Artic Kriegsmesser",
            "tag": [
                "AK"
            ],
            "type": "Psychic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/a/af/Arctic_Kriegsmesser.png/450px-Arctic_Kriegsmesser.png",
            "weapon": "2 Handed",
            "costume": [
                "Artic Kriegsmesser",
                "Frisian Cutlass"
            ],
            "fragdropinfo": [
                "Asterite Shop"
            ]
        },
        {
            "battlesuit": "Battle Storm",
            "tag": [
                "BS"
            ],
            "type": "Biologic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/2/2b/Battle_Storm.png/450px-Battle_Storm.png",
            "weapon": "2 Handed",
            "costume": [
                "Battle Storm",
                "Black Mamba"
            ],
            "fragdropinfo": [
                "Sakura Samsara: Adventure Tasks",
                "Story 3-5 (H)",
                "Story 3-12 (H)",
                "Story S4-10 (H)",
                "Story S3-11 (S)"
            ]
        },
        {
            "battlesuit": "Blood Rose",
            "tag": [
                "BR"
            ],
            "type": "Psychic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/4/4f/Blood_Rose.png/450px-Blood_Rose.png",
            "weapon": "2 Handed",
            "costume": [
                "Blood Rose",
                "Night Enchantress",
                "Rosy Passion",
                "Black Mamba"
            ],
            "fragdropinfo": [
                "War Treasury"
            ]
        },
        {
            "battlesuit": "Scarlet Fusion",
            "tag": [
                "SF"
            ],
            "type": "Mecha",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/5/54/Scarlet_Fusion.png/450px-Scarlet_Fusion.png",
            "weapon": "2 Handed",
            "costume": [
                "Scarlet Fusion",
                "Summer Party",
                "Origin",
                "Black Mamba"
            ],
            "fragdropinfo": [
                "Sakura Samsara: Adventure Tasks",
                "Story 4-6 (H)",
                "Story 2-20 (S)",
                "Story 4-9 (S)",
                "Story 5-6 (S)"
            ]
        },
        {
            "battlesuit": "Valkyrie Triumph",
            "tag": [
                "VT"
            ],
            "type": "Biologic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/0/02/Valkyrie_Triumph.png/450px-Valkyrie_Triumph.png",
            "weapon": "2 Handed",
            "costume": [
                "Valkyrie Triumph",
                "Black Mamba"
            ],
            "fragdropinfo": [
                "Sakura Samsara: Adventure Tasks",
                "Story 4-3 (H)",
                "Story 4-19 (H)",
                "Story 7-2 (H)",
                "Story 4-19 (S)"
            ]
        },
        {
            "battlesuit": "Vermilion Knight",
            "tag": [
                "VK"
            ],
            "type": "Mecha",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/4/4c/Vermilion_Knight_-_Eclipse.png/450px-Vermilion_Knight_-_Eclipse.png",
            "weapon": "2 Handed",
            "costume": [
                "Vermilion Knight: Eclipse",
                "Rouged Mayumi",
                "Vernal Brocade"
            ],
            "fragdropinfo": [
            ]
        }
    ]
}

},{}],14:[function(require,module,exports){
module.exports={
    "firstname": "Kallen",
    "lastname": "Kaslana",
    "birthday": "",
    "VA": "Mizuki Nana",
    "battlesuits": [
        {
            "battlesuit": "Imayoh Ritual",
            "tag": [
                "IR"
            ],
            "type": "Mecha",
            "soul": "Awakening",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/d/d4/Imayoh_Ritual.png/450px-Imayoh_Ritual.png",
            "weapon": "Pistols",
            "costume": [
                "Imayoh Ritual",
                "Snow Fairy",
                "Blanc X: Kata"
            ],
            "fragdropinfo": [
                "Sakura Samsara: Adventure tasks",
                "Memorial Arena - Weekly Score Rewards",
                "Asterite Shop"
            ]
        },
        {
            "battlesuit": "Sixth Serenade",
            "tag": [
                "6S"
            ],
            "type": "Psychic",
            "soul": "Awakening",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/6/63/Sixth_Serenade.png/450px-Sixth_Serenade.png",
            "weapon": "Pistols",
            "costume": [
                "Sixth Serenade"
            ],
            "fragdropinfo": [
                "War Treasury"
            ]
        },
        {
            "battlesuit": "Sundenjager",
            "tag": [
                "SJ",
                "SH"
            ],
            "type": "Mecha",
            "soul": "Awakening",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/5/55/Sundenjager.png/450px-Sundenjager.png",
            "weapon": "Pistols",
            "costume": [
                "Sundenjager"
            ],
            "fragdropinfo": [
                "Open World: Adventure tasks",
                "Asterite Shop"
            ]
        }
    ]
}

},{}],15:[function(require,module,exports){
module.exports={
    "firstname": "Kiana",
    "lastname": "Kaslana",
    "birthday": "December 7th",
    "VA": "Kugimiya Rie",
    "battlesuits": [
        {
            "battlesuit": "Divine Prayer",
            "tag": [
                "DP",
                "Tuna"
            ],
            "type": "Psychic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/9/93/Divine_Prayer.png/450px-Divine_Prayer.png",
            "weapon": "Pistols",
            "costume": [
                "Divine Prayer",
                "Frostmoon Bunny",
                "Winter Princess",
                "Lavender Love",
                "Sunny Beach"
            ],
            "fragdropinfo": [
                "Sakura Samsara: Adventure Tasks",
                "Story 2-3 (H)",
                "Story 1-9 (S)",
                "Story 4-11 (S)"
            ]
        },
        {
            "battlesuit": "Herrscher of Finality",
            "tag": [
                "HoFi",
                "HFi",
                "Tuna",
				"God Tuna"
            ],
            "type": "Imaginary",
            "soul": "Awakening",
            "img": "https://webstatic.hoyoverse.com/upload/contentweb/2023/02/15/4c4c03e6c3e928fc69442f569e349cfd_557792211697198613.png",
            "weapon": "Pistols",
            "costume": [
                "Herrscher of Finality"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Herrscher of Flamescion",
            "tag": [
                "HoFS",
                "HFS",
                "HoF",
                "Tuna"
            ],
            "type": "Psychic",
            "soul": "Awakening",
            "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20210811/2021081119171972528.png",
            "weapon": "Pistols",
            "costume": [
                "Herrscher of Flamescion",
				"Time Runner",
				"Flowering Luminance"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Herrscher of the Void",
            "tag": [
                "HotV",
                "HoV",
                "HV",
                "GK",
                "Tuna"
            ],
            "type": "Biologic",
            "soul": "Awakening",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/2/29/Herrscher_of_the_Void.png/450px-Herrscher_of_the_Void.png",
            "weapon": "Pistols",
            "costume": [
                "Herrscher of the Void",
                "Magic Girl Sirin",
                "Parasol Kaiserin"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Knight Moonbeam",
            "tag": [
                "KMB",
                "Tuna"
            ],
            "type": "Biologic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/2/2d/Knight_Moonbeam.png/450px-Knight_Moonbeam.png",
            "weapon": "Pistols",
            "costume": [
                "Knight Moonbeam",
                "Bastet's Secret",
                "Dark Devourer",
                "Sunny Beach"
            ],
            "fragdropinfo": [
                "War Treasury"
            ]
        },
        {
            "battlesuit": "Valkyrie Ranger",
            "tag": [
                "VR",
                "VD",
                "Tuna"
            ],
            "type": "Mecha",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/6/64/Valkyrie_Ranger.png/450px-Valkyrie_Ranger.png",
            "weapon": "Pistols",
            "costume": [
                "Valkyrie Ranger",
                "Void Drifter",
                "Ocean Ranger",
                "Honkai World Diva",
                "Red Lictor",
                "Sunny Beach"
            ],
            "fragdropinfo": [
                "Sakura Samsara: Adventure Tasks",
                "Story 1-11 (H)",
                "Story 3-3 (H)",
                "Story 4-12 (H)"
            ]
        },
        {
            "battlesuit": "White Comet",
            "tag": [
                "WC",
                "Tuna"
            ],
            "type": "Mecha",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/6/63/White_Comet.png/926px-White_Comet.png",
            "weapon": "Pistols",
            "costume": [
                "White Comet",
                "Starless Rift",
                "Prodigal Girl",
                "Sunny Beach"
            ],
            "fragdropinfo": [
                "Sakura Samsara: Adventure Tasks",
                "Story 1-3 (H)",
                "Story 2-12 (H)",
                "Story S4-2 (H)",
                "Story S3-4 (S)"
            ]
        }
    ]
}

},{}],16:[function(require,module,exports){
module.exports={
    "firstname": "Liliya",
    "lastname": "Olenyeva",
    "birthday": "",
    "VA": "Yuu Serizawa",
    "battlesuits": [
        {
            "battlesuit": "Blueberry Blitz",
            "tag": [
                "BB"
            ],
            "type": "Mecha",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/4/4e/Blueberry_Blitz.png/450px-Blueberry_Blitz.png",
            "weapon": "2 Handed",
            "costume": [
                "Blueberry Blitz",
                "Lavender Glow",
                "Shelley's Beastliya",
                "Wave Galactica"
            ],
            "fragdropinfo": [
                "Chronicles: Dreams of Gemina",
                "Stage 7-1 (H)",
                "Stage 11-5 (H)",
                "Stage 2-17 (S)",
                "Stage 11-7 (S)"
            ]
        }
    ]
}

},{}],17:[function(require,module,exports){
module.exports={
    "firstname": "Sushang",
    "lastname": "Li",
    "birthday": "April 3rd",
    "VA": "Fukuen Misato",
    "battlesuits": [
        {
            "battlesuit": "Jade Knight",
            "tag": [
                "JK",
				"Sushang"
            ],
            "type": "Psychic",
            "soul": "Original",
            "img": "https://webstatic.hoyoverse.com/upload/contentweb/2022/10/28/6e45dce42cbbe9250817e6cde90d11dd_5460077910253630048.png",
            "weapon": "Fists",
            "costume": [
                "Jade Knight",
				"Auspicious Dazzel"
            ],
            "fragdropinfo": [
                "War Treasury"
            ]
        }
    ]
}

},{}],18:[function(require,module,exports){
module.exports={
    "firstname": "Mei",
    "lastname": "Raiden",
    "birthday": "April 13th",
    "VA": "Sawashiro Miyuki",
    "battlesuits": [
        {
            "battlesuit": "Crimson Impulse",
            "tag": [
                "CI"
            ],
            "type": "Biologic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/c/c6/Crimson_Impulse.png/450px-Crimson_Impulse.png",
            "weapon": "Blade",
            "costume": [
                "Crimson Impulse",
                "Gardenia",
                "Vast Ocean"
            ],
            "fragdropinfo": [
                "Sakura Samsara: Adventure Tasks",
                "Story 1-6 (H)",
                "Story 2-16 (H)",
                "Story S4-7 (H)",
                "Story 3-9 (S)"
            ]
        },
        {
            "battlesuit": "Herrscher of Thunder",
            "tag": [
                "HoT",
                "HT",
                "HoL",
                "McD"
            ],
            "type": "Psychic",
            "soul": "Awakening",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/3/3c/Herrscher_of_Thunder.png",
            "weapon": "Blade",
            "costume": [
                "Herrscher of Thunder",
                "Rainy Springtide",
                "Aqueous Springtide",
				"Haunted Dusk"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Herrscher of Origin",
            "tag": [
                "HoO",
                "HO"
            ],
            "type": "Imaginary",
            "soul": "Awakening",
            "img": "https://webstatic.hoyoverse.com/upload/contentweb/2023/02/15/eb52c16d904fcca15ffe8acd736fd632_7891080749805781343.png",
            "weapon": "Blade",
            "costume": [
                "Herrscher of Origin"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Lightning Empress",
            "tag": [
                "LE"
            ],
            "type": "Psychic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/4/4d/Lightning_Empress.png/450px-Lightning_Empress.png",
            "weapon": "Blade",
            "costume": [
                "Lightning Empress",
                "Scorching Golden Thunder",
                "Aqua Chime",
                "Eventide Phantom",
                "Ultramarine Octave",
                "Vast Ocean"
            ],
            "fragdropinfo": [
                "War Treasury"
            ]
        },
        {
            "battlesuit": "Shadow Dash",
            "tag": [
                "SD",
                "DS"
            ],
            "type": "Mecha",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/9/92/Shadow_Dash.png/450px-Shadow_Dash.png",
            "weapon": "Blade",
            "costume": [
                "Shadow Dash",
                "Danzai Spectramancer",
                "Orochi Cuirass",
                "Soul Symphony",
                "Hind of Noel",
                "Vast Ocean"
            ],
            "fragdropinfo": [
                "Sakura Samsara: Adventure Tasks",
                "Story 2-6 (H)",
                "Story 4-15 (H)",
                "Story 1-18 (S)",
                "Story 5-2 (S)"
            ]
        },
        {
            "battlesuit": "Valkyrie Bladestrike",
            "tag": [
                "VB",
                "VBS",
                "Ful"
            ],
            "type": "Biologic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/c/ca/Striker_Fulminata.png",
            "weapon": "Blade",
            "costume": [
                "Valkyrie Bladestrike",
                "Striker Fulminata",
                "Blue Memories",
                "Aeterna Purum",
                "Vast Ocean"
            ],
            "fragdropinfo": [
                "Sakura Samsara: Adventure Tasks",
                "Story 1-15 (H)",
                "Story 3-9 (H)",
                "Story 4-13 (S)",
                "Story 6-6 (S)"
            ]
        }
    ]
}

},{}],19:[function(require,module,exports){
module.exports={
    "firstname": "Mobius",
    "lastname": "",
    "birthday": "April 30th",
    "VA": "Rumi Okubo",
    "battlesuits": [
        {
            "battlesuit": "Infinite Ouroboros",
            "tag": [
                "Mobius",
				"Dr Mobius",
				"Snek",
				"IO"
            ],
            "type": "Mecha",
            "soul": "Original",
            "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20211022/2021102215161426682.png",
            "weapon": "Cross",
            "costume": [
                "Infinite Ouroboros",
				"Daughter of Corals",
				"Scorching Gravel"
            ],
            "fragdropinfo": [
            ]
        }
    ]
}

},{}],20:[function(require,module,exports){
module.exports={
    "firstname": "Natasha",
    "lastname": "Cioara",
    "birthday": "",
    "VA": "Kobayashi Sanae",
    "battlesuits": [
        {
            "battlesuit": "Midnight Absinthe",
            "tag": [
                "MA",
                "Raven"
            ],
            "type": "Imaginary",
            "soul": "Original",
            "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20211022/2021102216343598492.png",
            "weapon": "Bow",
            "costume": [
                "Midnight Absinthe",
                "Absinthe Dream",
				"Spectral Raven"
				
            ],
            "fragdropinfo": [
                "Elysian Shop",
                "Supply Shop",
				"Witch's Corridor",
                "Expansion Battlesuit Supply",
				"Expeditions",
                "Open World - Adventure Tasks"
            ]
        }
    ]
}

},{}],21:[function(require,module,exports){
module.exports={
    "firstname": "Pardofelis",
    "lastname": "",
    "birthday": "",
    "VA": "Yamamoto Nozomi",
    "battlesuits": [
        {
            "battlesuit": "Reverist Calico",
            "tag": [
                "RC",
                "Pardo",
                "Felis",
                "Phylis"
            ],
            "type": "Imaginary",
            "soul": "Original",
            "img": "https://webstatic-sea.hoyoverse.com/upload/contentweb/2022/04/07/6648d3c1754054c5915773b291547b4d_3715035717990934289.png",
            "weapon": "Chakram",
            "costume": [
                "Reverist Calico",
				"Spectral Claws",
				"Midnight Summer Collector"
            ],
            "fragdropinfo": [
                "Asterite Shop",
                "Event Supply",
                "Open World - Adventure Tasks"
            ]
        }
    ]
}

},{}],22:[function(require,module,exports){
module.exports={
    "firstname": "Rita",
    "lastname": "Rossweisse",
    "birthday": "March 1st",
    "VA": "Aoi Yuuki",
    "battlesuits": [
        {
            "battlesuit": "Argent Knight",
            "tag": [
                "AKA",
                "ArK",
                "Rice"
            ],
            "type": "Biologic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/1/1e/Argent_Knight_-_Artemis.png",
            "weapon": "Scythe",
            "costume": [
                "Argent Knight: Artemis",
                "Maid of Celestia",
                "Vow of Roses"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Fallen Rosemary",
            "tag": [
                "FR"
            ],
            "type": "Quantum",
            "soul": "Original",
            "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200915/2020091513442677610.png",
            "weapon": "Scythe",
            "costume": [
                "Fallen Rosemary",
                "Deepwood Thyme",
				"Summer Night's Dream",
				"Sweet Osmanthus"
            ],
            "fragdropinfo": [
                "War Treasury"
            ]
        },
        {
            "battlesuit": "Phantom Iron",
            "tag": [
                "PI"
            ],
            "type": "Mecha",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/6/61/Phantom_Iron.png/450px-Phantom_Iron.png",
            "weapon": "Scythe",
            "costume": [
                "Phantom Iron",
                "Icy Sea Spray"
            ],
            "fragdropinfo": [
                "Story 3-7 (H)",
                "Story 4-5 (S)",
                "Story IX-1-2 (H)",
                "Story IX-1-4 (S)"
            ]
        },
        {
            "battlesuit": "Spina Astera",
            "tag": [
                "SpA"
            ],
            "type": "Mecha",
            "soul": "Original",
            "img": "https://webstatic-sea.hoyoverse.com/upload/contentweb/2022/02/23/6822f297db0cfed3495d1fe9d5b6ef0d_7210328008175051063.png",
            "weapon": "Scythe",
            "costume": [
                "Spina Astera",
				"Eternal Dance"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Umbral Rose",
            "tag": [
                "UR"
            ],
            "type": "Psychic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/8/8a/Umbral_Rose.png/450px-Umbral_Rose.png",
            "weapon": "Scythe",
            "costume": [
                "Umbral Rose",
                "Dame de Coeur",
                "Dusky Murmurs",
                "Hanafuda Oyabun",
                "Victoria"
            ],
            "fragdropinfo": [
                "Story 2-11 (H)",
                "Story 3-4 (S)",
                "Story 9-10 (H)",
                "Story 9-4 (S)"
            ]
        }
    ]
}

},{}],23:[function(require,module,exports){
module.exports={
    "firstname": "Rozaliya",
    "lastname": "Olenyeva",
    "birthday": "",
    "VA": "Aoi Koga",
    "battlesuits": [
        {
            "battlesuit": "Molotov Cherry",
            "tag": [
                "MC",
                "FT"
            ],
            "type": "Psychic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/b/be/Molotov_Cherry.png/450px-Molotov_Cherry.png",
            "weapon": "2 Handed",
            "costume": [
                "Molotov Cherry",
                "Coral Sunrise",
                "Fervent Tempo",
                "Gothic Rozamary",
                "Violet Dreamscape"
            ],
            "fragdropinfo": [
                "War Treasury"
            ]
        }
    ]
}

},{}],24:[function(require,module,exports){
module.exports={
    "firstname": "Seele",
    "lastname": "Vollerei",
    "birthday": "October 18th",
    "VA": "Nakahara Mai",
    "battlesuits": [
        {
            "battlesuit": "Starchasm Nyx",
            "tag": [
                "Nyx"
            ],
            "type": "Quantum",
            "soul": "Original",
            "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20210525/2021052511041472654.png",
            "weapon": "Scythe",
            "costume": [
                "Starchasm Nyx"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Stygian Nymph",
            "tag": [
                "SN"
            ],
            "type": "Quantum",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/1/13/Stygian_Nymph.png/450px-Stygian_Nymph.png",
            "weapon": "Scythe",
            "costume": [
                "Stygian Nymph",
				"Mirrored Flourishes",
				"Stygian Seafoam",
				"Estonia in Spring"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Swallowtail Phantasm",
            "tag": [
                "SP"
            ],
            "type": "Quantum",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/e/e0/Swallowtail_Phantasm.png/450px-Swallowtail_Phantasm.png",
            "weapon": "Scythe",
            "costume": [
                "Swallowtail Phantasm",
                "Azure Memories",
                "Dream Seeker",
                "Papilio Lily"
            ],
            "fragdropinfo": [
                "Stage 4-10 (H)",
                "Stage XI-1-2 (H)",
                "Stage 6-5 (S)",
                "Stage XI-1-1 (S)"
            ]
        }
    ]
}

},{}],25:[function(require,module,exports){
module.exports={
    "firstname": "Susannah",
    "lastname": "Manatt",
    "birthday": "November 29th",
    "VA": "Chinatsu Hirose",
    "battlesuits": [
        {
            "battlesuit": "Valkyrie Quicksand",
            "tag": [
                "VQ",
				"Sus"
            ],
            "type": "Quantum",
            "soul": "Original",
            "img": "https://webstatic.hoyoverse.com/upload/op-public/2023/03/31/0ee890ca4d3632fce857211971b397d9_8694845541496430798.png",
            "weapon": "Chakram",
            "costume": [
                "Valkyrie Quicksand",
				"Immortal Blades Uniform"
            ],
            "fragdropinfo": [
                "Astrite Shop",
                "Open World - Adventure Tasks"
            ]
        }
    ]
}

},{}],26:[function(require,module,exports){
module.exports={
    "firstname": "Theresa",
    "lastname": "Apocalypse",
    "birthday": "March 28th",
    "VA": "Tamura Yukari",
    "battlesuits": [
        {
            "battlesuit": "Celestial Hymn",
            "tag": [
                "CH",
                "Teri"
            ],
            "type": "Biologic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/b/bb/Celestial_Hymn.png/450px-Celestial_Hymn.png",
            "weapon": "Cross",
            "costume": [
                "Celestial Hymn",
                "Empyrean Psalms",
                "Starry Night",
                "Grand Sage"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Luna Kindred",
            "tag": [
                "LK",
                "Teri"
            ],
            "type": "Biologic",
            "soul": "Awakening",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/b/b4/Luna_Kindred.png/450px-Luna_Kindred.png",
            "weapon": "Cross",
            "costume": [
                "Sakuno Rondo",
                "Rosy Bridesmaid",
				"Before the Dawn"
            ],
            "fragdropinfo": [
                "Asterite Shop",
                "Schicksal HQ adventure tasks rating reward"
            ]
        },
        {
            "battlesuit": "Sakuno Rondo",
            "tag": [
                "SR",
                "Teri"
            ],
            "type": "Psychic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/f/fa/Sakuno_Rondo.png/450px-Sakuno_Rondo.png",
            "weapon": "Cross",
            "costume": [
                "Sakuno Rondo",
                "Lilac of the Valley",
                "Magical Teriri",
                "Morning Sunshine"
            ],
            "fragdropinfo": [
                "Story 5-8 (H)",
                "Story 6-6 (H)",
                "Story 5-8 (S)"
            ]
        },
        {
            "battlesuit": "Starlit Astrologos",
            "tag": [
                "SA",
                "Teri"
            ],
            "type": "Biologic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/8/8c/Starlit_Astrologos.png/936px-Starlit_Astrologos.png",
            "weapon": "Cross",
            "costume": [
                "Starlit Astrologos"
            ],
            "fragdropinfo": [
            ]
        },
        {
            "battlesuit": "Valkyrie Pledge",
            "tag": [
                "VP",
                "Teri"
            ],
            "type": "Psychic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/a/a4/Valkyrie_Pledge.png/450px-Valkyrie_Pledge.png",
            "weapon": "Cross",
            "costume": [
                "Valkyrie Pledge",
                "Shallow Sunset",
                "Pledge",
                "Campus Detective",
                "Ouranon's Forgiveness",
                "Sugar Haw Child",
                "Morning Sunshine"
            ],
            "fragdropinfo": [
                "Sakura Samsara: Adventure Tasks",
                "Story 4-9 (H)",
                "Story 5-5 (H)",
                "Story 3-16 (S)",
                "Story 5-4 (S)"
            ]
        },
        {
            "battlesuit": "Violet Executer",
            "tag": [
                "VE",
                "TP",
                "Teri"
            ],
            "type": "Mecha",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/7/7b/Violet_Executer.png/450px-Violet_Executer.png",
            "weapon": "Cross",
            "costume": [
                "Violet Executer",
                "Blood Knight: Moonlight",
                "Wonderland Trek",
                "Twilight Paladin",
                "Morning Sunshine",
                "Verdant Sky"
            ],
            "fragdropinfo": [
                "War Treasury"
            ]
        }
    ]
}
},{}],27:[function(require,module,exports){
module.exports={
    "firstname": "Vill-V",
    "lastname": "",
    "birthday": "May 25th",
    "VA": "Hisako Kanemoto",
    "battlesuits": [
        {
            "battlesuit": "Helical Contraption",
            "tag": [
                "Vill-V",
                "VillV",
				"Vill V",
                "HC",
				"Expert",
				"Magician",
				"Chef",
				"Kevin Killer MK5"
            ],
            "type": "Quantum",
            "soul": "Original",
            "img": "https://webstatic.hoyoverse.com/upload/contentweb/2022/08/10/d83c66e853175c2c3e6d58e5349810d3_824927973745836596.png",
            "weapon": "Heavy",
            "costume": [
                "Helical Contraption",
				"I'm the Storm"
            ],
            "fragdropinfo": [
            ]
        }
    ]
}

},{}],28:[function(require,module,exports){
module.exports={
    "firstname": "Sakura",
    "lastname": "Yae",
    "birthday": "July 22th",
    "VA": "Ayane Sakura",
    "battlesuits": [
        {
            "battlesuit": "DarkBolt Jonin",
            "tag": [
                "DJ",
                "Kasumi"
            ],
            "type": "Biologic",
            "soul": "Original",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/4/4b/Darkbolt_Jonin.png/936px-Darkbolt_Jonin.png",
            "weapon": "Blade",
            "costume": [
                "Darkbolt Jonin",
                "Peach Sanctuary",
                "Shiden Kasumi",
                "Neon Shade"
            ],
            "fragdropinfo": [
                "Open World: Adventure Tasks",
                "Asterite Shop",
                "Battle Arsenal"
            ]
        },
        {
            "battlesuit": "Flame Sakitama",
            "tag": [
                "FS"
            ],
            "type": "Biologic",
            "soul": "Awakening",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/f/f5/Flame_Sakitama_%28Costume%29.png",
            "weapon": "Blade",
            "costume": [
                "Flame Sakitama",
                "Dream Raiment",
                "Mauve Cascade"
            ],
            "fragdropinfo": [
                "Sakura Samsara: Adventure Tasks",
                "Asterite Shop"
            ]
        },
        {
            "battlesuit": "Goushinnso Memento",
            "tag": [
                "Meme",
				"Sakura",
				"Flame Chaster",
				"GM"
            ],
            "type": "Mecha",
            "soul": "Awakening",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/9/95/Goushinnso_Memento.png/450px-Goushinnso_Memento.png",
            "weapon": "Blade",
            "costume": [
                "Goushinnso Memento",
                "Blanc X: Ichijin",
				"Blooming Maiko",
				"Summer Dream",
                "Hyoukai Sonata",
                "Sakura Summer"
            ],
            "fragdropinfo": [
                "War Treasury"
            ]
        },
        {
            "battlesuit": "Gyakushinn Miko",
            "tag": [
                "Miko"
            ],
            "type": "Biologic",
            "soul": "Awakening",
            "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/b/b5/Gyakushinn_Miko.png/450px-Gyakushinn_Miko.png",
            "weapon": "Blade",
            "costume": [
                "Gyakushinn Miko",
                "Summer Sakura",
                "Midnight Marigold",
                "Frozen Sakura",
                "Sublime Lotus",
                "Summer Dream"
            ],
            "fragdropinfo": [
                "Sakura Samsara: Adventure Tasks",
                "Sakura Samsara - Adventure Tasks - Finalization Reward",
                "Asterite Shop"
            ]
        }
    ]
}

},{}]},{},[1]);
