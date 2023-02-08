namespace SarahsNovel {
    export async function Scene12(): ƒS.SceneReturn {
        ƒS.Sound.play(audio.shipAtHarbor, 0.07, true);

        await ƒS.Location.show(locations.atTheHarbor);
        // document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);
        await ƒS.update(transitions.wave.duration, transitions.wave.alpha, transitions.wave.edge);

        let text = {
            Erzähler: {
                text01: "Am nächsten Morgen springst du aufgeregt aus dem Bett, schnappst dir den Koffer und zusammen mit " + characters.penguin.name + " hastet ihr runter zum Hafen.",
                text02: "Dort steht ein großes imposantes Schiff, welches bereit zur Abfahrt ist.",
                text03: "<i><b>„Halloooo, könnt ihr uns bitte mitnehmen, wir wollen zum Südpol?“</i></b> rufst du so laut du nur kannst nach oben zu dem Schiffsdeck.",
                text04: "Aber deine Rufe sind viel zu leise, als dass sie über das laute Schiffshorn hinweggehört werden würden.",
                text05: "Das Schiff fährt ohne euch ab.",
                text06: "<i><b>„Na gut, dann müssen wir eben mit unserem eigenen Boot zum Südpol rudern“</i></b> beschließt du.",
                text07: "Doch " + characters.penguin.name + " scheint nicht begeister von deiner Idee..."

            }

        };

        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
        ƒS.Sound.play(audio.shipHorn, 1.5, false);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text04);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text05);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text06);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text07);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Sound.fade(audio.shipAtHarbor, 0, 1, true); //Audio faded out to null

        console.log(affectionScore);

  
















    }




}