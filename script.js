'use strict'

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату");




let appData = {
    budget: [],
    timeData: time,
    expenses: {},
    optionalExpenses: '',
    income: [],
    savings: false,

};

let a1 = prompt("Введите обязательную статью расходов в этом месяце"),
    a2 = +prompt("Во сколько обойдеться?"),
    a3 = prompt("Введите обязательную статью расходов в этом месяце"),
    a4 = +prompt("Во сколько обойдеться?");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;


alert("Ваш бюджет на " + appData["timeData"] + " равен " + Math.round(appData.budget / 30) + ".");

