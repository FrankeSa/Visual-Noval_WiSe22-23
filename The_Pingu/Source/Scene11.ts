namespace SarahsNovel {
    export async function Scene11(): ƒS.SceneReturn {
        // ƒS.Sound.play(audio.cityTraffic, 0.07, true);
        await ƒS.Location.show(locations.packSuitcase);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);
        await ƒS.update(transitions.crossingGeneral.duration, transitions.crossingGeneral.alpha, transitions.crossingGeneral.edge);


        await ƒS.Speech.tell(characters.narrator, "<i><b>„Ich hole gleich meinen Koffer, dort können wir alles reintun, was wir für Unterwegs brauchen“</i></b>");

        let options = {

            umbrella: "Regenschirm",
            torch: "Taschenlampe",
            scarf: "Schal"
        };

        let loopCount: number = 0;
        while (loopCount < 3) {

            let dialogueElement = await ƒS.Menu.getInput(options, "CSSequipment"); // Die choicesCSSClass wird in der CSS Datei dann angelegt und gestyled

            if (dialogueElement === options["umbrella"]) {
                ƒS.Inventory.add(items.firstItem),
                    delete options.umbrella;
            }
            if (dialogueElement === options["torch"]) {
                ƒS.Inventory.add(items.secondItem),
                    delete options.torch;

            }
            if (dialogueElement === options["scarf"]) {
                ƒS.Inventory.add(items.thirdItem),
                    delete options.scarf;
            }
            loopCount++;

        }

        await ƒS.Speech.tell(characters.narrator, "Du klatschst freudig in die Hände." + " <i><b>„Super, dann kann es ja losgehen“</i></b>");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Sound.fade(audio.adventureBegins, 0, 0.09, true); //Audio faded out to null

        // await ƒS.Inventory.open(); 
























    }




}