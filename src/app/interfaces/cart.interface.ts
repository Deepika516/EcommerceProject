export interface ICart {
  title: string;
  image: string;
  price: number;
  quantity: number;
}

export interface IAmount {
  price: number;
  discount: number;
  deliveryCharges: number;
  tax: number;
  total: number;
}
