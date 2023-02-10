namespace SarahsNovel {
    export async function Scene05(): ƒS.SceneReturn {
        console.log("FudgeStory Scene05 starting");
        // document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = false);
        ƒS.Sound.play(audio.playground, 0.07, false);

        await ƒS.Location.show(locations.schoolyard);
        await ƒS.update(transitions.crossingGeneral.duration, transitions.crossingGeneral.alpha, transitions.crossingGeneral.edge);
        
        let text = {
            Erzähler: {
                text01: "Auf dem Schulhof haben sich deine Freunde und Mitschüler um den Pinguin versammelt.",
                text02: "Begeistert mustern sie ihn. So nahe waren sie einem <i>echten</i> Pinguin noch nie.",
                text03: "Du überlegst dir, ob er sich vielleicht unwohl fühlen könnte, umringt von den ganzen Kindern.",
                text04: "Doch es scheint so, als würde der Pinguin die Aufmerksamkeit genießen."
            }
        };

        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Character.show(
            characters.speechBubble_wow,
            characters.speechBubble_wow.pose.shining,
            ƒS.positionPercent(43, 20)
        );
        await ƒS.update(2);
        await ƒS.Character.hide(characters.speechBubble_wow),
            await ƒS.Character.show(
                characters.speechBubble_sueß,
                characters.speechBubble_sueß.pose.shining,
                ƒS.positionPercent(75, 20)
            );
        await ƒS.update(2);
        await ƒS.Character.hide(characters.speechBubble_sueß),
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text04);
        ƒS.Character.hide(characters.speechBubble_wow);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Sound.fade(audio.playground, 0, 1, true); //Audio faded out to null



































    }
}