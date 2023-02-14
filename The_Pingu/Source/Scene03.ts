namespace SarahsNovel {
    export async function Scene03(): ƒS.SceneReturn {
        console.log("FudgeStory Scene03 starting");
        ƒS.Sound.play(audio.nursery, 0.07, false);
        let text = {
            Erzähler: {
                text01: "Doch nanu, wer steht da vor der Tür...? Verdutzt bleibst du stehen.",
                text02: "Da steht doch tatsächlich ein Pinguin vor deiner Tür! Ungläubig reibst du dir die Augen.",
                text03: "<i>„Das kann doch nicht sein“</i>, denkst du dir. Doch als du die Augen wieder öffnest, blinzeln dir unmittelbar seine kleinen braunen Knopfaugen entgegen.",
                text04: "So einen Pinguin hast du noch nie gesehen. Er sieht sehr flauschig aus.",
                text05: "Sein Schnabel ist karottenfarben, er hat ein rundes Bäuchlein und ein kleines spitzes Schwänzchen.",
                text06: "<i>„Was soll ich mit ihm machen?“</i> fragst du dich."
            }
        };

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.meetThePenguin);
        await ƒS.update(transitions.crossingGeneral.duration, transitions.crossingGeneral.alpha, transitions.crossingGeneral.edge);
       
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);

        await ƒS.Character.show(
            characters.penguin,
            characters.penguin.pose.side,
            ƒS.positionPercent(50, 72)
        );
        await ƒS.update(2);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = false); // false die meta wird angezeigt, true sie wird nicht angezeigt.
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text04);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text05);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text06);

        let options = {

            touch: "Anfassen",
            scareAway: "Verscheuchen",
            ignore: "Ignorieren"
        };

        let dialogueElement = await ƒS.Menu.getInput(options, "choices");


        switch (dialogueElement) {

            case options.touch:
                // continue path here
                console.log("Anfassen");
                await ƒS.Character.animate(characters.penguin, characters.penguin.pose.side, moveBackAnimation());
                // ƒS.update();
                await ƒS.Speech.tell(characters.narrator, "Du versuchst ihn anzufassen aber der Pinguin weicht skeptisch zurück.");
                break;
            case options.scareAway:
                // continue path here
                console.log("Verscheuchen");
                await ƒS.Speech.tell(characters.narrator, "Du versuchst den Pinguin zu verscheuchen <b><i>„Kusch...Kusch!“</i></b> Doch der Pinguin weicht nicht von der Stelle.");
                break;
            case options.ignore:
                // continue path here
                await ƒS.Speech.tell(characters.narrator, "Du beschließt den Pinguin zu ignorieren. Du schiebst dich an ihm vorbei und machst dich auf den Weg zur Schule.");
                break;
        }

        ƒS.Sound.fade(audio.nursery, 0, 1, true);
        ƒS.Character.hide(characters.penguin);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
















































    }

}