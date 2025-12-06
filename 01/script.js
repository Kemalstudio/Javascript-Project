(function() {
	function askNumber(question) {
		while (true) {
			const input = prompt(question);
			if (input === null) return null; // user cancell
			const normalized = input.replace(',', '.').trim();
			const value = Number(normalized);
			if (!isNaN(value) && value > 0) return value;
			alert('Пожалуйста, введите положительное число.');
		}
	}

	const weight = askNumber('Введите вес в килограммах (например, 70):');
	if (weight === null) { alert('Операция отменена.'); return; }

	const heightCm = askNumber('Введите рост в сантиметрах (например, 170):');
	if (heightCm === null) { alert('Операция отменена.'); return; }

	const heightM = heightCm / 100;
	const bmi = weight / (heightM * heightM);
	const bmiRounded = Math.round(bmi * 10) / 10;

	let category;
	if (bmi < 18.5) category = 'Недостаточная масса тела';
	else if (bmi < 25) category = 'Нормальная масса тела';
	else if (bmi < 30) category = 'Избыточная масса тела (предожирение)';
	else category = 'Ожирение';

	alert(`Ваш BMI: ${bmiRounded}\nКатегория: ${category}`);
})();
