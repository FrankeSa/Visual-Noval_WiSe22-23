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
      alpha: "Transitions/Others/039.jpg",
      edge: 2
    },
    crossingGeneral: {
      duration: 4,
      alpha: "Transitions/WipesAndOther/17.png",
      edge: 1
    }
  };

  export let sound = {
    //background themes

    //SFX
    drop: "Audio/drop.mp3"
  };

  export let locations = {
    yourRoom: {
      name: "in your nursery",
      background: "Images/Hintergruende/kinderzimmer.png"
    },
    getLunchbox: {
      name: "get your lunchbox from your Grandmother",
      background: "Images/Hintergruende/koffer_packen.png"
    },
    meetThePenguin: {
      name: "you meet the penguin in front of your door",
      background: "Images/Hintergruende/koffer_packen.png"
    },
    thePenguin: {
      name: "look at the penguin",
      background: "Images/Hintergruende/koffer_packen.png"
    },
    wayToSchool: {
      name: "walk to school with penguin",
      background: "Images/Hintergruende/koffer_packen.png"
    },
    schoolyard: {
      name: "penguin on schoolyard",
      background: "Images/Hintergruende/koffer_packen.png"
    },
    nightSky: {
      name: "you look in the night sky",
      background: "Images/Hintergruende/koffer_packen.png"
    },
    lafOffice: {
      name: "at the lost and found office",
      background: "Images/Hintergruende/koffer_packen.png"
    },
    badEnding: {
      name: "the penguin is captured",
      background: "Images/Hintergruende/koffer_packen.png"
    },
    atThePark: {
      name: "you and the penguin at the park",
      background: "Images/Hintergruende/koffer_packen.png"
    },
    atTheHarbor: {
      name: "you and the penguin at the harbor",
      background: "Images/Hintergruende/koffer_packen.png"
    },
    atSee: {
      name: "you and the penguin on your way to the South Pole",
      background: "Images/Hintergruende/koffer_packen.png"
    },
    bigWave: {
      name: "big Wave",
      background: "Images/Hintergruende/koffer_packen.png"
    },
    atSouthPole: {
      name: "SouthPole",
      background: "Images/Hintergruende/koffer_packen.png"
    },
    happyEnd: {
      name: "Happy End",
      background: "Images/Hintergruende/koffer_packen.png"
    },
    bgBrown: {
      name: "brown background",
      background: "Images/Hintergruende/koffer_packen.png"
    },
    bgBlue: {
      name: "blue background",
      background: "Images/Hintergruende/koffer_packen.png"
    }
  };

  export let characters = {
    narrator: {
      name: "Erzähler"
    },
    protagonist: {
      name: ""
    },
    kind: {
      name: "Kind",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        liestBuch: "Images/Charaktere/Kind/kind_liest_buch.png",
        hatIdee: "Images/Charaktere/Kind/kind_idee.png",
        umarmtPinguin: "Images/Charaktere/Kind/umarmung.png"
      }
    },
    pinguin: {
      name: "",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        angry: "",
        // happy: "Images/Characters/Pinguin/pinguin_ht.png",
        upset: ""
      }
    }
  };

  //Data that will be saved (game progress)

  export let dataForSave = {
    nameProtagonist: "",
    affectionScore: 0
  };

  export let items = {
    firstItem: {
      name: "Ein Kürbis zum Schutz vor Regen ",
      description: " ",
      image: "Images/Equipment/schirm.png",
      static: false //wenn true dann kann das Item verwendet werden
    },
    secondItem: {
      name: "Eine Blume ",
      description: "sieht schön aus ",
      image: "Images/Equipment/taschenlampe.png",
      static: false
    },
    thirdItem: {
      name: "Schaal ",
      description: "hält warm ",
      image: "Images/Equipment/schaal.png",
      static: false
    }
  };

  // export function animation(): ƒS.AnimationDefinition {
  //   return {
  //     start: { translation: ƒS.positions.bottomcenter, color: ƒS.Color.CSS("blue", 1) },
  //     end: { translation: ƒS.positions.bottomright, color: ƒS.Color.CSS("blue", 0) },
  //     duration: 3,
  //     playmode: ƒS.ANIMATION_PLAYMODE.LOOP

  //   };

  // }

  export function getAnimation(): ƒS.AnimationDefinition {
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

  async function btnFunctionalities(_option: string): Promise<void> {
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
    gameMenu = ƒS.Menu.create(inGameMenuBtn, btnFunctionalities, "gameMenuCSS");
    btnFunctionalities("Close");


    //****Szenen Hirarchie

    let scenes: ƒS.Scenes = [
      { scene: Scene_1, name: "In deinem Kinderzimmer" },
      { scene: Scene_2, name: "Oma überreicht dir deine Brotbox" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }






}