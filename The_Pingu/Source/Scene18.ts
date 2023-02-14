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

                text01: "...und mit einem kräftigen Ruck zwängt er " + characters.penguin.name + " schließlich in den Käfig.",
                text02: "Große Tränen kullern über das Gesicht des Pinguins.",
                text03: "Trotz deines mulmigen Gefühls, sagst du dir, dass es das Richtige ist.",
                text04: "<i>„Solche Tiere gehören nun mal in den Zoo.“"
            }
        };


        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text04);

        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Sound.fade(audio.badEnd, 0, 1, true);
        ƒS.Text.print("Bad Ending. Versuche es gerne nochmal lade dazu das Spiel neu.");













    }












































}