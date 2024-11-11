let sentence = "the egg and Ctrl + C Ctrl + V the spoon";
//let sentence = "WARNING Ctrl + V Ctrl + C Ctrl + V";
//let sentence = "The Ctrl + C Ctrl + V Town Ctrl + C Ctrl + V";
//let sentence = "The Ctrl + C Ctrl + C Town Ctrl + V";

let keyboardShortcut = (sentence) => {
    let copyString = "";
    let copy = 0;
    let resultString = "";
    for(let i = 0; i < sentence.length; i++){
        resultString += sentence[i];

        if(sentence[i] === '+'){
            if(sentence[i + 2] === 'C'){
                resultString += " C";
                copyString = resultString.replaceAll(/Ctrl \+ C/g, "");
                //text has been copied
                copy = 1;
                i += 3;
            }else if(sentence[i + 2] === 'V'){
                resultString += " V";
                if(copy === 1){
                    //remove previous ctrl c and replace ctrl v with copyString
                    resultString = resultString.replaceAll(/Ctrl \+ C/g, "").replaceAll(/Ctrl \+ V/g, copyString);
                    copy = 0;
                    copyString = "";
                }else{
                    resultString = resultString.replaceAll(/Ctrl \+ V/g, "");
                }
                i += 3;
            }
        }
    }
    return resultString;
}

console.log(keyboardShortcut(sentence));