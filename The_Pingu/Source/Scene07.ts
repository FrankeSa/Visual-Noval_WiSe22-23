namespace SarahsNovel {
    export async function Scene07(): ƒS.SceneReturn {
        console.log("FudgeStory Scene07 starting");

        ƒS.Sound.play(audio.moonSong, 0.07, true);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.nightSky);
        await ƒS.update(transitions.fadeSky.duration, transitions.fadeSky.alpha, transitions.fadeSky.edge);

        let text = {
            Erzähler: {
                text01: "Deine Oma war zwar sehr überrascht, dass du einen Pinguin mit nach Hause gebracht hast. Aber sie hat ihm sofort angesehen, dass ihn etwas bedrückt.",
                text02: "Also war sie einverstanden, dass du ihm hilfst wieder nach Hause zu finden.",
                text03: "Nachdem ihr zu Abend gegessen habt, richtest du dem Pinguin ein kleines Bettchen...",
                text04: "...und kuschelst dich danach in dein eigenes.",
                text05: "Die ganze Nacht grübelst du, wie du dem Pinguin helfen kannst. Aber dir will einfach nichts einfallen.",
                text06: "Du weißt ja nicht einmal, wo sein zu Hause ist..."

            }
        };


        await ƒS.Character.animate(characters.bigstar, characters.bigstar.pose.shining, bigStarShining());
        // await ƒS.update();
        await ƒS.Character.animate(characters.littlestar, characters.littlestar.pose.shining, littleStarShining());
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text04);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text05);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text06);
        dataForSave.affectionScore += 10;
        await ƒS.update(1);
        ƒS.Speech.clear();
        ƒS.Character.hide(characters.bigstar);
        ƒS.Character.hide(characters.littlestar);
        ƒS.Speech.hide();
        ƒS.Sound.fade(audio.moonSong, 0, 1, true);
        await ƒS.update(1);










    }
}