function guessingGame() {
	const answer = Math.floor(Math.random() * 100);
	let gameOver = false;
	let numGuesses = 0;
	
	return function mainGame(nm){
		if (gameOver) return "The game has already ended.";
		numGuesses++;
		if (nm === answer){
			gameOver = true;
			const guess = numGuesses === 1 ? "guess" : "guesses";
			return `You win!`
		}
		if (nm < ANSWER) return `Too low.`;
		if (nm > ANSWER) return `Too high.`;
	};
}

module.exports = { guessingGame };
