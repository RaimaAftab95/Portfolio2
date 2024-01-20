export const PRODUCTS = [
  {
    id: "pr-1",
    name: "Faccy T shirt",
    description: "some short dis",
    price: 3000,
    image: "/BOSHOP images/item-img-1-1.jpg",
    rating: 5,
    // we can render revies in listgrp component of reactstrap
    // we have to use map for multiple images
    review: [
      {
        text: "abc",
        rating: "",
      },
    ],
    //   absolute path "/images/box7_image.jpg"
    // when i was adding "./images/box7_image.jpg" it was not showing on other page

    // we can also show multiple images like
    multipleimages: [
      "/images/box6_image.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
    ],
  },
  {
    id: "pr-2",
    name: "Beats Headphone",
    description: "some short dis",
    price: 999,
    image: "/BOSHOP images/item-img-1-2-1.jpg",
    multipleimages: [
      "/images/box6_image.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
    ],
  },
  {
    id: "pr-3",
    name: "Beats Headphone",
    description: "some short dis",
    price: 899,
    image: "/BOSHOP images/item-img-1-3.jpg",
    multipleimages: [
      "/images/box6_image.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
    ],
  },
  {
    id: "pr-4",
    name: "Beats Headphone",
    description: "some short dis",
    price: 799,
    image: "/BOSHOP images/item-img-1-4.jpg",
    multipleimages: [
      "/images/box6_image.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
    ],
  },
  {
    id: "pr-5",
    name: "Beats Headphone",
    description: "some short dis",
    price: 599,
    image: "/BOSHOP images/item-img-1-5.jpg",
    multipleimages: [
      "/images/box6_image.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
    ],
  },
  {
    id: "pr-6",
    name: "Beats Headphone",
    description: "some short dis",
    price: 399,
    image: "/BOSHOP images/item-img-1-6.jpg",
    multipleimages: [
      "/images/box6_image.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
    ],
  },
  {
    id: "pr-7",
    name: "Beats Headphone",
    description: "some short dis",
    price: 8899,
    image: "/BOSHOP images/item-img-1-7.jpg",
    multipleimages: [
      "/images/box6_image.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
    ],
  },
  {
    id: "pr-8",
    name: "Beats Headphone",
    description: "some short dis",
    price: 44999,
    image: "/BOSHOP images/item-img-1-8.jpg",
    multipleimages: [
      "/images/box6_image.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
    ],
  },
  {
    id: "pr-9",
    name: "Beats Headphone",
    description: "some short dis",
    price: 33999,
    image: "/BOSHOP images/item-img-1-9.jpg",
    multipleimages: [
      "/images/box6_image.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
    ],
  },
  {
    id: "pr-10",
    name: "Beats Headphone",
    description: "some short dis",
    price: 1999,
    image: "/BOSHOP images/item-img-1-10.jpg",
    multipleimages: [
      "/images/box6_image.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
    ],
  },
  {
    id: "pr-11",
    name: "Beats Headphone",
    description: "some short dis",
    price: 1999,
    //image: "/BOSHOP images/item-img-1-21-1.jpg",
    //image: "/BOSHOP images/img-trial.webp",
    image: "/BOSHOP images/item-img-1-3.jpg",
    multipleimages: [
      "/images/box6_image.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
    ],
  },
  {
    id: "pr-12",
    name: "Beats Headphone",
    description: "some short dis",
    price: 1999,
    //image: "/BOSHOP images/item-img-1-20-1.png",
    image: "/BOSHOP images/item-img-1-5.jpg",
    multipleimages: [
      "/images/box6_image.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
    ],
  },
];

// every data should be in this file like slider data
export const slider = [
  {
    img: "",
    text: "",
  },
];

export const slidesData = [
  {
    id: "001",
    img:
      "https://cdn.shopify.com/s/files/1/0130/5041/3114/files/home1_01_9e9ee306-65ab-4e2e-9a19-c54fa8039f8a_x1024.png",
    title: "Finde Premium Products",
    cta: "SHOP NOW",
  },
  {
    id: "002",
    img:
      "https://cdn.shopify.com/s/files/1/0130/5041/3114/files/home1_02_4c388999-0b9a-4a73-9fe7-1ca465ec8140_x1024.png",
    title: "Get all the Accessories you need",
    cta: "SHOP NOW",
  },
  {
    id: "003",
    img:
      "https://hongo.b-cdn.net/wp-content/uploads/2019/11/home-page-fashion-slider-01.jpg",
    title: "Wide  range of colors",
    cta: "SHOP NOW",
  },
];
