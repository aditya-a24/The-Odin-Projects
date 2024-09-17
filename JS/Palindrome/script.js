let palindroms = (str) => {
    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, '');
    // console.log(cleanStr);

    let lowerCase = cleanStr.toLowerCase();
    // console.log(lowerCase);

    let splitStr = lowerCase.split('');
    // console.log(splitStr);

    let reversedSplitStr = splitStr.reverse();
    // console.log(reversedSplitStr);

    let joinReverseStr = reversedSplitStr.join('');
    // console.log(joinReverseStr);

    if (lowerCase === joinReverseStr) {
        alert(str + " is a palindrom")
    } else {
        alert(str + " is not a palindrom");
    }
}

let getString = () => {
    let string = prompt("Please enter a string to check if its palindrom or not");
    palindroms(string);
}