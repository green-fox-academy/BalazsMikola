'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let avarageCodeingHoursPerDay: number = 6;
let semesterWeeks: number = 17;
let workingDaysPerWeek: number = 5;
let averageWorkHoursWeekly: number = 52;

let codingHoursPerSemester: number = (avarageCodeingHoursPerDay * workingDaysPerWeek) * semesterWeeks;
let percentageOfCoding: number = ((avarageCodeingHoursPerDay * workingDaysPerWeek) / averageWorkHoursWeekly )* 100;

console.log('The attendee spends ' + codingHoursPerSemester + ' hours with coding during the semester, and the percentage of coding is ' + percentageOfCoding +'!');
