let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];
// const changeGlass = function (searchId) {
//   const glass = dataGlasses.find((item, index) => {
//     const { id } = item;
//     return id == searchId;
//   });
//   const img = document.createElement("img");
//   img.src = glass.src;
//   img.alt = glass;
//   document.getElementById("vglasses__info").appendChild(img);
// };
const displayGlass = () => {
  document.getElementById("vglassesList").innerHTML = dataGlasses.reduce(
    (content, item) => {
      const { id, src, virtualImg, brand, name, color, price } = item;
      return (content += `<div id="${id}" class="col-lg-4 my-4 col-md-12">
          <div class="inner"
          >
          <img style="width:100%;
          cursor:pointer"
          onclick="changeGlass('${id}')"
          src="${src}"/>
          </div>
      </div>`);
    },
    ""
  );
};
let currentGlass;
function changeGlass(searchId) {
  //   console.log("searchId" + searchId);
  const glass = dataGlasses.find((item) => item.id === searchId);
  //   console.log(glass);
  currentGlass = glass;

  renderGlass(glass);
}

function renderGlass(glass) {
  const { id, src, virtualImg, brand, name, color, price, description } = glass;
  console.log(description);
  document.querySelector("#avatar img").style.display = "block";
  document.querySelector("#avatar img").src = virtualImg;

  document.getElementById("glassesInfo").style.display = "block";
  document.getElementById("glassesInfo").innerHTML = `
    <h5>
    <strong
    style="text-transfrom:uppercase"
    >${brand}</strong> - <small>${name}</small>
    </h5>
    <span class="btn text-light bg-danger my-2">${price}</span> <span class="text-success ml-2">Stocking</span>
    <p>
    ${description}
    </p>
    
    `;
}

function removeGlasses(bool) {
  console.log(bool);
  if (bool) {
    renderGlass(currentGlass);
  } else {
    hideGlass();
  }
}
function hideGlass() {
  document.getElementById("glassesInfo").style.display = "none";
  document.querySelector("#avatar img").style.display = "none";
}
// console.log(changeGlass);

displayGlass();
