(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var NotAvailable = require("../json/0_na.json");
var DeathlyDoom = require("../json/DeathlyDoom.json");
var HerrscheroftheVoid = require("../json/HerrscheroftheVoid.json");
var Huodou = require("../json/Huodou.json");
var HuskMysticism = require("../json/HuskMysticism.json");
var Jizo = require("../json/Jizo.json");
var Rimestar = require("../json/Rimestar.json");
var Tonatiuh = require("../json/Tonatiuh.json");

var MABosses = [
    NotAvailable,
    DeathlyDoom,
    HerrscheroftheVoid,
    Huodou,
	HuskMysticism,
    Jizo,
    Rimestar,
    Tonatiuh
]

var valkimgs = require("../json/ValkyrieImages.json");

var MABossesLength = MABosses.length;
console.log("MABossesLength: " + MABossesLength);
var ValkPicNumbers = valkimgs.length;
console.log("ValkPicNumbers: " + ValkPicNumbers);
var bossIndex = "";

function toggleDisplay(bossName) {
    var x = document.getElementById(bossName);

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    MABossInfo(bossName);
}
// If using Browserify.
window.toggleDisplay = toggleDisplay;


function MABossInfo(bossName) {
    var cardInfo = "";

    findBossIndex(bossName);

    cardInfo += "<div class='columns boss-layout'><div class='column'><h5 class='subtitle is-5'>" + MABosses[bossIndex].type + "</h6>";
    cardInfo += "Number of Teams: " + MABosses[bossIndex].team.length + "</div></div>";
    cardInfo += teamSetup();

    document.getElementById(bossName).innerHTML = cardInfo;
}

function teamSetup() {
    var party = "";
    var i = 0;
    var j = 0;
    var img1 = "";
    var img2 = "";
    var img3 = "";
    var numberOfTeams = 0;
    var videoURL = "";

    numberOfTeams = MABosses[bossIndex].team.length;
    for (i=0; numberOfTeams>i; i++) {
        videoURL = MABosses[bossIndex].team[i].video;

        party += "<div class='columns team-style fade-in'>";
            party += "<div class='column vidclick-style' onclick='openVideo(" + "\"" + videoURL + "\"" + ")'>";
                party += "<table>";
                    party += "<tr>";
                        party += "<td class='label-style' align='right'>" + MABosses[bossIndex].team[i].party[0].valk + "</td>";
                        party += "<td class='label-style' align='right'>" + MABosses[bossIndex].team[i].party[1].valk + "</td>";
                        party += "<td class='label-style' align='right'>" + MABosses[bossIndex].team[i].party[2].valk + "</td>";
                    party += "</tr>";

                    // Search in the pool of images
                    for (j=0; valkimgs.length>j; j++) {
                        if (valkimgs[j].acronym.includes(MABosses[bossIndex].team[i].party[0].valk)) {
                            img1 = valkimgs[j].img;
                        }
                        if (valkimgs[j].acronym.includes(MABosses[bossIndex].team[i].party[1].valk)) {
                            img2 = valkimgs[j].img;
                        }
                        if (valkimgs[j].acronym.includes(MABosses[bossIndex].team[i].party[2].valk)) {
                            img3 = valkimgs[j].img;
                        }
                    }
                    party += "<tr>";
                        party += "<td class='img-style'><img class='valkimg-style' src='" + img1 + "'></td>";
                        party += "<td class='img-style'><img class='valkimg-style' src='" + img2 + "'></td>";
                        party += "<td class='img-style'><img class='valkimg-style' src='" + img3 + "'></td>";
                    party += "</tr>";
                    party += "<tr>";
                        party += "<td class='rank-style'>" + MABosses[bossIndex].team[i].party[0].rank + "</td>";
                        party += "<td class='rank-style'>" + MABosses[bossIndex].team[i].party[1].rank + "</td>";
                        party += "<td class='rank-style'>" + MABosses[bossIndex].team[i].party[2].rank + "</td>";
                    party += "</tr>";
                party += "</table>";
                party += "<p>Player: " + MABosses[bossIndex].team[i].player + "</p>";
            party += '</div>';
            party += "<div class='column teamlead-side-style'>";
                party += "<b>[" + MABosses[bossIndex].team[i].party[0].valk + "]</b> ";
                party += MABosses[bossIndex].team[i].party[0].weapon + "<br> ";
                party += "T: " + MABosses[bossIndex].team[i].party[0].stigT + "<br>";
                party += "M: " + MABosses[bossIndex].team[i].party[0].stigM + "<br>";
                party += "B: " + MABosses[bossIndex].team[i].party[0].stigB + "<br><br>";
            party += "</div>";
            party += "<div class='column team-side-style'>";
                party += "<b>[" + MABosses[bossIndex].team[i].party[1].valk + "]</b> ";
                party += MABosses[bossIndex].team[i].party[1].weapon + "<br> ";
                party += "T: " + MABosses[bossIndex].team[i].party[1].stigT + "<br>";
                party += "M: " + MABosses[bossIndex].team[i].party[1].stigM + "<br>";
                party += "B: " + MABosses[bossIndex].team[i].party[1].stigB + "<br><br>";
            party += "</div>";
            party += "<div class='column team-side-style'>";
                party += "<b>[" + MABosses[bossIndex].team[i].party[2].valk + "]</b> ";
                party += MABosses[bossIndex].team[i].party[2].weapon + "<br> ";
                party += "T: " +MABosses[bossIndex].team[i].party[2].stigT + "<br>";
                party += "M: " +MABosses[bossIndex].team[i].party[2].stigM + "<br>";
                party += "B: " +MABosses[bossIndex].team[i].party[2].stigB + "<br><br>";
            party += '</div>';
        party += '</div>';
    }

    return party;
}

function findBossIndex(bossName) {
    for (var i=0; MABossesLength>i; i++){
        //console.log("MABosses["+i+"].name: " + MABosses[i].name + " = " + bossName);

        if (MABosses[i].name.includes(bossName)){
            bossIndex = i;
            console.log("bossIndex (FOUND): " + bossIndex);
            return bossIndex;
        } else if (MABosses[i].name != bossName) {
            bossIndex = 0;
        }
    }

    console.log("bossIndex (NOT FOUND): " + bossIndex);
    return bossIndex;
}

// When the user clicks the vidclick-style, open the modal
function openVideo(url) {
    var modalContent = "";
    //console.log(url)

    modalContent += "<iframe id='iframeVideoPlayer' src='";
    modalContent += url;
    modalContent += "' frameborder='0' allowfullscreen></iframe>";

    document.getElementsByClassName("modal-video")[0].innerHTML = modalContent;

    document.getElementById("myModal").style.display = "block";
}
window.openVideo = openVideo;

// Get the modal
var modal = document.getElementById("myModal");

// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("modal-close")[0].onclick = function() {
    var iframeVid = document.getElementById("iframeVideoPlayer");
    iframeVid.src = iframeVid.src;
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it. Put code in commentary to disable it.
/*window.onclick = function(event) {
    var iframeVid = document.getElementById("iframeVideoPlayer");
    if (event.target == document.getElementsByClassName("modal-background")[0]) {
        iframeVid.src = iframeVid.src;
        modal.style.display = "none";
    }
}*/

// browserify js/marena.js -o js/marenabundle.js

},{"../json/0_na.json":2,"../json/DeathlyDoom.json":3,"../json/HerrscheroftheVoid.json":4,"../json/Huodou.json":5,"../json/HuskMysticism.json":6,"../json/Jizo.json":7,"../json/Rimestar.json":8,"../json/Tonatiuh.json":9,"../json/ValkyrieImages.json":10}],2:[function(require,module,exports){
module.exports={
    "name": "Not Available",
    "type": "N/A",
    "team": [
        {
            "party": [
                {
                    "valk": "None",
                    "rank": "B",
                    "weapon": "",
                    "stigT": "",
                    "stigM": "",
                    "stigB": ""
                },
                {
                    "valk": "None",
                    "rank": "B",
                    "weapon": "",
                    "stigT": "",
                    "stigM": "",
                    "stigB": ""
                },
                {
                    "valk": "None",
                    "rank": "B",
                    "weapon": "",
                    "stigT": "",
                    "stigM": "",
                    "stigB": ""
                }
            ],
            "player": "Voided",
            "video": "https://www.youtube.com/embed/Q-b6rdyIJsY"
        }
    ]
}

},{}],3:[function(require,module,exports){
module.exports={
    "name": "DeathlyDoom",
    "type": "Biologic",
    "team": [
        {
            "party": [
                {
                    "valk": "KMB",
                    "rank": "SSS",
                    "weapon": "Positron Blaster",
                    "stigT": "Zhuge Kongming",
                    "stigM": "Shakespeare",
                    "stigB": "Shakespeare"
                },
                {
                    "valk": "CH",
                    "rank": "SS",
                    "weapon": "Lightning Angel",
                    "stigT": "Gluttony",
                    "stigM": "Origins",
                    "stigB": "Newton"
                },
                {
                    "valk": "HoS",
                    "rank": "S",
                    "weapon": "Domain of Sentience",
                    "stigT": "Mei Spectramancer",
                    "stigM": "Marco Polo",
                    "stigB": "Fu Hua: Onyx Simurgh"
                }
            ],
            "player": "The Keebster",
            "video": "https://www.youtube.com/embed/1n2MRBdV43I?start=5"
        }
    ]
}

},{}],4:[function(require,module,exports){
module.exports={
    "name": "HerrscheroftheVoid",
    "type": "Biologic",
    "team": [
        {
            "party": [
                {
                    "valk": "Meme",
                    "rank": "SS",
                    "weapon": "Frozen Naraka",
                    "stigT": "Schrodinger",
                    "stigM": "Beach Party",
                    "stigB": "Newton"
                },
                {
                    "valk": "PX",
                    "rank": "SS",
                    "weapon": "Grips of Tai Xuan",
                    "stigT": "Jin Shengtan",
                    "stigM": "Jin Shengtan",
                    "stigB": "Newton"
                },
                {
                    "valk": "SF",
                    "rank": "S",
                    "weapon": "Blood Dance",
                    "stigT": "Gluttony",
                    "stigM": "Beach Party",
                    "stigB": "Newton"
                }
            ],
            "player": "Kachan",
            "video": "https://www.youtube.com/embed/yfcldWO84Ks"
        },
        {
            "party": [
                {
                    "valk": "Meme",
                    "rank": "S",
                    "weapon": "Frozen Naraka",
                    "stigT": "Jingwei",
                    "stigM": "Scott",
                    "stigB": "Rasputin"
                },
                {
                    "valk": "PX",
                    "rank": "SS",
                    "weapon": "Grips of Tai Xuan",
                    "stigT": "Ogier",
                    "stigM": "Musician",
                    "stigB": "Musician"
                },
                {
                    "valk": "WD",
                    "rank": "SS",
                    "weapon": "Hekate's Gloom",
                    "stigT": "Summer Holic",
                    "stigM": "Summer Day",
                    "stigB": "Newton"
                }
            ],
            "player": "CoKieSa",
            "video": "https://www.youtube.com/embed/b7v1GmKTS8w?start=9"
        }
    ]
}

},{}],5:[function(require,module,exports){
module.exports={
    "name": "Huodou",
    "type": "Biologic",
    "team": [
        {
            "party": [
                {
                    "valk": "SS",
                    "rank": "SSS",
                    "weapon": "Key of Reason",
                    "stigT": "",
                    "stigM": "",
                    "stigB": "Sloth"
                },
                {
                    "valk": "DK",
                    "rank": "SSS",
                    "weapon": "Briareus EX",
                    "stigT": "Gluttony",
                    "stigM": "Origins",
                    "stigB": ""
                },
                {
                    "valk": "TP",
                    "rank": "SSS",
                    "weapon": "Hekate's Gloom",
                    "stigT": "Kafka",
                    "stigM": "Kafka",
                    "stigB": "Kafka"
                }
            ],
            "player": "Marisa Honkai",
            "video": "https://www.youtube.com/embed/b5z0C2YHu90?start=27"
        }
    ]
}

},{}],6:[function(require,module,exports){
module.exports={
    "name": "HuskMysticism",
    "type": "Imaginary",
    "team": [
        {
            "party": [
                {
                    "valk": "HoO",
                    "rank": "S",
                    "weapon": "Domain of Unity",
                    "stigT": "Raiden Mei",
                    "stigM": "Raiden Mei",
                    "stigB": "Raiden Mei"
                }, 
                {
                    "valk": "HoFi",
                    "rank": "S",
                    "weapon": "Domain of Genesis",
                    "stigT": "Kiana Kaslana",
                    "stigM": "Kiana Kaslana",
                    "stigB": "Kiana Kaslana"
                },
                {
                    "valk": "HoTr",
                    "rank": "S",
                    "weapon": "Domain of Ascension: Truth",
                    "stigT": "Bronya Zaychik",
                    "stigM": "Bronya Zaychik",
                    "stigB": "Bronya Zaychik"
                }
            ],
            "player": "Marisa Honkai",
            "video": "https://www.youtube.com/embed/wItZ3xAWK0w?start=113"
        }
    ]
}

},{}],7:[function(require,module,exports){
module.exports={
    "name": "Jizo",
    "type": "Biologic",
    "team": [
        {
            "party": [
                {
                    "valk": "DK",
                    "rank": "SSS",
                    "weapon": "Star Shatterer",
                    "stigT": "Picasso",
                    "stigM": "Beethoven",
                    "stigB": "Newton"
                },
                {
                    "valk": "CH",
                    "rank": "S",
                    "weapon": "Hekate's Gloom",
                    "stigT": "Picasso",
                    "stigM": "Picasso",
                    "stigB": "Newton"
                },
                {
                    "valk": "VD",
                    "rank": "SSS",
                    "weapon": "Tranquil Arias",
                    "stigT": "Schrodinger",
                    "stigM": "Planck",
                    "stigB": "Lier"
                }
            ],
            "player": "The Keebster",
            "video": "https://www.youtube.com/embed/oQB9297Elew"
        }
    ]
}

},{}],8:[function(require,module,exports){
module.exports={
    "name": "Rimestar",
    "type": "Psychic",
    "team": [
        {
            "party": [
                {
                    "valk": "PX",
                    "rank": "SS",
                    "weapon": "Grips of Tai Xuan",
                    "stigT": "Gluttony",
                    "stigM": "Musician",
                    "stigB": "Musician"
                },
                {
                    "valk": "FS",
                    "rank": "SSS",
                    "weapon": "Ruinous Sakura",
                    "stigT": "Thales",
                    "stigM": "Thales",
                    "stigB": "Fuxi"
                },
                {
                    "valk": "SF",
                    "rank": "SSS",
                    "weapon": "Blood Dance",
                    "stigT": "Summer Holic",
                    "stigM": "Summer Day",
                    "stigB": "Newton"
                }
            ],
            "player": "The Keebster",
            "video": "https://www.youtube.com/embed/j5eJOZoVBdE?start=7"
        },
        {
            "party": [
                {
                    "valk": "DK",
                    "rank": "SSS",
                    "weapon": "Briareus EX",
                    "stigT": "Picasso",
                    "stigM": "Picasso",
                    "stigB": "Ogier"
                },
                {
                    "valk": "SA",
                    "rank": "SSS",
                    "weapon": "Ranger's Cross",
                    "stigT": "Jingwei",
                    "stigM": "Siefried",
                    "stigB": "Lier"
                },
                {
                    "valk": "NS",
                    "rank": "SSS",
                    "weapon": "Ranger's Gaunlets",
                    "stigT": "Jingwei",
                    "stigM": "Marco Polo",
                    "stigB": "Pride"
                }
            ],
            "player": "The Keebster",
            "video": "https://www.youtube.com/embed/j5eJOZoVBdE?start=74"
        }
    ]
}

},{}],9:[function(require,module,exports){
module.exports={
    "name": "Tonatiuh",
    "type": "Quantum",
    "team": [
        {
            "party": [
                {
                    "valk": "HoT",
                    "rank": "S",
                    "weapon": "Domain of Sanction",
                    "stigT": "Benares: Awakening",
                    "stigM": "Benares: Awakening",
                    "stigB": "Benares: Awakening"
                },
                {
                    "valk": "BS",
                    "rank": "A",
                    "weapon": "Dark Xuanyuan Sword",
                    "stigT": "",
                    "stigM": "",
                    "stigB": ""
                },
                {
                    "valk": "None",
                    "rank": "B",
                    "weapon": "",
                    "stigT": "",
                    "stigM": "",
                    "stigB": ""
                }
            ],
            "player": "Rixuel",
            "video": "https://www.youtube.com/embed/JK1zQEqZxOs"
        }
    ]
}

},{}],10:[function(require,module,exports){
module.exports=[
    {
        "acronym": ["BS"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200616/2020061619395782695.png"
    },
    {
        "acronym": ["CH"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200721/2020072117055042407.png"
    },
    {
        "acronym": ["DK", "YA"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200619/2020061915441372109.png"
    },
    {
        "acronym": ["FS"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200701/2020070118474838579.png"
    },
    {
        "acronym": ["HoFi"],
        "img": "https://webstatic.hoyoverse.com/upload/contentweb/2023/02/15/625700e827bb334b0b01807ef523cb41_4396449823970494724.png"
    },
    {
        "acronym": ["HoO"],
        "img": "https://webstatic.hoyoverse.com/upload/contentweb/2023/02/15/07c717c930aecc641bade643d7d862e8_7636864933569256512.png"
    },
    {
        "acronym": ["HoS"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20210303/2021030314311783164.png"
	},
    {
        "acronym": ["HoT"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200806/2020080615421783866.png"
    },
    {
        "acronym": ["HoTr"],
        "img": "https://webstatic.hoyoverse.com/upload/contentweb/2023/01/10/dbb168138fe42a86abbad08093120186_6346573304400366927.png"
    },
    {
        "acronym": ["HV"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200618/2020061821060743679.png"
    },
    {
        "acronym": ["KMB"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200618/2020061820564036778.png"
    },
    {
        "acronym": ["Meme", "GM"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200701/2020070117331454724.png"
    },
    {
        "acronym": ["NS"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200702/2020070215521531223.png"
    },
    {
        "acronym": ["PX"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200702/2020070215390360638.png"
    },
    {
        "acronym": ["SA"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200721/2020072117563223298.png"
    },
    {
        "acronym": ["SF"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200618/2020061816132847384.png"
    },
    {
        "acronym": ["SS"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200619/2020061915594971535.png"
    },
    {
        "acronym": ["TP", "VE"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200721/2020072117425786448.png"
    },
    {
        "acronym": ["VD"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200618/2020061821154273054.png"
    },
    {
        "acronym": ["WD"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200619/2020061916452046427.png"
    },
    {
        "acronym": ["None", "none"],
        "img": "../ma/img/nopic.png"
    }
]

},{}]},{},[1]);
