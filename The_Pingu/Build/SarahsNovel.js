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
            duration: 2,
            alpha: "Transitions/Others/023.png",
            edge: 2
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
        },
        wave: {
            duration: 4,
            alpha: "Transitions/WipesAndOther/25.png",
            edge: 1
        },
        wet: {
            duration: 4,
            alpha: "Transitions/Others/wet.jpg",
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
        pidgeonsPark: "Audio/pidgeons_cooing_city_park.mp3",
        shipAtHarbor: "Audio/boat_at_harbor.mp3",
        atSea: "Audio/waves.mp3",
        stormyWeather: "Audio/rain_and_thunder.mp3",
        articWind: "Audio/wind_artic_cold.mp3",
        //SFX
        shipHorn: "Audio/ship_horn.mp3"
    };
    SarahsNovel.locations = {
        yourRoom: {
            name: "in your nursery",
            background: "Images/Background/nursery.png"
        },
        getLunchbox: {
            name: "get your lunchbox from your Grandmother",
            background: "Images/Background/grandmotherAndchild.png"
        },
        meetThePenguin: {
            name: "you meet the penguin in front of your door",
            background: "Images/Background/frontdoor.png"
        },
        wayToSchool: {
            name: "walk to school with penguin",
            background: "Images/Background/wayToSchool.png"
        },
        schoolyard: {
            name: "penguin on schoolyard",
            background: "Images/Background/schoolyard.png"
        },
        giveSandwich: {
            name: "you look in the night sky",
            background: "Images/Background/penguinSad.png"
        },
        nightSky: {
            name: "you look in the night sky",
            background: "Images/Background/nightSky.png"
        },
        lafOffice: {
            name: "at the lost and found office",
            background: "Images/Background/lafOffice.png"
        },
        badEnding: {
            name: "the penguin is captured",
            background: "Images/Background/penguinInCage.png"
        },
        atThePark: {
            name: "you and the penguin at the park",
            background: "Images/Background/park.png"
        },
        atTheHarbor: {
            name: "you and the penguin at the harbor",
            background: "Images/Background/harbor.png"
        },
        packSuitcase: {
            name: "get ready for adventure",
            background: "Images/Background/packSuitcase.png"
        },
        atSee: {
            name: "you and the penguin on your way to the South Pole",
            background: "Images/Background/ocean.png"
        },
        bigWave: {
            name: "big Wave",
            background: "Images/Background/bigWave.png"
        },
        atSouthPole: {
            name: "SouthPole",
            background: "Images/Background/southPole.png"
        },
        happyEnd: {
            name: "Happy End",
            background: "Images/Background/childAndPenguin.png"
        },
        bgBrown: {
            name: "brown background",
            background: "Images/Background/bgBrown.png"
        },
        bgBlue: {
            name: "blue background",
            background: "Images/Background/bgBlue.png"
        }
    };
    SarahsNovel.characters = {
        narrator: {
            name: "Erzähler"
        },
        // protagonist: {
        //   name: "Protagonist"
        // },
        grandmother: {
            name: "Oma"
        },
        child: {
            name: "Kind",
            origin: SarahsNovel.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                reading: "Images/Characters/Child/childBookReading.png",
                idea: "Images/Characters/Child/childIdea.png",
                talking: "Images/Characters/Child/childTalking.png",
                sad: "Images/Characters/Child/childSad.png"
            }
        },
        penguin: {
            name: "",
            origin: SarahsNovel.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                front: "Images/Characters/Penguin/penguin.png",
                side: "Images/Characters/Penguin/penguinAtTheSide.png",
                sad: "Images/Characters/Penguin/penguinSad.png",
                happy: "Images/Characters/Penguin/penguinUmbrella.png"
            }
        },
        karl: {
            name: "Karl"
        },
        bigstar: {
            name: "big star",
            origin: SarahsNovel.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                shining: "Images/Characters/Others/bigStar.png"
            }
        },
        littlestar: {
            name: "little star",
            origin: SarahsNovel.ƒS.ORIGIN.CENTER,
            pose: {
                shining: "Images/Characters/Others/littleStar.png"
            }
        },
        speechBubble_wow: {
            name: "Speech Bubble WOW",
            origin: SarahsNovel.ƒS.ORIGIN.CENTER,
            pose: {
                shining: "Images/Characters/Others/speechBubbleWow.png"
            }
        },
        speechBubbleSweet: {
            name: "Speech Bubble süß",
            origin: SarahsNovel.ƒS.ORIGIN.CENTER,
            pose: {
                shining: "Images/Characters/Others/speechBubbleSweet.png"
            }
        },
        littledove: {
            name: "littel dove",
            origin: SarahsNovel.ƒS.ORIGIN.CENTER,
            pose: {
                normal: "Images/Characters/Others/littleDove.png"
            }
        },
        bigdove: {
            name: "Taube",
            origin: SarahsNovel.ƒS.ORIGIN.CENTER,
            pose: {
                injured: "Images/Characters/Others/doveInjured.png"
            }
        },
        doveWithPevement: {
            name: "",
            origin: SarahsNovel.ƒS.ORIGIN.CENTER,
            pose: {
                withPavement: "Images/Characters/Others/doveWithPavement.png"
            }
        },
        iceFloe: {
            name: "ice floe",
            origin: SarahsNovel.ƒS.ORIGIN.CENTER,
            pose: {
                floating: "Images/Characters/Others/iceberg.png"
            }
        }
    };
    //Data that will be saved in game progress  
    SarahsNovel.dataForSave = {
        namePingu: "",
        affectionScore: 0
    };
    SarahsNovel.items = {
        firstItem: {
            name: "Regenschirm ",
            description: "für stürmische Zeiten ",
            image: "Images/Items/umbrella.png",
            static: true //wenn false dann kann das Item verwendet werden
        },
        secondItem: {
            name: "Taschenlampe ",
            description: "bringt Licht ins Dunkle ",
            image: "Images/Items/torch.png",
            static: true
        },
        thirdItem: {
            name: "Schal ",
            description: "hält schön warm ",
            image: "Images/Items/scarf.png",
            static: true
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
    function floatingLeftToRight() {
        return {
            start: { translation: SarahsNovel.ƒS.positions.centerleft, color: SarahsNovel.ƒS.Color.CSS("", 1) },
            end: { translation: SarahsNovel.ƒS.positions.centerright, color: SarahsNovel.ƒS.Color.CSS("", 0) },
            duration: 6,
            playmode: SarahsNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    SarahsNovel.floatingLeftToRight = floatingLeftToRight;
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
            case SarahsNovel.ƒ.KEYBOARD_CODE.I:
                console.log("Inventory");
                await SarahsNovel.ƒS.Inventory.open();
                break;
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
            // { id: "s01", scene: Scene01, name: "Kinderzimmer", next: "s02" },
            // { id: "s02", scene: Scene02, name: "Oma überreicht dir deine Brotbox", next: "s03" },
            { id: "s03", scene: SarahsNovel.Scene03, name: "An der Haustür", next: "s05" },
            // { id: "s04", scene: Scene04, name: "Schulweg", next: "s05" },
            { id: "s05", scene: SarahsNovel.Scene05, name: "Auf dem Schulhof", next: "s06" },
            // { id: "s06", scene: Scene06, name: "Der traurige Pinguin", next: "s07" },
            // { id: "s07", scene: Scene07, name: "Blick in den Sternenhimmel", next: "s08" },
            // { id: "s08", scene: Scene08, name: "Im Fundbüro", next: "s09" },
            // { id: "s09", scene: Scene09, name: "Im Park", next: "s10" },
            // { id: "s10", scene: Scene10, name: "Kind liest Buch", next: "s11" },
            // { id: "s11", scene: Scene11, name: "Koffer packen", next: "s12" },
            // { id: "s12", scene: Scene12, name: "Am Hafen", next: "s13" },
            // { id: "s13", scene: Scene13, name: "Auf See", next: "s14" },
            // { id: "s14", scene: Scene14, name: "Große Welle", next: "s15" },
            // { id: "s15", scene: Scene15, name: "Am Südpol", next: "s16" },
            // { id: "s16", scene: Scene16, name: "Rückkehr", next: "s17" },
            // { id: "s17", scene: Scene17, name: "Happy End", next: "" }
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
        console.log("FudgeStory Scene01 Frontdoor starting");
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
        // await ƒS.update();
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
                // ƒS.update();
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
        // document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = false);
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
        await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.speechBubble_wow, SarahsNovel.characters.speechBubble_wow.pose.shining, SarahsNovel.ƒS.positionPercent(43, 20));
        await SarahsNovel.ƒS.update(2);
        await SarahsNovel.ƒS.Character.hide(SarahsNovel.characters.speechBubble_wow),
            await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.speechBubbleSweet, SarahsNovel.characters.speechBubbleSweet.pose.shining, SarahsNovel.ƒS.positionPercent(75, 20));
        await SarahsNovel.ƒS.update(2);
        await SarahsNovel.ƒS.Character.hide(SarahsNovel.characters.speechBubbleSweet),
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
                text08: "<i><b>„Wie heißt du? Hast du dich verlaufen?“</i></b> fragst du ihn.",
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
        SarahsNovel.dataForSave.namePingu = await SarahsNovel.ƒS.Speech.getInput();
        SarahsNovel.characters.penguin.name = SarahsNovel.dataForSave.namePingu;
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, "Doch " + SarahsNovel.characters.penguin.name + " antwortet nicht...");
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
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.fadeSky.duration, SarahsNovel.transitions.fadeSky.alpha, SarahsNovel.transitions.fadeSky.edge);
        let text = {
            Erzähler: {
                text01: "Deine Oma war zwar sehr überrascht, dass du einen Pinguin mit nach Hause gebracht hast. Aber sie hat ihm sofort angesehen, dass ihn etwas bedrückt.",
                text02: "Also war sie einverstanden, dass du ihm hilfst wieder nach Hause zu finden.",
                text03: "Nachdem ihr zu Abend gegessen habt, richtest du dem Pinguin ein kleines Bettchen...",
                text04: "und kuschelst dich danach in dein eigenes.",
                text05: "Die ganze Nacht grübelst du, wie du dem Pinguin helfen kannst. Aber dir will einfach nichts einfallen.",
                text06: "Du weißt ja nicht einmal, wo sein zu Hause ist..."
            }
        };
        await SarahsNovel.ƒS.Character.animate(SarahsNovel.characters.bigstar, SarahsNovel.characters.bigstar.pose.shining, SarahsNovel.bigStarShining());
        // await ƒS.update();
        await SarahsNovel.ƒS.Character.animate(SarahsNovel.characters.littlestar, SarahsNovel.characters.littlestar.pose.shining, SarahsNovel.littleStarShining());
        await SarahsNovel.ƒS.update(1);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text04);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text05);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text06);
        await SarahsNovel.ƒS.update(1);
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Character.hide(SarahsNovel.characters.bigstar);
        SarahsNovel.ƒS.Character.hide(SarahsNovel.characters.littlestar);
        SarahsNovel.ƒS.Speech.hide();
        SarahsNovel.ƒS.Sound.fade(SarahsNovel.audio.moonSong, 0, 1, true);
        await SarahsNovel.ƒS.update(1);
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
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = false);
        let text = {
            Erzähler: {
                text01: "Am nächsten Morgen beschließt du in einem Fundbüro nachzufragen, ob vielleicht jemand einen Pinguin vermisst.",
                text02: "Du erklärst Karl, dass er sich verirrt hat und du ihm versprochen hast, sein zu Hause zu finden, du aber nicht weißt, wo das ist.",
                text03: "Nach langem Überlegen stimmst du zu " + SarahsNovel.characters.penguin.name + " in den Zoo zu geben.",
                text04: "Karl geht nach hinten und kommt mit einem großen Käfig wieder.",
                text05: "Er packt den Pinguin und hebt ihn hoch.",
                text06: SarahsNovel.characters.penguin.name + " strampelt mit den Füßchen und versucht verzweifelt sich aus seinem Griff zu befreien.",
                text07: "Doch Karl ist viel stärker und mit einem kräftigen Ruck zwängt er" + SarahsNovel.characters.penguin.name + " schließlich in den Käfig",
                text08: "Große Tränen kullern über das Gesicht des Pinguins.",
                text09: "Trotz deines mulmigen Gefühls, sagst du dir, dass es das Richtige ist.",
                text10: "<i>„Solche Tiere gehören nun mal in den Zoo.“"
            },
            Karl: {
                text01: "„Einen Pinguin? Mein liebes Kind, keiner vermisst einen Pinguin.“",
                text02: "„Nun, vermutlich gehört er in irgendeinen Zoo.“ „Ich denke, dort ist er am besten aufgehoben.“",
                text03: "„Soll ich ihn für dich in einen Zoo bringen?“"
            }
        };
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.karl, text.Karl.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.karl, text.Karl.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.karl, text.Karl.text03);
        let options = {
            yes: "Ja",
            no: "Nein"
        };
        let dialogueElement = await SarahsNovel.ƒS.Menu.getInput(options, "choices");
        switch (dialogueElement) {
            case options.yes:
                console.log("in den Zoo geben");
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text04);
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text05);
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text06);
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text07);
                await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.badEnding);
                await SarahsNovel.ƒS.update(SarahsNovel.transitions.swirl.duration, SarahsNovel.transitions.swirl.alpha, SarahsNovel.transitions.swirl.edge);
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text08);
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text09);
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text10);
                SarahsNovel.ƒS.Text.print("Bad Ending! Probier es gerne nochmal von neuem.");
                break;
            case options.no:
                console.log("Nicht in den Zoo geben");
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, "Ohne zu zögern lehnst du ab.");
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, "Dir ist klar, dass " + SarahsNovel.characters.penguin.name + "´s zu Hause auf garkeinen Fall ein Zoo sein kann.");
                SarahsNovel.dataForSave.affectionScore += 10;
                break;
        }
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Speech.hide();
    }
    SarahsNovel.Scene08 = Scene08;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene09() {
        SarahsNovel.ƒS.Sound.play(SarahsNovel.audio.pidgeonsPark, 0.7, true);
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.atThePark);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = false);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.crossingGeneral.duration, SarahsNovel.transitions.crossingGeneral.alpha, SarahsNovel.transitions.crossingGeneral.edge);
        let text = {
            Erzähler: {
                text01: "Draußen im Park fragst du ein paar Tauben, die gurrend auf den Bäumen sitzen.",
                text02: "<i><b>„Wisst ihr woher dieser Pinguin kommt?“</i></b> rufst du zu ihnen hoch.",
                text03: "Doch sie ignorieren dich...",
                text04: "Da hüpft plötzlich eine kleine Taube auf " + SarahsNovel.characters.penguin.name + " zu.",
                text05: "Sie scheint verletzt zu sein...",
                text06: "<i><b>„Hallo, kleine Taube. Weißt du, woher dieser Pinguin kommt?“</i></b> fragst du sie.",
                text07: "Überrascht fragst du die Taube <i><b>„Warum hast du denn ein Loch in deinem Flügel?“</i></b>",
                text08: "Ungläubig erwiderst du <i><b>„Aber warum sollte er auf dich schießen, du hast ihm ja nichts getan?“</i></b>",
                text09: "<i><b>„Du armes kleines Geschöpf, das ist ja furchtbar“</i></b> gibst du bedauernd zurück.",
                text10: "Du kramst in deiner Hosentasche und findest ein Pflaster, das du der Taube auf den Flügel klebst.",
                text11: "<i><b>„Tut mir leid, aber ich habe gerade andere Sorgen“</i></b> erklärst du der Taube.",
                text12: "Langsam wird es dunkel und du und " + SarahsNovel.characters.penguin.name + " macht euch auf den Weg nach Hause."
            },
            Taube: {
                text01: "„Nein, das weiß ich leider nicht. Aber kannst du mir bitte helfen?",
                text02: "„In meinem Flügel ist ein Loch und jetzt kann ich nicht mehr fliegen“",
                text03: "„Ein Mann hat mit einem Luftgewehr auf mich geschossen, als ich auf seinem Hof nach Essen gesucht habe.“",
                text04: "„Das war vor drei Tagen und seitdem habe ich große Schmerzen.“",
                text05: "„Die Menschen denken, dass wir Krankheiten verbreiten und sie verjagen uns, wegen unseren Hinterlassenschaften.“",
                text06: "„Weil wir in der Natur kaum mehr natürliches Futter finden, suchen wir uns das Essen eben von den Menschen zusammen.“",
                text07: "„Aber, weil das Brot oder die Pommes der Menschen uns nicht guttun, bekommen wir davon Bauchweh und unsere Hinterlassenschaften sehen dann unschön aus.“",
                text08: "„Kannst du mir nun helfen oder nicht?“"
            }
        };
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
        await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.littledove, SarahsNovel.characters.littledove.pose.normal, SarahsNovel.ƒS.positionPercent(24, 78));
        SarahsNovel.ƒS.update(2);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text04);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text05);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text06);
        SarahsNovel.ƒS.Character.hide(SarahsNovel.characters.littledove);
        await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.bigdove, SarahsNovel.characters.bigdove.pose.injured, SarahsNovel.ƒS.positionPercent(45, 63));
        SarahsNovel.ƒS.update(2);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.bigdove, text.Taube.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.bigdove, text.Taube.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text07);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.bigdove, text.Taube.text03);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.bigdove, text.Taube.text04);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text08);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.bigdove, text.Taube.text05);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.bigdove, text.Taube.text06);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.bigdove, text.Taube.text07);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.bigdove, text.Taube.text08);
        let options = {
            help: "Helfen",
            nohelp: "Nicht helfen"
        };
        let dialogueElement = await SarahsNovel.ƒS.Menu.getInput(options, "choices");
        switch (dialogueElement) {
            case options.help:
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text09);
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text10);
                SarahsNovel.ƒS.Character.hide(SarahsNovel.characters.bigdove);
                await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.doveWithPevement, SarahsNovel.characters.doveWithPevement.pose.withPavement, SarahsNovel.ƒS.positionPercent(45, 63));
                SarahsNovel.ƒS.update(1);
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.bigdove, "„Vielen Dank, das ist sehr nett von dir.“ Ich hoffe du findest das zu Hause deines Pinguins.");
                SarahsNovel.dataForSave.affectionScore += 10;
                break;
            case options.nohelp:
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text11);
                SarahsNovel.dataForSave.affectionScore -= 10;
                break;
        }
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text12);
        SarahsNovel.ƒS.Character.hideAll();
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Speech.hide();
        SarahsNovel.ƒS.Sound.fade(SarahsNovel.audio.pidgeonsPark, 0, 1, true); //Audio faded out to null
    }
    SarahsNovel.Scene09 = Scene09;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene10() {
        // ƒS.Sound.play(audio.cityTraffic, 0.07, true);
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.bgBrown);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.beginning.duration, SarahsNovel.transitions.beginning.alpha, SarahsNovel.transitions.beginning.edge);
        let text = {
            Erzähler: {
                text01: "Als du am nächsten Morgen aufwachst, fällt dein Blick wie zufällig auf dein Bücherregal.",
                text02: "<i>„Natürlich!“</i> denkst du dir. <i>„Dieses Buch, habe ich ganz vergessen.“</i>",
                text03: "<i><b>„Toll, jetzt wissen wir, woher du kommst!“</i></b> rufst du begeistert.",
                text04: "<i><b>„Nur...</i></b>",
                text05: "<i><b>...wie sollen wir an den Südpol kommen???“</i></b> fragst du " + SarahsNovel.characters.penguin.name + ".",
                text06: SarahsNovel.characters.penguin.name + " schaut ratlos zurück.",
                text07: "<i><b>„Ich hab´s, wir fahren mit dem Boot zum Südpol!“</i></b> verkündest du."
            }
        };
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.child, SarahsNovel.characters.child.pose.reading, SarahsNovel.ƒS.positionPercent(81, 80));
        SarahsNovel.ƒS.update(1);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, "Du schlägst es auf und liest...");
        SarahsNovel.ƒS.Text.print("Der Kaiserpinguin ist die größte Art aus der Familie der Pinguine und zählt zusammen mit dem Königspinguin zur Gattung der Großpinguine. <br>Er kann bis zu 20 Jahre alt werden.</br>Sein Lebensraum ist der Südpol.</br>Dort kann es bis zu minus 60 Grad kalt werden.");
        SarahsNovel.ƒS.Character.hide(SarahsNovel.characters.child);
        SarahsNovel.ƒS.update(1);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, "...");
        await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.child, SarahsNovel.characters.child.pose.talking, SarahsNovel.ƒS.positionPercent(71, 70));
        await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.penguin, SarahsNovel.characters.penguin.pose.front, SarahsNovel.ƒS.positionPercent(51, 83));
        SarahsNovel.ƒS.update(1);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text04);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text05);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text06);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text07);
        SarahsNovel.ƒS.Character.hideAll();
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Speech.hide();
        // ƒS.Sound.fade(audio.playground, 0, 1, true); //Audio faded out to null
    }
    SarahsNovel.Scene10 = Scene10;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene11() {
        // ƒS.Sound.play(audio.cityTraffic, 0.07, true);
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.packSuitcase);
        // document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.crossingGeneral.duration, SarahsNovel.transitions.crossingGeneral.alpha, SarahsNovel.transitions.crossingGeneral.edge);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, "<i><b>„Ich hole gleich meinen Koffer, dort können wir alles reintun, was wir für Unterwegs brauchen“</i></b>");
        let options = {
            umbrella: "Regenschirm",
            torch: "Taschenlampe",
            scarf: "Schal"
        };
        let loopCount = 0;
        while (loopCount < 3) {
            let dialogueElement = await SarahsNovel.ƒS.Menu.getInput(options, "CSSequipment"); // Die choicesCSSClass wird in der CSS Datei dann angelegt und gestyled
            if (dialogueElement === options["umbrella"]) {
                SarahsNovel.ƒS.Inventory.add(SarahsNovel.items.firstItem),
                    delete options.umbrella;
            }
            if (dialogueElement === options["torch"]) {
                SarahsNovel.ƒS.Inventory.add(SarahsNovel.items.secondItem),
                    delete options.torch;
            }
            if (dialogueElement === options["scarf"]) {
                SarahsNovel.ƒS.Inventory.add(SarahsNovel.items.thirdItem),
                    delete options.scarf;
            }
            loopCount++;
        }
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, "Du klatschst freudig in die Hände." + " <i><b>„Super, dann kann es ja losgehen.“</i></b>");
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Speech.hide();
        // ƒS.Sound.fade(audio.playground, 0, 1, true); //Audio faded out to null
        // await ƒS.Inventory.open(); 
    }
    SarahsNovel.Scene11 = Scene11;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene12() {
        SarahsNovel.ƒS.Sound.play(SarahsNovel.audio.shipAtHarbor, 0.07, true);
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.atTheHarbor);
        // document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.wave.duration, SarahsNovel.transitions.wave.alpha, SarahsNovel.transitions.wave.edge);
        let text = {
            Erzähler: {
                text01: "Am nächsten Morgen springst du aufgeregt aus dem Bett, schnappst dir den Koffer und zusammen mit " + SarahsNovel.characters.penguin.name + " hastet ihr runter zum Hafen.",
                text02: "Dort steht ein großes imposantes Schiff, welches bereit zur Abfahrt ist.",
                text03: "<i><b>„Halloooo, könnt ihr uns bitte mitnehmen, wir wollen zum Südpol?“</i></b> rufst du so laut du nur kannst nach oben zu dem Schiffsdeck.",
                text04: "Aber deine Rufe sind viel zu leise, als dass sie über das laute Schiffshorn hinweggehört werden würden.",
                text05: "Das Schiff fährt ohne euch ab.",
                text06: "<i><b>„Na gut, dann müssen wir eben mit unserem eigenen Boot zum Südpol rudern“</i></b> beschließt du.",
                text07: "Doch " + SarahsNovel.characters.penguin.name + " scheint nicht begeister von deiner Idee..."
            }
        };
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
        SarahsNovel.ƒS.Sound.play(SarahsNovel.audio.shipHorn, 1.5, false);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text04);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text05);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text06);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text07);
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Speech.hide();
        SarahsNovel.ƒS.Sound.fade(SarahsNovel.audio.shipAtHarbor, 0, 1, true); //Audio faded out to null
        console.log(SarahsNovel.affectionScore);
    }
    SarahsNovel.Scene12 = Scene12;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene13() {
        SarahsNovel.ƒS.Sound.play(SarahsNovel.audio.atSea, 0.1, true);
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.atSee);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.wave.duration, SarahsNovel.transitions.wave.alpha, SarahsNovel.transitions.wave.edge);
        let text = {
            Erzähler: {
                text01: "Und so macht ihr euch in eurem Ruderboot auf den Weg zum Südpol.",
                text02: "Es ist kalt und windig. Und du beginnst ein wenig zu zweifeln, ob das so eine gute Idee war.",
                text03: "Doch dann schaust du zu " + SarahsNovel.characters.penguin.name + ".",
                text04: "Der Pinguin schaut traurig und gedankenversunken ins Wasser.",
                text05: "<i><b>„Keine Sorge ich bin mir sicher wir kommen bald am Südpol an“</i></b> sagst du aufmunternd.",
                text06: "<i><b>„Dann bist du zu Hause und wieder bei deiner Familie.“</i></b>",
                text07: "Der Pinguin verzieht keine Miene. Also beschließt du, ihm eine Geschichte zu erzählen.",
                text08: "Eine Geschichte über mutige Abenteurer und Freundschaft.",
                text09: "Der Pinguin sieht jetzt weniger traurig aus, er hört dir aufmerksam und gespannt zu.",
                text10: "Du weißt nicht genau, was du " + SarahsNovel.characters.penguin.name + " sagen sollst. Also rudert ihr schweigsam weiter, während der Pinguin sehr in sich gekehrt wirkt."
            }
        };
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text04);
        let options = {
            speakTo: "Ansprechen",
            beSilent: "Schweigen"
        };
        let dialogueElement = await SarahsNovel.ƒS.Menu.getInput(options, "choices");
        switch (dialogueElement) {
            case options.speakTo:
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text05);
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text06);
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text07);
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text08);
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text09);
                SarahsNovel.dataForSave.affectionScore += 10;
                break;
            case options.beSilent:
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text10);
                SarahsNovel.dataForSave.affectionScore -= 10;
                break;
        }
        // if (dataForSave.affectionScore === 40) {
        //     alert("Hallooo");
        // }
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Speech.hide();
        SarahsNovel.ƒS.Sound.fade(SarahsNovel.audio.atSea, 0, 1, true); //Audio faded out to null
    }
    SarahsNovel.Scene13 = Scene13;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene14() {
        SarahsNovel.ƒS.Sound.play(SarahsNovel.audio.stormyWeather, 1, true);
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.bigWave);
        // document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.wave.duration, SarahsNovel.transitions.wave.alpha, SarahsNovel.transitions.wave.edge);
        let text = {
            Erzähler: {
                text01: "Ihr kämpft euch durch große Wellen und schlechtes raues Wetter. Immer wieder muss sich der Pinguin am Boot festhalten, um nicht hinaus zu fallen.",
                text02: "Mit der Taschenlampe leuchtet er euch jedoch unbeirrt den Weg.",
                text03: "Kräftig hältst du die Paddel fest, damit sie nicht davon geschleudert werden.",
                text04: "Und endlich erreicht ihr den Südpol..."
            }
        };
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text04);
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Speech.hide();
        SarahsNovel.ƒS.Sound.fade(SarahsNovel.audio.stormyWeather, 0, 1, true); //Audio faded out to null
    }
    SarahsNovel.Scene14 = Scene14;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene15() {
        console.log("FudgeStory Scene15 starting");
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);
        SarahsNovel.ƒS.Sound.play(SarahsNovel.audio.articWind, 0.07, true);
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.atSouthPole);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.wet.duration, SarahsNovel.transitions.wet.alpha, SarahsNovel.transitions.wet.edge);
        let text = {
            Erzähler: {
                text01: "<i><b>„Sie nur wir sind da!“</i></b> rufst du begeistert und reißt die Arme hoch. <i><b>„Wir sind am Südpol angekommen!    “</i></b>",
                text02: "Doch als ihr die Eisscholle erreicht habt, sieht " + SarahsNovel.characters.penguin.name + " wieder traurig aus.",
                text03: "Gemeinsam klettert ihr aus dem Boot und etwas verlegen steht ihr euch gegenüber.",
                text04: "Du schaust dich um…. hier ist weit und breit kein anderes Lebewesen. Es sieht ziemlich verlassen aus.",
                text05: "Ein paar einsame Eisschollen driften vorbei.",
                text06: "Vermutlich haben sie sich aufgrund der Erderwärmung abgelöst und sind nun dazu verdammt umher zu irren, bis sie sich vollständig aufgelöst haben.",
                text07: "<i><b>„Alsooo, ich denke nun ist es an der Zeit Lebewohl zu sagen“</i></b> brichst du die Stille. ",
                text08: " Schweren Herzens drehst du dich um und ohne eine Reaktion des Pinguins abzuwarten, kletterst du zurück ins Boot und ruderst davon.",
                text10: "Als du dich ein letztes Mal umdrehst, siehst du, dass der Pinguin immer noch am gleichen Fleck steht und dir nachschaut.",
                text11: "Er sieht trauriger aus als je zuvor...",
                text12: "Du hast ihn nach Hause gebracht, wie du es versprochen hast...",
                text13: "<i>„Aber, warum ist der Pinguin so traurig?“</i> fragst du dich während er kleiner und kleiner wird..."
            }
        };
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text04);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text05);
        await SarahsNovel.ƒS.Character.animate(SarahsNovel.characters.iceFloe, SarahsNovel.characters.iceFloe.pose.floating, SarahsNovel.floatingLeftToRight()),
            await SarahsNovel.ƒS.update();
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text06);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text07);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text08);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text10);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text11);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text12);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text13);
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Speech.hide();
        // ƒS.Sound.fade(audio.articWind, 0, 1, true); //Audio faded out to null
    }
    SarahsNovel.Scene15 = Scene15;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene16() {
        console.log("FudgeStory Scene16 starting");
        // ƒS.Sound.play(audio.articWind, 0.07, true);
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.bgBlue);
        // document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.wet.duration, SarahsNovel.transitions.wet.alpha, SarahsNovel.transitions.wet.edge);
        await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.child, SarahsNovel.characters.child.pose.sad, SarahsNovel.ƒS.positionPercent(54, 70));
        SarahsNovel.ƒS.update(1.5);
        let text = {
            Erzähler: {
                text01: "Die Eisscholle ist kaum mehr zu sehen, als dich das Gefühl von Einsamkeit beschleicht.",
                text02: "„Ich vermisse " + SarahsNovel.characters.penguin.name + " jetzt schon“ geht dir durch den Kopf. ",
                text03: "Du kommst ins Grübeln.",
                text04: "... ... ...",
                text05: "In Gedanken gehst du nochmal alle Erlebnisse durch und dann wird es die Klar wie Kloßbrühe!",
                text06: "</i>„ " + SarahsNovel.characters.penguin.name + "</i>" + " hat sich nicht verirrt! " + "</i>" + SarahsNovel.characters.penguin.name + "</i>" + " ist einfach nur einsam!“",
                text07: "Du begreifst, dass du einen großen Fehler gemacht hast und beginnst sofort das Boot zu wenden und zurück zu rudern.",
                text08: "Aufgeregt hoffst du, dass es nicht zu spät ist und du den Pinguin wiederfinden wirst.",
                text09: "Deine Gedanken überschlagen sich...",
                text10: "Plötzlich siehst du etwas in der Ferne auf dich zukommen.",
                text11: "Es kommt näher und näher...",
                text12: "Langsam erkennst du es...",
                text13: "<b>Es ist der Pinguin!!!</b>",
                text14: "Angestrengt rudert er auf dich zu.",
                text15: "Du kannst dein Glück kaum fassen..."
            }
        };
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text04);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text05);
        await SarahsNovel.ƒS.Character.hide(SarahsNovel.characters.child),
            await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.child, SarahsNovel.characters.child.pose.idea, SarahsNovel.ƒS.positionPercent(81, 76));
        SarahsNovel.ƒS.update(1);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text06);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text07);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text08);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text09);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text10);
        await SarahsNovel.ƒS.Character.hide(SarahsNovel.characters.child),
            SarahsNovel.ƒS.update(1);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text11);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text12);
        await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.penguin, SarahsNovel.characters.penguin.pose.happy, SarahsNovel.ƒS.positionPercent(66, 94));
        SarahsNovel.ƒS.update(1);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text13);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text14);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text15);
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Speech.hide();
        SarahsNovel.ƒS.Character.hideAll();
        SarahsNovel.ƒS.Sound.fade(SarahsNovel.audio.articWind, 0, 1, true); //Audio faded out to null
    }
    SarahsNovel.Scene16 = Scene16;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene17() {
        console.log("FudgeStory Scene17 starting");
        SarahsNovel.ƒS.Sound.play(SarahsNovel.audio.atHome, 0.07, true);
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.happyEnd);
        // document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.crossingGeneral.duration, SarahsNovel.transitions.crossingGeneral.alpha, SarahsNovel.transitions.crossingGeneral.edge);
        let text = {
            Erzähler: {
                text01: "<i><b>" + "„" + SarahsNovel.characters.penguin.name + "!!!“" + "</i></b>" + "rufst du überglücklich. Du umarmst den Pinguin so fest du kannst und auch er drückt kräftig zu.",
                text02: "<i><b>„Ab jetzt musst du nicht mehr einsam sein, wir sind Freunde und du kommst mit mir nach Hause.“</i></b> flüsterst du ihm zu.",
                text03: "Als ihr euch aus der Umarmung löst, siehst du, dass der Pinguin zum ersten Mal glücklich und zufrieden aussieht.",
                text04: "Von diesem Tag an seid ihr unzertrennlich.",
                text05: "<i><b>„Happy End“</i></b>"
            }
        };
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text04);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text05);
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Speech.hide();
        SarahsNovel.ƒS.Sound.fade(SarahsNovel.audio.atHome, 0, 1, true); //Audio faded out to null
        SarahsNovel.ƒS.Text.print("Du hast das Happy End erreicht. Herzlichen Glückwunsch, das Spiel ist zu Ende.");
    }
    SarahsNovel.Scene17 = Scene17;
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
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01 + SarahsNovel.dataForSave.namePingu);
        // ƒS.Speech.setTickerDelays(70, 0);
        // let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]);
        SarahsNovel.ƒS.Speech.hide();
        await SarahsNovel.ƒS.Sound.play(SarahsNovel.audio.shipHorn, 1);
        // await ƒS.Character.show(characters.kind, characters.kind.pose.happy, ƒS.positionPercent(50, 74));
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.crossingGeneral.duration, SarahsNovel.transitions.crossingGeneral.alpha, SarahsNovel.transitions.crossingGeneral.edge);
        await SarahsNovel.ƒS.update(1);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01 + SarahsNovel.dataForSave.namePingu);
        // await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positions.right);
        // await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positionPercent(70, 100));
        await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.child, SarahsNovel.characters.child.pose.idea, SarahsNovel.ƒS.positionPercent(70, 100));
        // signalDelay();
        //******INVENTAR******** */
        // ƒS.Inventory.add(items.firstItem);
        // for (let i: number = 0; i < 5; i++) {
        //   ƒS.Inventory.add(items.firstItem);
        // }
        SarahsNovel.dataForSave.namePingu = await SarahsNovel.ƒS.Speech.getInput();
        SarahsNovel.characters.penguin.name = SarahsNovel.dataForSave.namePingu;
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
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.child, "Dein Name ist also" + SarahsNovel.characters.penguin.name);
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