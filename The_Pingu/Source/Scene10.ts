namespace SarahsNovel {
    export async function Scene10(): ƒS.SceneReturn {
        // ƒS.Sound.play(audio.cityTraffic, 0.07, true);
        await ƒS.Location.show(locations.bgBrown);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);
        await ƒS.update(transitions.beginning.duration, transitions.beginning.alpha, transitions.beginning.edge);

























    }




}