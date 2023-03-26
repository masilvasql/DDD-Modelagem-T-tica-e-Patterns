import Address from "../../entity/address";
import Customer from "../../entity/customer";
import Product from "../../entity/Products";
import CustomerCreatedEvent from "../customer/customer-created.events";
import CustomerHasAddressChangedEvent from "../customer/customer-has-address-changed.event";
import EnviaConsoleLog1Handler from "../customer/handler/EnviaConsoleLog1Handler";
import EnviaConsoleLog2Handler from "../customer/handler/EnviaConsoleLog2Handler";
import SendEmailWhenProductIsCreatedHandler from "../product/handler/send-email-when-product-is-created.handler";
import ProductCreatedEvent from "../product/product-created.event";
import EventDispatcher from "./event-dispatcher";

describe("Domain events tets", ()=>{
    
    it("should register an event", ()=>{
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);

    })

    it("should unregister an event", ()=>{
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();
        //Espia se a constante eventHandler.handle() foi chamada
        eventDispatcher.register("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);

        eventDispatcher.unregister("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(0);
    })

    it("should notify all event handlers", ()=>{
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();
        const spyEventHandler = jest.spyOn(eventHandler, "handle");

        eventDispatcher.register("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);
        const newProduct = new Product("Product 1", "Product 1 descriptin", 100);

        const productCreatedEvent = new ProductCreatedEvent(newProduct);

        // Quando o notify for chamado, o método SendEmailWhenProductIsCreatedHandler.handle() será chamado
        eventDispatcher.notify(productCreatedEvent);
        expect(spyEventHandler).toHaveBeenCalled()

    })
    
    it("should notify customer created event", ()=>{
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new EnviaConsoleLog1Handler();
        const spyEventHandler = jest.spyOn(eventHandler, "handle");

        eventDispatcher.register("CustomerCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"].length).toBe(1);
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]).toMatchObject(eventHandler);
        const customer = new Customer("1", "Customer1");
        const customerCreatedEvent = new CustomerCreatedEvent(customer);
        eventDispatcher.notify(customerCreatedEvent);
        expect(spyEventHandler).toHaveBeenCalled()
    })

    it("should notify customer has address changed event", ()=>{
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new EnviaConsoleLog2Handler();
        const spyEventHandler = jest.spyOn(eventHandler, "handle");

        eventDispatcher.register("CustomerHasAddressChangedEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["CustomerHasAddressChangedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["CustomerHasAddressChangedEvent"].length).toBe(1);
        expect(eventDispatcher.getEventHandlers["CustomerHasAddressChangedEvent"][0]).toMatchObject(eventHandler);
        const customer = new Customer("1", "Customer1");
        let address = new Address("Rua 1", 123, "Bairro 1", "Cidade 1", "Estado 1");
        customer.Address = address;
        expect (customer.Address).toBeDefined();

        address = new Address("Rua 2", 123, "Bairro 2", "Cidade 2", "Estado 2");
        customer.changeAddress(address);

        expect(customer.Address).toEqual(address);
    
        const customerHasAddressChangedEvent = new CustomerHasAddressChangedEvent(customer)
        eventDispatcher.notify(customerHasAddressChangedEvent)
        expect(spyEventHandler).toHaveBeenCalled()

    })

})