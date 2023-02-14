namespace SarahsNovel {
    export async function Scene16(): ƒS.SceneReturn {
        console.log("FudgeStory Scene16 starting");        
        // ƒS.Sound.play(audio.articWind, 0.07, true);

        await ƒS.Location.show(locations.bgBlue);
        document.getElementsByName("affectionScore").forEach(meterStuff => meterStuff.hidden = true);
        await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);


        await ƒS.Character.show(
            characters.child,
            characters.child.pose.sad,
            ƒS.positionPercent(54, 70)
        );
        ƒS.update(1.5);

        let text = {
            Erzähler: {
                text01: "Die Eisscholle ist kaum mehr zu sehen, als dich das Gefühl von Einsamkeit beschleicht.",
                text02: "„Ich vermisse " + characters.penguin.name + " jetzt schon“ geht dir durch den Kopf. ",
                text03: "Du kommst ins Grübeln.",
                text04: "... ... ...",
                text05: "In Gedanken gehst du nochmal alle Erlebnisse durch und dann wird es die Klar wie Kloßbrühe!",
                text06: "</i>„ " + characters.penguin.name + "</i>" + " hat sich nicht verirrt! " + "</i>" + characters.penguin.name + "</i>" + " ist einfach nur einsam!“",
                text07: "Du begreifst, dass du einen großen Fehler gemacht hast und beginnst sofort das Boot zu wenden und zurück zu rudern.",
                text08: "Aufgeregt hoffst du, dass es nicht zu spät ist und du den Pinguin wiederfinden wirst.",
                text09: "Deine Gedanken überschlagen sich...",
                text10: "Plötzlich siehst du etwas in der Ferne auf dich zukommen.",
                text11: "Es kommt näher und näher...",
                text12: "Langsam erkennst du es...",
                text13: "<b>Es ist der Pinguin!!!</b>",
                text14: "Angestrengt rudert er auf dich zu.",
                text15: "Du kannst dein Glück kaum fassen..."

            }
        };

        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text01);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text02);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text03);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text04);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text05);
        await ƒS.Character.hide(characters.child),
        
        await ƒS.Character.show(
            characters.child,
            characters.child.pose.idea,
            ƒS.positionPercent(81, 76)
        );
        ƒS.update(1);

        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text06);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text07);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text08);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text09);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text10);
        await ƒS.Character.hide(characters.child),
        ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text11);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text12);
      
        await ƒS.Character.show(
            characters.penguin,
            characters.penguin.pose.happy,
            ƒS.positionPercent(66, 94)
        );
        ƒS.update(1);

        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text13);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text14);
        await ƒS.Speech.tell(characters.narrator, text.Erzähler.text15);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Character.hideAll();
        ƒS.Sound.fade(audio.articWind, 0, 1, true); //Audio faded out to null

























    }




}