namespace SarahsNovel {
    export async function Scene02(): ƒS.SceneReturn {
        console.log("Scene02 Oma überreicht Brotbox starting");


        let text = {
            Erzähler: {
                text01: "Deine Oma küsst dich, wie jeden Morgen, liebevoll auf die Stirn.",
                text02: "Sie überreicht dir deine Brotbox, in der sich ein ganz besonders und mit viel Liebe zubereitetes Brot befindet",
                text03: "Und mit einen kurzen <i>„Hab dich lieb, Oma“<i> drehst du dich um und öffnest die Haustür."
            }

        };




        ƒS.Speech.hide();
        await ƒS.Location.show(locations.getLunchbox);
        await ƒS.update(transitions.crossingGeneral.duration, transitions.crossingGeneral.alpha, transitions.crossingGeneral.edge);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
        ƒS.Speech.clear();
        ƒS.Speech.hide();

        // await ƒS.Character.animate(characters.aisake, characters.aisake.pose.happy, animation());




    }

















}