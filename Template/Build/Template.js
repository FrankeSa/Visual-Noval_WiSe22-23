"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.transition = {
        puzzle: {
            duration: 1,
            alpha: "",
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
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Scene" }
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
        await Template.ƒS.Location.show(Template.locations.beachDay);
        await Template.ƒS.update();
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
//# sourceMappingURL=Template.js.map