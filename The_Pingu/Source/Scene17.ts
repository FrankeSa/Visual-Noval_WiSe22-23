namespace SarahsNovel {

    export async function Scene17(): ƒS.SceneReturn {
        console.log("FudgeStory Scene17 starting");
        ƒS.Sound.play(audio.atHome, 0.07, true);

        await ƒS.Location.show(locations.happyEnd);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);
        await ƒS.update(transitions.crossingGeneral.duration, transitions.crossingGeneral.alpha, transitions.crossingGeneral.edge);

        let text = {
            Erzähler: {
                text01: "<i><b>" + "„" + characters.penguin.name + "!!!“" + "</i></b>" + " rufst du überglücklich. Du umarmst den Pinguin so fest du kannst und auch er drückt kräftig zu.",
                text02: "<i><b>„Ab jetzt musst du nicht mehr einsam sein, wir sind Freunde und du kommst mit mir nach Hause“</i></b> flüsterst du ihm zu.",
                text03: "Als ihr euch aus der Umarmung löst, siehst du, dass der Pinguin zum ersten Mal glücklich und zufrieden aussieht.",
                text04: "Von diesem Tag an seid ihr unzertrennlich.",
                text05: "<i><b>„Happy End“</i></b>"
                
            }
        };

        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text04);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text05);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Sound.fade(audio.atHome, 0, 1, true); //Audio faded out to null
        ƒS.Text.print("Du hast das Happy End erreicht. Herzlichen Glückwunsch, das Spiel ist zu Ende.");





























    }

































}