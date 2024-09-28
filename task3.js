// Zadanie 3. Filtrowanie tablicy liczb



// Napisz funkcję filterArray(numbers, value), która jako parametry przyjmuje tablicę liczb (numbers) i wartość (value). Funkcja powinna zwrócić nową tablicę zawierającą tylko te liczby z tablicy numbers, które są większe niż value.
const filterArray = (numbers, value) => {
    const newArr = [];
    for (i = 0; i <= numbers.length; i++) {
        if (numbers[i] > value)
            newArr.push(numbers[i])
    };
    return newArr
}


// Wewnątrz funkcji:

// Utwórz pustą tablicę, do której będziesz dodawać pasujące liczby.
// Użyj pętli do iteracji przez każdy element tablicy numbers.
// Użyj warunkowej instrukcji if wewnątrz pętli, aby sprawdzić każdy element i dodać go do tablicy.
// Zwróć nową tablicę z pasującymi liczbami jako wynik.


// Weź poniższy kod i wstaw go po deklaracji funkcji, aby sprawdzić, czy działa poprawnie. Konsola wyświetli wyniki jego działania.



console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]