var Game =  {
	words: ["cheeseypuffs","mcnuggets","panapo","kermit","rachel","trilogy","jack","lawyers","smash","right"],
	random: function (min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	selectWord: function() {
		var random = Game.random(0,Game.words.length-1);
		return Game.words[random];
	}
}

module.exports.selectWord = Game.selectWord;