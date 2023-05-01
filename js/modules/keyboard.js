export default {
  elements: {
    keyboard: null,
    capsLock: null,
    keys: [],
  },

  properties: {
    value: "",
    capsLock: false,
  },

  keysArr: [
    {"row":0, "code":"Digit1", "en":"`", "ru":"]", caseOrLocaleSensetive: true},
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
    {"row":0, "code":"Minus", "en":"-", "ru":"-"},
    {"row":0, "code":"Equal", "en":"=", "ru":"="},
    {"row":0, "code":"Backspace", "en":"Backspace", "ru":"Backspace"},

    {"row":1, "code":"Tab", "en":"", "ru":""},
    {"row":1, "code":"KeyQ", "en":"q", "ru":"й", caseOrLocaleSensetive: true},
    {"row":1, "code":"KeyW", "en":"w", "ru":"ц", caseOrLocaleSensetive: true},
    {"row":1, "code":"KeyE", "en":"e", "ru":"у", caseOrLocaleSensetive: true},
    {"row":1, "code":"KeyR", "en":"r", "ru":"к", caseOrLocaleSensetive: true},
    {"row":1, "code":"KeyT", "en":"t", "ru":"е", caseOrLocaleSensetive: true},
    {"row":1, "code":"KeyY", "en":"y", "ru":"н", caseOrLocaleSensetive: true},
    {"row":1, "code":"KeyU", "en":"u", "ru":"г", caseOrLocaleSensetive: true},
    {"row":1, "code":"KeyI", "en":"i", "ru":"ш", caseOrLocaleSensetive: true},
    {"row":1, "code":"KeyO", "en":"o", "ru":"щ", caseOrLocaleSensetive: true},
    {"row":1, "code":"KeyP", "en":"p", "ru":"з", caseOrLocaleSensetive: true},
    {"row":1, "code":"BracketLeft", "en":"[", "ru":"х", caseOrLocaleSensetive: true},
    {"row":1, "code":"BracketRight", "en":"]", "ru":"ъ", caseOrLocaleSensetive: true},
    {"row":1, "code":"Backslash", "en":"\\", "ru":"|", caseOrLocaleSensetive: true},
    {"row":1, "code":"NumpadDecimal", "en":"Del", "ru":"Del"},

    {"row":2, "code":"CapsLock", "en":"caps", "ru":"caps"},
    {"row":2, "code":"KeyA", "en":"a", "ru":"ф", caseOrLocaleSensetive: true},
    {"row":2, "code":"KeyS", "en":"s", "ru":"ы", caseOrLocaleSensetive: true},
    {"row":2, "code":"KeyD", "en":"d", "ru":"в", caseOrLocaleSensetive: true},
    {"row":2, "code":"KeyF", "en":"f", "ru":"а", caseOrLocaleSensetive: true},
    {"row":2, "code":"KeyG", "en":"g", "ru":"п", caseOrLocaleSensetive: true},
    {"row":2, "code":"KeyH", "en":"h", "ru":"р", caseOrLocaleSensetive: true},
    {"row":2, "code":"KeyJ", "en":"j", "ru":"о", caseOrLocaleSensetive: true},
    {"row":2, "code":"KeyK", "en":"k", "ru":"л", caseOrLocaleSensetive: true},
    {"row":2, "code":"KeyL", "en":"l", "ru":"д", caseOrLocaleSensetive: true},
    {"row":2, "code":"Semicolon", "en":";", "ru":"ж", caseOrLocaleSensetive: true},
    {"row":2, "code":"Quote", "en":"'", "ru":"э", caseOrLocaleSensetive: true},
    {"row":2, "code":"Enter", "en":"Enter", "ru":"Enter"},

    {"row":3, "code":"ShiftLeft", "en":"Shift", "ru":"Shift"},
    {"row":3, "code":"Backslash", "en":"\\", "ru":"ё", caseOrLocaleSensetive: true},
    {"row":3, "code":"KeyZ", "en":"z", "ru":"я", caseOrLocaleSensetive: true},
    {"row":3, "code":"KeyX", "en":"x", "ru":"ч", caseOrLocaleSensetive: true},
    {"row":3, "code":"KeyC", "en":"c", "ru":"с", caseOrLocaleSensetive: true},
    {"row":3, "code":"KeyV", "en":"v", "ru":"м", caseOrLocaleSensetive: true},
    {"row":3, "code":"KeyB", "en":"b", "ru":"и", caseOrLocaleSensetive: true},
    {"row":3, "code":"KeyN", "en":"n", "ru":"т", caseOrLocaleSensetive: true},
    {"row":3, "code":"KeyM", "en":"m", "ru":"ь", caseOrLocaleSensetive: true},
    {"row":3, "code":"Comma", "en":",", "ru":"б", caseOrLocaleSensetive: true},
    {"row":3, "code":"Period", "en":".", "ru":"ю", caseOrLocaleSensetive: true},
    {"row":3, "code":"Slash" ,"en":"/", "ru":"/"},
    {"row":3, "code":"ArrowUp" ,"en":"↑", "ru":"↑"},
    {"row":3, "code":"ShiftRight", "en":"Shift", "ru":"Shift"},

    {"row":4, "code":"ControlLeft", "en":"Ctrl", "ru":"Ctrl"},
    {"row":4, "code":"Windows", "en":"Win", "ru":"Win"},
    {"row":4, "code":"AltLeft", "en":"Alt", "ru":"Alt"},
    {"row":4, "code":"Space", "en":"Space", "ru":"Space"},
    {"row":4, "code":"AltRight", "en":"Alt", "ru":"Alt"},
    {"row":4, "code":"ControlRight", "en":"Ctrl", "ru":"Ctrl"},
    {"row":4, "code":"ArrowLeft", "en":"←", "ru":"←"},
    {"row":4, "code":"ArrowDown", "en":"↓", "ru":"↓"},
    {"row":4, "code":"ArrowRight", "en":"→", "ru":"→"},
  ],

  pressedKeys: {},
  locale: "ru",

  init() {
    // creating keyboard without keys
    this.elements.keyboard = document.createElement("div");
    this.elements.keyboard.classList.add("keyboard");
    document.body.appendChild(this.elements.keyboard);

    this._createKeys();
    this.startListen();
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

        case "NumpadDecimal":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerText = key[this.locale];

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
          })

          this.elements.capsLock = keyEl;
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
          keyEl.innerText = key[this.locale];

          keyEl.addEventListener("click", () => {

          })
          break;

        case "ShiftRight":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerText = key[this.locale];

          keyEl.addEventListener("click", () => {
            this._toggleLocale();
          })
          break;

        case "AltLeft":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerText = key[this.locale];;

          keyEl.addEventListener("click", () => {

          })
          break;

        case "AltRight":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerText = key[this.locale];

          keyEl.addEventListener("click", () => {

          })
          break;

        case "ControlLeft":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerText = key[this.locale];

          keyEl.addEventListener("click", () => {

          })
          break;

        case "ControlRight":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerText = key[this.locale];

          keyEl.addEventListener("click", () => {

          })
          break;

        case "Windows":
          keyEl.classList.add("keyboard__key--special");
          keyEl.innerText = key[this.locale];

          keyEl.addEventListener("click", () => {

          })
          break;

        default:
          keyEl.innerText = key[this.locale];

          keyEl.addEventListener("click", () => {
            inputEl.value += this.properties.capsLock ? key[this.locale].toUpperCase() : key[this.locale].toLowerCase();
            this.properties.value += this.properties.capsLock ? key[this.locale].toUpperCase() : key[this.locale].toLowerCase();
          })
          break;
      }

      fragment.appendChild(keyEl);

      const insertLineBreak = ["Backspace", "NumpadDecimal", "Enter", "ShiftRight"].indexOf(key.code) !== -1;
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
    this.elements.capsLock.classList.toggle("keyboard__key--active");
    this._updateKeys();

    this.elements.capsLock.classList.add('keyboard__key--pressed');
    setTimeout(() => {
      this.elements.capsLock.classList.remove('keyboard__key--pressed');
    }, 100);
  },

  _toggleLocale() {
    this.locale = this.locale === "en" ? "ru" : "en";
    this._updateKeys();
  },

  _updateKeys() {
    this.keysArr.forEach((key) => {
      if (key.caseOrLocaleSensetive) {
        const keyText = key[this.locale];
        key.el.textContent = this.properties.capsLock ? keyText.toUpperCase() : keyText.toLowerCase();
      }
    })
  },

  startListen() {
    window.addEventListener('keydown', (ev) => {
      const keyCode = ev.code;


      // подсвечиваем клавиши при нажатии
      if (!this.pressedKeys[keyCode] && keyCode !== "CapsLock") {
        this.pressedKeys[keyCode] = true; // записываем нажатую клавишу в pressedKeys
        this.highlightKeys();
      }

      // при нажании ShiftRight сменяем раскладку
      if (keyCode === "ShiftRight") {
        this._toggleLocale();
      }

      // при нажании CapsLock сменяем раскладку
      if (keyCode === "CapsLock") {
        this._toggleCapsLock();
      }
    });

    // прекращаем подсвечивать клавишу при отпускании
    window.addEventListener('keyup', (ev) => {
      const keyCode = ev.code;

      if (keyCode !== "CapsLock") {
        delete this.pressedKeys[keyCode]; // удаляем отпущенную клавишу из pressedKeys
        this.highlightKeys();
      }

      // при нажании CapsLock сменяем раскладку
      if (keyCode === "CapsLock") {
        this._toggleCapsLock();
      }
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