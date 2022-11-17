namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");
  // Menu
  let gameMenu: ƒS.Menu;
  let menuIsOpen: boolean = true;
  let inGameMenuBtn = {
    save: "Save",
    load: "Load",
    close: "Close"
  };

  export let transition = {

    puzzle: {
      duration: 1,
      alpha: "",
      edge: 1
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


    }
  };

  export let characters = {
    narrator: {
      name: ""
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
    nameProtagonist: ""
  };

  export function animation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomcenter, color: ƒS.Color.CSS("blue", 1) },
      end: { translation: ƒS.positions.bottomright, color: ƒS.Color.CSS("blue", 0) },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.LOOP

    };
    
  }

  export function getAnimation(): ƒS.AnimationDefinition {
    return {
    start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
    end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
    duration: 1,
    playmode: ƒS.ANIMATION_PLAYMODE.LOOP
    };
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
      { scene: Scene, name: "Scene" },
      { scene: Scene_2, name: "Scene_2" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }






}