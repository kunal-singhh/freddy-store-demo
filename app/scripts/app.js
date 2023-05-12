var client;

init();

async function init() {
  client = await app.initialized();
  client.events.on('app.activated', renderText);
}

async function renderText() {
  document.querySelector('.main').innerHTML = "Hello, world!";
}

// Function to call the FakeStore API products endpoint and return the result object using fdk request method template



// Create a function that renders a list of products from fakeStore API and style it with tailwind css 