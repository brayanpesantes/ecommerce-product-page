export const products: Product[] = [
  {
    id: 1,

    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    company: "Sneaker Company",
    price: 250.0,
    discount: 50,
    images: [
      {
        id: 1,
        product: {
          src: "/images/image-product-1.jpg",
          alt: "Producto 1",
        },
        thumbnail: {
          src: "/images/image-product-1-thumbnail.jpg",
          alt: "Miniatura Producto 1",
        },
      },
      {
        id: 2,
        product: {
          src: "/images/image-product-2.jpg",
          alt: "Producto 2",
        },
        thumbnail: {
          src: "/images/image-product-2-thumbnail.jpg",
          alt: "Miniatura Producto 2",
        },
      },
      {
        id: 3,
        product: {
          src: "/images/image-product-3.jpg",
          alt: "Producto 3",
        },
        thumbnail: {
          src: "/images/image-product-3-thumbnail.jpg",
          alt: "Miniatura Producto 3",
        },
      },
      {
        id: 4,
        product: {
          src: "/images/image-product-4.jpg",
          alt: "Producto 4",
        },
        thumbnail: {
          src: "/images/image-product-4-thumbnail.jpg",
          alt: "Miniatura Producto 4",
        },
      },
    ],
  },
];

export const links: Link[] = [
  { href: "/", label: "Collections" },
  { href: "/", label: "Men" },
  { href: "/", label: "Women" },
  { href: "/", label: "About" },
  { href: "/", label: "Contact" },
];
