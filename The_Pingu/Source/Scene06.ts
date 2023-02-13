namespace SarahsNovel {
    export async function Scene06(): ƒS.SceneReturn {
        console.log("FudgeStory Scene06 starting");

        ƒS.Sound.play(audio.cityTraffic, 0.07, true);

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.giveSandwich);
        await ƒS.update(transitions.crossingGeneral.duration, transitions.crossingGeneral.alpha, transitions.crossingGeneral.edge);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = false);
        let text = {
            Erzähler: {
                text01: "Auch auf dem Weg nach Hause, folgt dir der Pinguin beharrlich, wie ein kleiner Schatten, auf Schritt und Tritt.",
                text02: "Kurz bevor du wieder zu Hause angekommen bist, bleibst du stehen.",
                text03: "Der Pinguin stoppt ebenfalls...",
                text04: "Plötzlich fällt dir auf, dass er irgedwie müde und auch traurig aussieht.",
                text05: "<i>„Vielleicht hat er hunger?“</i> überlegst du.",
                text06: "Du hast noch etwas von deinem Sandwich übrig, das du ihm anbieten könntest.",
                text07: "Dann fällt es dir wie Schuppen von den Augen. <i>„Na klar! Er muss sich wohl verirrt haben und jetzt findet er nicht mehr nach Hause.“</i>",
                text08: "<i><b>„Wie heißt du? Hast du dich verlaufen?“</i></b> fragst du ihn.",
                text09: "Doch der Pinguin antwortet nicht.",
                text10: "Du überlegst...<i>„Hmm…“</i>",
                text11: "<i><b>„Weißt du was, ich werde dir helfen wieder nach Hause zu finden!“ „Und ich nennen dich…“</i></b>",
            }
        };

        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text04);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text05);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text06);

        let options = {

            giveSandwich: "Sandwich geben",
            keepSandwich: "Sandwich behalten"
        };

        let dialogueElement = await ƒS.Menu.getInput(options, "choices");

        switch (dialogueElement) {

            case options.giveSandwich:
                // continue path here
                console.log("Sandwich geben");
                await ƒS.Speech.tell(characters.narrator, "Du kramst deine Brotbox hervor und streckst dem Pinguin das Sandwich hin.");
                await ƒS.Speech.tell(characters.narrator, "Der Pinguin nimmt es dankbar entgegen und schlingt es gierig hinunter.");
                dataForSave.affectionScore += 10;
                await ƒS.Speech.tell(characters.narrator, "Doch er sieht immer noch traurig aus.");
                break;
            case options.keepSandwich:
                // continue path here
                console.log("Sandwich behalten");
                await ƒS.Speech.tell(characters.narrator, "Du beschließt dein Sandwich nicht zu teilen.");
                await ƒS.Speech.tell(characters.narrator, "Du weißt ja auch gar nicht, ob Pinguine überhaupt Sandwichs essen.");
                await ƒS.Speech.tell(characters.narrator, "Doch... <i>warum sieht er so traurig aus?</i> fragst du dich.");
                break;
        }
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text07);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text08);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text09);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text10);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text11);
        dataForSave.namePingu = await ƒS.Speech.getInput();
        characters.penguin.name = dataForSave.namePingu;

        await ƒS.Speech.tell(characters.narrator,  characters.penguin.name + " scheint den Namen zu mögen");
        ƒS.Sound.fade(audio.cityTraffic, 0, 1, true);



































    }
}