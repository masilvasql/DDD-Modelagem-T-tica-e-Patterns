//entity


import Addres from "./address";

export default class Customer {
    _id: string;
    _name: string = "";
    _address!: Addres;
    _active:boolean = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate()
    }

    validate(){
        if(this._name.length === 0){
            throw new Error("Name is Required")
        }

        if(this._id.length === 0){
            throw new Error("Id is Required")
        }
    }

    changeName(name:string){
        this._name= name;
        this.validate();
    }

    activate(){
        if(this._address === undefined ){
            throw new Error("Addres is mandatory to activate customer")
        }
        this._active = true
    }

    deactivate(){
        this._active = false
    }

    set Addres(address:Addres){  
        this._address = address;
    }


}