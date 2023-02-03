namespace SarahsNovel {
  export async function Scene01(): ƒS.SceneReturn {
    console.log("FudgeStory Template Sarah starting");
    document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true); // false die meta wird angezeigt, true sie wird nicht angezeigt.


    let text = {
      Erzähler: {
        text01: "Es ist ein neuer Tag. Die Sonne ist gerade aufgegangen und draußen zwitschern die Vögel eifrig um die Wette.",
        text02: "Noch etwas verschlafen richtest du dir deine Schulsachen für den heutigen Tag und machst dich anschließend im Badezimmer fertig.",
        text03: "Danach gehst du runter zu deiner Oma…"
      }
    };
    console.log("Audio oben");
    ƒS.Sound.play(audio.nursery, 0.07, false);
    ƒS.Speech.hide();
    console.log("Audio unten");
  
    await ƒS.Location.show(locations.yourRoom);
    await ƒS.update(transitions.crossingGeneral.duration, transitions.crossingGeneral.alpha, transitions.crossingGeneral.edge);

    await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
    await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
    await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.update();
    ƒS.Sound.fade(audio.nursery, 0, 1, true);

  }



}
