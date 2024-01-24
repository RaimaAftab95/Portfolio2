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
        rating: "8",
      },
    ],
    //   absolute path "/images/box7_image.jpg"
    // when i was adding "./images/box7_image.jpg" it was not showing on other page

    // we can also show multiple images like
    multipleimages: [
      "/BOSHOP images/item-img-1-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-1-1.jpg",
    ],
  },
  {
    id: "pr-2",
    name: "Beats Headphone",
    rating: 4,
    review: [
      {
        text: "review-1",
        rating: "8",
      },
      {
        text: "review-2",
        rating: "10",
      },
    ],
    description: "some short dis",
    price: 999,
    image: "/BOSHOP images/item-img-1-2-1.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-2.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-2-1.jpg",
    ],
  },
  {
    id: "pr-3",
    name: "Beats Headphone",
    rating: 3,
    review: [
      {
        text: "review-1",
        rating: "2",
      },
      {
        text: "review-2",
        rating: "4",
      },
    ],
    description: "some short dis",
    price: 899,
    image: "/BOSHOP images/item-img-1-3.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-3-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-3.jpg",
    ],
  },
  {
    id: "pr-4",
    name: "Beats Headphone",
    rating: 2,
    review: [
      {
        text: "review-1",
        rating: "6",
      },
      {
        text: "review-2",
        rating: "7",
      },
    ],
    description: "some short dis",
    price: 799,
    image: "/BOSHOP images/item-img-1-4.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-4-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-4.jpg",
    ],
  },
  {
    id: "pr-5",
    name: "Beats Headphone",
    rating: 2,
    review: [
      {
        text: "review-1",
        rating: "6",
      },
      {
        text: "review-2",
        rating: "3",
      },
    ],
    description: "some short dis",
    price: 599,
    image: "/BOSHOP images/item-img-1-5.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-5-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-5.jpg",
    ],
  },
  {
    id: "pr-6",
    name: "Beats Headphone",
    rating: 2,
    review: [
      {
        text: "review-1",
        rating: "5",
      },
      {
        text: "review-2",
        rating: "5",
      },
    ],
    description: "some short dis",
    price: 399,
    image: "/BOSHOP images/item-img-1-6.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-6-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-6.jpg",
    ],
  },
  {
    id: "pr-7",
    name: "Beats Headphone",
    rating: 2,
    review: [
      {
        text: "review-2",
        rating: "6",
      },
      {
        text: "review-2",
        rating: "9",
      },
    ],
    description: "some short dis",
    price: 8899,
    image: "/BOSHOP images/item-img-1-7.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-7-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-7.jpg",
    ],
  },
  {
    id: "pr-8",
    name: "Beats Headphone",
    rating: 2,
    review: [
      {
        text: "review-2",
        rating: "9",
      },
      {
        text: "review-2",
        rating: "2",
      },
    ],
    description: "some short dis",
    price: 44999,
    image: "/BOSHOP images/item-img-1-8.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-8-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-8.jpg",
    ],
  },
  {
    id: "pr-9",
    name: "Beats Headphone",
    rating: 2,
    review: [
      {
        text: "review-2",
        rating: "3",
      },
      {
        text: "review-2",
        rating: "4",
      },
    ],
    description: "some short dis",
    price: 33999,
    image: "/BOSHOP images/item-img-1-9.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-9-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-9.jpg",
    ],
  },
  {
    id: "pr-10",
    name: "Beats Headphone",
    rating: 4,
    review: [
      {
        text: "review-2",
        rating: "6",
      },
      {
        text: "review-2",
        rating: "5",
      },
    ],
    description: "some short dis",
    price: 1999,
    image: "/BOSHOP images/item-img-1-10.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-10-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-10.jpg",
    ],
  },
  {
    id: "pr-11",
    name: "Beats Headphone",
    rating: 8,
    review: [
      {
        text: "review-2",
        rating: "6",
      },
      {
        text: "review-2",
        rating: "5",
      },
    ],
    description: "some short dis",
    price: 1999,
    //image: "/BOSHOP images/item-img-1-21-1.jpg",
    //image: "/BOSHOP images/img-trial.webp",
    image: "/BOSHOP images/item-img-1-3.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-3-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-3.jpg",
    ],
  },
  {
    id: "pr-12",
    name: "Beats Headphone",
    rating: 9,
    review: [
      {
        text: "review-2",
        rating: "6",
      },
      {
        text: "review-2",
        rating: "5",
      },
    ],
    description: "some short dis",
    price: 1999,
    rating: 10,
    review: [
      {
        text: "dfsdfdsff",
        rating: "7",
      },
      {
        text: "review-2",
        rating: "3",
      },
    ],
    //image: "/BOSHOP images/item-img-1-20-1.png",
    image: "/BOSHOP images/item-img-1-5.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-5-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-5.jpg",
    ],
  },
];

