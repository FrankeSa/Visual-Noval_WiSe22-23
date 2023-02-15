namespace SarahsNovel {
    export async function Scene08(): ƒS.SceneReturn {
        console.log("FudgeStory Scene08 starting");

        ƒS.Sound.play(audio.officeAmbience, 0.07, true);
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.lafOffice);
        await ƒS.update(transitions.beginning.duration, transitions.beginning.alpha, transitions.beginning.edge);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = false);


        let text = {
            Erzähler: {
                text01: "Am nächsten Morgen beschließt du in einem Fundbüro nachzufragen, ob vielleicht jemand einen Pinguin vermisst.",
                text02: "Du erklärst Karl, dass er sich verirrt hat und du ihm versprochen hast, sein zu Hause zu finden, du aber nicht weißt, wo das ist.",
                text03: "Nach langem Überlegen stimmst du zu " + characters.penguin.name + " in den Zoo zu geben.",
                text04: "Karl geht nach hinten und kommt mit einem großen Käfig wieder.",
                text05: "Er packt den Pinguin und hebt ihn hoch.",
                text06: characters.penguin.name + " strampelt mit den Füßchen und versucht verzweifelt sich aus seinem Griff zu befreien.",
                text07: "Doch Karl ist viel stärker und mit einem kräftigen Ruck zwängt er " + characters.penguin.name + " schließlich in den Käfig."

            },
            Karl: {
                text01: "„Einen Pinguin?“ „Mein liebes Kind, keiner vermisst einen Pinguin.“",
                text02: "„Nun, vermutlich gehört er in irgendeinen Zoo.“ „Ich denke, dort ist er am besten aufgehoben.“",
                text03: "„Soll ich ihn für dich in einen Zoo bringen?“"
            }
        };


        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
        await ƒS.Speech.tell(characters.karl, text.Karl.text01);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Speech.tell(characters.karl, text.Karl.text02);
        await ƒS.Speech.tell(characters.karl, text.Karl.text03);

        let options = {

            yes: "Ja",
            no: "Nein"
        };

        let dialogueElement = await ƒS.Menu.getInput(options, "choices");


        switch (dialogueElement) {

            case options.yes:
                console.log("in den Zoo geben");
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text04);
                ƒS.Sound.play(audio.boltCutter, 0.4, false);
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text05);
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text06);
                verticalShake();
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text07);
                return "s18";

                break;
            case options.no:
                console.log("Nicht in den Zoo geben");
                await ƒS.Speech.tell(characters.narrator, "Ohne zu zögern lehnst du ab.");
                await ƒS.Speech.tell(characters.narrator, "Dir ist klar, dass " + characters.penguin.name + "´s zu Hause auf gar keinen Fall ein Zoo sein kann.");
                dataForSave.affectionScore += 10;
                break;
        }


        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Sound.fade(audio.officeAmbience, 0, 1, true); //Audio faded out to null






























    }
}