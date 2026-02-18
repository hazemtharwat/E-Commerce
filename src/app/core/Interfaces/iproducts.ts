
export interface Iproducts {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}

export interface IsaleList {
  itemImageSrc: string;
  alt: string;
  title: string;
  price: string;
  id: number;
  description:string;
}