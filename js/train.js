const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

// Создать массив который содержит только уникальные значения исходного массива.



const removeDoublicates = (arr) => {
    const map = {};

    return arr.reduce((acc, cur) => {
        if(!map[cur]){
            map[cur] = true;
            acc.push(cur);
        }

        return acc;
    }, [])
};

const fruitsUnique = removeDoublicates(fruits);
console.log(fruitsUnique);