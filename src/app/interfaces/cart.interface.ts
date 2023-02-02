export interface ICart {
  id: number;
  pid: number;
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
