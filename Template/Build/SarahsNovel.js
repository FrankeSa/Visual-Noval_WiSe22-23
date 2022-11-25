"use strict";
var SarahsNovel;
(function (SarahsNovel) {
    SarahsNovel.ƒ = FudgeCore;
    SarahsNovel.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    // Menu
    let gameMenu;
    let menuIsOpen = true;
    let inGameMenuBtn = {
        save: "Save",
        load: "Load",
        close: "Close"
    };
    SarahsNovel.transition = {
        puzzle: {
            duration: 2,
            alpha: "Transitions/Others/035.jpg",
            edge: 1
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
            background: "Images/Backgrounds/Beach_day.png"
        }
    };
    SarahsNovel.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        aisake: {
            name: "Aisaka",
            origin: SarahsNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Characters/aisaka_angry.png",
                happy: "Characters/aisaka_happy.png",
                upset: "Characters/aisaka_upset.png"
            }
        }
    };
    //Data that will be saved (game progress)
    SarahsNovel.dataForSave = {
        nameProtagonist: ""
    };
    function animation() {
        return {
            start: { translation: SarahsNovel.ƒS.positions.bottomcenter, color: SarahsNovel.ƒS.Color.CSS("blue", 1) },
            end: { translation: SarahsNovel.ƒS.positions.bottomright, color: SarahsNovel.ƒS.Color.CSS("blue", 0) },
            duration: 3,
            playmode: SarahsNovel.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    SarahsNovel.animation = animation;
    function getAnimation() {
        return {
            start: { translation: SarahsNovel.ƒS.positions.bottomleft, rotation: -20, scaling: new SarahsNovel.ƒS.Position(0.5, 1.5), color: SarahsNovel.ƒS.Color.CSS("white", 0.3) },
            end: { translation: SarahsNovel.ƒS.positions.bottomright, rotation: 20, scaling: new SarahsNovel.ƒS.Position(1.5, 0.5), color: SarahsNovel.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: SarahsNovel.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    SarahsNovel.getAnimation = getAnimation;
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
            { scene: SarahsNovel.Scene, name: "Scene" },
            { scene: SarahsNovel.Scene_2, name: "Scene_2" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        SarahsNovel.dataForSave = SarahsNovel.ƒS.Progress.setData(SarahsNovel.dataForSave, uiElement);
        // start the sequence
        SarahsNovel.ƒS.Progress.go(scenes);
    }
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene() {
        console.log("FudgeStory Template Sarah starting");
        let text = {
            Aisaka: {
                text1: "Hi",
                text2: "Hallo",
                text3: "Hoi"
            }
        };
        SarahsNovel.ƒS.Speech.hide();
        await SarahsNovel.ƒS.Location.show(SarahsNovel.locations.beachDay);
        // await ƒS.Sound.play(sound.drop, 1);
        await SarahsNovel.ƒS.update(SarahsNovel.transition.puzzle.duration, SarahsNovel.transition.puzzle.alpha, SarahsNovel.transition.puzzle.edge);
        await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.aisake, SarahsNovel.characters.aisake.pose.happy, SarahsNovel.ƒS.positionPercent(70, 100));
        await SarahsNovel.ƒS.update();
        // await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positions.bottomcenter);
        await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.aisake, text.Aisaka.text1);
        await SarahsNovel.ƒS.update(2); // Die Zahl in der Klammer zeigt an, wie schnell (in sek.) der Character erscheint 
        let dialogue = {
            isayYes: "Yes",
            isaydNo: "No",
            isayBla: "Bla",
            isayOK: "Ok"
        };
        let dialogueElement = await SarahsNovel.ƒS.Menu.getInput(dialogue, "choicesCSSClass"); // Die choicesCSSClass wird in der CSS Datei dann angelegt und gestyled
        switch (dialogueElement) {
            case dialogue.isayYes:
                // continue path here
                console.log("iSay Yes");
                break;
            case dialogue.isaydNo:
                // continue path here
                console.log("iSay No");
                await SarahsNovel.ƒS.Speech.tell(SarahsNovel.characters.aisake, "Ich sage Nein");
                break;
            case dialogue.isayBla:
                // continue path here
                console.log("iSay Bla");
                break;
            case dialogue.isayOK:
                // continue path here
                console.log("iSay OK");
                break;
        }
    }
    SarahsNovel.Scene = Scene;
})(SarahsNovel || (SarahsNovel = {}));
var SarahsNovel;
(function (SarahsNovel) {
    async function Scene_2() {
        console.log("FudgeStory Template Sarah starting");
        await SarahsNovel.ƒS.Character.show(SarahsNovel.characters.aisake, SarahsNovel.characters.aisake.pose.happy, SarahsNovel.ƒS.positions.bottomcenter);
        SarahsNovel.ƒS.update();
        await SarahsNovel.ƒS.Character.animate(SarahsNovel.characters.aisake, SarahsNovel.characters.aisake.pose.happy, SarahsNovel.animation());
    }
    SarahsNovel.Scene_2 = Scene_2;
})(SarahsNovel || (SarahsNovel = {}));
//# sourceMappingURL=SarahsNovel.js.map