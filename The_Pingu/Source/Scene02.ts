namespace SarahsNovel {
    export async function Scene02(): ƒS.SceneReturn {
        console.log("Scene02 Oma überreicht Brotbox starting");

        ƒS.Sound.play(audio.atHome, 0.07, false);
        let text = {
            Erzähler: {
                text01: "Deine Oma küsst dich, wie jeden Morgen, liebevoll auf die Stirn.",
                text02: "Sie überreicht dir deine Brot Box, in der sich ein ganz besonders und mit viel Liebe zubereitetes Sandwich befindet.",
                text03: "Du nimmst sie entgegen und mit einem kurzen „Hab dich lieb, Oma“ drehst du dich um und öffnest die Haustür."
            },
            oma: {
                text01: "Guten Morgen, mein Schatz. Hier ist deine Brotbox. Ich wünsche dir viel Spaß in der Schule."
            }

        };




        ƒS.Speech.hide();
        await ƒS.Location.show(locations.getLunchbox);
        await ƒS.update(transitions.crossingGeneral.duration, transitions.crossingGeneral.alpha, transitions.crossingGeneral.edge);
        await ƒS.Speech.tell(characters.grandmother, text.oma.text01);
        ƒS.Sound.play(audio.shortKiss, 1.3, false);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);      
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Sound.fade(audio.atHome, 0, 1, true); //Audio faded out to null







    }

















}