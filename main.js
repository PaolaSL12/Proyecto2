const products = [
  {
    name: "Foose Ford FD-100 Pickup",
    price: 36.99,
    stars: 5,
    brand: "REVELL",
    seller: "ServiHobby",
    image:
      "https://www.servihobby.com/wp-content/uploads/2024/01/270-14426__S_M_Foose_Ford_FD_100_Pickup-768x768.jpg",
  },
  {
    name: "Ford F-150 XLT 1997",
    price: 28.95,
    stars: 5,
    brand: "REVELL",
    seller: "ElTallerDelModelista",
    image:
      "https://www.eltallerdelmodelista.com/49348-thickbox_default/ford-f-150-xlt-1997.jpg",
  },

  {
    name: "Land Rover Largo S.III",
    price: 43.06,
    stars: 4,
    brand: "REVELL",
    seller: "BazarMatey",
    image: "https://www.matey.com/Files/126335/Img/12/REV-07047x1200.jpg",
  },
  {
    name: "Red Bull RB16B Honda 3rd",
    price: 75.95,
    stars: 4,
    brand: "MINICHAMPS",
    seller: "RacingModelismo",
    image:
      "https://www.racingmodelismo.com/11330-34100-thickbox/red-bull-rb16b-honda-3rd-gp-mexico-2021-sergio-perez-minichamps-escala-1-43-410211911-410211911-34100.jpg",
  },
  {
    name: "Nissan Fairlady 240ZG",
    price: 42.95,
    stars: 3,
    brand: "TAMIYA",
    seller: "ElTallerDelModelista",
    image:
      "https://www.eltallerdelmodelista.com/69775-large_default/nissan-fairlady-240zg.jpg",
  },
  {
    name: "Lotus Super 7 Series II",
    price: 39.4,
    stars: 5,
    brand: "TAMIYA",
    seller: "BazarMatey",
    image: "https://www.matey.com/Files/126335/Img/05/TAM-24357x1200.jpg",
  },
  {
    name: "55 Ford F-100 Street Rod",
    price: 24.15,
    stars: 3,
    brand: "MONOGRAM",
    seller: "ServiHobby",
    image:
      "https://www.servihobby.com/wp-content/uploads/2022/11/244-monogram-ford-pickup-1955-768x768.jpg",
  },
  {
    name: "Shelby Mustang GT 350 HTM",
    price: 37.7,
    stars: 4,
    brand: "REVELL",
    seller: "ServiHobby",
    image:
      "https://www.servihobby.com/wp-content/uploads/2020/08/203-revell-shelby-mustang-gt-350-h.jpg",
  },
  {
    name: "Maqueta Toyota Celica LB Turbo",
    price: 39.4,
    stars: 4,
    brand: "TAMIYA",
    seller: "1001Hobbies",
    image:
      "https://www.1001hobbies.es/2022160/tamiya-20072-toyota-celica-lb-turbo-gr-5.jpgttps://www.matey.com/Files/126335/Img/05/TAM-24357x1200.jpg",
  },
  {
    name: "Toyota GR 86",
    price: 32.95,
    stars: 3,
    brand: "TAMIYA",
    seller: "ElTallerDelModelista",
    image:
      "https://www.eltallerdelmodelista.com/67796-thickbox_default/toyota-gr-86.jpg",
  },
  {
    name: "McLaren Sena",
    price: 68.31,
    stars: 4,
    brand: "TAMIYA",
    seller: "BazarMatey",
    image: "https://www.matey.com/Files/126335/Img/24/TAM-24355x1200.jpg",
  },
  {
    name: "Ford Mustang GT4",
    price: 36.95,
    stars: 5,
    brand: "TAMIYA",
    seller: "ElTallerDelModelista",
    image:
      "https://www.eltallerdelmodelista.com/53831-thickbox_default/ford-mustang-gt4.jpg",
  },
  {
    name: "Citroen 2CV",
    price: 34.99,
    stars: 4,
    brand: "REVELL",
    seller: "1001Hobbies",
    image: "https://www.1001hobbies.es/1153931/revell-rv7095-citroen-2cv.jpg",
  },
  {
    name: "VW T1 Camper",
    price: 38.5,
    stars: 4,
    brand: "REVELL",
    seller: "ServiHobby",
    image:
      "https://www.servihobby.com/wp-content/uploads/2022/09/242-revell-07674-camper-vw-t1.jpg",
  },
  {
    name: "Porsche 356 Cabrio",
    price: 99.95,
    stars: 5,
    brand: "REVELL",
    seller: "BazarMatey",
    image: "https://www.matey.com/Files/126335/Img/02/REV-07043x1200.jpg",
  },
  {
    name: "Maqueta Fiat 500f",
    price: 34.99,
    stars: 5,
    brand: "TAMIYA",
    seller: "1001Hobbies",
    image: "https://www.1001hobbies.es/2022161/tamiya-24169-fiat-500f.jpg",
  },
  {
    name: "Honda S600",
    price: 47.7,
    stars: 4,
    brand: "TAMIYA",
    seller: "BazarMatey",
    image: "https://www.matey.com/Files/126335/Img/16/TAM-24340x1200.jpg",
  },
  {
    name: "VW GOLF 1 GTI",
    price: 32.03,
    stars: 3,
    brand: "REVELL",
    seller: "BazarMatey",
    image: "https://www.matey.com/Files/126335/Img/23/REV-07072x1200.jpg",
  },
];

