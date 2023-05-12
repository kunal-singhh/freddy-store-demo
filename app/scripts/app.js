let client;

init();

async function init() {
  client = await app.initialized();
  client.events.on('app.activated', appActivated);
}

async function appActivated() {
  await client.instance.resize({ height: "800px" });
  const products = await fetchProducts();
  renderProducts(products);
}

// Get FakeStore API products Data with request method template

async function fetchProducts() {
  try {
    let productsResponse = await client.request.invokeTemplate(
      "getFakeStoreProducts", {});
    let productsJSON = JSON.parse(productsResponse.response);
    return productsJSON
  } catch (err) {
    // Handle the error
    console.error(err);
  }
}

// Function that gets list of Products form fakeStore API and renders them as cards with crayons classes, please follow the following markup:
// <div class="fw-card-1 fw-p-24 fw-flex fw-flex-row">
//   <section class="fw-flex-grow">
//     <h5 class="fw-type-h5 fw-my-0">Title</h5>
//     <img height="60" width="60" src="http://placehold.it/" />
//     <p class="fw-type-xs fw-my-0">description</p>
//     <strong>price</strong>
//   </section>
//   <section class="fw-flex-grow-0">
//     <fw-button color="secondary" class="fw-type-h6"> Change Status</fw-button>
//   </section>
// </div>


    function renderProducts(products) {
      const productContainer = document.getElementById("product-list");

      products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("fw-card-1", "fw-p-24", "fw-flex", "fw-flex-row");

        const productInfo = document.createElement("section");
        productInfo.classList.add("fw-flex-grow");

        const title = document.createElement("h5");
        title.classList.add("fw-type-h5", "fw-my-0");
        title.textContent = product.title;

        const image = document.createElement("img");
        image.src = product.image;
        image.setAttribute('width', 60);
        image.setAttribute('height', 60);

        const description = document.createElement("p");
        description.classList.add("card-description");
        description.classList.add("fw-type-xs", "fw-my-0");
        description.textContent = product.description;

        const price = document.createElement("strong");
        price.textContent = `$${product.price}`;

        const buttonSection = document.createElement("section");
        buttonSection.classList.add("fw-flex-grow-0");

        const changeStatusButton = document.createElement("fw-button");
        changeStatusButton.setAttribute("color", "secondary");
        changeStatusButton.classList.add("fw-type-h6");

        const buttonText = document.createTextNode(" Change Status");
        changeStatusButton.appendChild(buttonText);

        buttonSection.appendChild(changeStatusButton);
        productInfo.append(title, image, description, price);
        card.append(productInfo, buttonSection);
        productContainer.appendChild(card);
      });
    }

// Resize my App to 800px using instance method
// Got the response and added to appActivated Method

// Can you convert my ticket sidebar app to a fullpage app
// Updated the location to full page in manifest

// Run using Run app commands 

// Pack and publish with the smae 

// show the App in AMP

// Do more changes and publish update
    // infers all details

// Resize my App Height to 800px using instance method

// Can you convert my ticket sidebar app to a fullpage app

// Refactor all the code  - done
// Security check
// GEnerate Unit Tests  -> create a file and add cases there 
// Write docs 
// Generate unit tests

// for pack and publish
  // first time -> ask details for new 
  // later it infers

  // changes
// We can only publish to in development 
  // to avoid any issues in customer account just test is supported


// IParam for selecting some filters for showing products 
// Search , add api keys , use iparams


// Refactor all the code  - done
// Security check
// Write docs 

// Resize my App to 800px using instance method
// Got the response and added to appActivated Method

// Can you convert my ticket sidebar app to a fullpage app
// Updated the location to full page in manifest
