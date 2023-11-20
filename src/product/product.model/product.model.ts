export class ProductModel {
  _id: string;
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculateRating: number;
  description: string;
  adventages: string;
  disAdventages: string;
  categories: string[];
  tags: string;
  charactiristics: {
    [key: string]: string;
  };
}
