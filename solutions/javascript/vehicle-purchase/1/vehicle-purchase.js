// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  let licenseVehicle = [
    'car',
    'truck'
  ]

  return licenseVehicle.some(type => kind.includes(type));
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  let cars = [
    option1,
    option2,
  ]

  cars.sort();

  return `${cars[0]} is clearly the better choice.`;
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  // if vehicleage < 3 = .8 original price
  // age > 10 = .5 original price
  // in between .7

  if (age >= 3 && age <= 10)
    return (0.7) * (originalPrice);

  if (age > 10)
    return (0.5) * (originalPrice);

  return (0.8) * (originalPrice);
}
