export const sum = (first : any, second : any) => {
    return first + second;
}

export const sumAll = (numbers  : any) => {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

export const calculate = (numbers  : any, callback  : any)  => {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    callback(total);
}

export const calculateAndReturn = (numbers  : any, callback  : any) => {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return callback(total);
}