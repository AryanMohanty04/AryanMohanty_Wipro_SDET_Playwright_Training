class Payment{
    #validate(amount){
        if(amount <= 0){
            throw new Error("Invalid Amount");
        }
    }

    #process(amount){
        console.log(`Processing ${amount}.....`);
    }

    #log(amount){
        console.log(`Logged payment of ${amount}`);
    }

    pay(amount){
        this.#validate(amount);
        this.#process(amount);
        this.#log(amount);

        console.log("Payment Successful");
    }
}

const p = new Payment();
p.pay(500);
p.pay(210);