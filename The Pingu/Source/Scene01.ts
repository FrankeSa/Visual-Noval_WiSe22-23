namespace SarahsNovel {
  export async function Scene01(): ƒS.SceneReturn {

    console.log("FudgeStory Template Sarah starting");
    // ƒS.Sound.play(audio.nursery, 0.05, false);
    document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true); // false die meta wird angezeigt, true sie wird nicht angezeigt.
    ƒS.Sound.play(audio.nursery, 0.07, false);

    let text = {
      Erzähler: {
        text01: "Ein neuer Tag hat begonnen. Die Sonne ist gerade aufgegangen und draußen zwitschern die Vögel eifrig um die Wette.",
        text02: "Noch etwas verschlafen gähnst du erstmal ins Leere und reibst dir den Schlafsand aus den Augen.",
        text03: "Kräftig streckst du alle Glieder von dir, kriechst aus deinem Bett und richtest dir deine Schulsachen für den heutigen Tag.",
        text04: "Anschließend machst du dich im Badezimmer fertig.",
        text05: "Danach gehst du runter zu deiner Oma..."

      }
    };
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.yourRoom);
    await ƒS.update(transitions.beginning.duration, transitions.beginning.alpha, transitions.beginning.edge);

    await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
    await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
    await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
    await ƒS.Speech.tell(characters.narrator, text.Erzähler.text04);
    await ƒS.Speech.tell(characters.narrator, text.Erzähler.text05);
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Sound.fade(audio.nursery, 0, 1, true); //Audio faded out to null
    await ƒS.update();

  }



}
