// const person : {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } =  {
//     name: "max",
//     age: 40,
//     hobbies: ["sports", "food"],
//     role: [2, "author"]
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: "max",
    age: 40,
    hobbies: ["sports", "food"],
    role: Role.ADMIN
};


// person.role.push("admin");
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["sports"];

console.log(person.name);


for(const hobby of person.hobbies) {
    console.log(hobby)
}


// : {
//     name: string;
//     age: number;
//     hobbies: string[];
// } =