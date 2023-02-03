"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    // Menu
    let gameMenu;
    let menuIsOpen = true;
    let inGameMenuBtn = {
        save: "Save",
        load: "Load",
        close: "Close"
    };
    Template.transition = {
        puzzle: {
            duration: 2,
            alpha: "Transitions/Others/035.jpg",
            edge: 1
        }
    };
    Template.sound = {
        //background themes
        //SFX
        drop: "Audio/drop.mp3"
    };
    Template.locations = {
        beachDay: {
            name: "beachDay",
            background: "Images/Backgrounds/Beach_day.png"
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        aisake: {
            name: "Aisaka",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Characters/aisaka_angry.png",
                happy: "Characters/aisaka_happy.png",
                upset: "Characters/aisaka_upset.png"
            }
        }
    };
    //Data that will be saved (game progress)
    Template.dataForSave = {
        nameProtagonist: ""
    };
    function animation() {
        return {
            start: { translation: Template.ƒS.positions.bottomcenter, color: Template.ƒS.Color.CSS("blue", 1) },
            end: { translation: Template.ƒS.positions.bottomright, color: Template.ƒS.Color.CSS("blue", 0) },
            duration: 3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    Template.animation = animation;
    function getAnimation() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft, rotation: -20, scaling: new Template.ƒS.Position(0.5, 1.5), color: Template.ƒS.Color.CSS("white", 0.3) },
            end: { translation: Template.ƒS.positions.bottomright, rotation: 20, scaling: new Template.ƒS.Position(1.5, 0.5), color: Template.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    Template.getAnimation = getAnimation;
    async function btnFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuBtn.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenuBtn.load:
                await Template.ƒS.Progress.load();
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
            case Template.ƒ.KEYBOARD_CODE.S:
                console.log("Save Scene");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.L:
                console.log("Load Scene");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
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
        gameMenu = Template.ƒS.Menu.create(inGameMenuBtn, btnFunctionalities, "gameMenuCSS");
        btnFunctionalities("Close");
        //****Szenen Hirarchie
        let scenes = [
            { scene: Template.Scene, name: "Scene" },
            { scene: Template.Scene_2, name: "Scene_2" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Sarah starting");
        let text = {
            Aisaka: {
                text1: "Hi",
                text2: "Hallo",
                text3: "Hoi"
            }
        };
        Template.ƒS.Speech.hide();
        // await ƒS.Transition. **********TRANSITION EINFÜGEN AUSPROBIEREN!!!!!!**********
        await Template.ƒS.Location.show(Template.locations.beachDay);
        // await ƒS.Sound.play(sound.drop, 1);
        await Template.ƒS.update(Template.transition.puzzle.duration, Template.transition.puzzle.alpha, Template.transition.puzzle.edge);
        await Template.ƒS.Character.show(Template.characters.aisake, Template.characters.aisake.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update();
        // await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positions.bottomcenter);
        await Template.ƒS.Speech.tell(Template.characters.aisake, text.Aisaka.text1);
        await Template.ƒS.update(2); // Die Zahl in der Klammer zeigt an, wie schnell (in sek.) der Character erscheint 
        let dialogue = {
            isayYes: "Yes",
            isaydNo: "No",
            isayBla: "Bla",
            isayOK: "Ok"
        };
        let dialogueElement = await Template.ƒS.Menu.getInput(dialogue, "choicesCSSClass"); // Die choicesCSSClass wird in der CSS Datei dann angelegt und gestyled
        switch (dialogueElement) {
            case dialogue.isayYes:
                // continue path here
                console.log("iSay Yes");
                break;
            case dialogue.isaydNo:
                // continue path here
                console.log("iSay No");
                await Template.ƒS.Speech.tell(Template.characters.aisake, "Ich sage Nein");
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
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene_2() {
        console.log("FudgeStory Template Sarah starting");
        await Template.ƒS.Character.show(Template.characters.aisake, Template.characters.aisake.pose.happy, Template.ƒS.positions.bottomcenter);
        Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.aisake, Template.characters.aisake.pose.happy, Template.animation());
    }
    Template.Scene_2 = Scene_2;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map