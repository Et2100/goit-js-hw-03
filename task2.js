// Zadanie 2. Kompozycja tablic



// Napisz funkcję o nazwie makeArray, która przyjmuje trzy parametry: firstArray (tablica), secondArray (tablica) i maxLength (liczba). Funkcja musi utworzyć nową tablicę zawierającą wszystkie elementy z firstArray, a następnie wszystkie elementy z secondArray.
const makeArray = (firstArray, secondArray, maxLength) => {
    const newArr = firstArray.concat(secondArray);
    if (newArr.length > maxLength) {
        return newArr.slice(0, maxLength);
    } else {
        return newArr
    };
}


// Jeśli liczba elementów w nowej tablicy przekracza maxLength, funkcja musi zwrócić kopię tablicy o długości elementów maxLength.
// W przeciwnym razie funkcja powinna zwrócić całą nową tablicę.


// Weź poniższy kod i wstaw go po deklaracji swojej funkcji, aby sprawdzić poprawność jej działania. Konsola wyświetli wyniki jego działania.

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []