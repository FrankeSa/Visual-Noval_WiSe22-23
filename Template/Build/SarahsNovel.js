"use strict";
var SarahsNovel;
(function (SarahsNovel) {
    SarahsNovel.ƒ = FudgeCore;
    SarahsNovel.ƒS = FudgeStory;
    console.log("Scene_1 is starting");
    // Menu
    let gameMenu;
    let menuIsOpen = true;
    let inGameMenuBtn = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits"
    };
    SarahsNovel.transition = {
        puzzle: {
            duration: 2,
            alpha: "Transitions/Others/wet.jpg",
            edge: 2
        }
    };
    SarahsNovel.sound = {
        //background themes
        //SFX
        drop: "Audio/drop.mp3"
    };
    SarahsNovel.locations = {
        beachDay: {
            name: "beachDay",
            background: "Images/Backgrounds/oma_mit_kind_vesper.png"
        },
        school: {
            name: "school",
            background: "Images/Backgrounds/oma_mit_kind_vesper.png"
        }
    };
    SarahsNovel.characters = {
        narrator: {
            name: "Erzähler"
        },
        protagonist: {
            name: ""
        },
        aisake: {
            name: "Aisaka",
            origin: SarahsNovel.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                angry: "Characters/aisaka_angry.png",
                happy: "Images/Characters/Child/Kind_mit_Arme_nach_oben_2.png",
                upset: "Characters/aisaka_upset.png"
            }
        }
    };
    //Data that will be saved (game progress)
    SarahsNovel.dataForSave = {
        nameProtagonist: "",
        affectionScore: 0
    };
    SarahsNovel.items = {
        firstItem: {
            name: "Ein Kürbis zum Schutz vor Regen ",
            description: " ",
            image: "Images/tile_0004.png",
            static: false //wenn true dann kann das Item verwendet werden
        },
        secondItem: {
            name: "Eine Blume ",
            description: "sieht schön aus ",
            image: "Images/tile_0020.png",
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
            start: { translation: SarahsNovel.ƒS.positionPercent(70, 100) },
            end: { translation: SarahsNovel.ƒS.positionPercent(60, 100) },
            duration: 4,
            playmode: SarahsNovel.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    SarahsNovel.getAnimation = getAnimation;
    function credits() {
        SarahsNovel.ƒS.Text.print("Hier könnten Ihre Credits stehen");
    }
    SarahsNovel.credits = credits;
    async function btnFunctionalities(_option) {
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
        gameMenu = SarahsNovel.ƒS.Menu.create(inGameMenuBtn, btnFunctionalities, "gameMenuCSS");
        btnFunctionalities("Close");
        //****Szenen Hirarchie
        let scenes = [
            { scene: SarahsNovel.Scene_1, name: "In deinem Kinderzimmer" },
            // { scene: Scene_2, name: "Scene_2" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        SarahsNovel.dataForSave = SarahsNovel.ƒS.Progress.setData(SarahsNovel.dataForSave, uiElement);
        // start the sequence
        SarahsNovel.ƒS.Progress.go(scenes);
    }
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene_1() {
        console.log("FudgeStory Template Sarah starting");
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = false); // false die meta wird angezeigt, true sie wird nicht angezeigt.
        let text = {
            Aisaka: {
                text1: "Hi, mein Name ist Aisake. Ich freue mich dich zu sehen. ",
                text2: "Hallo",
                text3: "Hoi"
            }
        };
        SarahsNovel.ƒS.Speech.setTickerDelays(50, 1000);
        let signalDelay = SarahsNovel.ƒS.Progress.defineSignal([() => SarahsNovel.ƒS.Progress.delay(3)]);
        SarahsNovel.ƒS.Speech.hide();
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.beachDay);
        // await ƒS.Sound.play(sound.drop, 1);
        await SarahsNovel.ƒS.update(SarahsNovel.transition.puzzle.duration, SarahsNovel.transition.puzzle.alpha, SarahsNovel.transition.puzzle.edge);
        // await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positions.right);
        await SarahsNovel.ƒS.update(1);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.narrator, text.Aisaka.text1 + SarahsNovel.dataForSave.nameProtagonist);
        // await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positionPercent(70, 100));
        signalDelay();
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
                await SarahsNovel.ƒS.Character.animate(SarahsNovel.characters.aisake, SarahsNovel.characters.aisake.pose.happy, SarahsNovel.getAnimation());
                break;
            case dialogue.isaydNo:
                // continue path here
                console.log("iSay No");
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.aisake, "Dein Name ist also" + SarahsNovel.characters.protagonist.name);
                break;
            case dialogue.isayBla:
                // continue path here
                console.log("iSay Bla");
                SarahsNovel.dataForSave.affectionScore += 10;
                break;
            case dialogue.isayOK:
                // continue path here
                console.log("iSay OK");
                break;
        }
    }
    SarahsNovel.Scene_1 = Scene_1;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene_2() {
        console.log("FudgeStory Template Sarah starting");
        SarahsNovel.ƒS.Speech.hide();
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.school);
        await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.aisake, SarahsNovel.characters.aisake.pose.happy, SarahsNovel.ƒS.positions.bottomcenter);
        SarahsNovel.ƒS.update();
        // await ƒS.Character.animate(characters.aisake, characters.aisake.pose.happy, animation());
        SarahsNovel.ƒS.Inventory.add(SarahsNovel.items.firstItem);
        SarahsNovel.ƒS.Inventory.add(SarahsNovel.items.secondItem);
        // for (let i: number = 0; i < 5; i++) {
        //     ƒS.Inventory.add(items.firstItem);
        // }
        await SarahsNovel.ƒS.Inventory.open();
    }
    SarahsNovel.Scene_2 = Scene_2;
})(SarahsNovel || (SarahsNovel = {}));
//# sourceMappingURL=SarahsNovel.js.map