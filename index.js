// saturdayFun function
function saturdayFun(activity = 'roller-skate') {
	return `This Saturday, I want to ${activity}!`;
}

// mondayWork function
function mondayWork(activity = 'go to the office') {
	return `This Monday, I will ${activity}.`;
}

// wrapAdjective function
function wrapAdjective(flair = '*') {
	return function (adjective = 'special') {
		return `You are ${flair}${adjective}${flair}!`;
	};
}

// Call example
const encouragingPromptFunction = wrapAdjective('!!!');
console.log(encouragingPromptFunction('great')); // Outputs: "You are !!!great!!!"
