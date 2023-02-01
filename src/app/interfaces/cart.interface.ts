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

export interface ICountry {
  id: number;
  countryName: string;
}

export interface IState {
  id: number;
  cid: number;
  stateName: string;
}
