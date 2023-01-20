declare namespace SarahsNovel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        drop: string;
    };
    let locations: {
        beachDay: {
            name: string;
            background: string;
        };
        school: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        aisake: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        affectionScore: number;
    };
    let items: {
        firstItem: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        secondItem: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    function getAnimation(): ƒS.AnimationDefinition;
    function credits(): void;
}
declare namespace SarahsNovel {
    function Scene_1(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene_2(): ƒS.SceneReturn;
}
