// primitive: value is stored with assign-by-value
// reference:value is stoereed with assign by reference

// Reference is implemented through objects

let user={
    name:"Amogh"
}
let username=user;
user.name="Kaku"//It will also change the value of name in username
console.log(user);
console.log(username);


//If we don't want to change the value of name in username

let user={
    name:"Amogh"
}
let username={...user};
user.name="Kaku"//It will not change the value of name in username
console.log(user);
console.log(username);
