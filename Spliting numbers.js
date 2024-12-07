let input = -1234;

let num_split = (input) => {

    let temp = input;
    let multiplier = 1;
    let result = [];
    let digit;

    while(temp !== 0){
        digit = temp % 10;
        result.unshift(digit * multiplier);
        multiplier *= 10;
        temp = parseInt(temp / 10);
    }

    return result;
}

console.log(num_split(input));