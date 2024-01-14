function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Two roads diverged in a yellow wood",
    autoStart: true,
    delay: 1,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
