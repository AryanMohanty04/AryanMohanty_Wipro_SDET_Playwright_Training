class User{
    #password;
    constructor(name, password){
        this.name = name;
        this.#password = password;
    }

    login(inputPassword){
        if(this.#password === inputPassword){
            console.log(`${this.name} logged in successfully`);
        } else{
            console.log("Invalid password!");
        }
    }
}

class Admin extends User{
    constructor(name, password, role){
        super(name, password);
        this.role = role;
    }

    login(inputPassword){
        super.login(inputPassword);
        console.log(`${this.name} has admin access as ${this.role}`);
    }
}

const user1 = new User("Aryan","12345");
const admin1 = new Admin("GuruJi","admin123","Super Admin");

user1.login("12345");
admin1.login("admin123");