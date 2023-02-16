const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
const stsrts= this.journeys.map((journey) =>{
  return journey.startLocation
})
return stsrts
};

Traveller.prototype.getJourneyEndLocations = function () {
  const ends= this.journeys.map((journey) =>{
    return journey.endLocation
  })
  return ends
};

Traveller.prototype.getJourneysByTransport = function (transportType) {
const journeysByTransport = this.journeys.filter((journey) =>{
  return journey.transport ===transportType
})
return journeysByTransport
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
const checker = this.journeys.filter((journey) =>{
  return journey.distance > minDistance
})
return checker
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
return this.journeys.reduce((runningTotal,journey) =>{
  return runningTotal + journey.distance
},0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
let uniqueTransport = []
uniqueTransport =this.journeys.filter((journeyToCheck) =>{
  return uniqueTransport !== journeyToCheck.transport
  
})

};


module.exports = Traveller;
