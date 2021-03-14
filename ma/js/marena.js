// WIP
var valkimgs = [
    {
        "acronym": ["DK", "YA"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200619/2020061915441372109.png"
    },
    {
        "acronym": ["FS"],
        "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200701/2020070118474838579.png"
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
    }
]



var MABosses = [
    {
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
                "video": "https://youtu.be/j5eJOZoVBdE?t=7"
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
                "video": "https://youtu.be/j5eJOZoVBdE?t=74"
            }
        ]
    },
    {
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
                "video": "https://youtu.be/b5z0C2YHu90?t=27"
            }
        ]
    }
]
var MABossesLength = MABosses.length;
console.log("MABossesLength: " + MABossesLength);
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

function MABossInfo(bossName) {
    var cardInfo = "";

    findBossIndex(bossName);

    cardInfo += "<div class='columns'><div class='column'><h5 class='subtitle is-5'>" + MABosses[bossIndex].type + "</h6>";
    cardInfo += "<p>Number of Teams: " + MABosses[bossIndex].team.length + "</p></div></div>";
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

        party += "<div class='columns team-style'>";
            party += "<div class='column team-side-style vidclick-style' onclick='openVideo(" + "\"" + videoURL + "\"" + ")'>";
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
                        party += "<td><img class='valkimg-style' src='" + img1 + "'></td>";
                        party += "<td><img class='valkimg-style' src='" + img2 + "'></td>";
                        party += "<td><img class='valkimg-style' src='" + img3 + "'></td>";
                    party += "</tr>";
                    party += "<tr>";
                        party += "<td class='rank-style'>" + MABosses[bossIndex].team[i].party[0].rank + "</td>";
                        party += "<td class='rank-style'>" + MABosses[bossIndex].team[i].party[1].rank + "</td>";
                        party += "<td class='rank-style'>" + MABosses[bossIndex].team[i].party[2].rank + "</td>";
                    party += "</tr>";
                party += "</table>";
                party += "<p>Player: " + MABosses[bossIndex].team[i].player + "</p>";
                //party += "<p><a href='" + MABosses[bossIndex].team[i].video + "'>Video Link</a></p><br>";
            party += '</div>';
            party += "<div class='column team-side-style'>";
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
        if (MABosses[i].name.includes(bossName)){
            bossIndex = i;
        }
    }
    //console.log("bossIndex: " + bossIndex);

    return bossIndex;
}

function openVideo(url) {
    return window.open(url);
}
