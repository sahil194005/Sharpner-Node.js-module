product = (a, b) => {
	return a * b;
};

product(2, 3);

let Student = {
	firstName: "Sahil",
	rollNo: "2275",
	lastName: "Kumar",

	full_name() {
		console.log(`${this.firstName} ${this.lastName}`);
	},
};
Student.full_name();
