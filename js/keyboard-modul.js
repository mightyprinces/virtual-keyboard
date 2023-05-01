// add textarea
function createInput() {
  const inputEl = document.createElement("textarea");
  inputEl.classList.add("input-area", "use-keyboard-input");
  inputEl.setAttribute("placeholder", "Text should be here");
  document.body.appendChild(inputEl);
}

// add keyboard
const Keyboard = {
  elements: {
    keyboard: null,
    keys: [],
  },

  properties: {
    value: "",
    capsLock: false,
  },

  keysArr: [
    {"row":0, "code":"Digit1", "en":"`", "ru":"]"},
    {"row":0, "code":"Digit1", "en":"1", "ru":"1"},
    {"row":0, "code":"Digit2", "en":"2", "ru":"2"},
    {"row":0, "code":"Digit3", "en":"3", "ru":"3"},
    {"row":0, "code":"Digit4", "en":"4", "ru":"4"},
    {"row":0, "code":"Digit5", "en":"5", "ru":"5"},
    {"row":0, "code":"Digit6", "en":"6", "ru":"6"},
    {"row":0, "code":"Digit7", "en":"7", "ru":"7"},
    {"row":0, "code":"Digit8", "en":"8", "ru":"8"},
    {"row":0, "code":"Digit9", "en":"9", "ru":"9"},
    {"row":0, "code":"Digit0", "en":"0", "ru":"0"},
    {"row":0, "code":"Minus", "en":"-"," ru":"-"},
    {"row":0, "code":"Equal", "en":"=", "ru":"="},
    {"row":0, "code":"Backspace", "en":"Backspace", "ru":"Backspace"},

    {"row":1, "code":"Tab", "en":"", "ru":""},
    {"row":1, "code":"KeyQ", "en":"q", "ru":"й"},
    {"row":1, "code":"KeyW", "en":"w", "ru":"ц"},
    {"row":1, "code":"KeyE", "en":"e", "ru":"у"},
    {"row":1, "code":"KeyR", "en":"r", "ru":"к"},
    {"row":1, "code":"KeyT", "en":"t", "ru":"е"},
    {"row":1, "code":"KeyY", "en":"y", "ru":"н"},
    {"row":1, "code":"KeyU", "en":"u", "ru":"г"},
    {"row":1, "code":"KeyI", "en":"i", "ru":"ш"},
    {"row":1, "code":"KeyO", "en":"o", "ru":"щ"},
    {"row":1, "code":"KeyP", "en":"p", "ru":"з"},
    {"row":1, "code":"BracketLeft", "en":"[", "ru":"х"},
    {"row":1, "code":"BracketRight", "en":"]", "ru":"ъ"},
    {"row":1, "code":"Backslash", "en":"\\", "ru":""},
    {"row":1, "code":"Delete", "en":"Del", "ru":""},

    {"row":2, "code":"CapsLock", "en":"caps", "ru":""},
    {"row":2, "code":"KeyA", "en":"a", "ru":"ф"},
    {"row":2, "code":"KeyS", "en":"s", "ru":"ы"},
    {"row":2, "code":"KeyD", "en":"d", "ru":"в"},
    {"row":2, "code":"KeyF", "en":"f", "ru":"а"},
    {"row":2, "code":"KeyG", "en":"g", "ru":"п"},
    {"row":2, "code":"KeyH", "en":"h", "ru":"р"},
    {"row":2, "code":"KeyJ", "en":"j", "ru":"о"},
    {"row":2, "code":"KeyK", "en":"k", "ru":"л"},
    {"row":2, "code":"KeyL", "en":"l", "ru":"д"},
    {"row":2, "code":"Semicolon", "en":";", "ru":"ж"},
    {"row":2, "code":"Quote", "en":"'", "ru":"э"},
    {"row":2, "code":"Enter", "en":"Enter", "ru":"Ввод"},

    {"row":3, "code":"ShiftLeft", "en":"Shift", "ru":"Shift"},
    {"row":3, "code":"Backslash", "en":"\\", "ru":"ё"},
    {"row":3, "code":"KeyZ", "en":"z", "ru":"я"},
    {"row":3, "code":"KeyX", "en":"x", "ru":"ч"},
    {"row":3, "code":"KeyC", "en":"c", "ru":"с"},
    {"row":3, "code":"KeyV", "en":"v", "ru":"м"},
    {"row":3, "code":"KeyB", "en":"b", "ru":"и"},
    {"row":3, "code":"KeyN", "en":"n", "ru":"т"},
    {"row":3, "code":"KeyM", "en":"m", "ru":"ь"},
    {"row":3, "code":"Comma", "en":",", "ru":"б"},
    {"row":3, "code":"Period", "en":".", "ru":"ю"},
    {"row":3, "code":"Slash" ,"en":"/", "ru":"/"},
    {"row":3, "code":"ArrowUp" ,"en":"↑", "ru":"↑"},
    {"row":3, "code":"ShiftRight", "en":"shift", "ru":"shift"},

    {"row":4, "code":"ControlLeft", "en":"Ctrl", "ru":"Ctrl"},
    {"row":4, "code":"Windows", "en":"Win", "ru":"Win"},
    {"row":4, "code":"AltLeft", "en":"Alt", "ru":"Alt"},
    {"row":4, "code":"Space", "en":"", "ru":""},
    {"row":4, "code":"AltRight", "en":"Alt", "ru":"Alt"},
    {"row":4, "code":"ControlRight", "en":"Ctrl", "ru":"Ctrl"},
    {"row":4, "code":"ArrowLeft", "en":"←", "ru":"←"},
    {"row":4, "code":"ArrowDown", "en":"↓", "ru":"↓"},
    {"row":4, "code":"ArrowRight", "en":"→", "ru":"→"},
  ],

  pressedKeys: {},

  init() {
    // creating keyboard without keys
    this.elements.keyboard = document.createElement("div");
    this.elements.keyboard.classList.add("keyboard");
    document.body.appendChild(this.elements.keyboard);

    this._createKeys();
    this.startListen();

    // using keyboard with the input with class .use-keyboard-input
    // document.querySelector(".use-keyboard-input").addEventListener("focus", () => {
    //   element.value = currentValue;
    // })
    // document.querySelectorAll(".use-keyboard-input").forEach(element => {
    //   element.addEventListener("focus", () => {
    //     element.value = currentValue;
    //   })
    // })
  },

  _createKeys() {
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
    }

    const inputEl = document.querySelector(".use-keyboard-input");
    const fragment = document.createDocumentFragment();

    this.keysArr.forEach(key => {
      const keyEl = document.createElement("button");
      keyEl.setAttribute("type", "button");
      keyEl.classList.add("keyboard__key");
      key.el = keyEl;

      switch (key.code) {
        case "Backspace":
          keyEl.classList.add("keyboard__key--wide", "keyboard__key--special");
          keyEl.innerHTML = createIconHTML("backspace");

          keyEl.addEventListener("click", () => {
            inputEl.value = inputEl.value.substring(0, inputEl.value.length-1);
            this.properties.value = this.properties.value.substring(0, this.properties.value.length-1);
          })
          break;

        case "Delete":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerText = key.en;

          keyEl.addEventListener("click", () => {
            inputEl.value = inputEl.value.length > 1
                            ? inputEl.value.substring(1, inputEl.value.length)
                            : "";
            this.properties.value = this.properties.value.substring(1, this.properties.value.length-1);
          })
          break;

        case "CapsLock":
          keyEl.classList.add("keyboard__key--wide", "keyboard__key--activatable", "keyboard__key--special");
          keyEl.innerHTML = createIconHTML("keyboard_capslock");

          keyEl.addEventListener("click", () => {
            this._toggleCapsLock();
            keyEl.classList.toggle("keyboard__key--active");
          })
          break;

        case "Enter":
          keyEl.classList.add("keyboard__key--wide", "keyboard__key--special");
          keyEl.innerHTML = createIconHTML("keyboard_return");

          keyEl.addEventListener("click", () => {
            inputEl.value += "\n";
            this.properties.value += "\n";
          })
          break;

        case "Space":
          keyEl.classList.add("keyboard__key--extra-wide");
          keyEl.innerHTML = createIconHTML("space_bar");

          keyEl.addEventListener("click", () => {
            inputEl.value += " ";
            this.properties.value += " ";
          })
          break;

        case "Tab":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerHTML = createIconHTML("keyboard_tab");

          keyEl.addEventListener("click", () => {
            this.properties.value += " ";
          })
          break;

        // arrow buttons
        case "ArrowUp":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerHTML = createIconHTML("arrow_drop_up");

          keyEl.addEventListener("click", () => {
            inputEl.value += "↑";
            this.properties.value += "↑";
          })
          break;

        case "ArrowDown":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerHTML = createIconHTML("arrow_drop_down");

          keyEl.addEventListener("click", () => {
            inputEl.value += "↓";
            this.properties.value += "↓";
          })
          break;

        case "ArrowLeft":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerHTML = createIconHTML("arrow_left");

          keyEl.addEventListener("click", () => {
            inputEl.value += "←";
            this.properties.value += "←";
          })
          break;

        case "ArrowRight":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerHTML = createIconHTML("arrow_right");

          keyEl.addEventListener("click", () => {
            inputEl.value += "→";
            this.properties.value += "→";
          })
          break;

        // shift buttons
        case "ShiftLeft":
          keyEl.classList.add("keyboard__key--special", "keyboard__key--wide");
          keyEl.innerText = key.en;

          keyEl.addEventListener("click", () => {

          })
          break;

        case "ShiftRight":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerText = key.en;

          keyEl.addEventListener("click", () => {

          })
          break;

          case "AltLeft":
            keyEl.classList.add("keyboard__key--special");
            keyEl.innerText = key.en;;

            keyEl.addEventListener("click", () => {

            })
            break;

          case "AltRight":
            keyEl.classList.add("keyboard__key--special");
            keyEl.innerText = key.en;

            keyEl.addEventListener("click", () => {

            })
            break;

          case "ControlLeft":
            keyEl.classList.add("keyboard__key--special");
            keyEl.innerText = key.en;

            keyEl.addEventListener("click", () => {

            })
            break;

          case "ControlRight":
            keyEl.classList.add("keyboard__key--special");
            keyEl.innerText = key.en;

            keyEl.addEventListener("click", () => {

            })
            break;

        default:
          keyEl.innerText = key.en;

          keyEl.addEventListener("click", () => {
            inputEl.value += this.properties.capsLock ? key.en.toUpperCase() : key.en.toLowerCase();
            this.properties.value += this.properties.capsLock ? key.en.toUpperCase() : key.en.toLowerCase();
          })
          break;
      }

      fragment.appendChild(keyEl);

      const insertLineBreak = ["Backspace", "Delete", "Enter", "ShiftRight"].indexOf(key.code) !== -1;
      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    })

    this.elements.keyboard.appendChild(fragment);
    this.elements.keys = this.elements.keyboard.querySelectorAll(".keyboard__key");
  },

  _triggerEvent(handlerName) {
    console.log("Event triggerd! Event name: " + handlerName + "  val-" + this.properties.value);
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    for (const key of this.elements.keys) {
      if (key.textContent.length === 1 && key.textContent.match(/[a-z]/i)) {
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    }
    console.log("CapsLock toggled");
  },

  startListen() {
    window.addEventListener('keydown', (ev) => {
      const keyCode = ev.code;
      if (!this.pressedKeys[keyCode]) {
        this.pressedKeys[keyCode] = true; // записываем нажатую клавишу в pressedKeys
        this.highlightKeys();
      }
    });
    window.addEventListener('keyup', (ev) => {
      const keyCode = ev.code;
      delete this.pressedKeys[keyCode]; // удаляем отпущенную клавишу из pressedKeys
      this.highlightKeys();
    });
  },

  highlightKeys() {
    this.keysArr.forEach((key) => {
      if (this.pressedKeys[key.code]) {
        key.el.classList.add('keyboard__key--pressed');
      } else {
        key.el.classList.remove('keyboard__key--pressed');
      }
    });
  }

}

window.addEventListener("DOMContentLoaded", function () {
  createInput();
  Keyboard.init();
  // highlightKeys();
});