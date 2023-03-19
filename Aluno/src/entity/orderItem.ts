export default class OrderItem {
    private _id: string;
    private _productID: string;
    private _name: string;
    private _price: number;
    private _quantity: number;
    private _items: OrderItem[];

    constructor(id: string, name: string, price: number, productID: string, quantity: number, items: OrderItem[]) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
        this._items = items;
        this._productID = productID;
    }


    get price(): number {
        return this._price;
    }

    get quantity(): number {   
        return this._quantity;
    }

    orderItemTotal(): number {
        return this._price * this._quantity;
    }

    total(): number {
        return this._items.reduce((acc, item) => acc + item.orderItemTotal(), 0);
    }





}