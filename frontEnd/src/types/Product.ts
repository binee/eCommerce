
type Rating = {
  rate: number;
  count : number;
}
  export default interface Products  {
    id: number;
    userId : number;
    title: string;
    body: string;
    image: string;
    price: number;
    description: string;
    category: string;
    rating: Rating
  }