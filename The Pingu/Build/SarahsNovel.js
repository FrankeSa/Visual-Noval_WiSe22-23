"use strict";
var SarahsNovel;
(function (SarahsNovel) {
    SarahsNovel.ƒ = FudgeCore;
    SarahsNovel.ƒS = FudgeStory;
    console.log("Scene_1 In deinem Zimmer is starting");
    // Menu
    let gameMenu;
    let menuIsOpen = true;
    let inGameMenuBtn = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits"
    };
    SarahsNovel.transitions = {
        beginning: {
            duration: 3,
            alpha: "Transitions/WipesAndOther/circlewipe-ccw.jpg",
            edge: 2
        },
        crossingGeneral: {
            duration: 4,
            alpha: "Transitions/WipesAndOther/17.png",
            edge: 1
        },
        fadeSky: {
            duration: 4,
            alpha: "Transitions/WipesAndOther/4.jpg",
            edge: 1
        },
        swirl: {
            duration: 4,
            alpha: "Transitions/Others/swirl.png",
            edge: 1
        }
    };
    SarahsNovel.audio = {
        //background themes
        nursery: "Audio/birds_in_the_morning.mp3",
        cityTraffic: "Audio/city_traffic_outdoor.mp3",
        playground: "Audio/playground.mp3",
        atHome: "Audio/mother.mp3",
        moonSong: "Audio/moon_song.mp3",
        //SFX
        shipHorn: "Audio/ship_horn.mp3"
    };
    SarahsNovel.locations = {
        yourRoom: {
            name: "in your nursery",
            background: "Images/Hintergruende/kinderzimmer.png"
        },
        getLunchbox: {
            name: "get your lunchbox from your Grandmother",
            background: "Images/Hintergruende/oma_mit_kind_vesper.png"
        },
        meetThePenguin: {
            name: "you meet the penguin in front of your door",
            background: "Images/Hintergruende/an_der_Haustuer.png"
        },
        wayToSchool: {
            name: "walk to school with penguin",
            background: "Images/Hintergruende/schulweg.png"
        },
        schoolyard: {
            name: "penguin on schoolyard",
            background: "Images/Hintergruende/auf_dem_schulhof.png"
        },
        giveSandwich: {
            name: "you look in the night sky",
            background: "Images/Hintergruende/pinguin_sandwich.png"
        },
        nightSky: {
            name: "you look in the night sky",
            background: "Images/Hintergruende/nachthimmel.png"
        },
        lafOffice: {
            name: "at the lost and found office",
            background: "Images/Hintergruende/im_fundbuero.png"
        },
        badEnding: {
            name: "the penguin is captured",
            background: "Images/Hintergruende/pinguin_im_kaefig.png"
        },
        atThePark: {
            name: "you and the penguin at the park",
            background: "Images/Hintergruende/im_park.png"
        },
        atTheHarbor: {
            name: "you and the penguin at the harbor",
            background: "Images/Hintergruende/am_hafen.png"
        },
        packSuitcase: {
            name: "get ready for adventure",
            background: "Images/Hintergruende/koffer_packen.png"
        },
        atSee: {
            name: "you and the penguin on your way to the South Pole",
            background: "Images/Hintergruende/meer.png"
        },
        bigWave: {
            name: "big Wave",
            background: "Images/Hintergruende/große_welle.png"
        },
        atSouthPole: {
            name: "SouthPole",
            background: "Images/Hintergruende/am_suedpol.png"
        },
        happyEnd: {
            name: "Happy End",
            background: "Images/Hintergruende/happy_end.png"
        },
        bgBrown: {
            name: "brown background",
            background: "Images/Hintergruende/bg_allgemein.png"
        },
        bgBlue: {
            name: "blue background",
            background: "Images/Hintergruende/bg_rueckkehr_pinguin.png"
        }
    };
    SarahsNovel.characters = {
        narrator: {
            name: "Erzähler"
        },
        protagonist: {
            name: "Protagonist"
        },
        grandmother: {
            name: "Oma"
        },
        child: {
            name: "Kind",
            origin: SarahsNovel.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                reading: "Images/Charaktere/Kind/kind_liest_buch.png",
                idea: "Images/Charaktere/Kind/kind_idee.png"
            }
        },
        penguin: {
            name: "",
            origin: SarahsNovel.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                front: "Images/Charaktere/Pinguin/pinguin.png",
                side: "Images/Charaktere/Pinguin/pinguin_seitlich.png",
                sad: "Images/Charaktere/Pinguin/pinguin_traurig.png",
                happy: "Images/Charaktere/Pinguin/ruerckkehr_pinguin.png"
            }
        },
        Karl: {
            name: "Karl"
        },
        bigstar: {
            name: "big star",
            origin: SarahsNovel.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                shining: "Images/Charaktere/Sonstige/big_star.png"
            }
        },
        littlestar: {
            name: "little star",
            origin: SarahsNovel.ƒS.ORIGIN.CENTER,
            pose: {
                shining: "Images/Charaktere/Sonstige/little_star.png"
            }
        },
        speechBubble_wow: {
            name: "Speech Bubble WOW",
            origin: SarahsNovel.ƒS.ORIGIN.CENTER,
            pose: {
                shining: "Images/Charaktere/Sonstige/sprechblase_wow.png"
            }
        },
        speechBubble_sueß: {
            name: "Speech Bubble süß",
            origin: SarahsNovel.ƒS.ORIGIN.CENTER,
            pose: {
                shining: "Images/Charaktere/Sonstige/sprechblase_wie_suess.png"
            }
        }
    };
    //Data that will be saved in game progress
    SarahsNovel.dataForSave = {
        nameProtagonist: "",
        affectionScore: 0
    };
    SarahsNovel.items = {
        firstItem: {
            name: "Regenschirm ",
            description: "für stürmische Zeiten ",
            image: "Images/Equipment/schirm.png",
            static: false //wenn true dann kann das Item verwendet werden
        },
        secondItem: {
            name: "Taschenlampe ",
            description: "bringt Licht ins Dunkle ",
            image: "Images/Equipment/taschenlampe.png",
            static: false
        },
        thirdItem: {
            name: "Schaal ",
            description: "hält schön warm ",
            image: "Images/Equipment/schaal.png",
            static: false
        }
    };
    function bigStarShining() {
        return {
            start: { translation: SarahsNovel.ƒS.positionPercent(45, 60), color: SarahsNovel.ƒS.Color.CSS("", 1) },
            end: { translation: SarahsNovel.ƒS.positionPercent(45, 60), color: SarahsNovel.ƒS.Color.CSS("", 0) },
            duration: 3,
            playmode: SarahsNovel.ƒS.ANIMATION_PLAYMODE.REVERSELOOP
        };
    }
    SarahsNovel.bigStarShining = bigStarShining;
    function littleStarShining() {
        return {
            start: { translation: SarahsNovel.ƒS.positionPercent(66, 40), color: SarahsNovel.ƒS.Color.CSS("", 1) },
            end: { translation: SarahsNovel.ƒS.positionPercent(66, 40), color: SarahsNovel.ƒS.Color.CSS("", 0) },
            duration: 2.5,
            playmode: SarahsNovel.ƒS.ANIMATION_PLAYMODE.REVERSELOOP
        };
    }
    SarahsNovel.littleStarShining = littleStarShining;
    function moveBackAnimation() {
        return {
            start: { translation: SarahsNovel.ƒS.positionPercent(50, 74) },
            end: { translation: SarahsNovel.ƒS.positionPercent(49, 74) },
            duration: 2,
            playmode: SarahsNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    SarahsNovel.moveBackAnimation = moveBackAnimation;
    function credits() {
        SarahsNovel.ƒS.Text.print("Hier könnten Ihre Credits stehen");
    }
    SarahsNovel.credits = credits;
    async function hdlMenuBtn(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuBtn.save:
                await SarahsNovel.ƒS.Progress.save();
                break;
            case inGameMenuBtn.load:
                await SarahsNovel.ƒS.Progress.load();
                break;
            case inGameMenuBtn.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuBtn.credits:
                credits();
        }
    }
    // Menu Shortcuts
    document.addEventListener("keydown", hdlKeyPress);
    async function hdlKeyPress(_event) {
        switch (_event.code) {
            case SarahsNovel.ƒ.KEYBOARD_CODE.S:
                console.log("Save Scene");
                await SarahsNovel.ƒS.Progress.save();
                break;
            case SarahsNovel.ƒ.KEYBOARD_CODE.L:
                console.log("Load Scene");
                await SarahsNovel.ƒS.Progress.load();
                break;
            case SarahsNovel.ƒ.KEYBOARD_CODE.C:
                console.log("Show Credits");
                await credits();
                break;
            case SarahsNovel.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Menu is closed");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Menu is open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = SarahsNovel.ƒS.Menu.create(inGameMenuBtn, hdlMenuBtn, "gameMenuCSS");
        hdlMenuBtn("Close");
        //****Szenen Hirarchie
        let scenes = [
            // { id: "s00", scene: Scene00, name: "Vorwort", next: "s01" },
            { id: "s01", scene: SarahsNovel.Scene01, name: "In deinem Kinderzimmer", next: "s02" },
            { id: "s02", scene: SarahsNovel.Scene02, name: "Oma überreicht dir deine Brotbox", next: "s03" },
            { id: "s03", scene: SarahsNovel.Scene03, name: "An der Haustür", next: "s04" },
            { id: "s04", scene: SarahsNovel.Scene04, name: "Schulweg", next: "s05" },
            { id: "s05", scene: SarahsNovel.Scene05, name: "Auf dem Schulhof", next: "s06" },
            { id: "s06", scene: SarahsNovel.Scene06, name: "Der traurige Pinguin", next: "s07" },
            { id: "s07", scene: SarahsNovel.Scene07, name: "Blick in den Sternenhimmel", next: "s08" },
            { id: "s08", scene: SarahsNovel.Scene08, name: "Im Fundbüro", next: "s09" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        SarahsNovel.dataForSave = SarahsNovel.ƒS.Progress.setData(SarahsNovel.dataForSave, uiElement);
        // start the sequence
        SarahsNovel.ƒS.Progress.go(scenes);
    }
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene00() {
        console.log("FudgeStory Scene00 starting");
        // ƒS.Text.print("Hier könnte ihr name stehen");
        // ƒS.Sound.play(audio.nursery, 0.05, false);
        // ƒS.Speech.hide();
        // await ƒS.Location.show(locations.bgBrown);
        // await ƒS.update(transitions.crossingGeneral.duration, transitions.crossingGeneral.alpha, transitions.crossingGeneral.edge);
        // await ƒS.update();
    }
    SarahsNovel.Scene00 = Scene00;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene01() {
        console.log("FudgeStory Template Sarah starting");
        // ƒS.Sound.play(audio.nursery, 0.05, false);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true); // false die meta wird angezeigt, true sie wird nicht angezeigt.
        SarahsNovel.ƒS.Sound.play(SarahsNovel.audio.nursery, 0.07, false);
        let text = {
            Erzähler: {
                text01: "Ein neuer Tag hat begonnen. Die Sonne ist gerade aufgegangen und draußen zwitschern die Vögel eifrig um die Wette.",
                text02: "Noch etwas verschlafen gähnst du erstmal ins Leere und reibst dir den Schlafsand aus den Augen.",
                text03: "Kräftig streckst du alle Glieder von dir, kriechst aus deinem Bett und richtest dir deine Schulsachen für den heutigen Tag.",
                text04: "Anschließend machst du dich im Badezimmer fertig.",
                text05: "Danach gehst du runter zu deiner Oma..."
            }
        };
        SarahsNovel.ƒS.Speech.hide();
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.yourRoom);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.beginning.duration, SarahsNovel.transitions.beginning.alpha, SarahsNovel.transitions.beginning.edge);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text04);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text05);
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Speech.hide();
        SarahsNovel.ƒS.Sound.fade(SarahsNovel.audio.nursery, 0, 1, true); //Audio faded out to null
        await SarahsNovel.ƒS.update();
    }
    SarahsNovel.Scene01 = Scene01;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene02() {
        console.log("Scene02 Oma überreicht Brotbox starting");
        SarahsNovel.ƒS.Sound.play(SarahsNovel.audio.atHome, 0.07, false);
        let text = {
            Erzähler: {
                text01: "Deine Oma küsst dich, wie jeden Morgen, liebevoll auf die Stirn.",
                text02: "Sie überreicht dir deine Brotbox, in der sich ein ganz besonders und mit viel Liebe zubereitetes Sandwich befindet.",
                text03: "Du nimmst sie entgegen und mit einem kurzen <i>„Hab dich lieb, Oma“</i> drehst du dich um und öffnest die Haustür."
            },
            oma: {
                text01: "Guten Morgen, mein Schatz. Hier ist deine Brotbox. Ich wünsche dir viel Spaß in der Schule."
            }
        };
        SarahsNovel.ƒS.Speech.hide();
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.getLunchbox);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.crossingGeneral.duration, SarahsNovel.transitions.crossingGeneral.alpha, SarahsNovel.transitions.crossingGeneral.edge);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.grandmother, text.oma.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Speech.hide();
        SarahsNovel.ƒS.Sound.fade(SarahsNovel.audio.atHome, 0, 1, true); //Audio faded out to null
    }
    SarahsNovel.Scene02 = Scene02;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene03() {
        console.log("FudgeStory Scene03 starting");
        SarahsNovel.ƒS.Sound.play(SarahsNovel.audio.nursery, 0.07, false);
        let text = {
            Erzähler: {
                text01: "Doch nanu, wer steht da vor der Tür...? Verdutzt bleibst du stehen.",
                text02: "Da steht doch tatsächlich ein Pinguin vor deiner Tür! Ungläubig reibst du dir die Augen.",
                text03: "<i>„Das kann doch nicht sein“</i>, denkst du dir. Doch als du die Augen wieder öffnest, blinzeln dir unmittelbar seine kleinen braunen Knopfaugen entgegen.",
                text04: "So einen Pinguin hast du noch nie gesehen. Er sieht sehr flauschig aus.",
                text05: "Sein Schnabel ist karottenfarben, er hat ein rundes Bäuchlein und ein kleines spitzes Schwänzchen.",
                text06: "<i>„Was soll ich mit ihm machen?“</i> fragst du dich."
            }
        };
        SarahsNovel.ƒS.Speech.hide();
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.meetThePenguin);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.crossingGeneral.duration, SarahsNovel.transitions.crossingGeneral.alpha, SarahsNovel.transitions.crossingGeneral.edge);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.penguin, SarahsNovel.characters.penguin.pose.side, SarahsNovel.ƒS.positionPercent(50, 74));
        await SarahsNovel.ƒS.update(2);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = false); // false die meta wird angezeigt, true sie wird nicht angezeigt.
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text04);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text05);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text06);
        let options = {
            touch: "Anfassen",
            scareAway: "Verscheuchen",
            ignore: "Ignorieren"
        };
        let dialogueElement = await SarahsNovel.ƒS.Menu.getInput(options, "choices");
        switch (dialogueElement) {
            case options.touch:
                // continue path here
                console.log("Anfassen");
                await SarahsNovel.ƒS.Character.animate(SarahsNovel.characters.penguin, SarahsNovel.characters.penguin.pose.side, SarahsNovel.moveBackAnimation());
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, "Du versuchst ihn anzufassen aber der Pinguin weicht skeptisch zurück.");
                break;
            case options.scareAway:
                // continue path here
                console.log("Verscheuchen");
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, "Du versuchst den Pinguin zu verscheuchen <b><i>„Kusch...Kusch!“</i></b> Doch der Pinguin weicht nicht von der Stelle.");
                break;
            case options.ignore:
                // continue path here
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, "Du beschließt den Pinguin zu ignorieren. Du schiebst dich an ihm vorbei und machst dich auf den Weg zur Schule.");
                break;
        }
        SarahsNovel.ƒS.Sound.fade(SarahsNovel.audio.nursery, 0, 1, true);
        SarahsNovel.ƒS.Character.hide(SarahsNovel.characters.penguin);
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Speech.hide();
    }
    SarahsNovel.Scene03 = Scene03;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene04() {
        console.log("FudgeStory Scene04 starting");
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);
        SarahsNovel.ƒS.Sound.play(SarahsNovel.audio.cityTraffic, 0.07, false);
        SarahsNovel.ƒS.Speech.hide();
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.wayToSchool);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.crossingGeneral.duration, SarahsNovel.transitions.crossingGeneral.alpha, SarahsNovel.transitions.crossingGeneral.edge);
        let text = {
            Erzähler: {
                text01: "Du läufst los und als ein bisschen Abstand zwischen euch ist, setzt sich der Pinguin ebenfalls in Bewegung und tapst dir hinterher.",
                text02: "Immer wieder bleibst du stehen und erklärst ihm, dass du jetzt zur Schule musst.",
                text03: "Doch der Pinguin folgt dir hartnäckig. Taps... Taps... Taps... Taps..."
            }
        };
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Speech.hide();
        SarahsNovel.ƒS.Sound.fade(SarahsNovel.audio.cityTraffic, 0, 1, true); //Audio faded out to null
    }
    SarahsNovel.Scene04 = Scene04;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene05() {
        console.log("FudgeStory Scene05 starting");
        SarahsNovel.ƒS.Sound.play(SarahsNovel.audio.playground, 0.07, false);
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.schoolyard);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.crossingGeneral.duration, SarahsNovel.transitions.crossingGeneral.alpha, SarahsNovel.transitions.crossingGeneral.edge);
        let text = {
            Erzähler: {
                text01: "Auf dem Schulhof haben sich deine Freunde und Mitschüler um den Pinguin versammelt.",
                text02: "Begeistert mustern sie ihn. So nahe waren sie einem <i>echten</i> Pinguin noch nie.",
                text03: "Du überlegst dir, ob er sich vielleicht unwohl fühlen könnte, umringt von den ganzen Kindern.",
                text04: "Doch es scheint so, als würde der Pinguin die Aufmerksamkeit genießen."
            }
        };
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.speechBubble_wow, SarahsNovel.characters.speechBubble_wow.pose.shining, SarahsNovel.ƒS.positionPercent(50, 44));
        await SarahsNovel.ƒS.update(2);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text04);
        SarahsNovel.ƒS.Character.hide(SarahsNovel.characters.speechBubble_wow);
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Speech.hide();
        SarahsNovel.ƒS.Sound.fade(SarahsNovel.audio.playground, 0, 1, true); //Audio faded out to null
    }
    SarahsNovel.Scene05 = Scene05;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene06() {
        console.log("FudgeStory Scene06 starting");
        SarahsNovel.ƒS.Sound.play(SarahsNovel.audio.cityTraffic, 0.07, true);
        SarahsNovel.ƒS.Speech.hide();
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.giveSandwich);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.crossingGeneral.duration, SarahsNovel.transitions.crossingGeneral.alpha, SarahsNovel.transitions.crossingGeneral.edge);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = false);
        let text = {
            Erzähler: {
                text01: "Auch auf dem Weg nach Hause, folgt dir der Pinguin beharrlich, wie ein kleiner Schatten, auf Schritt und Tritt.",
                text02: "Kurz bevor du wieder zu Hause angekommen bist, bleibst du stehen.",
                text03: "Der Pinguin stoppt ebenfalls...",
                text04: "Plötzlich fällt dir auf, dass er irgedwie müde und auch traurig aussieht.",
                text05: "<i>„Vielleicht hat er hunger?“</i> überlegst du.",
                text06: "Du hast noch etwas von deinem Sandwich übrig, das du ihm anbieten könntest.",
                text07: "Dann fällt es dir wie Schuppen von den Augen. <i>„Na klar! Er muss sich wohl verirrt haben und jetzt findet er nicht mehr nach Hause.“</i>",
                text08: "<i><b>„Wie heißt du?“ „Hast du dich verlaufen?“</i></b> fragst du ihn.",
                text09: "Doch der Pinguin antwortet nicht.",
                text10: "Du überlegst...<i>„Hmm…“</i>",
                text11: "<i><b>„Weißt du was, ich werde dir helfen wieder nach Hause zu finden!“ „Und ich nennen dich…“</i></b>",
                text12: "Doch",
                text13: "antwortet nicht."
            }
        };
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text04);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text05);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text06);
        let options = {
            giveSandwich: "Sandwich geben",
            keepSandwich: "Sandwich behalten"
        };
        let dialogueElement = await SarahsNovel.ƒS.Menu.getInput(options, "choices");
        switch (dialogueElement) {
            case options.giveSandwich:
                // continue path here
                console.log("Sandwich geben");
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, "Du kramst deine Brotbox hervor und streckst dem Pinguin das Sandwich hin.");
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, "Der Pinguin nimmt es dankbar entgegen und schlingt es gierig hinunter.");
                SarahsNovel.dataForSave.affectionScore += 10;
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, "Doch er sieht immer noch traurig aus.");
                break;
            case options.keepSandwich:
                // continue path here
                console.log("Sandwich behalten");
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, "Du beschließt dein Sandwich nicht zu teilen.");
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, "Du weißt ja auch gar nicht, ob Pinguine überhaupt Sandwichs essen.");
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, "Doch... <i>warum sieht er so traurig aus?</i> fragst du dich.");
                break;
        }
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text07);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text08);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text09);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text10);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text11);
        SarahsNovel.dataForSave.nameProtagonist = await SarahsNovel.ƒS.Speech.getInput();
        SarahsNovel.characters.protagonist.name = SarahsNovel.dataForSave.nameProtagonist;
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, "Doch " + SarahsNovel.characters.protagonist.name + " antwortet nicht...");
        SarahsNovel.ƒS.Sound.fade(SarahsNovel.audio.cityTraffic, 0, 1, true);
    }
    SarahsNovel.Scene06 = Scene06;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene07() {
        console.log("FudgeStory Scene07 starting");
        SarahsNovel.ƒS.Sound.play(SarahsNovel.audio.moonSong, 0.07, true);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);
        SarahsNovel.ƒS.Speech.hide();
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.nightSky);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.crossingGeneral.duration, SarahsNovel.transitions.crossingGeneral.alpha, SarahsNovel.transitions.crossingGeneral.edge);
        let text = {
            Erzähler: {
                text01: "Deine Oma war zwar sehr überrascht, dass du einen Pinguin mit nach Hause gebracht hast. Aber sie hat ihm sofort angesehen, dass ihn etwas bedrückt.",
                text02: "Also war sie einverstanden, dass du ihm hilfst wieder nach Hause zu finden.",
                text03: "Nachdem ihr zu Abend gegessen habt, richtest du dem Pinguin ein kleines Bettchen...",
                text04: "und kuschelst dich danach in dein eigenes.",
                text05: "Die ganze Nacht grübelst du, wie du dem Pinguin helfen kannst. Aber dir will nichts einfallen.",
                text06: "Du weißt ja nicht einmal, wo sein zu Hause ist..."
            }
        };
        await SarahsNovel.ƒS.Character.animate(SarahsNovel.characters.bigstar, SarahsNovel.characters.bigstar.pose.shining, SarahsNovel.bigStarShining());
        // await ƒS.update();
        await SarahsNovel.ƒS.Character.animate(SarahsNovel.characters.littlestar, SarahsNovel.characters.littlestar.pose.shining, SarahsNovel.littleStarShining());
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text04);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text05);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text06);
        await SarahsNovel.ƒS.update();
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Character.hide(SarahsNovel.characters.bigstar);
        SarahsNovel.ƒS.Character.hide(SarahsNovel.characters.littlestar);
        SarahsNovel.ƒS.Speech.hide();
        SarahsNovel.ƒS.Sound.fade(SarahsNovel.audio.moonSong, 0, 1, true);
    }
    SarahsNovel.Scene07 = Scene07;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene08() {
        console.log("FudgeStory Scene08 starting");
        SarahsNovel.ƒS.Speech.hide();
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.lafOffice);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.beginning.duration, SarahsNovel.transitions.beginning.alpha, SarahsNovel.transitions.beginning.edge);
    }
    SarahsNovel.Scene08 = Scene08;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene_1() {
        console.log("FudgeStory Template Sarah starting");
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true); // false die meta wird angezeigt, true sie wird nicht angezeigt.
        let text = {
            Erzähler: {
                text01: "Doch nanu! Wer steht dort vor der Tür? Verdutzt bleibst du stehen.",
                text02: "Hallo",
                text03: "Hoi"
            }
        };
        await SarahsNovel.ƒS.Sound.fade(SarahsNovel.audio.nursery, 0.07, 0.1, false);
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.yourRoom);
        await SarahsNovel.ƒS.update(1);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01 + SarahsNovel.dataForSave.nameProtagonist);
        // ƒS.Speech.setTickerDelays(70, 0);
        // let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]);
        SarahsNovel.ƒS.Speech.hide();
        await SarahsNovel.ƒS.Sound.play(SarahsNovel.audio.shipHorn, 1);
        // await ƒS.Character.show(characters.kind, characters.kind.pose.happy, ƒS.positionPercent(50, 74));
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.crossingGeneral.duration, SarahsNovel.transitions.crossingGeneral.alpha, SarahsNovel.transitions.crossingGeneral.edge);
        await SarahsNovel.ƒS.update(1);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01 + SarahsNovel.dataForSave.nameProtagonist);
        // await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positions.right);
        // await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positionPercent(70, 100));
        await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.child, SarahsNovel.characters.child.pose.idea, SarahsNovel.ƒS.positionPercent(70, 100));
        // signalDelay();
        //******INVENTAR******** */
        // ƒS.Inventory.add(items.firstItem);
        // for (let i: number = 0; i < 5; i++) {
        //   ƒS.Inventory.add(items.firstItem);
        // }
        SarahsNovel.dataForSave.nameProtagonist = await SarahsNovel.ƒS.Speech.getInput();
        SarahsNovel.characters.protagonist.name = SarahsNovel.dataForSave.nameProtagonist;
        // await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positions.bottomcenter);
        await SarahsNovel.ƒS.update(1); // Die Zahl in der Klammer zeigt an, wie schnell (in sek.) der Character erscheint 
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Speech.hide();
        let dialogue = {
            isayYes: "Yes",
            isaydNo: "No",
            isayBla: "Bla",
            isayOK: "Ok"
        };
        let dialogueElement = await SarahsNovel.ƒS.Menu.getInput(dialogue, "choices"); // Die choicesCSSClass wird in der CSS Datei dann angelegt und gestyled
        //     //*******WHILE SCHLEIFE */
        //     let loopCount: number = 0;
        //     while (loopCount < 3) {
        //       let dialogueElement = await ƒS.Menu.getInput(dialogue, "choicesCSSClass"); // Die choicesCSSClass wird in der CSS Datei dann angelegt und gestyled
        //       if (dialogueElement === dialogue["isayYes"]) {
        //         ƒS.Text.print("Hier könnten Ihre Credits stehen");
        //         console.log("Erster Wahl JA");
        //         delete dialogue.isayYes;
        //       }
        //       if (dialogueElement === dialogue["isaydNo"]) {
        //         console.log("Zweite Wahl Nein");
        //         delete dialogue.isaydNo;
        //       }
        //       loopCount++;
        //     }
        // //*****While SChleife zu Ende */
        switch (dialogueElement) {
            case dialogue.isayYes:
                // continue path here
                console.log("iSay Yes");
                await SarahsNovel.ƒS.Character.animate(SarahsNovel.characters.child, SarahsNovel.characters.child.pose.idea, SarahsNovel.moveBackAnimation());
                break;
            case dialogue.isaydNo:
                // continue path here
                console.log("iSay No");
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.child, "Dein Name ist also" + SarahsNovel.characters.protagonist.name);
                break;
            case dialogue.isayBla:
                // continue path here
                console.log("iSay Bla");
                SarahsNovel.dataForSave.affectionScore += 10;
                break;
            case dialogue.isayOK:
                // continue path here
                console.log("iSay OK");
                SarahsNovel.ƒS.Text.print("Du hast OK gedrückt");
                break;
        }
        if (SarahsNovel.dataForSave.affectionScore == 10) {
            await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.getLunchbox);
        }
        console.log(SarahsNovel.dataForSave.affectionScore);
    }
    SarahsNovel.Scene_1 = Scene_1;
    //ADD ITEMS
    // ƒS.Inventory.add(items.firstItem);
    // ƒS.Inventory.add(items.secondItem);
    // ƒS.Inventory.add(items.thirdItem);
    // // for (let i: number = 0; i < 5; i++) {
    // //     ƒS.Inventory.add(items.firstItem);
    // // }
    // await ƒS.Inventory.open();
})(SarahsNovel || (SarahsNovel = {}));
//# sourceMappingURL=SarahsNovel.js.map