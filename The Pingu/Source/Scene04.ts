namespace SarahsNovel {
    export async function Scene04(): ƒS.SceneReturn {
        console.log("FudgeStory Scene04 starting");

        ƒS.Sound.play(audio.cityTraffic, 0.07, false);
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.wayToSchool);
        await ƒS.update(transitions.crossingGeneral.duration, transitions.crossingGeneral.alpha, transitions.crossingGeneral.edge);









































    }
}