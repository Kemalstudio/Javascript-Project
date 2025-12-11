const getAge = function (birthYear) {
    console.log(2021 - birthYear)
    console.log(this);
};

getAge(2001);


const getAgeArr = function (birthYear) {
    console.log(2021 - birthYear)
    console.log(this);
};

getAgeArr(2001);