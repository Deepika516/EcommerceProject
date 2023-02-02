export interface ICountry {
  id: number;
  countryName: string;
}

export interface IState {
  id: number;
  cid: number;
  stateName: string;
}

export interface IAddress {
  country: string;
  state: string;
  address: string;
  email: string;
  contact: number;
}

export interface IRecipt {
  country: string;
  state: string;
  address: string;
  email: string;
  contact: number;
  subtotal: number;
  total: number;
}

export interface IOrder {
  id: number;
  product: string;
  price: number;
  status: string;
  image: string;
}
