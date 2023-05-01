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

  eventHandlers: {
    oninput: null,
    // onclose: null,
  },

  properties: {
    value: "",
    capsLock: false,
  },

  init() {
    this.elements.keyboard = document.createElement("div");
    this.elements.keyboard.classList.add("keyboard");
    document.body.appendChild(this.elements.keyboard);
    this.elements.keyboard.appendChild(this._createKeys());

    this.elements.keys = this.elements.keyboard.querySelectorAll(".keyboard__key");

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
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
      "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "del",
      "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
      "shiftLeft", "\\", "z", "x", "c", "v", "b", "n", "m", ".", ",", "/", "arrowUp", "shiftRight",
      "ctrl", "win", "alt", "space", "alt", "ctrl", "arrowLeft", "arrowDown", "arrowRight"
    ];

    // create icon
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
    }

    keyLayout.forEach(key => {
      const keyEl = document.createElement("button");
      const insertLineBreak = ["backspace", "del", "enter", "shiftRight"].indexOf(key) !== -1;

      const inputEl = document.querySelector(".use-keyboard-input");

      keyEl.setAttribute("type", "button");
      keyEl.classList.add("keyboard__key");

      switch (key) {
        case "backspace":
          keyEl.classList.add("keyboard__key--wide", "keyboard__key--special");
          keyEl.innerText = "Backspace";

          keyEl.addEventListener("click", () => {
            inputEl.value = inputEl.value.substring(0, inputEl.value.length-1);
            this.properties.value = this.properties.value.substring(0, this.properties.value.length-1);
            this._triggerEvent("oninput");
          })
          break;

        case "del":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerText = "DEL";

          keyEl.addEventListener("click", () => {
            inputEl.value = inputEl.value.length > 1
                            ? inputEl.value.substring(1, inputEl.value.length)
                            : "";
            this.properties.value = this.properties.value.substring(1, this.properties.value.length-1);
            this._triggerEvent("oninput");
          })
          break;

        case "caps":
          keyEl.classList.add("keyboard__key--wide", "keyboard__key--activatable", "keyboard__key--special");
          keyEl.innerText = "Caps Lock";

          keyEl.addEventListener("click", () => {
            this._toggleCapsLock();
            keyEl.classList.toggle("keyboard__key--active");
          })
          break;

        case "enter":
          keyEl.classList.add("keyboard__key--wide", "keyboard__key--special");
          keyEl.innerText = "ENTER";

          keyEl.addEventListener("click", () => {
            inputEl.value += "\n";
            this.properties.value += "\n";
            this._triggerEvent("oninput");
          })
          break;

        case "space":
          keyEl.classList.add("keyboard__key--extra-wide");
          keyEl.innerHTML = createIconHTML("space_bar");

          keyEl.addEventListener("click", () => {
            inputEl.value += " ";
            this.properties.value += " ";
            this._triggerEvent("oninput");
          })
          break;

        case "tab":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerHTML = "Tab";

          keyEl.addEventListener("click", () => {
            this.properties.value += " ";
            this._triggerEvent("oninput");
          })
          break;

        // arrow buttons
        case "arrowUp":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerHTML = createIconHTML("arrow_drop_up");

          keyEl.addEventListener("click", () => {
            inputEl.value += "↑";
            this.properties.value += "↑";
            this._triggerEvent("oninput");
          })
          break;

        case "arrowDown":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerHTML = createIconHTML("arrow_drop_down");

          keyEl.addEventListener("click", () => {
            inputEl.value += "↓";
            this.properties.value += "↓";
            this._triggerEvent("oninput");
          })
          break;

        case "arrowLeft":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerHTML = createIconHTML("arrow_left");

          keyEl.addEventListener("click", () => {
            inputEl.value += "←";
            this.properties.value += "←";
            this._triggerEvent("oninput");
          })
          break;

        case "arrowRight":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerHTML = createIconHTML("arrow_right");

          keyEl.addEventListener("click", () => {
            inputEl.value += "→";
            this.properties.value += "→";
            this._triggerEvent("oninput");
          })
          break;

        // shift buttons
        case "shiftLeft":
          keyEl.classList.add("keyboard__key--special", "keyboard__key--wide");
          keyEl.innerText = "Shift";

          keyEl.addEventListener("click", () => {
            this._triggerEvent("oninput");
          })
          break;

        case "shiftRight":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerText = "Shift";

          keyEl.addEventListener("click", () => {
            this._triggerEvent("oninput");
          })
          break;

          case "alt":
            keyEl.classList.add("keyboard__key--special");
            keyEl.innerText = "Alt";

            keyEl.addEventListener("click", () => {
              this._triggerEvent("oninput");
            })
            break;

          case "ctrl":
            keyEl.classList.add("keyboard__key--special");
            keyEl.innerText = "Ctrl";

            keyEl.addEventListener("click", () => {
              this._triggerEvent("oninput");
            })
            break;

          case "win":
            keyEl.classList.add("keyboard__key--special");
            keyEl.innerText = "Win";

            keyEl.addEventListener("click", () => {
              this._triggerEvent("oninput");
            })
            break;

        default:
          keyEl.textContent = key.toLowerCase();

          keyEl.addEventListener("click", () => {
            inputEl.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
            this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
            this._triggerEvent("oninput");
          })
          break;
      }

      fragment.appendChild(keyEl);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    })

    return fragment;
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

  // open(initialValue, oninput, nclose) {

  // },

  // close() {

  // }
}

window.addEventListener("DOMContentLoaded", function () {
  createInput();
  Keyboard.init();
});