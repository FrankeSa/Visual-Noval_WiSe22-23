namespace SarahsNovel {
    export async function Scene14(): ƒS.SceneReturn {
        ƒS.Sound.play(audio.stormyWeather, 0.9, true);

        await ƒS.Location.show(locations.bigWave);
        // document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);
        await ƒS.update(transitions.wave.duration, transitions.wave.alpha, transitions.wave.edge);
        
      
        let text = {
            Erzähler: {
                text01: "Ihr kämpft euch durch große Wellen und schlechtes raues Wetter. Immer wieder muss sich der Pinguin am Boot festhalten, um nicht hinaus zu fallen.",
                text02: "Mit der Taschenlampe leuchtet er euch jedoch unbeirrt den Weg.",
                text03: "Kräftig hältst du die Paddel fest, damit sie nicht davon geschleudert werden.",
                text04: "Und endlich erreicht ihr den Südpol..."
            }
        };

        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
        horizontalShake();
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
        horizontalShake();
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text04);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Sound.fade(audio.stormyWeather, 0, 1, true); //Audio faded out to null

























    }




}