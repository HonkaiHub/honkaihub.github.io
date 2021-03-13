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
                        "rank": "SS"
                    },
                    {
                        "valk": "FS",
                        "rank": "SSS"
                    },
                    {
                        "valk": "SF",
                        "rank": "SSS"
                    }
                ],
                "player": "The Keebster",
                "video": "https://youtu.be/j5eJOZoVBdE?t=7"
            },
            {
                "party": [
                    {
                        "valk": "DK",
                        "rank": "SSS"
                    },
                    {
                        "valk": "SA",
                        "rank": "SSS"
                    },
                    {
                        "valk": "NS",
                        "rank": "SSS"
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
                        "rank": "SSS"
                    },
                    {
                        "valk": "DK",
                        "rank": "SSS"
                    },
                    {
                        "valk": "TP",
                        "rank": "SSS"
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

    cardInfo += "<h6 class='subtitle is-6'>" + MABosses[bossIndex].type + "</h6>";
    cardInfo += "<p>Number of Teams: " + MABosses[bossIndex].team.length + "</p>";
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

    numberOfTeams = MABosses[bossIndex].team.length;
    for (i=0; numberOfTeams>i; i++) {
        party += "<div class='team-style'>";
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
