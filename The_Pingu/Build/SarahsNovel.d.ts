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
        fadeSky: {
            duration: number;
            alpha: string;
            edge: number;
        };
        swirl: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wave: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wet: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let audio: {
        nursery: string;
        cityTraffic: string;
        playground: string;
        atHome: string;
        moonSong: string;
        pidgeonsPark: string;
        shipAtHarbor: string;
        atSea: string;
        stormyWeather: string;
        articWind: string;
        officeAmbience: string;
        badEnd: string;
        adventureBegins: string;
        shipHorn: string;
        shortKiss: string;
        childYawning: string;
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
        wayToSchool: {
            name: string;
            background: string;
        };
        schoolyard: {
            name: string;
            background: string;
        };
        giveSandwich: {
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
        packSuitcase: {
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
        grandmother: {
            name: string;
        };
        child: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                reading: string;
                idea: string;
                talking: string;
                sad: string;
            };
        };
        penguin: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                front: string;
                side: string;
                sad: string;
                happy: string;
            };
        };
        karl: {
            name: string;
        };
        bigstar: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                shining: string;
            };
        };
        littlestar: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                shining: string;
            };
        };
        speechBubble_wow: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                shining: string;
            };
        };
        speechBubbleSweet: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                shining: string;
            };
        };
        littledove: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        bigdove: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                injured: string;
            };
        };
        doveWithPevement: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                withPavement: string;
            };
        };
        iceFloe: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                floating: string;
            };
        };
    };
    let dataForSave: {
        namePingu: string;
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
    function bigStarShining(): ƒS.AnimationDefinition;
    function littleStarShining(): ƒS.AnimationDefinition;
    function moveBackAnimation(): ƒS.AnimationDefinition;
    function floatingLeftToRight(): ƒS.AnimationDefinition;
    function credits(): void;
}
declare namespace SarahsNovel {
    function Scene00(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene01(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene02(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene03(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene04(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene05(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene06(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene07(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene08(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene09(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene10(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene11(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene12(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene13(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene14(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene15(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene16(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene17(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene18(): ƒS.SceneReturn;
}
declare namespace SarahsNovel {
    function Scene_1(): ƒS.SceneReturn;
}
