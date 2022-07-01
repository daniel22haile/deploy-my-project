export interface IProduct {
  _id : string;
  productname: string;
  price: number;
  quantity: number;
  description: string;
  // imageUrl: string;
}


export interface IAddress {
  fullname: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
}
