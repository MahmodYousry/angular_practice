export interface Product {
  imageCover: string,
  title: string,
  price: number,
  category: category,
  ratingsAverage: number,
  id: string,
  description: string,
  images?: string[]
}

interface category {
  name: string;
}
