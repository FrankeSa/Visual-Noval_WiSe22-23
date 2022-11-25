namespace SarahsNovel {
    export async function Scene_2(): ƒS.SceneReturn {
        console.log("FudgeStory Template Sarah starting");

        await ƒS.Character.show(characters.aisake, characters.aisake.pose.happy, ƒS.positions.bottomcenter);
        ƒS.update();

        await ƒS.Character.animate(characters.aisake, characters.aisake.pose.happy, animation());


    }



















}