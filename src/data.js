import p1 from "./images/p1.jpg"
import p2 from "./images/p2.jpg"
import p3 from "./images/p3.jpg"
import p4 from "./images/p4.jpg"
import p5 from "./images/p5.jpg"
import p6 from "./images/p6.jpg"

const data = {
  products: [
    {
      _id: '1',
      name: 'Nike Slim Shirt',
      category: 'Shirts',
      images: p1,
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      _id: '2',
      name: 'Adidas Fit Shirt',
      category: 'Shirts',
      images: p2,
      price: 100,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      _id: '3',
      name: 'Lacoste Free Shirt',
      category: 'Shirts',
      images: p3,
      price: 220,
      countInStock: 0,
      brand: 'Lacoste',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      _id: '4',
      name: 'Nike Slim Pant',
      category: 'Pants',
      images: p4,
      price: 78,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      _id: '5',
      name: 'Puma Slim Pant',
      category: 'Pants',
      images: p5,
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      _id: '6',
      name: 'Adidas Fit Pant',
      category: 'Pants',
      images: p6,
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
export default data;