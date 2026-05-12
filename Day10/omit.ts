interface AppUser {
    id: string;
    name: string;
    email: string;
    password: string;
}
// Omit removes specific properties from a type
type UserPreview = Omit<AppUser, "email" | "password">;

const preview: UserPreview = {
    name: "Aryan",
    id: "ZeroTwo"
};

console.log(preview);