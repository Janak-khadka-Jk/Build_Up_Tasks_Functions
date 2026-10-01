function formatGreetingWithAge(name, yob) {
    let age = 2026 - yob;
    let greeting = "Hello " + name + "! You are " + age + " years old this year.";

    return greeting;
}

function displayGreetingWithAge2(name, yob) {
    let greeting = formatGreetingWithAge(name, yob);

    console.log(greeting);
}

displayGreetingWithAge2("Mike", 1989);
displayGreetingWithAge2("Anne", 2002);
displayGreetingWithAge2("Joe", 2010);