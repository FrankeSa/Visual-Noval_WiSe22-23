namespace SarahsNovel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Scene_1 is starting");
  // Menu
  let gameMenu: ƒS.Menu;
  let menuIsOpen: boolean = true;

  let inGameMenuBtn = {
    save: "Save",
    load: "Load",
    close: "Close",
    credits: "Credits"
  };

  export let transition = {

    puzzle: {
      duration: 2,
      alpha: "Transitions/Others/wet.jpg",
      edge: 2
    }
  };

  export let sound = {
    //background themes

    //SFX
    drop: "Audio/drop.mp3"
  };

  export let locations = {
    beachDay: {
      name: "beachDay",
      background: "Images/Backgrounds/Beach_day.png"
    },
    school: {
      name: "school",
      background: "Images/Backgrounds/01.png"
    }
  };

  export let characters = {
    narrator: {
      name: "Erzähler"
    },
    protagonist: {
      name: ""
    },
    aisake: {
      name: "Aisaka",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Characters/aisaka_angry.png",
        happy: "Characters/aisaka_happy.png",
        upset: "Characters/aisaka_upset.png"
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
      image: "Images/tile_0004.png",
      static: false //wenn true dann kann das Item verwendet werden
    },
    secondItem: {
      name: "Eine Blume ",
      description: "sieht schön aus ",
      image: "Images/tile_0020.png",
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
      start: { translation: ƒS.positionPercent(70, 100) },
      end: { translation: ƒS.positionPercent(60, 100) },
      duration: 4,
      playmode: ƒS.ANIMATION_PLAYMODE.LOOP
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
      // { scene: Scene_2, name: "Scene_2" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }






}