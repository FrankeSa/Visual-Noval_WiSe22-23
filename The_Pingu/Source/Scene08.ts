namespace SarahsNovel {
    export async function Scene08(): ƒS.SceneReturn {
        console.log("FudgeStory Scene08 starting");

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.lafOffice);
        await ƒS.update(transitions.beginning.duration, transitions.beginning.alpha, transitions.beginning.edge);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = false);


        let text = {
            Erzähler: {
                text01: "Am nächsten Morgen beschließt du in einem Fundbüro nachzufragen, ob vielleicht jemand einen Pinguin vermisst.",
                text02: "Du erklärst ihm, dass er sich verirrt hat und du ihm versprochen hast, sein zu Hause zu finden, du aber nicht weißt, wo das ist.",
                text03: "Nach langem Überlegen stimmst du zu " + characters.penguin.name + " in den Zoo zu geben.",
                text04: "Karl geht nach hinten und kommt mit einem großen Käfig wieder.",
                text05: "Er packt den Pinguin und hebt ihn hoch.",
                text06: characters.penguin.name + " strampelt mit den Füßchen und versucht verzweifelt sich aus seinem Griff zu befreien.",
                text07: "Doch Karl ist viel stärker und mit einem kräftigen Ruck zwängt er" + characters.penguin.name + " schließlich in den Käfig",
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


        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
        await ƒS.Speech.tell(characters.Karl, text.Karl.text01);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Speech.tell(characters.Karl, text.Karl.text02);
        await ƒS.Speech.tell(characters.Karl, text.Karl.text03);

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
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text05);
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text06);
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text07);

                await ƒS.Location.show(locations.badEnding);
                await ƒS.update(transitions.swirl.duration, transitions.swirl.alpha, transitions.swirl.edge);
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text08);
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text09);
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text10);
                ƒS.Text.print("Bad Ending! Probier es gerne nochmal von neuem.");
                break;
            case options.no:
                console.log("Nicht in den Zoo geben");
                await ƒS.Speech.tell(characters.narrator, "Ohne zu zögern lehnst du ab.");
                await ƒS.Speech.tell(characters.narrator, "Dir ist klar, dass " + characters.penguin.name + "´s zu Hause auf garkeinen Fall ein Zoo sein kann.");
                dataForSave.affectionScore += 10;
                break;
        }
       
        ƒS.Speech.clear();
        ƒS.Speech.hide();
    




























    }
}