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
            alpha: "Transitions/Others/039.jpg",
            edge: 2
        },
        crossingGeneral: {
            duration: 4,
            alpha: "Transitions/WipesAndOther/17.png",
            edge: 1
        }
    };
    SarahsNovel.audio = {
        //background themes
        nursery: "Audio/birds_and_piano.mp3",
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
            background: "Images/Hintergruende/an_der_haustuer.png"
        },
        wayToSchool: {
            name: "walk to school with penguin",
            background: "Images/Hintergruende/schulweg.png"
        },
        schoolyard: {
            name: "penguin on schoolyard",
            background: "Images/Hintergruende/auf_dem_schulhof.png"
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
        oma: {
            name: "Oma"
        },
        kind: {
            name: "Kind",
            origin: SarahsNovel.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                reading: "Images/Charaktere/Kind/kind_liest_buch.png",
                idea: "Images/Charaktere/Kind/kind_idee.png"
            }
        },
        pinguin: {
            name: "",
            origin: SarahsNovel.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                front: "Images/Charaktere/Pinguin/pinguin.png",
                side: "Images/Charaktere/Pinguin/pinguin_seitlich.png",
                sad: "Images/Charaktere/Pinguin/pinguin_traurig.png",
                happy: "Images/Charaktere/Pinguin/ruerckkehr_pinguin.png"
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
    // export function animation(): ƒS.AnimationDefinition {
    //   return {
    //     start: { translation: ƒS.positions.bottomcenter, color: ƒS.Color.CSS("blue", 1) },
    //     end: { translation: ƒS.positions.bottomright, color: ƒS.Color.CSS("blue", 0) },
    //     duration: 3,
    //     playmode: ƒS.ANIMATION_PLAYMODE.LOOP
    //   };
    // }
    function getAnimation() {
        return {
            start: { translation: SarahsNovel.ƒS.positionPercent(50, 74) },
            end: { translation: SarahsNovel.ƒS.positionPercent(49, 74) },
            duration: 2,
            playmode: SarahsNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    SarahsNovel.getAnimation = getAnimation;
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
            { scene: SarahsNovel.Scene01, name: "In deinem Kinderzimmer" },
            { scene: SarahsNovel.Scene02, name: "Oma überreicht dir deine Brotbox" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        SarahsNovel.dataForSave = SarahsNovel.ƒS.Progress.setData(SarahsNovel.dataForSave, uiElement);
        // start the sequence
        SarahsNovel.ƒS.Progress.go(scenes);
    }
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene01() {
        console.log("FudgeStory Template Sarah starting");
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true); // false die meta wird angezeigt, true sie wird nicht angezeigt.
        let text = {
            Erzähler: {
                text01: "Es ist ein neuer Tag. Die Sonne ist gerade aufgegangen und draußen zwitschern die Vögel eifrig um die Wette.",
                text02: "Noch etwas verschlafen richtest du dir deine Schulsachen für den heutigen Tag und machst dich anschließend im Badezimmer fertig.",
                text03: "Danach gehst du runter zu deiner Oma…"
            }
        };
        console.log("Audio oben");
        SarahsNovel.ƒS.Sound.play(SarahsNovel.audio.nursery, 0.07, false);
        SarahsNovel.ƒS.Speech.hide();
        console.log("Audio unten");
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.yourRoom);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.crossingGeneral.duration, SarahsNovel.transitions.crossingGeneral.alpha, SarahsNovel.transitions.crossingGeneral.edge);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Speech.hide();
        SarahsNovel.ƒS.update();
        SarahsNovel.ƒS.Sound.fade(SarahsNovel.audio.nursery, 0, 1, true);
    }
    SarahsNovel.Scene01 = Scene01;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene02() {
        console.log("Scene02 Oma überreicht Brotbox starting");
        let text = {
            Erzähler: {
                text01: "Deine Oma küsst dich, wie jeden Morgen, liebevoll auf die Stirn.",
                text02: "Sie überreicht dir deine Brotbox, in der sich ein ganz besonders und mit viel Liebe zubereitetes Brot befindet",
                text03: "Und mit einen kurzen <i>„Hab dich lieb, Oma“<i> drehst du dich um und öffnest die Haustür."
            }
        };
        SarahsNovel.ƒS.Speech.hide();
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.getLunchbox);
        await SarahsNovel.ƒS.update(SarahsNovel.transitions.crossingGeneral.duration, SarahsNovel.transitions.crossingGeneral.alpha, SarahsNovel.transitions.crossingGeneral.edge);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text01);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text02);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Erzähler.text03);
        SarahsNovel.ƒS.Speech.clear();
        SarahsNovel.ƒS.Speech.hide();
        // await ƒS.Character.animate(characters.aisake, characters.aisake.pose.happy, animation());
    }
    SarahsNovel.Scene02 = Scene02;
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
        await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.kind, SarahsNovel.characters.kind.pose.idea, SarahsNovel.ƒS.positionPercent(70, 100));
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
                await SarahsNovel.ƒS.Character.animate(SarahsNovel.characters.kind, SarahsNovel.characters.kind.pose.idea, SarahsNovel.getAnimation());
                break;
            case dialogue.isaydNo:
                // continue path here
                console.log("iSay No");
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.kind, "Dein Name ist also" + SarahsNovel.characters.protagonist.name);
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