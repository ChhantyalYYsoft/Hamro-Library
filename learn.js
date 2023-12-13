const person = {
    name: "Hero",
    age: 2332,
    address: {
        postal: 234,
        state: "act"
    }
}




const { name, ...rest } = person;
console.log(name);

const formData = {
    fName: "kiran"
}

const newFormData = { ...formData, fName: "G" }
console.log(newFormData)

const giveMeSum = (num1, num2) => {
    const total = num1 + num2;
    const totalString = `Total is: ${total}`;
    return [total, totalString]
}

const [myNum, myNumString] = giveMeSum(2, 3)
console.log(myNum);
console.log(myNumString)