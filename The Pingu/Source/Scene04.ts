namespace SarahsNovel {
    export async function Scene04(): ƒS.SceneReturn {
        console.log("FudgeStory Scene04 starting");

        ƒS.Sound.play(audio.cityTraffic, 0.07, false);
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.wayToSchool);
        await ƒS.update(transitions.crossingGeneral.duration, transitions.crossingGeneral.alpha, transitions.crossingGeneral.edge);

        let text = {
            Erzähler: {
                text01: "Du läufst los und als ein bisschen Abstand zwischen euch ist, tapst der Pinguin ebenfalls los und folgt dir.",
                text02: "Immer wieder bleibst du stehen und erklärst ihm, dass du jetzt zur Schule musst.",
                text03: "Doch der Pinguin folgt dir hartnäckig."
            }
        };

        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Sound.fade(audio.cityTraffic, 0, 1, true); //Audio faded out to null








































    }
}