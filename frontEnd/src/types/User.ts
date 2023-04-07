type Useraddress = {
    street: string;
    city: string;
    zip: number;
  }
  export default interface User  {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Useraddress;
    phone: number | string;
    website: string
  }