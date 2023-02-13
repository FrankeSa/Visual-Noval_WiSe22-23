namespace SarahsNovel {
    export async function Scene04(): ƒS.SceneReturn {
        console.log("FudgeStory Scene04 starting");
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);
        ƒS.Sound.play(audio.cityTraffic, 0.07, false);
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.wayToSchool);
        await ƒS.update(transitions.crossingGeneral.duration, transitions.crossingGeneral.alpha, transitions.crossingGeneral.edge);

        let text = {
            Erzähler: {
                text01: "Du läufst los und als ein bisschen Abstand zwischen euch ist, setzt sich der Pinguin ebenfalls in Bewegung und tapst dir hinterher.",
                text02: "Immer wieder bleibst du stehen und erklärst ihm, dass du jetzt zur Schule musst.",
                text03: "Doch der Pinguin folgt dir hartnäckig. Taps... Taps... Taps... Taps..."
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