// every data should be in this file like slider data
// export const slider = [
//   {
//     img: "",
//     text: "",
//   },
// ];

export const bestSelling = [
  {
    id: "bs-1",
    name: "Best Selling Headphone",
    rating: 5,
    review: [
      {
        text: "Best review",
        rating: "9",
      },
      {
        text: "Another review",
        rating: "10",
      },
    ],
    description: "Some short description",
    price: 1299,
    image: "/BOSHOP images/item-img-1-5-1.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-5-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-5.jpg",
    ],
  },
  {
    id: "bs-2",
    name: "Best Selling Headphone",
    rating: 5,
    review: [
      {
        text: "Best review",
        rating: "9",
      },
      {
        text: "Another review",
        rating: "10",
      },
    ],
    description: "Some short description",
    price: 1299,
    image: "/BOSHOP images/item-img-1-5-1.jpg",
    multipleimages: [
      "/BOSHOP images/best-seller-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-5.jpg",
    ],
  },
  
  {
    id: "bs-3",
    name: "Best Selling Headphone",
    rating: 5,
    review: [
      {
        text: "Best review",
        rating: "9",
      },
      {
        text: "Another review",
        rating: "10",
      },
    ],
    description: "Some short description",
    price: 1299,
    image: "/BOSHOP images/item-img-1-5-1.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-5-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-5.jpg",
    ],
  },
  {
    id: "bs-4",
    name: "Best Selling Headphone",
    rating: 5,
    review: [
      {
        text: "Best review",
        rating: "9",
      },
      {
        text: "Another review",
        rating: "10",
      },
    ],
    description: "Some short description",
    price: 1299,
    image: "/BOSHOP images/item-img-1-5-1.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-5-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-5.jpg",
    ],
  },
  {
    id: "bs-5",
    name: "Best Selling Headphone",
    rating: 5,
    review: [
      {
        text: "Best review",
        rating: "9",
      },
      {
        text: "Another review",
        rating: "10",
      },
    ],
    description: "Some short description",
    price: 1299,
    image: "/BOSHOP images/item-img-1-5-1.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-5-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-5.jpg",
    ],
  },
  {
    id: "bs-6",
    name: "Best Selling Headphone",
    rating: 5,
    review: [
      {
        text: "Best review",
        rating: "9",
      },
      {
        text: "Another review",
        rating: "10",
      },
    ],
    description: "Some short description",
    price: 1299,
    image: "/BOSHOP images/item-img-1-5-1.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-5-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-5.jpg",
    ],
  },
  {
    id: "bs-7",
    name: "Best Selling Headphone",
    rating: 5,
    review: [
      {
        text: "Best review",
        rating: "9",
      },
      {
        text: "Another review",
        rating: "10",
      },
    ],
    description: "Some short description",
    price: 1299,
    image: "/BOSHOP images/item-img-1-5-1.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-5-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-5.jpg",
    ],
  },
  {
    id: "bs-8",
    name: "Best Selling Headphone",
    rating: 5,
    review: [
      {
        text: "Best review",
        rating: "9",
      },
      {
        text: "Another review",
        rating: "10",
      },
    ],
    description: "Some short description",
    price: 1299,
    image: "/BOSHOP images/item-img-1-5-1.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-5-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-5.jpg",
    ],
  },
  {
    id: "bs-9",
    name: "Best Selling Headphone",
    rating: 5,
    review: [
      {
        text: "Best review",
        rating: "9",
      },
      {
        text: "Another review",
        rating: "10",
      },
    ],
    description: "Some short description",
    price: 1299,
    image: "/BOSHOP images/item-img-1-5-1.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-5-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-5.jpg",
    ],
  },
  {
    id: "bs-10",
    name: "Best Selling Headphone",
    rating: 5,
    review: [
      {
        text: "Best review",
        rating: "9",
      },
      {
        text: "Another review",
        rating: "10",
      },
    ],
    description: "Some short description",
    price: 1299,
    image: "/BOSHOP images/item-img-1-5-1.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-5-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-5.jpg",
    ],
  },
  {
    id: "bs-11",
    name: "Best Selling Headphone",
    rating: 5,
    review: [
      {
        text: "Best review",
        rating: "9",
      },
      {
        text: "Another review",
        rating: "10",
      },
    ],
    description: "Some short description",
    price: 1299,
    image: "/BOSHOP images/item-img-1-5-1.jpg",
    multipleimages: [
      "/BOSHOP images/item-img-1-5-1.jpg",
      "/images/box7_image.jpg",
      "/images/box4_image.jpg",
      "/BOSHOP images/item-img-1-5.jpg",
    ],
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
