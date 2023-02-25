let Colleges = {
    data: [
      {
        productName: "Gettysburg College",
        type: 'Full-Ride/Full-Tuition',
        price: "Need-based Financial Aid: Yes",
        region: "Location: Northeast",
      },
      {
        productName: "Principia College",
        type: 'Need-aware',
        price: "Need-based Financial Aid: Yes",
        region: "Location: Midwest",
      },
      {
        productName: "Lawrence University",
        type: '100%',
        price: "Need-based Financial Aid: Yes",
        region: "Location: Midwest",
      },
      {
        productName: "College of the Holy Cross",
        type: "Private",
        price: "Need-based Financial Aid: Yes",
        region: "Location: Northeast",
      },
      {
        productName: "University of Southern Mississippi",
        type: "Private",
        price: "Need-based Financial Aid: No",
        region: "Location: South",
      },
      {
        productName: "University of Kansas",
        type: 'Full-Ride/Full-Tuition',
        price: "Need-based Financial Aid: No",
        region: "Location: Midwest",
      },
      {
        productName: "Augustana College",
        type: 'Generous-Aid',
        price: "Need-based Financial Aid: Yes",
        region: "Location: Midwest",
      },
      {
        productName: "Hendrix College",
        type: 'Need-aware',
        price: "Need-based Financial Aid: Yes",
        region: "Location: South",
      },
      {
        productName: "Harvard University",
        type: 'Need-blind',
        price: "Need-based Financial Aid: Yes",
        region: "Northeast",
      }
    ],
  };

  for (let i of Colleges.data) {
    ////Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.type, "hide");
    ////image div
    //let imgContainer = document.createElement("div");
    //imgContainer.classList.add("image-container");
    ////img tag
    //let image = document.createElement("img");
    //image.setAttribute("src", i.image);
    //imgContainer.appendChild(image);
    //card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h2");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //location
    let region = document.createElement("p");
    region.innerText = i.region;
    container.appendChild(region);
    //category
    //let type = document.createElement("p")
    //type.innerText = i.type;
    //container.appendChild(type);
    //price
    let price = document.createElement("p");
    price.innerText = i.price;
    container.appendChild(price);
    //
    
    
 
    card.appendChild(container);
    document.getElementById("Colleges").appendChild(card);
  }

  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".Category-button");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == 'All Colleges') {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }

  //Search button click
  document.getElementById("Search-button").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("Search-field").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });

  //Initially display all products
  window.onload = () => {
    filterProduct('All Colleges');
  };