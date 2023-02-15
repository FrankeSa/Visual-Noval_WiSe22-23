namespace SarahsNovel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
 
  console.log("Scene_1 In deinem Zimmer is starting");
  // Menu
  let gameMenu: ƒS.Menu;
  let menuIsOpen: boolean = true;
  export let affectionScore: number;
  

  let inGameMenuBtn = {
    save: "Save",
    load: "Load",
    close: "Close",
    credits: "Credits",
    inventory: "Inventory"
  };

  export let transitions = {

    beginning: {
      duration: 3,
      alpha: "Transitions/WipesAndOther/circlewipe-ccw.jpg",
      edge: 2
    },
    crossingGeneral: {
      duration: 4,
      alpha: "Transitions/WipesAndOther/17.png",
      edge: 2
    },
    fadeSky: {
      duration: 4,
      alpha: "Transitions/WipesAndOther/4.jpg",
      edge: 1
    },
    swirl: {
      duration: 4,
      alpha: "Transitions/Others/swirl.png",
      edge: 1
    },
    wave: {
      duration: 4,
      alpha: "Transitions/WipesAndOther/25.png",
      edge: 1
    },
    wet: {
      duration: 4,
      alpha: "Transitions/Others/wet.jpg",
      edge: 1
    }
  };

  export let audio = {
    //background themes
    nursery: "Audio/birds_in_the_morning.mp3",
    cityTraffic: "Audio/city_traffic_outdoor.mp3",
    playground: "Audio/playground.mp3",
    atHome: "Audio/mother.mp3",
    moonSong: "Audio/moon_song.mp3",
    pidgeonsPark: "Audio/pidgeons_cooing_city_park.mp3",
    shipAtHarbor: "Audio/boat_at_harbor.mp3",
    atSea: "Audio/waves.mp3",
    stormyWeather: "Audio/rain_and_thunder.mp3",
    articWind: "Audio/wind_artic_cold.mp3",
    officeAmbience: "Audio/office_ambience.mp3",
    badEnd: "Audio/bad_end.mp3",
    adventureBegins: "Audio/call_to_adventure.mp3",
    //SFX
    shipHorn: "Audio/ship_horn.mp3",
    shortKiss: "Audio/short_kiss.mp3",
    childYawning: "Audio/child_yawning.mp3",
    boltCutter: "Audio/bolt_cutter.mp3"
  };

  export let locations = {
    yourRoom: {
      name: "in your nursery",
      background: "Images/Background/nursery.png"
    },
    getLunchbox: {
      name: "get your lunchbox from your Grandmother",
      background: "Images/Background/grandmotherAndchild.png"
    },
    meetThePenguin: {
      name: "you meet the penguin in front of your door",
      background: "Images/Background/frontdoor.png"
    },
    wayToSchool: {
      name: "walk to school with penguin",
      background: "Images/Background/wayToSchool.png"
    },
    schoolyard: {
      name: "penguin on schoolyard",
      background: "Images/Background/schoolyard.png"
    },
    giveSandwich: {
      name: "you look in the night sky",
      background: "Images/Background/penguinSad.png"
    },
    nightSky: {
      name: "you look in the night sky",
      background: "Images/Background/nightSky.png"
    },
    lafOffice: {
      name: "at the lost and found office",
      background: "Images/Background/lafOffice.png"
    },
    badEnding: {
      name: "the penguin is captured",
      background: "Images/Background/penguinInCage.png"
    },
    atThePark: {
      name: "you and the penguin at the park",
      background: "Images/Background/park.png"
    },
    atTheHarbor: {
      name: "you and the penguin at the harbor",
      background: "Images/Background/harbor.png"
    },
    packSuitcase: {
      name: "get ready for adventure",
      background: "Images/Background/packSuitcase.png"
    },
    atSee: {
      name: "you and the penguin on your way to the South Pole",
      background: "Images/Background/ocean.png"
    },
    bigWave: {
      name: "big Wave",
      background: "Images/Background/bigWave.png"
    },
    atSouthPole: {
      name: "SouthPole",
      background: "Images/Background/southPole.png"
    },
    happyEnd: {
      name: "Happy End",
      background: "Images/Background/childAndPenguin.png"
    },
    bgBrown: {
      name: "brown background",
      background: "Images/Background/bgBrown.png"
    },
    bgBlue: {
      name: "blue background",
      background: "Images/Background/bgBlue.png"
    }

  };

  export let characters = {
    narrator: {
      name: "Erzähler"
    },
    // protagonist: {
    //   name: "Protagonist"
    // },
    grandmother: {
      name: "Oma"
    },
    child: {
      name: "Kind",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        reading: "Images/Characters/Child/childBookReading.png",
        idea: "Images/Characters/Child/childIdea.png",
        talking: "Images/Characters/Child/childTalking.png",
        sad: "Images/Characters/Child/childSad.png"
      }
    },
    penguin: {
      name: "",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        front: "Images/Characters/Penguin/penguin.png",
        side: "Images/Characters/Penguin/penguinAtTheSide.png",
        sad: "Images/Characters/Penguin/penguinSad.png",
        happy: "Images/Characters/Penguin/penguinUmbrella.png"
      }
    },
    karl: {
      name: "Karl"
    },

    bigstar: {
      name: "big star",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        shining: "Images/Characters/Others/bigStar.png"
      }
    },
    littlestar: {
      name: "little star",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        shining: "Images/Characters/Others/littleStar.png"
      }
    },
    speechBubble_wow: {
      name: "Speech Bubble WOW",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        shining: "Images/Characters/Others/speechBubbleWow.png"
      }
    },
    speechBubbleSweet: {
      name: "Speech Bubble süß",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        shining: "Images/Characters/Others/speechBubbleSweet.png"
      }
    },
    littledove: {
      name: "littel dove",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        normal: "Images/Characters/Others/littleDove.png"
      }
    },
    bigdove: {
      name: "Taube",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        injured: "Images/Characters/Others/doveInjured.png"
      }
    },
    doveWithPevement: {
      name: "",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        withPavement: "Images/Characters/Others/doveWithPavement.png"
      }
    },
    iceFloe: {
      name: "ice floe",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        floating: "Images/Characters/Others/iceberg.png"
      }
    }

  };

  //Data that will be saved in game progress  

  export let dataForSave = {
    namePingu: "",
    affectionScore: 0
  };

  export let items = {
    firstItem: {
      name: "Regenschirm ",
      description: "für stürmische Zeiten ",
      image: "Images/Items/umbrella.png",
      static: true //wenn false dann kann das Item verwendet werden
    },
    secondItem: {
      name: "Taschenlampe ",
      description: "bringt Licht ins Dunkle ",
      image: "Images/Items/torch.png",
      static: true
    },
    thirdItem: {
      name: "Schal ",
      description: "hält schön warm ",
      image: "Images/Items/scarf.png",
      static: true
    }
  };

  export function bigStarShining(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(45, 60), color: ƒS.Color.CSS("", 1) },
      end: { translation: ƒS.positionPercent(45, 60), color: ƒS.Color.CSS("", 0) },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.REVERSELOOP

    };

  }
  export function littleStarShining(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(66, 40), color: ƒS.Color.CSS("", 1) },
      end: { translation: ƒS.positionPercent(66, 40), color: ƒS.Color.CSS("", 0) },
      duration: 2.5,
      playmode: ƒS.ANIMATION_PLAYMODE.REVERSELOOP

    };

  }

  export function moveBackAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50, 73) },
      end: { translation: ƒS.positionPercent(49, 73) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function floatingLeftToRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.centerleft, color: ƒS.Color.CSS("", 1) },
      end: { translation: ƒS.positions.centerright, color: ƒS.Color.CSS("", 0) },
      duration: 6,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE

    };

  }


  export function credits(): void {
    ƒS.Text.print("Alle Hintergründe und Charaktere sind gezeichnet von: <b>Sarah Franke</b><br>Die Visual Novel basiert auf der Geschichte von <b>Oliver Jeffers <i>„Lost and Found“</i></b></br>Musik und Soundeffekt sind von <b>pixabay.com</b>");

  }

  async function hdlMenuBtn(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuBtn.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuBtn.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuBtn.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
      case inGameMenuBtn.credits:
        credits();
        break;
      case inGameMenuBtn.inventory:
        await ƒS.Inventory.open();
    }
  }


  // Menu Shortcuts
  document.addEventListener("keydown", hdlKeyPress);
  async function hdlKeyPress(_event: KeyboardEvent): Promise<void> {

    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.I:
        console.log("Inventory");
        await ƒS.Inventory.open();
        break;
      case ƒ.KEYBOARD_CODE.S:
        console.log("Save Scene");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.L:
        console.log("Load Scene");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.C:
        console.log("Show Credits");
        credits();
        break;
      case ƒ.KEYBOARD_CODE.M:

        if (menuIsOpen) {
          console.log("Menu is closed");
          gameMenu.close();
          menuIsOpen = false;
        }

        else {
          console.log("Menu is open");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
    }
  }


  window.addEventListener("load", start);


  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuBtn, hdlMenuBtn, "gameMenuCSS");
    hdlMenuBtn("Close");


    //****Szenen Hirarchie

    let scenes: ƒS.Scenes = [
      { id: "s00", scene: Scene00, name: "Leere Szene", next: "" },
      { id: "s01", scene: Scene01, name: "Kinderzimmer", next: "s02" },
      { id: "s02", scene: Scene02, name: "Oma überreicht dir deine Brotbox", next: "s03" },
      { id: "s03", scene: Scene03, name: "An der Haustür", next: "s04" },
      { id: "s04", scene: Scene04, name: "Schulweg", next: "s05" },
      { id: "s05", scene: Scene05, name: "Auf dem Schulhof", next: "s06" },
      { id: "s06", scene: Scene06, name: "Der traurige Pinguin", next: "s07" },
      { id: "s07", scene: Scene07, name: "Blick in den Sternenhimmel", next: "s08" },
      { id: "s08", scene: Scene08, name: "Im Fundbüro", next: "s09" },
      { id: "s09", scene: Scene09, name: "Im Park", next: "s10" },
      { id: "s10", scene: Scene10, name: "Kind liest Buch", next: "s11" },
      { id: "s11", scene: Scene11, name: "Koffer packen", next: "s12" },
      { id: "s12", scene: Scene12, name: "Am Hafen", next: "s13" },
      { id: "s13", scene: Scene13, name: "Auf See", next: "s14" },
      { id: "s14", scene: Scene14, name: "Große Welle", next: "s15" },
      { id: "s15", scene: Scene15, name: "Am Südpol", next: "Scene00" },
      { id: "s16", scene: Scene16, name: "Rückkehr", next: "s17" },
      { id: "s17", scene: Scene17, name: "Happy End", next: "Scene00" },
      { id: "s18", scene: Scene18, name: "Bad End", next: "Scene00" }


    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }






}