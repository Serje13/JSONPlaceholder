interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
interface Geo {
  lat: string;
  lng: string;
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  addres: Address;
  geo: Geo;
  phone: string;
  website: string;
  company: Company;
}
