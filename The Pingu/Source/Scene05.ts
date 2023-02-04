namespace SarahsNovel {
    export async function Scene05(): ƒS.SceneReturn {
        console.log("FudgeStory Scene05 starting");

        ƒS.Sound.play(audio.playground, 0.07, false);

        await ƒS.Location.show(locations.schoolyard);
        await ƒS.update(transitions.crossingGeneral.duration, transitions.crossingGeneral.alpha, transitions.crossingGeneral.edge);

        let text = {
            Erzähler: {
                text01: "Auf dem Schulhof haben sich deine Freunde und Mitschüler um den Pinguin versammelt.",
                text02: "Begeistert mustern sie ihn. So nahe waren sie einem Pinguin noch nie.",
                text03: "Du überlegst dir, ob er sich vielleicht unwohl fühlen könnte, umringt von den ganzen Kindern.",
                text04: "Doch es scheint so, als würde der Pinguin die Aufmerksamkeit genießen."
            }
        };

        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        // await ƒS.Character.show(
        //     characters.bigstar,
        //     characters.bigstar.pose.shining,
        //     ƒS.positionPercent(50, 44)
        // );
        // await ƒS.update(2);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text04);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Sound.fade(audio.cityTraffic, 0, 1, true); //Audio faded out to null



































    }
}