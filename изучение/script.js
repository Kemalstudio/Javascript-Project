'use strict';

const bookings = [];

const makeBooking = function(flightNum, passengersNum = 1, price = 99 * passengersNum) {
    // Before ES6 default parameters
    // passengersNum = passengersNum || 1;
    // price = price || 99;

    const booking = {
        flightNum, 
        passengersNum, 
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

makeBooking('QE123');
makeBooking('TU235', 3, 390);
makeBooking('QE123', 1);
makeBooking('QE123', undefined, 400);

