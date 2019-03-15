// var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " works");
	}
}


var john = new Person('John Doe', 'piss');
john.greet();

var jane = new Adult('Jane Jaden', 'fuck');
jane.greet();
jane.payTaxes();