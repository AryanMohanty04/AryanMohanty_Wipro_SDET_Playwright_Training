class BankAccount{
    #balance;

    constructor(initialBalance){
        this.#balance = initialBalance;
    }

    deposit(amount){
        if(amount>0) this.#balance += amount;
    }

    withdraw(amount){
        if(amount <= this.#balance){
            this.#balance -= amount;
        }
    }

    getBalance(){
        return this.#balance;
    }
}

const acc = new BankAccount(1000);
console.log(acc.getBalance());
acc.deposit(500)
console.log(acc.getBalance());
acc.withdraw(1200)
console.log(acc.getBalance());