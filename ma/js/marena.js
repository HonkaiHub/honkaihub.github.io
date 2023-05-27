var NotAvailable = require("../json/0_na.json");
var DeathlyDoom = require("../json/DeathlyDoom.json");
var HerrscheroftheVoid = require("../json/HerrscheroftheVoid.json");
var Huodou = require("../json/Huodou.json");
var HuskMysticism = require("../json/HuskMysticism.json");
var Jizo = require("../json/Jizo.json");
var KallenKaslana = require("../json/KallenKaslana.json");
var Rimestar = require("../json/Rimestar.json");
var Tonatiuh = require("../json/Tonatiuh.json");

var MABosses = [
    NotAvailable,
    DeathlyDoom,
    HerrscheroftheVoid,
    Huodou,
	HuskMysticism,
    Jizo,
	KallenKaslana,
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
