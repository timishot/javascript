const myObject = {
	city: "Madrid",
	greet() {
		console.log(`Greeting from ${this.city}`)
	},
};

Object.getPrototypeOf(myObject);