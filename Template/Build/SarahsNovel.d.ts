declare namespace SarahsNovel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let affectionScore: number;
    let transitions: {
        beginning: {
            duration: number;
            alpha: string;
            edge: number;
        };
        crossingGeneral: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        drop: string;
    };
    let locations: {
        yourRoom: {
            name: string;
            background: string;
        };
        getLunchbox: {
            name: string;
            background: string;
        };
        meetThePenguin: {
            name: string;
            background: string;
        };
        thePenguin: {
            name: string;
            background: string;
        };
        wayToSchool: {
            name: string;
            background: string;
        };
        schoolyard: {
            name: string;
            background: string;
        };
        nightSky: {
            name: string;
            background: string;
        };
        lafOffice: {
            name: string;
            background: string;
        };
        badEnding: {
            name: string;
            background: string;
        };
        atThePark: {
            name: string;
            background: string;
        };
        atTheHarbor: {
            name: string;
            background: string;
        };
        atSee: {
            name: string;
            background: string;
        };
        bigWave: {
            name: string;
            background: string;
        };
        atSouthPole: {
            name: string;
            background: string;
        };
        happyEnd: {
            name: string;
            background: string;
        };
        bgBrown: {
            name: string;
            background: string;
        };
        bgBlue: {
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
        kind: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                liestBuch: string;
                hatIdee: string;
                umarmtPinguin: string;
            };
        };
        pinguin: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
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
        thirdItem: {
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
