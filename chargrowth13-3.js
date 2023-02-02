	

    var aptitude = new Array(15, 15, 15, 15, 15, 15, 15, 15, 15),
    empty = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0),
    unknown = new Array('?', '?', '?', '?', '?', '?', '?', '?', '?'),
    char_growths = {
            'Alear' : new Array (60,35,20,45,50,40,25,25,5),
            'Vander' : new Array (60,25,10,25,35,35,20,10,5),
            'Clanne' : new Array (40,35,10,40,50,30,25,20,5),
            'Framme' : new Array (55,30,25,35,55,25,30,25,0),
            'Alfred' : new Array (65,40,5,35,40,40,20,40,10),
            'Etie' : new Array (45,40,0,25,35,25,30,25,5),
            'Boucheron' : new Array (85,20,0,50,45,35,20,15,20),
            'Céline' : new Array (50,35,25,30,45,30,40,50,5),
            'Chloé' : new Array (75,25,35,40,55,30,25,25,5),
            'Louis' : new Array (75,40,0,25,25,50,20,25,15),
            'Yunaka' : new Array (50,35,25,40,45,15,45,25,5),
            'Alcryst' : new Array (65,30,10,40,45,30,20,15,10),
            'Citrinne' : new Array (45,10,40,25,30,20,40,25,5),
            'Lapis' : new Array (55,25,20,35,55,35,30,25,5),
            'Diamant' : new Array (75,30,15,20,40,40,25,20,15),
            'Amber' : new Array (65,45,0,25,30,35,5,35,15),
            'Jade' : new Array (55,35,25,35,30,40,30,20,10),
            'Ivy' : new Array (55,25,30,25,40,30,35,15,10),
            'Kagetsu' : new Array (60,30,15,50,50,40,25,40,10),
            'Zelkov' : new Array (65,35,15,40,35,35,15,25,10),
            'Fogado' : new Array (60,30,25,30,55,30,35,25,10),
            'Pandreo' : new Array (60,5,30,45,45,15,55,30,15),
            'Bunet' : new Array (65,30,10,40,35,45,25,40,10),
            'Timerra' : new Array (55,25,25,45,45,30,30,30,10),
            'Panette' : new Array (75,45,10,40,25,30,15,20,15),
            'Merrin' : new Array (55,25,25,40,50,30,30,25,10),
            'Hortensia' : new Array (40,20,20,35,50,25,55,50,0),
            'Seadall' : new Array (55,25,15,25,50,25,25,35,10),
            'Rosado' : new Array (75,45,25,40,45,30,30,20,5),
            'Goldmary' : new Array (65,30,5,25,25,55,25,25,5),
            'Lindon' : new Array (65,25,25,25,40,25,40,15,10),
            'Saphir' : new Array (80,35,0,25,30,30,5,20,10),
            'Veyle' : new Array (40,25,45,35,30,25,35,20,0),
            'Mauvier' : new Array (70,35,40,40,35,50,45,15,15),
            'Anna' : new Array (55,15,50,50,50,20,35,45,5),
            'Jean' : new Array (50,20,20,35,40,25,20,25,5)
            'Nah': new Array(70, 35, 35, 45, 35, 70, 45, 40)
    },
    genders = {
            'Avatar': false,
            'Chrom': false,
            'Lissa': true,
            'Frederick': false,
            'Sully': true,
            'Virion': false,
            'Stahl': false,
            'Vaike': false,
            'Miriel': true,
            'Sumia': true,
            'Kellam': false,
            'Donnel': false,
            'Lonqu': false,
            'Ricken': false,
            'Maribelle': true,
            'Panne': true,
            'Gaius': false,
            'Cordelia': true,
            'Gregor': false,
            'Nowi': true,
            'Libra': false,
            'Tharja': true,
            'Anna': true,
            'Olivia': true,
            'Cherche': true,
            'Henry': false,
            'Sayri': true,
            'Tiki': true,
            'Basilio': false,
            'Flavia': true,
            'Gangrel': false,
            'Walhart': false,
            'Emmeryn': true,
            'Yenfay': false,
            'Aversa': true,
            'Priam': false,
            'Prince Marth': false,
     
            'Maiden': true,
     
            'Lucina': true,
            'Owain': false,
            'Inigo': false,
            'Brady': false,
            'Kjelle': true,
            'Cynthia': true,
            'Severa': true,
            'Gerome': false,
            'Morgan (M)': false,
            'Morgan (F)': true,
            'Yarne': false,
            'Laurent': false,
            'Noire': true,
            'Nah': true
    },
    mods = {
            'HP': new Array(30, 0, 0, 0, 0, 0, 5, 5),
            'Strength': new Array(0, 15, 0, 5, 0, 0, 5, 0),
            'Magic': new Array(0, 0, 15, 0, 5, 0, 0, 5),
            'Skill': new Array(0, 5, 0, 15, 0, 0, 5, 0),
            'Speed': new Array(0, 0, 0, 5, 15, 5, 0, 0),
            'Luck': new Array(0, 5, 5, 0, 0, 15, 0, 0),
            'Defence': new Array(0, 0, 0, 0, 0, 5, 15, 5),
            'Resistance': new Array(0, 0, 5, 0, 5, 0, 0, 15),
            'None': new Array(0, 0, 0, 0, 0, 0, 0, 0)
    },
