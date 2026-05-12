// ENUMS
enum Role {
    Admin = "Admin",
    User = "User",
    SuperUser = "SuperUser"
}

enum Priviledge {
    Read = "Read",
    Write = "Write",
    Delete = "Delete"
}

// TYPES
type Emp = {
    id: number | string;
    name: string;
    role: Role;
};

type Admin = {
    priviledges: Priviledge[];
};

type SuperUser = Emp & Admin;
let list: (Emp | Admin | SuperUser)[] = [];
function addEmp(emp: Emp | Admin | SuperUser): void {
    list.push(emp);
}

function getEmp(index: number): void {
    console.log(list[index]);
}


// ADDING DATA
addEmp({
    id: 10,
    name: "Aryan",
    role: Role.User
});

addEmp({
    id: "xyz",
    name: "Tada",
    role: Role.User
});

addEmp({
    id: 20,
    name: "Ray",
    role: Role.Admin,
    priviledges: [Priviledge.Read, Priviledge.Write]
});

getEmp(0);
getEmp(1);
getEmp(2);

const points = {
    x: 10,
    y: 20
};

type PointKeys = keyof typeof points;
function getProperty<T, K extends keyof T>(
    obj: T,
    key: K
) {
    return obj[key];
}

const user = {
    id: 1,
    username: "tadakakehashi",
    email: "tada@example.com"
};


// FUNCTION CALLS
console.log(getProperty(user, "email"));
console.log(getProperty(user, "username"));
console.log(getProperty(user, "id"));