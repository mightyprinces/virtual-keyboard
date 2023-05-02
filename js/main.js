import Keyboard from "./modules/keyboard.js";

// add textarea
function createInput() {
  const inputEl = document.createElement("textarea");
  inputEl.classList.add("input-area", "use-keyboard-input");
  inputEl.setAttribute("placeholder", "Text should be here");
  document.body.appendChild(inputEl);
}

// create line with note of switching languages
function createNote() {
  const noteEl = document.createElement("div");
  noteEl.classList.add("note-switch-lang");
  noteEl.innerText = "To switch language - press Right Shift";
  document.body.appendChild(noteEl);
}

window.addEventListener("DOMContentLoaded", function () {
  createInput();
  createNote();
  Keyboard.getLocalStorage();
  Keyboard.init();
});

window.addEventListener('beforeunload', function () {
  Keyboard.setLocalStorage();
});