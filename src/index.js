module.exports = function toReadable (number) {
	let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
	let dec = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let text = '';
	if (number == 0) {
		return 'zero'
	} else if (number < 20) {
		return  numbers[number-1];
	} else if (number < 100) {
		let fd = number.toString()[0];
		let ld = number.toString()[1];
		return (ld != '0') ? dec[fd-2] + ' ' + numbers[ld-1] : dec[fd-2];
	} else {
		let fd = number.toString()[0];
		return (number%100 == 0) ? numbers[fd-1] + ' hundred' : numbers[fd-1] + ' hundred ' + toReadable(number - fd*100);
	}
}
