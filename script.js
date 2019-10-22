'use strict'

let money, time;

function start() {
    time = prompt("Введите дату");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();






let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,

};


function choseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдеться?", '');
        
        if ((typeof(a)) === 'string' && (typeof(a)) !=null && (typeof(b)) !=null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i -1;
        }
        
        
    };
}
choseExpenses();

//var k = 0;

/*while (k < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдеться?", '');
    
    if ((typeof(a)) === 'string' && (typeof(a)) !=null && (typeof(b)) !=null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {

    }
    k++;
} */

/*do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдеться?", '');
    
    if ((typeof(a)) === 'string' && (typeof(a)) !=null && (typeof(b)) !=null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {

    }
    k++;
}
while (k < 2); */

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка")    
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Ошибка!");
    };
}

detectLevel();



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + Math.round(appData.monthIncome));

    };
}

checkSavings();

function chooseOptExpenses() {
    for (let g = 0; g < 3; g++) {
        let aq = prompt("Статья необязательных расходов?", ''),
            bq = prompt("Во сколько обойдеться?", '');

        if ((typeof(aq)) === 'string' && (typeof(bq)) !=null && (typeof(bq)) !=null && aq != '' && bq != '' && aq.length < 50) {
            console.log("done");
            appData.optionalExpenses[aq] = bq;
        } else {
            g = g - 1;
        }


    };
}

chooseOptExpenses();


