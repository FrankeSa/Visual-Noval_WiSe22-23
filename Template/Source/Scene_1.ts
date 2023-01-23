namespace SarahsNovel {
  export async function Scene_1(): ƒS.SceneReturn {
    console.log("FudgeStory Template Sarah starting");

    document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = false); // false die meta wird angezeigt, true sie wird nicht angezeigt.

    let text = {
      Aisaka: {
        text1: "Hi, mein Name ist Aisake. Ich freue mich dich zu sehen. ",
        text2: "Hallo",
        text3: "Hoi"

      }

    };

    ƒS.Speech.setTickerDelays(50, 1000);
    let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]);

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.beachDay);
    // await ƒS.Sound.play(sound.drop, 1);
    await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge);
    // await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positions.right);

    await ƒS.update(1);
 
    await ƒS.Speech.tell(characters.narrator, text.Aisaka.text1 + dataForSave.nameProtagonist);
    // await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positionPercent(70, 100));
   
    signalDelay();

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
        await ƒS.Character.animate(characters.aisake, characters.aisake.pose.happy, getAnimation());
        break;
      case dialogue.isaydNo:
        // continue path here
        console.log("iSay No");
        await ƒS.Speech.tell(characters.aisake, "Dein Name ist also" + characters.protagonist.name);
        break;
      case dialogue.isayBla:
        // continue path here
        console.log("iSay Bla");
        
        dataForSave.affectionScore += 10;
        break;
      case dialogue.isayOK:
        // continue path here
        console.log("iSay OK");
        break;
    }





  }


















}
