function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "41319e274o17aaba3e24c4df247ct0f7";
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a short line poem in basic HTML format, do not include a title, and separate each line with a <br />. Please follow the user instructions. Sign the poem with 'SheCodes AI' inside a <strong> element at the end";
  let prompt = `User instructions: Generate a short poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">Generate a poem about ${instructionsInput.value}</div>`;

  console.log("Generating a poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
