const wrapper = document.querySelector(".silderWrapper");

const menuItem = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./css/img/air.png",
      },
      {
        code: "darkblue",
        img: "./css/img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./css/img/jordan.png",
      },
      {
        code: "green",
        img: "./css/img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./css/img/blazer.png",
      },
      {
        code: "green",
        img: "./css/img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./css/img/crater.png",
      },
      {
        code: "lightgray",
        img: "./css/img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./css/img/hippie.png",
      },
      {
        code: "black",
        img: "./css/img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItem.forEach((item, index) => {
  //change current slider
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    //change choosen product
    choosenProduct = products[index];
    // //change text title of product
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });

    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

//get model

const payMentBtn = document.querySelector(".productBtn");
const paymentModel = document.querySelector(".payment");
const close = document.querySelector(".close");

payMentBtn.addEventListener("click", () => {
  paymentModel.style.display = "flex";
});

close.addEventListener("click", () => {
  paymentModel.style.display = "none";
});
