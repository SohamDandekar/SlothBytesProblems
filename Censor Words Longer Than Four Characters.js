// let input = "The code is fourty";
// let input = "Two plus three is five";
let input = "aaaa aaaaa 1234 12345";

let censor = (input) => {
    let inputArr = input.split(" ");
    for(let i in inputArr){
        if(inputArr[i].length > 4){
            inputArr[i] = inputArr[i].replace(/./g, '*');
        }
    }
    return inputArr.join(" ");
}

console.log(censor(input));