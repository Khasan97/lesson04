"use strict";



let money = +prompt('Ваш доход?', 700),
	income = 'Курьер',      //строка с дополнительными доходом(например: фриланс),
	addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
	deposit = confirm('Есть ли у вас депозит в банке?'),
	changeExpenses = addExpenses,
	mission = 50000, //любое число(Какую сумму хотите накопить),
	expenses1 = prompt('Введите обязательную статью расходов?'),
	expenses2 = prompt('Введите обязательную статью расходов?'),
	amount1 = +prompt('Во сколько это обойдется?'),
	amount2 = +prompt('Во сколько это обойдется?'),
	period = 5;//число от 1 до 12(месяцев)



	let showTypeOf = function (data){
		console.log(data, typeof(data));
	};
	
	showTypeOf(money);
	showTypeOf(income);
	showTypeOf(deposit);


console.log(addExpenses.length);
console.log(changeExpenses.toLowerCase());
console.log(addExpenses.split(', '));
console.log(period + " месяцев");



let getExpensesMonth = function () {

	return amount1 + amount2;

};
console.log(getExpensesMonth());


let getAccumulatedMonth = function () {

	return  money - getExpensesMonth;
	
};


let accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);



const getTargetMonth = function() {
  return Math.ceil(mission / accumulatedMonth);
};

console.log("Цель будет достигнута через" + getTargetMonth() + 'месяцев') ;

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log(budgetDay);


let getStatusIncome = function () {
	if (budgetDay >= 1200) {
		return("У вас высокий уровень дохода");
	} else if (budgetDay > 600, budgetDay < 1200) {
		return('У вас средний уровень дохода');
	} else if (budgetDay <= 600) {
		return('К сожалению у вас уровень дохода ниже среднего');
	} else if (budgetDay < 0) {
		return('Что то пошло не так');
	}
};

console.log(getStatusIncome());






