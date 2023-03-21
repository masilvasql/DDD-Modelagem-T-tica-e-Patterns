"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderService {
    static calculateTotal(orders) {
        let total = orders.reduce((acc, order) => acc + order.total(), 0);
        console.log(total);
        return total;
    }
}
exports.default = OrderService;
