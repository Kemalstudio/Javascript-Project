const celciusToKelvin = function () {
    const measurement = {
        type: 'temperature',
        unit: 'celsius',
        value: prompt('Degrees Celsius:'),
    };

    console.log(measurement.value)
    console.warn(measurement.value);
    console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
};

console.log(cerciusToKelvin());