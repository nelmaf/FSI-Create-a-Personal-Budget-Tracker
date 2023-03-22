let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here

for(let i=weeklyExpenseQuestions.length;i>0;i-- ){
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i-1]))
    console.log(answer)
    weeklyExpenses = weeklyExpenses + answer
}

for(let i=0;i<monthlyExpenseQuestions.length;i++ ){
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    console.log(answer)
    monthlyExpenses = monthlyExpenses + answer
}

let n=0
while(n<annualExpenseQuestions.length){
    let answer = parseFloat(window.prompt(annualExpenseQuestions[n]))
    console.log(answer)
    n++
    annualExpenses = annualExpenses + answer
}

