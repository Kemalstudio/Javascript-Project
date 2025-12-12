'use strict';

const bookings = [];

const makeBooking = function(flightNum, passengersNum, price) {
    passengersNum = passengersNum || 1;

    const booking = {
        flightNum, 
        passengersNum, 
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

makeBooking('QE123')