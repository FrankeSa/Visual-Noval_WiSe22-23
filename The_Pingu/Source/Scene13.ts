namespace SarahsNovel {
    export async function Scene13(): ƒS.SceneReturn {
        ƒS.Sound.play(audio.atSea, 0.1, true);

        await ƒS.Location.show(locations.atSee);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = false);
        await ƒS.update(transitions.wave.duration, transitions.wave.alpha, transitions.wave.edge);

        let text = {
            Erzähler: {
                text01: "Und so macht ihr euch in eurem Ruderboot auf den Weg zum Südpol.",
                text02: "Es ist kalt und windig. Und du beginnst ein wenig zu zweifeln, ob das so eine gute Idee war.",
                text03: "Doch dann schaust du zu " + characters.penguin.name + ".",
                text04: "Der Pinguin schaut traurig und gedankenversunken ins Wasser.",
                text05: "<i><b>„Keine Sorge ich bin mir sicher wir kommen bald am Südpol an“</i></b> sagst du aufmunternd.",
                text06: "<i><b>„Dann bist du zu Hause und wieder bei deiner Familie.“</i></b>",
                text07: "Der Pinguin verzieht keine Miene. Also beschließt du, ihm eine Geschichte zu erzählen.",
                text08: "Eine Geschichte über mutige Abenteurer und Freundschaft.",
                text09: "Der Pinguin sieht jetzt weniger traurig aus, er hört dir aufmerksam und gespannt zu.",
                text10: "Du weißt nicht genau, was du " + characters.penguin.name + " sagen sollst. Also rudert ihr schweigsam weiter, während der Pinguin sehr in sich gekehrt wirkt."

            }

        };

        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text04);

        let options = {

            speakTo: "Ansprechen",
            beSilent: "Schweigen"
        };

        let dialogueElement = await ƒS.Menu.getInput(options, "choices");


        switch (dialogueElement) {

            case options.speakTo:
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text05);
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text06);
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text07);
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text08);
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text09);
                dataForSave.affectionScore += 10;
                break;
            case options.beSilent:
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text10);
                dataForSave.affectionScore -= 10;
                break;
        }
      
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Sound.fade(audio.atSea, 0, 1, true); //Audio faded out to null
























    }
}