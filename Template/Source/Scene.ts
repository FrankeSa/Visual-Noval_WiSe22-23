namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Sarah starting");

    let text = {

      Aisaka: {

        text1: "Hi",
        text2: "Hallo",
        text3: "Hoi"

      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.beachDay);
    await ƒS.update();
    await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positionPercent(70, 100));
    await ƒS.update();
    // await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.Speech.tell(characters.aisake, text.Aisaka.text1);
    await ƒS.update(2); // Die Zahl in der Klammer zeigt an, wie schnell (in sek.) der Character erscheint 

    let dialogue = {

      isayYes: "Yes",
      isaydNo: "No",
      isayBla: "Bla",
      isayOK: "Ok"
    };

    let dialogueElement = await ƒS.Menu.getInput(dialogue, "choicesCSSClass"); // Die choicesCSSClass wird in der CSS Datei dann angelegt und gestyled

    switch (dialogueElement) {

      case dialogue.isayYes:
        // continue path here
        console.log("iSay Yes");
        break;
      case dialogue.isaydNo:
        // continue path here
        console.log("iSay No");
        await ƒS.Speech.tell(characters.aisake, "Ich sage Nein");
        break;
      case dialogue.isayBla:
        // continue path here
        console.log("iSay Bla");
        break;
      case dialogue.isayOK:
        // continue path here
        console.log("iSay OK");
        break;
    }




  }






}
