var client;

init();

async function init() {
  client = await app.initialized();
  client.events.on('app.activated', renderText);
}

async function renderText() {
  const products = await fetchProductsFromFakeStore(client);
  document.body.innerHTML = JSON.stringify(products);
}

// Function to call the FakeStore API products endpoint and return the result object using fdk request method template
  async function fetchProductsFromFakeStore(client) {
    try {
      const response = await client.request.invokeTemplate("fakeStoreGetProducts", {
        cache: true,
        ttl: 70000
      });
      if (response.status === 200) {
        const products = response.response;
        return JSON.parse(products);
      } else {
        throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching products from the FakeStore API:", error);
      throw error;
    }
  }
