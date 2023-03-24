import Order from "./domain/entity/order"
import OrderItem from "./domain/entity/orderItem"
import OrderService from "./domain/service/order.service"


const item1 = new OrderItem("1", "Item 1", 100, "p1", 2)
const item2 = new OrderItem("2", "Item 2", 300, "p1", 2)
const itemm3 = new OrderItem("3", "Item 3", 100, "p1", 2)

const order = new Order("01", "c1", [item1, item2])
const order2 = new Order("o2", "c1", [itemm3])

const total = OrderService.calculateTotal([order, order2])
console.log(total)