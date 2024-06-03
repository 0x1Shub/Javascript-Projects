let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image:
        "https://interwove.in/cdn/shop/products/bamboo-classic-crew-neck-t-shirt-111248_960x1200_crop_center.jpg?v=1693539970",
    },
    {
      productName: "Pants",
      category: "Bottomwear",
      price: "49",
      image:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/463957/sub/goods_463957_sub14.jpg?width=494",
    },
    {
      productName: "Spory SmartWatch",
      category: "Watch",
      price: "29",
      image:
        "https://m.media-amazon.com/images/I/61Rp-GgUf6L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image:
        "https://www.saintg.in/cdn/shop/files/Untitled-23.1.jpg?v=1703234059&width=1800",
    },
  ],
};

for (let i of products.data) {
  // Create card
  let card = document.createElement("div");
  // Card should have category should stay hidden initially
  card.classList.add("card", i.category, "hide");
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  // img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  // container
  let container = document.createElement("div");
  container.classList.add("container");

  // product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  // price
  let price = document.createElement("h6");
  price.classList.add("product-price");
  price.innerText = "₹ " + i.price.toUpperCase();
  container.appendChild(price);

  card.appendChild(container);

  document.getElementById("products").appendChild(card);
}

// parameter passed from button (parameter same as category)
function filterProduct(value) {
  // Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    // check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // select all cards
  let elements = document.querySelectorAll(".card");
  // Loop through all cards
  elements.forEach((element) => {
    // display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      // check if element containe category class
      if (element.classList.contains(value)) {
        // display element based on category
        element.classList.remove("hide");
      } else {
        // hide other elements
        element.classList.add("hide");
      }
    }
  });
}

// Search button click
document.getElementById("search-button").addEventListener("click", () => {
  // initializations
  let searchInput = document.getElementById("search-input").value.toUpperCase();
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  // loop through all elements
  elements.forEach((element, index) => {
    // check if text includes the search value
    if (element.innerHTML.includes(searchInput.toUpperCase())) {
      // display matching card
      cards[index].classList.remove("hide");
    } else {
      // hide others
      cards[index].classList.add("hide");
    }
  });
});

// initially display all products

window.onload = () => {
  filterProduct("all");
};
