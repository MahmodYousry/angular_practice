export interface Cart {
  numOfCartItems: number,
  data: Data
}

interface Data {
  totalCartPrice: number,
  products: products[]
}

interface products {
  count: number,
  price: number,
  product: innerProduct
}

interface innerProduct {
  id: string,
  title: string,
  imageCover: string,
  category: Category
}

interface Category {
  name: string,
}


