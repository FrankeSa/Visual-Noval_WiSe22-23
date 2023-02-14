namespace SarahsNovel {
    export async function Scene09(): ƒS.SceneReturn {
        ƒS.Sound.play(audio.pidgeonsPark, 0.7, true);

        await ƒS.Location.show(locations.atThePark);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = false);
        await ƒS.update(transitions.crossingGeneral.duration, transitions.crossingGeneral.alpha, transitions.crossingGeneral.edge);

        let text = {
            Erzähler: {
                text01: "Draußen im Park fragst du ein paar Tauben, die gurrend auf den Bäumen sitzen.",
                text02: "<i><b>„Wisst ihr woher dieser Pinguin kommt?“</i></b> rufst du zu ihnen hoch.",
                text03: "Doch sie ignorieren dich...",
                text04: "Da hüpft plötzlich eine kleine Taube auf " + characters.penguin.name + " zu.",
                text05: "Sie scheint verletzt zu sein...",
                text06: "<i><b>„Hallo, kleine Taube. Weißt du, woher dieser Pinguin kommt?“</i></b> fragst du sie.",
                text07: "Überrascht fragst du die Taube <i><b>„Warum hast du denn ein Loch in deinem Flügel?“</i></b>",
                text08: "Ungläubig erwiderst du <i><b>„Aber warum sollte er auf dich schießen, du hast ihm ja nichts getan?“</i></b>",
                text09: "<i><b>„Du armes kleines Geschöpf, das ist ja furchtbar“</i></b> gibst du bedauernd zurück.",
                text10: "Du kramst in deiner Hosentasche und findest ein Pflaster, das du der Taube auf den Flügel klebst.",
                text11: "<i><b>„Tut mir leid, aber ich habe gerade andere Sorgen“</i></b> erklärst du der Taube.",
                text12: "Langsam wird es dunkel und du und " + characters.penguin.name + " macht euch auf den Weg nach Hause."
            },
            Taube: {
                text01: "„Nein, das weiß ich leider nicht. Aber kannst du mir bitte helfen?",
                text02: "„In meinem Flügel ist ein Loch und jetzt kann ich nicht mehr fliegen“",
                text03: "„Ein Mann hat mit einem Luftgewehr auf mich geschossen, als ich auf seinem Hof nach Essen gesucht habe.“",
                text04: "„Das war vor drei Tagen und seitdem habe ich große Schmerzen.“",
                text05: "„Die Menschen denken, dass wir Krankheiten verbreiten und sie verjagen uns, wegen unseren Hinterlassenschaften.“",
                text06: "„Weil wir in der Natur kaum mehr natürliches Futter finden, suchen wir uns das Essen eben von den Menschen zusammen.“",
                text07: "„Aber, weil das Brot oder die Pommes der Menschen uns nicht guttun, bekommen wir davon Bauchweh und unsere Hinterlassenschaften sehen dann unschön aus.“",
                text08: "„Kannst du mir nun helfen oder nicht?“"
            }
        };

        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
        await ƒS.Character.show(
            characters.littledove,
            characters.littledove.pose.normal,
            ƒS.positionPercent(24, 78)
        );
        ƒS.update(2);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text04);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text05);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text06);
        ƒS.Character.hide(characters.littledove);
        await ƒS.Character.show(
            characters.bigdove,
            characters.bigdove.pose.injured,
            ƒS.positionPercent(45, 63)
        );
        ƒS.update(2);
        await ƒS.Speech.tell(characters.bigdove, text.Taube.text01);
        await ƒS.Speech.tell(characters.bigdove, text.Taube.text02);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text07);
        await ƒS.Speech.tell(characters.bigdove, text.Taube.text03);
        await ƒS.Speech.tell(characters.bigdove, text.Taube.text04);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text08);
        await ƒS.Speech.tell(characters.bigdove, text.Taube.text05);
        await ƒS.Speech.tell(characters.bigdove, text.Taube.text06);
        await ƒS.Speech.tell(characters.bigdove, text.Taube.text07);
        await ƒS.Speech.tell(characters.bigdove, text.Taube.text08);

        let options = {

            help: "Helfen",
            nohelp: "Nicht helfen"
        };

        let dialogueElement = await ƒS.Menu.getInput(options, "choices");


        switch (dialogueElement) {

            case options.help:
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text09);
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text10);
                ƒS.Character.hide(characters.bigdove);
                await ƒS.Character.show(
                    characters.doveWithPevement,
                    characters.doveWithPevement.pose.withPavement,
                    ƒS.positionPercent(45, 64)
                );
                ƒS.update(1);
                await ƒS.Speech.tell(characters.bigdove, "„Vielen Dank, das ist sehr nett von dir.“ Ich hoffe du findest das zu Hause deines Pinguins.");
                dataForSave.affectionScore += 10;
                break;
            case options.nohelp:
                await ƒS.Speech.tell(characters.narrator, text.Erzähler.text11);
                dataForSave.affectionScore -= 10;
                break;
        }
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text12);
        ƒS.Character.hideAll();
        ƒS.Speech.clear();
        ƒS.Speech.hide();

















        ƒS.Sound.fade(audio.pidgeonsPark, 0, 1, true); //Audio faded out to null


    }




}