export class Food {
  id: number;
  name:string;
  price: number;
  quantity: number;
  description: string;
  image: string;
  restaurantId: number;

  constructor(id: number, name: string, price: number, quantity: number, description: string, image: string, restaurantId: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
    this.image = image;
    this.restaurantId = restaurantId;
  }
}
