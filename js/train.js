const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

// Создать массив который содержит только уникальные значения исходного массива.


// const removeDoublicates = (list) => {

//     const newArrayWithoutDouble = {};

//     return list.reduce((acc, cur) => {
//         if(!newArrayWithoutDouble[cur]){
//             newArrayWithoutDouble[cur] = true;
//             acc.push(cur);
//         }

//         return acc;
//     }, []); 

// };

// const result = removeDoublicates(fruits);
// console.log(result);

const removeDoubleWithForeach = (list) => {
    const arrayNew = {};

    list.forEach((el) => {
        if(!arrayNew[el]){
            arrayNew[el] = true;
        }
    });

    const res = Object.keys(arrayNew);
    return res
};

const result2 = removeDoubleWithForeach(fruits);

console.log(result2);