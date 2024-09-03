interface Product {
  id: number;
  name: string;
  description: string;
  company: string;
  price: number;
  discount: number;
  images: Image[];
}

interface Image {
  id: number;
  product: {
    src: string;
    alt: string;
  };
  thumbnail: {
    src: string;
    alt: string;
  };
}

interface Link {
  href: string;
  label: string;
}
