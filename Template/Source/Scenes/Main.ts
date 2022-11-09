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
    drop: "Audio/drop.mp3"
  };

  export let locations = {
    beachDay: {
      name: "beachDay",
      background: "Template/Backgrounds/Beach_day.png"

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