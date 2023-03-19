//Agregados

import OrderItem from "./orderItemts";

export default class Order{
    _id:string ;
    _customerID:string;
    _items:OrderItem[];


    constructor(id:string, customerID:string, items:OrderItem[]){
        this._id = id;
        this._customerID = customerID;
        this._items = items;
    }

    total(){
        let total = 0;
        for(let item of this._items){
            total += item._price;
        }
        return total;
    }

  

    
}