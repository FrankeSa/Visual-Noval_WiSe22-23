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
    credits: "Credits"
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
      edge: 1
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
    //SFX
    shipHorn: "Audio/ship_horn.mp3"
  };

  export let locations = {
    yourRoom: {
      name: "in your nursery",
      background: "Images/Hintergruende/kinderzimmer.png"
    },
    getLunchbox: {
      name: "get your lunchbox from your Grandmother",
      background: "Images/Hintergruende/oma_mit_kind_vesper.png"
    },
    meetThePenguin: {
      name: "you meet the penguin in front of your door",
      background: "Images/Hintergruende/an_der_Haustuer.png"
    },
    wayToSchool: {
      name: "walk to school with penguin",
      background: "Images/Hintergruende/schulweg.png"
    },
    schoolyard: {
      name: "penguin on schoolyard",
      background: "Images/Hintergruende/auf_dem_schulhof.png"
    },
    giveSandwich: {
      name: "you look in the night sky",
      background: "Images/Hintergruende/pinguin_sandwich.png"
    },
    nightSky: {
      name: "you look in the night sky",
      background: "Images/Hintergruende/nachthimmel.png"
    },
    lafOffice: {
      name: "at the lost and found office",
      background: "Images/Hintergruende/im_fundbuero.png"
    },
    badEnding: {
      name: "the penguin is captured",
      background: "Images/Hintergruende/pinguin_im_kaefig.png"
    },
    atThePark: {
      name: "you and the penguin at the park",
      background: "Images/Hintergruende/im_park.png"
    },
    atTheHarbor: {
      name: "you and the penguin at the harbor",
      background: "Images/Hintergruende/am_hafen.png"
    },
    packSuitcase: {
      name: "get ready for adventure",
      background: "Images/Hintergruende/koffer_packen.png"
    },
    atSee: {
      name: "you and the penguin on your way to the South Pole",
      background: "Images/Hintergruende/meer.png"
    },
    bigWave: {
      name: "big Wave",
      background: "Images/Hintergruende/große_welle.png"
    },
    atSouthPole: {
      name: "SouthPole",
      background: "Images/Hintergruende/am_suedpol.png"
    },
    happyEnd: {
      name: "Happy End",
      background: "Images/Hintergruende/happy_end.png"
    },
    bgBrown: {
      name: "brown background",
      background: "Images/Hintergruende/bg_allgemein.png"
    },
    bgBlue: {
      name: "blue background",
      background: "Images/Hintergruende/bg_rueckkehr_pinguin.png"
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
        reading: "Images/Charaktere/Kind/kind_liest_buch.png",
        idea: "Images/Charaktere/Kind/kind_idee.png"
      }
    },
    penguin: {
      name: "",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        front: "Images/Charaktere/Pinguin/pinguin.png",
        side: "Images/Charaktere/Pinguin/pinguin_seitlich.png",
        sad: "Images/Charaktere/Pinguin/pinguin_traurig.png",
        happy: "Images/Charaktere/Pinguin/ruerckkehr_pinguin.png"
      }
    },
    Karl: {
      name: "Karl"
    },

    bigstar: {
      name: "big star",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        shining: "Images/Charaktere/Sonstige/big_star.png"
      }
    },
    littlestar: {
      name: "little star",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        shining: "Images/Charaktere/Sonstige/little_star.png"
      }
    },
    speechBubble_wow: {
      name: "Speech Bubble WOW",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        shining: "Images/Charaktere/Sonstige/sprechblase_wow.png"
      }
    },
    speechBubble_sueß: {
      name: "Speech Bubble süß",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        shining: "Images/Charaktere/Sonstige/sprechblase_wie_suess.png"
      }
    },
    littledove: {
      name: "littel dove",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        normal: "Images/Charaktere/Sonstige/kleine_taube.png"
      }
    },
    bigdove: {
      name: "Taube",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        injured: "Images/Charaktere/Sonstige/taube_verletzt.png"
      }
    },
    doveWithPevement: {
      name: "",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        withPavement: "Images/Charaktere/Sonstige/taube_mit_pflaster.png"
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
      image: "Images/Equipment/schirm.png",
      static: false //wenn true dann kann das Item verwendet werden
    },
    secondItem: {
      name: "Taschenlampe ",
      description: "bringt Licht ins Dunkle ",
      image: "Images/Equipment/taschenlampe.png",
      static: false
    },
    thirdItem: {
      name: "Schaal ",
      description: "hält schön warm ",
      image: "Images/Equipment/schaal.png",
      static: false
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
      start: { translation: ƒS.positionPercent(50, 74) },
      end: { translation: ƒS.positionPercent(49, 74) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }


  export function credits(): void {
    ƒS.Text.print("Hier könnten Ihre Credits stehen");

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
    }
  }


  // Menu Shortcuts
  document.addEventListener("keydown", hdlKeyPress);
  async function hdlKeyPress(_event: KeyboardEvent): Promise<void> {

    switch (_event.code) {

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
        await credits();
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
      // { id: "s00", scene: Scene00, name: "Vorwort", next: "s01" },
      // { id: "s01", scene: Scene01, name: "In deinem Kinderzimmer", next: "s02" },
      // { id: "s02", scene: Scene02, name: "Oma überreicht dir deine Brotbox", next: "s03" },
      // { id: "s03", scene: Scene03, name: "An der Haustür", next: "s04" },
      // { id: "s04", scene: Scene04, name: "Schulweg", next: "s05" },
      // { id: "s05", scene: Scene05, name: "Auf dem Schulhof", next: "s06" },
      // { id: "s06", scene: Scene06, name: "Der traurige Pinguin", next: "s07" },
      // { id: "s07", scene: Scene07, name: "Blick in den Sternenhimmel", next: "s08" },
      // { id: "s08", scene: Scene08, name: "Im Fundbüro", next: "s09" },
      { id: "s09", scene: Scene09, name: "Im Park", next: "s10" },
      { id: "s10", scene: Scene10, name: "Kind ließt Buch", next: "s11" },
      { id: "s11", scene: Scene11, name: "Koffer packen", next: "s12" },
      { id: "s12", scene: Scene12, name: "Am Hafen", next: "s13" }


    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }






}