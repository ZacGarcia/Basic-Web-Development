let houseKeeper = {
    name: "Juan",
    age: 23,
    hasWorkPermit: true,
    languages : ["Filipino", "English"]
}

console.log(houseKeeper.age);

function HouseKeeper(name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

houseKeeper1 = new HouseKeeper("Zac", 26, true, ["Filipino", "English", "Bisaya"]);
houseKeeper2 = new HouseKeeper("Zac", 26, true, ["Filipino", "English", "Bisaya"]);
console.log(houseKeeper1);
console.log(houseKeeper2);