namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = {

      Aisaka: {

        text1: "Hi",
        text2: "Hi",
        text3: "Hi",

      }
    }

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.beachDay);
    await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positionPercent(100, 70))
    await ƒS.update();



  }


}
