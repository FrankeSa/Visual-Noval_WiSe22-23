namespace SarahsNovel {
  export async function Scene_1(): ƒS.SceneReturn {
    console.log("FudgeStory Template Sarah starting");

    document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true); // false die meta wird angezeigt, true sie wird nicht angezeigt.

    let text = {
      Erzähler: {
        text01: "Doch nanu! Wer steht dort vor der Tür? Verdutzt bleibst du stehen.",
        text02: "Hallo",
        text03: "Hoi"
      }

    };
    await ƒS.Sound.fade(audio.nursery, 0.07, 0.1, false);
    await ƒS.Location.show(locations.yourRoom);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01 + dataForSave.nameProtagonist);
    // ƒS.Speech.setTickerDelays(70, 0);
    // let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]);

    ƒS.Speech.hide();
   


    await ƒS.Sound.play(audio.shipHorn, 1);
   
    // await ƒS.Character.show(characters.kind, characters.kind.pose.happy, ƒS.positionPercent(50, 74));
    await ƒS.update(transitions.crossingGeneral.duration, transitions.crossingGeneral.alpha, transitions.crossingGeneral.edge);


    await ƒS.update(1);

    await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01 + dataForSave.nameProtagonist);
    // await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positions.right);
    // await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positionPercent(70, 100));
    await ƒS.Character.show(characters.kind, characters.kind.pose.idea, ƒS.positionPercent(70, 100));

    // signalDelay();

    //******INVENTAR******** */

    // ƒS.Inventory.add(items.firstItem);
    // for (let i: number = 0; i < 5; i++) {
    //   ƒS.Inventory.add(items.firstItem);
    // }
    dataForSave.nameProtagonist = await ƒS.Speech.getInput();
    characters.protagonist.name = dataForSave.nameProtagonist;


    // await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(1); // Die Zahl in der Klammer zeigt an, wie schnell (in sek.) der Character erscheint 
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    let dialogue = {

      isayYes: "Yes",
      isaydNo: "No",
      isayBla: "Bla",
      isayOK: "Ok"
    };
    let dialogueElement = await ƒS.Menu.getInput(dialogue, "choices"); // Die choicesCSSClass wird in der CSS Datei dann angelegt und gestyled
    //     //*******WHILE SCHLEIFE */
    //     let loopCount: number = 0;
    //     while (loopCount < 3) {
    //       let dialogueElement = await ƒS.Menu.getInput(dialogue, "choicesCSSClass"); // Die choicesCSSClass wird in der CSS Datei dann angelegt und gestyled
    //       if (dialogueElement === dialogue["isayYes"]) {
    //         ƒS.Text.print("Hier könnten Ihre Credits stehen");
    //         console.log("Erster Wahl JA");
    //         delete dialogue.isayYes;
    //       }
    //       if (dialogueElement === dialogue["isaydNo"]) {
    //         console.log("Zweite Wahl Nein");
    //         delete dialogue.isaydNo;

    //       }
    //       loopCount++;
    //     }
    // //*****While SChleife zu Ende */

    switch (dialogueElement) {

      case dialogue.isayYes:
        // continue path here
        console.log("iSay Yes");
        await ƒS.Character.animate(characters.kind, characters.kind.pose.idea, getAnimation());
        break;
      case dialogue.isaydNo:
        // continue path here
        console.log("iSay No");
        await ƒS.Speech.tell(characters.kind, "Dein Name ist also" + characters.protagonist.name);
        break;
      case dialogue.isayBla:
        // continue path here
        console.log("iSay Bla");

        dataForSave.affectionScore += 10;
        break;
      case dialogue.isayOK:
        // continue path here
        console.log("iSay OK");
        ƒS.Text.print("Du hast OK gedrückt");
        break;
    }

    if (dataForSave.affectionScore == 10) {

      await ƒS.Location.show(locations.getLunchbox);
    }

    console.log(dataForSave.affectionScore);

  }



//ADD ITEMS
// ƒS.Inventory.add(items.firstItem);
// ƒS.Inventory.add(items.secondItem);
// ƒS.Inventory.add(items.thirdItem);
// // for (let i: number = 0; i < 5; i++) {
// //     ƒS.Inventory.add(items.firstItem);
// // }

// await ƒS.Inventory.open();














}
