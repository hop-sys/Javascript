// 
// we export modules so that we can use them in other files/modules in our program

export const calculator = (x, y) =>{
    let difference = x - y

    console.log("the difference of the two numbers is: ", difference)
};


export const simpleInterest = (principal, rate , time)=>{
    let si=(principal*rate*time)/100
    console.log("The simple interest is: ", si)
};

const bmi = (weight, height)=>{
    let answer=weight/(height**2)
    console.log("The bmi of the person is: ", answer, "kg/m\u00b2")
};

export{bmi}