const SELLERS = [];

let SELLER = "";

let buttonvalue = ""

const header = document.createElement("header");

const h1 = document.createElement("h1");
h1.textContent = "Maquetas.com";

const nav = document.createElement("nav");
nav.innerHTML = `<ul>
  <li><a href="#">Maquetas</a></li>
  <li><a href="#">Pinturas</a></li>
  <li><a href="#">Herramientas</a></li>
  <li><a href="#">Novedades</a></li>
  </ul>`;

header.append(h1);
header.append(nav);

document.querySelector("#app").append(header);
const main = document.createElement("main");
document.querySelector("#app").append(main);

const sectionFilter = document.createElement("section");
sectionFilter.className = "filter";
main.append(sectionFilter);

const sectionProducts = document.createElement("section");
sectionProducts.className = "products";
main.append(sectionProducts); 



const filterSelect = () => {
  const filtered = [];

  for (const product of products) {
    if (SELLER.includes(product.seller)) {
      filtered.push(product);
    }
  }

  printProducts(filtered);
};

const fillSeller = (prod) => {
  SELLERS.splice(0);
  for (const pro of prod) {
    if (!SELLERS.includes(pro.seller)) {
      SELLERS.push(pro.seller);
    }
  }
};

const createSelect = () => {
  const select = document.createElement("select");

  for (const seller of SELLERS) {
    const option = document.createElement("option");

    option.value = seller;
    option.textContent = seller;

    select.append(option);
  }

  sectionFilter.append(select);

  select.addEventListener("change", (event) => {
    SELLER = event.target.value;
    filterSelect();
  });

  const sellerFiltertext = document.createElement("h3");
  sellerFiltertext.textContent = "Filtrar Vendedor:";
  sectionFilter.insertBefore(sellerFiltertext, select);
};

const createImputPrice = () => {
  const label = document.createElement("label");
  const h3 = document.createElement("h3");
  const input = document.createElement("input");
  const button = document.createElement("button");

  input.type = "number";
  input.id = "numInput";
  label.htmlFor = input.id;
  h3.textContent = "Filtro de Precio:";
  button.textContent = "Buscar Precio";
  button.className = "search";

  button.addEventListener("click", () => {
    if(!buttonvalue.includes(input.value)) {
      buttonvalue = input.value
    }
    
    createPriceFilter()
  });

  label.append(h3);
  sectionFilter.append(label);
  sectionFilter.append(input);
  sectionFilter.append(button);
};

const createPriceFilter = ()  => {
  const filteredPrice = [];

  for (const product of products) {
    if (product.price <= buttonvalue) {
      filteredPrice.push(product);
      
      printProducts(filteredPrice);
    } else {
      printProducts(filteredPrice);
     
    }

  }
  
  
}


const printProducts = (elements) => {
  sectionProducts.innerHTML = "";

  elements.forEach((element) => {
    const divProduct = document.createElement("div");
    divProduct.className = "cardProduct";
    const divImg = document.createElement("div");
    const img = document.createElement("img");
    const divContentCard = document.createElement("div");
    const nameProduct = document.createElement("h3");
    const priceProduct = document.createElement("p");
    const divstars = document.createElement("div");
    const button = document.createElement("button");

    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("div");
      star.className = "star";
      if (i <= element.stars) {
        star.classList.add("filled");
      }
      divstars.appendChild(star);
    }

    divImg.className = "imgProduct";
    divContentCard.className = "divCardContent";
    divstars.className = "stars";
    img.src = element.image;
    nameProduct.textContent = element.name;
    priceProduct.textContent = `${element.price} €`;
    button.textContent = "Comprar";
    button.className = "cardButton";

    divProduct.append(divImg);
    divImg.append(img);
    divContentCard.append(nameProduct);
    divContentCard.append(priceProduct);
    divContentCard.append(divstars);
    divContentCard.append(button);
    divProduct.append(divContentCard);
    sectionProducts.append(divProduct);
  });
};

fillSeller(products);
createSelect();
printProducts(products);
createImputPrice();


const cleanfiltersButton = document.createElement("button");
cleanfiltersButton.textContent = "Limpiar Filtros";
cleanfiltersButton.className = "clean";
sectionFilter.appendChild(cleanfiltersButton);

const cleanButton = () => {

  const select = document.querySelector("select");
  const input = document.querySelector("#numInput");
  
  cleanfiltersButton.addEventListener("click", () => {
    printProducts(products)
    select.value = "";
    input.value = "";
  })
}

cleanButton()