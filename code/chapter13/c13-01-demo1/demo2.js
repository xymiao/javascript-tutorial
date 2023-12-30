function sayGreeting(name){
    const greeting = `欢迎您的阅读，希望您有所收获，${name}`;
    return greeting;
}
const name = "苗子说全栈";
const greeting = sayGreeting(name);
console.log(greeting);