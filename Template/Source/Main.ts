namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

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
    drop: ""
  };

  export let locations = {
    beachDay: {
      name: "beachDay",
      background: "",

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
        angry: "pfad des bildes",
        happy: "",
        upset: ""
      }
    }
  };

  //Data that will be saved (game progress)

  export let dataForSave = {
    nameProtagonist: ""
  };


  window.addEventListener("load", start);


  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}