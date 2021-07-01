// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) { //Returns new array
    const newCats = [...cats, name];
    return newCats
}

function prependCat(name) { //Returns new array
    const newCats = [name, ...cats];
    return newCats
}

function removeLastCat() { //Returns new array
    return cats.slice(0, 2)
}

function removeFirstCat() { //Returns new array
    return cats.slice(1)
}