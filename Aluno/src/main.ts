import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/orderItemts";

let customer = new Customer("1", "John");
const address = new Address("Rua 1", "123", "São Paulo", "12345678", "Brasil");
customer.Addres = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 20);

const order = new Order("1", customer._id, [item1, item2]);

console.log(order.total());