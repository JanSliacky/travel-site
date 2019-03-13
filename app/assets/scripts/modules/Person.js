function Person(fullName, favColor) {
	this.name = fullName;
	this.favouriteColor = favColor;
	this.greet = function() {
		console.log('Hello, my name is ' + this.name + ' and my fav color is ' + this.favouriteColor);
	} 
}

module.exports = Person;