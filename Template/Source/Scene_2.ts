namespace SarahsNovel {
    export async function Scene_2(): ƒS.SceneReturn {
        console.log("FudgeStory Template Sarah starting");

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.getLunchbox);
        // await ƒS.Character.show(characters.kind, characters.kind.pose.hatIdee, ƒS.positions.bottomcenter);
        ƒS.update();

        // await ƒS.Character.animate(characters.aisake, characters.aisake.pose.happy, animation());


        ƒS.Inventory.add(items.firstItem);
        ƒS.Inventory.add(items.secondItem);
        ƒS.Inventory.add(items.thirdItem);
        // for (let i: number = 0; i < 5; i++) {
        //     ƒS.Inventory.add(items.firstItem);
        // }

        await ƒS.Inventory.open();

    }

















}