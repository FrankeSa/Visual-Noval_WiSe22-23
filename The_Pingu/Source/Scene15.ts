namespace SarahsNovel {
    export async function Scene15(): ƒS.SceneReturn {
        console.log("FudgeStory Scene15 starting");

        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = false);
        ƒS.Sound.play(audio.articWind, 0.07, true);
        await ƒS.Location.show(locations.atSouthPole);
        await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);

        let text = {
            Erzähler: {
                text01: "<i><b>„Sie nur wir sind da!“</i></b> rufst du begeistert und reißt die Arme hoch. <i><b>„Wir sind am Südpol angekommen!    “</i></b>",
                text02: "Doch als ihr die Eisscholle erreicht habt, sieht " + characters.penguin.name + " wieder traurig aus.",
                text03: "Gemeinsam klettert ihr aus dem Boot und etwas verlegen steht ihr euch gegenüber.",
                text04: "Du schaust dich um…. hier ist weit und breit kein anderes Lebewesen. Es sieht ziemlich verlassen aus.",
                text05: "Ein paar einsame Eisschollen driften vorbei.",
                text06: "Vermutlich haben sie sich aufgrund der Erderwärmung abgelöst und sind nun dazu verdammt umher zu irren, bis sie sich vollständig aufgelöst haben.",
                text07: "<i><b>„Alsooo, ich denke nun ist es an der Zeit Lebewohl zu sagen“</i></b> brichst du die Stille. ",
                text08: " Schweren Herzens drehst du dich um und ohne eine Reaktion des Pinguins abzuwarten, kletterst du zurück ins Boot und ruderst davon.",
                text10: "Als du dich ein letztes Mal umdrehst, siehst du, dass der Pinguin immer noch am gleichen Fleck steht und dir nachschaut.",
                text11: "Er sieht trauriger aus als je zuvor...",
                text12: "Du hast ihn nach Hause gebracht, wie du es versprochen hast...",
                text13: "<i>„Aber, warum ist der Pinguin so traurig?“</i> fragst du dich während er kleiner und kleiner wird..."

            }
        };

        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text04);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text05);

        await ƒS.Character.animate(characters.iceFloe, characters.iceFloe.pose.floating, floatingLeftToRight()),
            await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text06);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text07);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text08);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text10);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text11);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text12);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text13);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        if (dataForSave.affectionScore === 50) {
            return "s16";
        }

        ƒS.Text.print("Das ist das Ende. Verusuche es nocheinmal für das Happy End");
        
        // ƒS.Sound.fade(audio.articWind, 0, 1, true); //Audio faded out to null








































    }








































}