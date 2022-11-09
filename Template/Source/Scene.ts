namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template 1Scene starting");

    let text = {

      Aisaka: {

        text1: "Hi",
        text2: "Hallo",
        text3: "Hoi"

      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.beachDay);
    await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positionPercent(100, 70))
    await ƒS.update();
    await ƒS.Speech.tell(characters.aisake, text.Aisaka.text1);



  }


}
