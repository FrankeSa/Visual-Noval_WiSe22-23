namespace SarahsNovel {

    export async function Scene18(): ƒS.SceneReturn {

        console.log("FudgeStory Scene18 starting");
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true); // false die meta wird angezeigt, true sie wird nicht angezeigt.
        ƒS.Sound.fade(audio.officeAmbience, 0, 1, true);
        ƒS.Sound.play(audio.badEnd, 0.5, false);
        await ƒS.Location.show(locations.badEnding);
        await ƒS.update(transitions.swirl.duration, transitions.swirl.alpha, transitions.swirl.edge);


        let text = {
            Erzähler: {            
                text01: "Große Tränen kullern über das Gesicht des Pinguins.",
                text02: "Trotz deines mulmigen Gefühls, sagst du dir, dass es das Richtige ist.",
                text03: "<i>Solche Tiere gehören nun mal in den Zoo.</i>"
            }
        };


        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Sound.fade(audio.badEnd, 0, 1, true);
        ƒS.Text.print("Bad Ending. Versuche es gerne nochmal, lade dazu das Spiel neu.");













    }












































}