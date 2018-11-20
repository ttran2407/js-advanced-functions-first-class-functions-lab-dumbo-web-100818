// Code your solution in this file!

const returnFirstTwoDrivers = function(array){
  return array.filter(function(element){
    return array.indexOf(element) < 2
  })
}

const returnLastTwoDrivers = function(array){
  return array.filter(function(element){
    return array.indexOf(element) > array.length - 3
  })
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(number){
  return function(){
    return number * number
  }
}

function fareDoubler(fare){
  return fare * 2
}

function fareTripler(fare){
  return fare * 3
}

function fetchSpecifiedDrivers(arrayOfDrivers, func){
  return func(arrayOfDrivers)
}
