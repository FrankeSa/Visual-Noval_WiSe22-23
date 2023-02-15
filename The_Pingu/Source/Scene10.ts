namespace SarahsNovel {
    export async function Scene10(): ƒS.SceneReturn {
       
        ƒS.Sound.play(audio.adventureBegins, 0.07, true);
        await ƒS.Location.show(locations.bgBrown);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);
        await ƒS.update(transitions.beginning.duration, transitions.beginning.alpha, transitions.beginning.edge);

        let text = {
            Erzähler: {
                text01: "Als du am nächsten Morgen aufwachst, fällt dein Blick wie zufällig auf dein Bücherregal.",
                text02: "<i>Natürlich!</i> denkst du dir. <i>Dieses Buch, habe ich ganz vergessen.</i>",
                text03: "„Toll, jetzt wissen wir, woher du kommst!“ rufst du begeistert.",
                text04: "„Nur...",
                text05: "...wie sollen wir an den Südpol kommen???“ fragst du " + characters.penguin.name + ".",
                text06: characters.penguin.name + " schaut ratlos zurück.",
                text07: "„Ich hab´s, wir fahren mit dem Schiff zum Südpol!“ verkündest du."

            }

        };

        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
        await ƒS.Character.show(
            characters.child,
            characters.child.pose.reading,
            ƒS.positionPercent(81, 80)
        );
        ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Speech.tell(characters.narrator, "Du schlägst es auf und liest...");
        ƒS.Text.print("Der Kaiserpinguin ist die größte Art aus der Familie der Pinguine und zählt zusammen mit dem Königspinguin zur Gattung der Großpinguine. <br>Er kann bis zu 20 Jahre alt werden.</br>Sein Lebensraum ist der Südpol.</br>Dort kann es bis zu minus 60 Grad kalt werden.");
        ƒS.Character.hide(characters.child);
        ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, "...");
        await ƒS.Character.show(
            characters.child,
            characters.child.pose.talking,
            ƒS.positionPercent(71, 70)
        );
        await ƒS.Character.show(
            characters.penguin,
            characters.penguin.pose.front,
            ƒS.positionPercent(51, 83)
        );
        ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text04);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text05);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text06);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text07);
        ƒS.Character.hideAll();
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        // ƒS.Sound.fade(audio.playground, 0, 1, true); //Audio faded out to null




















    }




}