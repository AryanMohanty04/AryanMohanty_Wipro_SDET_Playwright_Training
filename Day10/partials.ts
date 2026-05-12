interface User {
    id: number;
    name: string;
    email: string;
    age: number;

    address: {
        city: string;
        state: string;
        country: string;
        zip: string;
    };

    skills: Object;
}

// USER OBJECT
const u1: User = {
    id: 0,
    name: "Aryan",
    email: "",
    age: 0,

    address: {
        city: "",
        state: "",
        country: "",
        zip: ""
    },

    skills: {
        java: {
            spring: "low"
        }
    }
};


// DEEP PARTIAL TYPE
type DeepPartial<T> = {
    [P in keyof T]?:
        T[P] extends (infer U)[]
            ? DeepPartial<U>[]
            : T[P] extends object
            ? DeepPartial<T[P]>
            : T[P];
};


// DEEP UPDATE FUNCTION
function deepUpdate(target: any, source: any) {

    for (const key in source) {

        if (source[key] instanceof Object && key in target) {

            Object.assign(
                source[key],
                deepUpdate(target[key], source[key])
            );
        }
    }

    return {
        ...target,
        ...source
    };
}


// UPDATE USER FUNCTION
function updateUser(
    existingUser: User,
    updates: Partial<Omit<User, "id">>
) {

    return {
        ...existingUser,
        ...updates
    };
}


// PARTIAL UPDATE
const updatedUser = updateUser(u1, {
    email: "xyz@gmail.com",
    age: 23
});

console.log(updatedUser);


// DEEP PARTIAL OBJECT
const updates: DeepPartial<User> = {
    address: {
        country: "India"
    }
};


// DEEP UPDATE CALL
const uUser = deepUpdate(u1, {

    address: {
        country: "India",
        zip: "005"
    },

    skills: {
        java: {
            spring: "high"
        }
    }
});

console.log(uUser);