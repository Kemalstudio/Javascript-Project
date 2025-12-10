'use strict';

function getAge(birthYear) {
    const age = 2024 - birthYear;

    function printAge() {
        const info = `You are ${firstName}, and you are ${age} years old.`;
        console.log(info);
    }

    printAge();

    console.log(firstName );
    return age;
}

const firstName = 'Kemal';
getAge(2011);