mods1 = {
            'HP': new Array(20, 0, 0, 0, 0, 0, 5, 5),
            'Strength': new Array(0, 10, 0, 5, 0, 0, 5, 0),
            'Magic': new Array(0, 0, 10, 0, 5, 0, 0, 5),
            'Skill': new Array(0, 5, 0, 10, 0, 0, 5, 0),
            'Speed': new Array(0, 0, 0, 5, 10, 5, 0, 0),
            'Luck': new Array(0, 5, 5, 0, 0, 10, 0, 0),
            'Defence': new Array(0, 0, 0, 0, 0, 5, 10, 5),
            'Resistance': new Array(0, 0, 5, 0, 5, 0, 0, 10),
            'None': new Array(0, 0, 0, 0, 0, 0, 0, 0)
    },
    classes = {
            'Dragon Child': ( 'Class': 'Dragon Child', 'Growths': new Array(10,10,0,10,15,10,10,5,5), 'promoted':false},
            'Divine Dragon': ( 'Class': 'Divine Dragon', 'Growths': new Array(10,10,0,10,15,15,15,10,5), 'promoted':true},
            'Fell Child': ( 'Class': 'Fell Child', 'Growths': new Array(10,10,25,10,5,10,25,0,0), 'promoted':false},
            'Noble (Alfred)': ( 'Class': 'Noble (Alfred)', 'Growths': new Array(15,15,0,5,5,20,5,15,0), 'promoted':false},
            'Avenir': ( 'Class': 'Avenir', 'Growths': new Array(15,15,0,5,10,25,5,20,5), 'promoted':true},
            'Noble (Céline)': ( 'Class': 'Noble (Céline)', 'Growths': new Array(0,5,10,5,5,5,10,20,0), 'promoted':false},
            'Vidame': ( 'Class': 'Vidame', 'Growths': new Array(5,10,15,5,5,5,15,20,0), 'promoted':true},
            'Lord (Diamant)': ( 'Class': 'Lord (Diamant)', 'Growths': new Array(15,20,0,10,10,10,0,5,0), 'promoted':false},
            'Successeur': ( 'Class': 'Successeur', 'Growths': new Array(15,20,0,10,15,15,0,10,5), 'promoted':true},
            'Lord (Alcryst)': ( 'Class': 'Lord (Alcryst)', 'Growths': new Array(10,10,0,25,10,10,0,5,0), 'promoted':false},
            'Tireur d’élite': ( 'Class': 'Tireur d’élite', 'Growths': new Array(10,10,0,30,10,15,5,5,0), 'promoted':true},
            'Wing Tamer (Ivy)': ( 'Class': 'Wing Tamer (Ivy)', 'Growths': new Array(5,0,20,0,0,10,20,0,0), 'promoted':false},
            'Lindwurm': ( 'Class': 'Lindwurm', 'Growths': new Array(5,0,25,5,0,15,25,0,0), 'promoted':true},
            'Wing Tamer (Hortensia)': ( 'Class': 'Wing Tamer (Hortensia)', 'Growths': new Array(0,0,15,10,10,0,25,10,0), 'promoted':false},
            'Sleipnir Rider': ( 'Class': 'Sleipnir Rider', 'Growths': new Array(0,0,20,15,15,0,30,15,0), 'promoted':true},
            'Sentinel (Timerra)': ( 'Class': 'Sentinel (Timerra)', 'Growths': new Array(10,10,0,10,5,20,0,5,0), 'promoted':false},
            'Picket': ( 'Class': 'Picket', 'Growths': new Array(10,15,0,10,10,20,5,5,5), 'promoted':true},
            'Sentinel (Fogado)': ( 'Class': 'Sentinel (Fogado)', 'Growths': new Array(10,5,0,15,15,5,15,0,0), 'promoted':false},
            'Cupido': ( 'Class': 'Cupido', 'Growths': new Array(10,5,5,20,20,5,20,0,0), 'promoted':true},
            'Melusine': ( 'Class': 'Melusine', 'Growths': new Array(10,10,10,10,15,10,10,0,5), 'promoted':false},
            'Sword Fighter': ( 'Class': 'Sword Fighter', 'Growths': new Array(10,10,0,15,20,0,15,10,0), 'promoted':false},
            'Swordmaster': ( 'Class': 'Swordmaster', 'Growths': new Array(10,10,0,15,20,0,15,15,0), 'promoted':true},
            'Hero': ( 'Class': 'Hero', 'Growths': new Array(15,15,0,10,15,0,10,15,0), 'promoted':true},
            'Lance Fighter': ( 'Class': 'Lance Fighter', 'Growths': new Array(10,10,5,20,5,10,5,0,0), 'promoted':false},
            'Halberdier': ( 'Class': 'Halberdier', 'Growths': new Array(10,15,5,20,10,15,5,5,0), 'promoted':true},
            'Royal Knight': ( 'Class': 'Royal Knight', 'Growths': new Array(5,10,15,15,15,5,20,10,0), 'promoted':true},
            'Axe Fighter': ( 'Class': 'Axe Fighter', 'Growths': new Array(25,20,0,5,10,5,0,0,5), 'promoted':false},
            'Berserker': ( 'Class': 'Berserker', 'Growths': new Array(30,30,0,5,10,5,0,0,10), 'promoted':true},
            'Warrior': ( 'Class': 'Warrior', 'Growths': new Array(25,20,0,10,15,10,5,0,5), 'promoted':true},
            'Archer': ( 'Class': 'Archer', 'Growths': new Array(10,15,0,25,10,5,0,5,0), 'promoted':false},
            'Sniper': ( 'Class': 'Sniper', 'Growths': new Array(15,15,0,30,10,10,0,10,0), 'promoted':true},
            'Bow Knight': ( 'Class': 'Bow Knight', 'Growths': new Array(10,10,0,20,20,0,15,15,0), 'promoted':true},
            'Sword Armor': ( 'Class': 'Sword Armor', 'Growths': new Array(20,15,0,10,0,30,0,0,5), 'promoted':false},
            'Lance Armor': ( 'Class': 'Lance Armor', 'Growths': new Array(20,15,0,10,0,30,0,0,5), 'promoted':false},
            'Axe Armor': ( 'Class': 'Axe Armor', 'Growths': new Array(20,15,0,10,0,30,0,0,5), 'promoted':false},
            'General': ( 'Class': 'General', 'Growths': new Array(25,20,0,10,0,30,0,0,10), 'promoted':true},
            'Great Knight': ( 'Class': 'Great Knight', 'Growths': new Array(20,15,0,15,0,25,10,5,5), 'promoted':true},
            'Sword Cavalier': ( 'Class': 'Sword Cavalier', 'Growths': new Array(10,10,0,10,10,10,10,10,0), 'promoted':false},
            'Lance Cavalier': ( 'Class': 'Lance Cavalier', 'Growths': new Array(10,10,0,10,10,10,10,10,0), 'promoted':false},
            'Axe Cavalier': ( 'Class': 'Axe Cavalier', 'Growths': new Array(10,10,0,10,10,10,10,10,0), 'promoted':false},
            'Paladin': ( 'Class': 'Paladin', 'Growths': new Array(15,15,0,10,15,15,15,10,0), 'promoted':true},
            'Wolf Knight': ( 'Class': 'Wolf Knight', 'Growths': new Array(10,5,0,15,20,5,20,20,0), 'promoted':true},
            'Mage': ( 'Class': 'Mage', 'Growths': new Array(0,0,25,5,0,0,25,5,0), 'promoted':false},
            'Sage': ( 'Class': 'Sage', 'Growths': new Array(0,0,30,5,0,0,30,15,0), 'promoted':true},
            'Mage Knight': ( 'Class': 'Mage Knight', 'Growths': new Array(5,5,25,0,5,10,25,5,0), 'promoted':true},
            'Martial Monk': ( 'Class': 'Martial Monk', 'Growths': new Array(0,10,25,0,0,10,20,10,0), 'promoted':false},
            'Martial Master': ( 'Class': 'Martial Master', 'Growths': new Array(5,10,20,0,0,15,25,10,0), 'promoted':true},
            'High Priest': ( 'Class': 'High Priest', 'Growths': new Array(0,0,25,0,5,0,30,30,0), 'promoted':true},
            'Sword Flier': ( 'Class': 'Sword Flier', 'Growths': new Array(5,10,5,10,10,0,10,10,0), 'promoted':false},
            'Lance Flier': ( 'Class': 'Lance Flier', 'Growths': new Array(5,10,5,10,10,0,10,10,0), 'promoted':false},
            'Axe Flier': ( 'Class': 'Axe Flier', 'Growths': new Array(5,10,5,10,10,0,10,10,0), 'promoted':false},
            'Griffin Knight': ( 'Class': 'Griffin Knight', 'Growths': new Array(0,10,15,15,20,0,15,15,0), 'promoted':true},
            'Wyvern Knight': ( 'Class': 'Wyvern Knight', 'Growths': new Array(20,20,0,10,5,20,5,5,5), 'promoted':true},
            'Thief': ( 'Class': 'Thief', 'Growths': new Array(5,10,0,20,15,15,5,15,0), 'promoted':false},
            'Dancer': ( 'Class': 'Dancer', 'Growths': new Array(5,10,0,5,15,10,20,20,0), 'promoted':false},
            'Dread Fighter': { 'Class': 'Dread Fighter', 'Growths': new Array(40, 20, 10, 20, 20, 0, 10, 10, 0), 'promoted': true },
            'Bride': { 'Class': 'Bride', 'Growths': new Array(40, 20, 10, 20, 20, 0, 10, 10, 0), 'promoted': true }
    },
    class_sets = {
            'Chrom': new Array(
                    classes['Lord/Great Lord'],
                    classes['Cavalier'], classes['Paladin'], classes['Great Knight'],
                    classes['Archer'], classes['Sniper'], classes['Bow Knight'], classes['Dread Fighter']
            ),
            'Alear': new Array(
                    classes['Dragon Child'], classes['Divine Dragon'],
                    classes['Sword Fighter'], classes['Swordmaster'], classes['Hero'],
                    classes['Lance Fighter'], classes['Halberdier'], classes['Royal Knight'],
                    classes['Axe Fighter'], classes['Berserker'], classes['Warrior'],
                    classes['Archer'], classes['Sniper'], classes['Bow Knight'],
                    classes['Sword Armor'], classes['Lance Armor'], classes['Axe Armor'], classes['General'], classes['Great Knight'],
                    classes['Sword Cavalier'], classes['Lance Cavalier'], classes['Axe Cavalier'], classes['Paladin'], classes['Wolf Knight'],
                    classes['Mage'], classes['Sage'], classes['Mage Knight'],
                    classes['Martial Monk'], classes['Martial Master'], classes['High Priest'],
                    classes['Sword Flier'], classes['Lance Flier'], classes['Axe Flier'], classes['Griffin Knight'], classes['Wyvern Knight'],
                    classes['Thief']
            ),
            'Vander': new Array(
                    classes['Paladin'],
                    classes['Sword Cavalier'], classes['Lance Cavalier'], classes['Axe Cavalier'], classes['Wolf Knight'],
                    classes['Sword Fighter'], classes['Swordmaster'], classes['Hero'],
                    classes['Lance Fighter'], classes['Halberdier'], classes['Royal Knight'],
                    classes['Axe Fighter'], classes['Berserker'], classes['Warrior'],
                    classes['Archer'], classes['Sniper'], classes['Bow Knight'],
                    classes['Sword Armor'], classes['Lance Armor'], classes['Axe Armor'], classes['General'], classes['Great Knight'],
                    classes['Mage'], classes['Sage'], classes['Mage Knight'],
                    classes['Martial Monk'], classes['Martial Master'], classes['High Priest'],
                    classes['Sword Flier'], classes['Lance Flier'], classes['Axe Flier'], classes['Griffin Knight'], classes['Wyvern Knight'],
                    classes['Thief']
            ),
            'Clanne' new Array(
                    classes['Mage'], classes['Sage'], classes['Mage Knight'],
                    classes['Sword Fighter'], classes['Swordmaster'], classes['Hero'],
                    classes['Lance Fighter'], classes['Halberdier'], classes['Royal Knight'],
                    classes['Axe Fighter'], classes['Berserker'], classes['Warrior'],
                    classes['Archer'], classes['Sniper'], classes['Bow Knight'],
                    classes['Sword Armor'], classes['Lance Armor'], classes['Axe Armor'], classes['General'], classes['Great Knight'],
                    classes['Sword Cavalier'], classes['Lance Cavalier'], classes['Axe Cavalier'], classes['Paladin'], classes['Wolf Knight'],
                    classes['Martial Monk'], classes['Martial Master'], classes['High Priest'],
                    classes['Sword Flier'], classes['Lance Flier'], classes['Axe Flier'], classes['Griffin Knight'], classes['Wyvern Knight'],
                    classes['Thief']
            ),
            'Non-Royal' new Array(
                    classes['Sword Fighter'], classes['Swordmaster'], classes['Hero'],
                    classes['Lance Fighter'], classes['Halberdier'], classes['Royal Knight'],
                    classes['Axe Fighter'], classes['Berserker'], classes['Warrior'],
                    classes['Archer'], classes['Sniper'], classes['Bow Knight'],
                    classes['Sword Armor'], classes['Lance Armor'], classes['Axe Armor'], classes['General'], classes['Great Knight'],
                    classes['Sword Cavalier'], classes['Lance Cavalier'], classes['Axe Cavalier'], classes['Paladin'], classes['Wolf Knight'],
                    classes['Mage'], classes['Sage'], classes['Mage Knight'],
                    classes['Martial Monk'], classes['Martial Master'], classes['High Priest'],
                    classes['Sword Flier'], classes['Lance Flier'], classes['Axe Flier'], classes['Griffin Knight'], classes['Wyvern Knight'],
                    classes['Thief']
            ),
            'Royal' new Array(
                    classes['Dragon Child'], classes['Divine Dragon'],
                    classes['Fell Child'],
                    classes['Noble (Alfred)'], classes['Avenir'],
                    classes['Noble (Céline)'], classes['Vidame'],
                    classes['Lord (Diamant)'], classes['Successeur'],
                    classes['Lord (Alcryst)'], classes['Tireur d’élite'],
                    classes['Wing Tamer (Ivy)'], classes['Lindwurm'],
                    classes['Wing Tamer (Hortensia)'], classes['Sleipnir Rider'],
                    classes['Sentinel (Timerra)'], classes['Picket'],
                    classes['Sentinel (Fogado)'], classes['Cupido'],
                    classes['Sword Fighter'], classes['Swordmaster'], classes['Hero'],
                    classes['Lance Fighter'], classes['Halberdier'], classes['Royal Knight'],
                    classes['Axe Fighter'], classes['Berserker'], classes['Warrior'],
                    classes['Archer'], classes['Sniper'], classes['Bow Knight'],
                    classes['Sword Armor'], classes['Lance Armor'], classes['Axe Armor'], classes['General'], classes['Great Knight'],
                    classes['Sword Cavalier'], classes['Lance Cavalier'], classes['Axe Cavalier'], classes['Paladin'], classes['Wolf Knight'],
                    classes['Mage'], classes['Sage'], classes['Mage Knight'],
                    classes['Martial Monk'], classes['Martial Master'], classes['High Priest'],
                    classes['Sword Flier'], classes['Lance Flier'], classes['Axe Flier'], classes['Griffin Knight'], classes['Wyvern Knight'],
                    classes['Thief'],
                    classes['Dancer']
            ),

            'Maiden': new Array(
                    classes['Lord/Great Lord']
            ),
     
            // Avatar's Children
     
            'Child (M)': new Array(
                    classes['Tactician/Grandmaster'],
                    classes['Cavalier'], classes['Paladin'], classes['Great Knight'],
                    classes['Knight'], classes['General'],
                    classes['Myrmidon'], classes['Swordmaster'],
                    classes['Mercenary/Hero'],
                    classes['Fighter/Warrior'],
                    classes['Barbarian/Berserker'],
                    classes['Archer'], classes['Sniper'], classes['Bow Knight'],
                    classes['Thief'], classes['Assassin'], classes['Trickster'],
                    classes['Wyvern Rider/Lord'], classes['Griffon Rider'],
                    classes['Mage/Sage'],
                    classes['Dark Mage'], classes['Sorcerer'], classes['Dark Knight'],
                    classes['Priest/Cleric'], classes['War Monk/Cleric'], classes['Dread Fighter']
            ),
            'Child (F)': new Array(
                    classes['Tactician/Grandmaster'],
                    classes['Cavalier'], classes['Paladin'], classes['Great Knight'],
                    classes['Knight'], classes['General'],
                    classes['Myrmidon'], classes['Swordmaster'],
                    classes['Mercenary/Hero'],
                    classes['Archer'], classes['Sniper'], classes['Bow Knight'],
                    classes['Thief'], classes['Assassin'], classes['Trickster'],
                    classes['Pegasus Knight'], classes['Falcon Knight'], classes['Dark Flier'],
                    classes['Wyvern Rider/Lord'], classes['Griffon Rider'],
                    classes['Mage/Sage'],
                    classes['Dark Mage'], classes['Sorcerer'], classes['Dark Knight'],
                    classes['Priest/Cleric'], classes['War Monk/Cleric'],
                    classes['Troubadour/Valkyrie'], classes['Bride']
            ),
     
            // Initial child classes
     
            'Lucina': new Array(
                    classes['Lord/Great Lord']
            ),
            'Owain': new Array(
                    classes['Myrmidon'], classes['Swordmaster'], classes['Assassin']
            ),
            'Inigo': new Array(
                    classes['Mercenary/Hero'], classes['Bow Knight']
            ),
            'Brady': new Array(
                    classes['Priest/Cleric'], classes['War Monk/Cleric']
            ),
            'Kjelle': new Array(
                    classes['Knight'], classes['General'], classes['Great Knight']
            ),
            'Cynthia': new Array(
                    classes['Pegasus Knight'], classes['Falcon Knight'], classes['Dark Flier']
            ),
            'Severa': new Array(
                    classes['Mercenary/Hero'], classes['Bow Knight']
            ),
            'Gerome': new Array(
                    classes['Wyvern Rider/Lord'], classes['Griffon Rider']
            ),
            'Yarne': new Array(
                    classes['Taguel (M)']
            ),
            'Laurent': new Array(
                    classes['Mage/Sage'], classes['Dark Knight']
            ),
            'Noire': new Array(
                    classes['Archer'], classes['Sniper'], classes['Bow Knight']
            ),
            'Nah': new Array(
                    classes['Manakete']
            )
    };
     
    //alters the dropdown menu for the classes
    function parentDropdownChange(childName, childSet) {
            var parentDrop = document.getElementById(childName + '_parent_dropdown'),
            classDrop = document.getElementById(childName + '_class_dropdown'),
            childOpts = document.getElementsByClassName(childName + 'Child'),
            childSelect;
     
            classDrop.options.length = 0;
     
            if (parentDrop.getAttribute('data-defaultparent') !== 'Avatar') {
                    if (parentDrop.options[parentDrop.selectedIndex].value === 'Avatar') {
                            classDrop.className += ' AvatarDropdown';
                    } else if (classDrop.className.indexOf(' AvatarDropdown') > -1) {
                            classDrop.className = classDrop.className.replace(/ AvatarDropdown/, '');
                    }
            }
     
            if (parentDrop.options[parentDrop.selectedIndex].value !== '0') {
                    for (i = 0; i < childSet.length; i++) {
                            classDrop.options[i] = new Option(childSet[i]['Class'], childSet[i]['Class']);
                    }
                   
                    for (i = 0; i < childOpts.length; i++) {
                            childSelect = childOpts[i].parentNode;
     
                            if (parentDrop.options[parentDrop.selectedIndex].value !== 'Avatar') {
                                    childOpts[i].style.display = '';
     
                                    if (childSelect.options[childSelect.selectedIndex].value === childName) {
                                            changeSelect(childSelect);
                                    }
                            } else {
                                    childOpts[i].style.display = 'none';
     
                                    if (childSelect.options[childSelect.selectedIndex].value === childName) {
                                            childOpts[i].parentNode.selectedIndex = 0;
                                            changeSelect(childSelect);
                                    }
                            }
                    }
            } else {
                    for (i = 0; i < childOpts.length; i++) {
                            childOpts[i].style.display = 'none';
                            childSelect = childOpts[i].parentNode;
     
                            if (childSelect.options[childSelect.selectedIndex].value === childName) {
                                    childOpts[i].parentNode.selectedIndex = 0;
                                    changeSelect(childSelect);
                            }
                    }
            }
    }
     
    //Get values of the crucial elements of MU as int
    function getDropdownValue(string, type) {
            switch (type) {
                    case 'int':
                            return parseInt(document.getElementById(string).options[document.getElementById(string).selectedIndex].value);
                    break;
                    case 'string':
                    default:
                            return document.getElementById(string).options[document.getElementById(string).selectedIndex].value;
            }
    }
     
    function getDropdownIndex(string) {
            return document.getElementById(string).selectedIndex;
    }
     
    function calculateGrowths(charName, classArray) {
            var charArray = char_growths[charName.replace(/[^a-zA-Z0-9]/g, '')],
            sum = new Array(), //Holds the modified growths
            temp, //Because we need to store things to work with all those functions
            context = document.getElementById(charName.replace(/[^a-zA-Z0-9]/g, '') + '_class_dropdown').parentNode.parentNode,
            asset = document.getElementById('asset_dropdown').options[document.getElementById('asset_dropdown').selectedIndex].value,
            flaw = document.getElementById('flaw_dropdown').options[document.getElementById('flaw_dropdown').selectedIndex].value,
            x = 0;
     
            asset = (asset === 'None') ? empty : mods[asset];
            flaw = (flaw === 'None') ? empty : mods1[flaw];
     
            for (x = 0; x < charArray.length; x++) {
                    if (classArray[x] === '?' || charArray[x] === '?') {
                            sum[x] = '?';
                    } else {
                            sum[x] = charArray[x] + classArray['Growths'][x]; //Add character growth + class growth manipulated with this multidimensional array
                    }
     
                    if (charName === 'Avatar') {
                            sum[x] += (asset[x] - flaw[x]);
                    }
                   
                    if (context.getElementsByClassName('Aptitude_On')[0] != null) {
                            if (context.getElementsByClassName('Aptitude_On')[0].style.display !== 'none' && sum[x] !== '?') {
                                    sum[x] += aptitude[x];
                            }
                    }
     
                    temp = document.getElementById(charName.replace(/[^a-zA-Z0-9]/g, '') + x.toString());
     
                    //Set temp to hold an id through some string manipulation
                    //If charName is 'liz' and x is currently 2, the id referred to will be 'liz2'
           
                    temp.childNodes[0].nodeValue = sum[x]; //Pass the sum over to the id
            }
     
            return sum;
    }
     
    function filterByGender(classSet, isFemale, parentName) {
            var className,
            i = 0;
     
            for (i = 0; i < classSet.length; i++) {
                    className = classSet[i]['Class'];
     
                    if (isFemale) {
                            switch (parentName) {
                                    case 'Vaike':
                                            switch (className) {
                                                    case 'Fighter/Warrior':
                                                            classSet[i] = classes['Knight'];
                                                            classSet.push(classes['General']);
                                                            classSet.push(classes['Great Knight']);
                                                    break;
                                                    case 'Barbarian/Berserker':
                                                            classSet[i] = classes['Mercenary/Hero'];
                                                            classSet.push(classes['Bow Knight']);
                                                    break;
                                            }
                                    break;
                                    case 'Gaius':
                                            switch (className) {
                                                    case 'Fighter/Warrior':
                                                            classSet[i] = classes['Pegasus Knight'];
                                                            classSet.push(classes['Falcon Knight']);
                                                    break;
                                                    case 'Mercenary/Hero':
                                                            classSet[i] = classes['Dark Flier'];
                                                    break;
                                            }
                                    break;
                                    case 'Donnel':
                                            switch (className) {
                                                    case 'Villager':
                                                            classSet[i] = classes['Pegasus Knight'];
                                                            classSet.push(classes['Falcon Knight']);
                                                            classSet.push(classes['Dark Flier']);
                                                    break;
                                                    case 'Fighter/Warrior':
                                                            classSet[i] = classes['Troubadour/Valkyrie'];
                                                            classSet.push(classes['War Monk/Cleric']);
                                                    break;
                                            }
                                    break;
                                    case 'Gregor':
                                    case 'Henry':
                                            switch (className) {
                                                    case 'Barbarian/Berserker':
                                                            classSet[i] = classes['Troubadour/Valkyrie'];
                                                    break;
                                                    case 'Fighter/Warrior':
                                                            classSet[i] = classes['War Monk/Cleric'];
                                                    break;
                                            }
                                    break;
                                    case 'Avatar':
                                            switch (className) {
                                                    case 'Fighter/Warrior':
                                                    case 'Barbarian/Berserker':
                                                            classSet[i] = classes['Tactician/Grandmaster'];
                                                    break;
                                            }
                                    break;
                            }
     
                            switch (className) {
                                    case 'Dread Fighter':
                                            classSet[i] = classes['Bride'];
                                    break;
                                    case 'Taguel (M)':
                                            classSet[i] = classes['Taguel (F)'];
                                    break;
                            }
                    } else {
                            switch (parentName) {
                                    case 'Lissa':
                                            switch (className) {
                                                    case 'Pegasus Knight':
                                                            classSet[i] = classes['Myrmidon'];
                                                    break;
                                                    case 'Falcon Knight':
                                                            classSet[i] = classes['Swordmaster'];
                                                    break;
                                                    case 'Dark Flier':
                                                            classSet[i] = classes['Assassin'];
                                                    break;
                                                    case 'Troubadour/Valkyrie':
                                                            classSet[i] = classes['Barbarian/Berserker'];
                                                            classSet.push(classes['Fighter/Warrior']);
                                                    break;
                                            }
                                    break;
                                    case 'Miriel':
                                            switch (className) {
                                                    case 'Troubadour/Valkyrie':
                                                            classSet[i] = classes['Barbarian/Berserker'];
                                                    break;
                                                    case 'War Monk/Cleric':
                                                            classSet[i] = classes['Fighter/Warrior'];
                                                    break;
                                            }
                                    break;
                                    case 'Maribelle':
                                            switch (className) {
                                                    case 'Pegasus Knight':
                                                            classSet[i] = classes['Cavalier'];
                                                    break;
                                                    case 'Falcon Knight':
                                                            classSet[i] = classes['Paladin'];
                                                    break;
                                                    case 'Dark Flier':
                                                            classSet[i] = classes['Great Knight'];
                                                    break;
                                                    case 'Troubadour/Valkyrie':
                                                            classSet[i] = classes['Priest/Cleric'];
                                                            classSet.push(classes['War Monk/Cleric']);
                                                    break;
                                            }
                                    break;
                                    case 'Olivia':
                                            switch (className) {
                                                    case 'Dancer':
                                                            classSet[i] = classes['Mercenary/Hero'];
                                                            classSet.push(classes['Bow Knight']);
                                                    break;
                                                    case 'Pegasus Knight':
                                                            classSet[i] = classes['Barbarian/Berserker'];
                                                    break;
                                                    case 'Falcon Knight':
                                                    case 'Dark Flier':
                                                            classSet[i] = classes['Fighter/Warrior'];
                                                    break;
     
                                            }
                                    break;
                                    case 'Panne':
                                            switch (className) {
                                                    case 'Wyvern Rider/Lord':
                                                            classSet[i] = classes['Barbarian/Berserker'];
                                                    break;
                                                    case 'Griffon Rider':
                                                            classSet[i] = classes['Fighter/Warrior'];
                                                    break;
                                            }
                                    break;
                                    case 'Cherche':
                                            switch (className) {
                                                    case 'Troubadour/Valkyrie':
                                                            classSet[i] = classes['Fighter/Warrior'];
                                                    break;
                                                    case 'War Monk/Cleric':
                                                            classSet[i] = classes['Mercenary/Hero'];
                                                    break;
                                            }
                                    break;
                                    case 'Avatar':
                                            switch (className) {
                                                    case 'Pegasus Knight':
                                                    case 'Falcon Knight':
                                                    case 'Dark Flier':
                                                    case 'Troubadour/Valkyrie':
                                                            classSet[i] = classes['Tactician/Grandmaster'];
                                                    break;
                                            }
                                    break;
                            }
     
                            switch (className) {
                                    case 'Bride':
                                            classSet[i] = classes['Dread Fighter'];
                                    break;
                                    case 'Taguel (F)':
                                            classSet[i] = classes['Taguel (M)'];
                                    break;
                            }
                    }
            }
    }
     
    function addClassSet(classSet, addTo, isChild) {
            var newSet = addTo.slice(0),
            temp,
            className,
            newClassName,
            exists = false,
            i = 0,
            j = 0;
     
            for (i = 0; i < classSet.length; i++) {
                    temp = classSet[i];
                    className = temp['Class'];
                    exists = false;
     
                    for (j = 0; j < newSet.length; j++) {
                            newClassName = newSet[j]['Class'];
     
                            if (className === newClassName) {
                                    exists = true;
                                    break;
                            }
                    }
     
                    if (isChild) {
                            if ((className !== 'Lord/Great Lord') && (className !== 'Dancer') && (className !== 'Conqueror')) {
                                    if (!exists) { //If the current class does not exist in the new array
                                            newSet.push(temp); //Add it to a new index
                                    }
                            }
                    } else {
                            if (!exists) { //If the current class does not exist in the new array
                                    newSet.push(temp); //Add it to a new index
                            }
                    }
            }
     
            return newSet;
    }
     
    function childClassArray(childName, defaultParentName, otherParentName) {
            var otherParentSet = class_sets[otherParentName],
            defaultParentSet = class_sets[defaultParentName],
            defaultClassName = otherParentSet[0]['Class'],
            childSet;
     
            //If the default parent is MU AND if the class is Lord, change it to classes['Tactician']
            if ((defaultParentName === 'Avatar')) {
                    if (defaultClassName === 'Lord/Great Lord' || defaultClassName === 'Dancer' || defaultClassName === 'Conqueror') {
                            childSet = new Array(classes['Tactician/Grandmaster']);
                    } else {
                            if (class_sets.hasOwnProperty(childName)) {
                                    childSet = class_sets[childName];
                            } else {
                                    if (otherParentSet[0].promoted) {
                                            childSet = new Array(otherParentSet[1]);
                                    } else {
                                            childSet = new Array(otherParentSet[0]);
                                    }
                            }
                    }
            } else {
                    if (class_sets.hasOwnProperty(childName)) {
                            childSet = class_sets[childName];
                    } else {
                            if (otherParentSet[0].promoted) {
                                    childSet = new Array(otherParentSet[1]);
                            } else {
                                    childSet = new Array(otherParentSet[0]);
                            }
                    }
            }
     
            //If the otherparent is one of the kids, use their parents to
            //make the second array
            switch (otherParentName) {
                    case 'Lucina':
                    case 'Owain':
                    case 'Inigo':
                    case 'Brady':
                    case 'Kjelle':
                    case 'Cynthia':
                    case 'Severa':
                    case 'Gerome':
                    case 'Yarne':
                    case 'Laurent':
                    case 'Noire':
                    case 'Nah':
                            otherParentSet = childClassArray(otherParentName, document.getElementById(otherParentName + '_parent_dropdown').getAttribute('data-defaultparent'), getDropdownValue(otherParentName + '_parent_dropdown'));
                    break;
                    default:
                            otherParentSet = class_sets[otherParentName];  
            }
     
            defaultParentSet = defaultParentSet.slice(0);
            otherParentSet = otherParentSet.slice(0);
     
            filterByGender(defaultParentSet, genders[childName], defaultParentName);
            filterByGender(otherParentSet, genders[childName], otherParentName);
             
            childSet = addClassSet(defaultParentSet, childSet, true);
            childSet = addClassSet(otherParentSet, childSet, true);
           
            return childSet;
    }
     
    function calculateChild(childName, defaultParentName, otherParentName) {
            var defaultParentGrowths = char_growths[defaultParentName],
            otherParentGrowths = char_growths[otherParentName],
            defaultParentClass = classes[getDropdownValue(defaultParentName + '_class_dropdown')],
            otherParentClass = (document.getElementById(otherParentName + '_class_dropdown') != null) ? classes[getDropdownValue(otherParentName + '_class_dropdown')] : classes[otherParentName],
            childClass = classes[getDropdownValue(childName + '_class_dropdown')]['Growths'],
            childGrowths = char_growths[childName],
            childSet = childClassArray(childName, defaultParentName, otherParentName),
            context = document.getElementById(childName + '_class_dropdown').parentNode.parentNode,
            sum = new Array(), //Holds the modified growths
            temp, //Because we need to store things to work with all those functions
            x = 0;
           
            for (x = 0; x < childClass.length; x++) {
                    if (defaultParentGrowths[x] === '?' || otherParentGrowths[x] === '?' || childClass[x] === '?') {
                            sum[x] = '?';
                    } else {
                            //If MU's a parent, apply the best/worst stats modifiers
                            if ((defaultParentName === 'Avatar') || (otherParentName === 'Avatar')) {
                                    //If the child being calculated is either of the Marks
                                    if (childName.substr(0, 6) === 'Morgan') {
                                   
                                    //check if Mark's other parent is one of the children
                                    //If so, take the necessary additional information from their current selections
                                            switch(otherParentName) {
                                           
                                            
                                            //format: (MUgrowths + MU's modifiers + Mark + (default parent + other parent + childparent)/3)/3
                                                    case 'Lucina':
                                                    case 'Owain':
                                                    case 'Inigo':
                                                    case 'Brady':
                                                    case 'Kjelle':
                                                    case 'Cynthia':
                                                    case 'Severa':
                                                    case 'Gerome':
                                                    case 'Yarne':
                                                    case 'Laurent':
                                                    case 'Noire':
                                                    case 'Nah':
// Part 1: Morgan with Gen 2 character as parent
                                                            sum[x] = parseInt((childGrowths[x] + defaultParentGrowths[x] + (mods[getDropdownValue('asset_dropdown')][x] - mods1[getDropdownValue('flaw_dropdown')][x]) + parseInt((char_growths[document.getElementById(otherParentName + '_parent_dropdown').getAttribute('data-defaultparent')][x] + char_growths[getDropdownValue(otherParentName + '_parent_dropdown')][x] + char_growths[otherParentName][x]) / 3)) / 3) + childClass[x];
                                                    break;
//Part 2: Morgan with a Gen 1 character as parent
                                                    default:
                                                            sum[x] = parseInt(
(
childGrowths[x] + defaultParentGrowths[x] + otherParentGrowths[x] + (mods[getDropdownValue('asset_dropdown')][x] - mods1[getDropdownValue('flaw_dropdown')][x])
) / 3
) + childClass[x];
                                            }
                                   
                                    } 

//Part 3: Non-Morgan with Avatar as parent
//Corrected asset and flaw
else {
                                            sum[x] = parseInt((

(childGrowths[x] + defaultParentGrowths[x] + otherParentGrowths[x]) / 3

) + (

(mods[getDropdownValue('asset_dropdown')][x] - mods1[getDropdownValue('flaw_dropdown')][x]) / 3 

) + childClass[x]);
                                    }
                            } 
// Part 4: Non-Morgan with non-Avatar as parent
else {
                                    sum[x] = parseInt((childGrowths[x] + defaultParentGrowths[x] + otherParentGrowths[x]) / 3) + childClass[x]; //Add character growth + class growth manipulated with this multidimensional array
                            }
     
                            if (context.getElementsByClassName('Aptitude_On')[0] != null) {
                                    if (context.getElementsByClassName('Aptitude_On')[0].style.display !== 'none' && sum[x] !== '?') {
                                            sum[x] += aptitude[x];
                                    }
                            }
                    }
     
                    temp = document.getElementById(childName + x.toString());
                    //Set temp to hold an id through some string manipulation
                    //If childName is 'liz' and x is currently 2, the id referred to will be 'liz2'
     
                    if (getDropdownValue(childName + '_parent_dropdown') === '0') {
                            temp.childNodes[0].nodeValue = '-';
                    } else {
                            temp.childNodes[0].nodeValue = sum[x]; //Pass the sum over to the id
                    }
            }
     
            return sum;
    }
     
    //Set growths displayed to "-"s
    //childName = String of character's name ie Wood is entered as 'wood'
    function clearGrowthDisplay(childName) {
            var temp;
     
            for (x = 0; x <= 7; x++) {
                    temp = document.getElementById(childName + x.toString());
                    temp.childNodes[0].nodeValue = '-';
            }
     
    }
     
    function aptitudeSkill(context) {
            var charName = context.getElementsByClassName('sectionName')[0].childNodes[0].nodeValue,
            isApt = (context.getElementsByClassName('Aptitude_Off')[0].style.display === 'none'),
            classDrop = context.getElementsByClassName('classDropdown')[0];
     
            if (isApt) {
                    context.getElementsByClassName('Aptitude_On')[0].style.display = 'none';
                    context.getElementsByClassName('Aptitude_Off')[0].style.display = '';
            } else {
                    context.getElementsByClassName('Aptitude_Off')[0].style.display = 'none';
                    context.getElementsByClassName('Aptitude_On')[0].style.display = '';
            }
     
            if (classDrop.selectedIndex > -1) {
                    changeSelect(classDrop);
            }
    }
     
    function changeSelect(select) {
            if ("createEvent" in document) {
                    var evt = document.createEvent("HTMLEvents");
                    evt.initEvent("change", false, true);
                    select.dispatchEvent(evt);
            } else {
                    select.fireEvent("onchange");
            }
    }
     
    function init() {
            var collection,
            item,
            i = 0;
     
            var classDrops = function() {
                    var context = this.parentNode.parentNode,
                    classType = this.getAttribute('data-classtype'),
                    namespace,
                    charName,
                    className = this.options[this.selectedIndex].value,
                    temp;
     
                    switch (classType) {
                            case 'Child':
                                    namespace = context.getElementsByClassName('parentDropdown')[0];
                                    temp = namespace.getAttribute('data-defaultparent');
                                    charName = context.getElementsByClassName('sectionName')[0].childNodes[0].nodeValue;
                                    calculateChild(charName, temp, namespace.options[namespace.selectedIndex].value);
                            break;
                            case 'Normal':
                            default:
                                    charName = context.getElementsByClassName('sectionName')[0].childNodes[0].nodeValue;
                                    calculateGrowths(charName, classes[className]);
                    }
            },
     
            parentDrops = function() {
                    var context = this.parentNode.parentNode,
                    defaultParentName = this.getAttribute('data-defaultparent'),
                    otherParentName = this.options[this.selectedIndex].value,
                    charName = context.getElementsByClassName('sectionName')[0].childNodes[0].nodeValue,
                    temp;
     
                    if (otherParentName === 'Donnel') {
                            context.getElementsByClassName('Aptitude_Off')[0].style.display = '';
                    } else {
                            context.getElementsByClassName('AptitudeSwitch')[0].style.display = 'none';
                            context.getElementsByClassName('AptitudeSwitch')[1].style.display = 'none';
                    }
     
                    if (otherParentName === '0') {
                            parentDropdownChange(charName, []);
                            clearGrowthDisplay(charName);
                            return false;
                    }
                   
                    parentDropdownChange(charName, childClassArray(charName, defaultParentName, otherParentName));
     
                    calculateChild(charName, defaultParentName, otherParentName);
            },
     
            aptitudeSwitch = function() {
                    var context = this.parentNode.parentNode;
     
                    aptitudeSkill(context);
            },
     
            AvatarModifiers = function() {
                    var avas,
                    ava,
                    i = 0;
     
                    for (i = 0, avas = document.getElementsByClassName('AvatarDropdown'); i < avas.length; i++) {
                            ava = avas[i];
     
                            if (ava.selectedIndex > -1) {
                                    changeSelect(ava);
                            }
                    }
            };
     
            for (i = 0, collection = document.getElementsByClassName('classDropdown'); i < collection.length; i++) {
                    item = collection[i];
     
                    item.addEventListener('change', classDrops, false);
            }
     
            for (i = 0, collection = document.getElementsByClassName('AvatarModifier'); i < collection.length; i++) {
                    item = collection[i];
     
                    item.addEventListener('change', AvatarModifiers, false);
            }
     
            for (i = 0, collection = document.getElementsByClassName('parentDropdown'); i < collection.length; i++) {
                    item = collection[i];
     
                    item.addEventListener('change', parentDrops, false);
            }
     
            for (i = 0, collection = document.getElementsByClassName('AptitudeSwitch'); i < collection.length; i++) {
                    item = collection[i];
     
                    item.addEventListener('click', aptitudeSwitch, false);
            }
    }
     
    setTimeout(function() {
            init();
    }, 0);

