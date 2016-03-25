
var start_scenario = {
  message: 'A stranger approaches you in a bar and asks for you to to accepta mission.',
  paths: [
    {label: 'Accept the mission', scenario: 'deliver_briefcase'},
    {label: 'Ingore the wierdo', scenario: 'no_adventure'}
  ]
};

var no_adventure = {
  message: 'You continue to drink and have an ordinary life. Game over.',
  paths: [
    {label: 'Play again', scenario: 'start_scenario'}
  ]
};

var deliver_briefcase = {
  message: 'The dark figure gives a breifcase to deliver to the deli on 4th.',
  paths: [
    {label: 'Look in the briefcase', scenario: 'boom'},
    {label: 'Deliver the briefcase', scenario: 'deliver'}
  ]
};

var boom = {
  message: 'You accenditally activated a bomb that was meant for someone else, killing yourself and letting an evil reign supreme. Congratulations.',
  paths: [
    {label: 'Play again', scenario: 'start_scenario'}
  ]
};

var deliver = {
  message: 'You delivered a bomb to an evil empire doing your part to better humanity. You are a hero. You win. 9000.',
  paths: [
    {label: 'Play again', scenario: 'start_scenario'}
  ]
};


export default {
  start_scenario,
  no_adventure,
  deliver_briefcase,
  boom,
  deliver
}

// // start scenario

// A stranger approaches you in a 
// bar and asks for you to to accept
// a mission.

// // accept the mission ->  deliver_briefcase
// // ignore the wierdo  ->  no_adventure


// // no adventure scenario

// You continue to drink and have 
// an ordinary life. Game over.

// // play gain -> start_scenario



// // deliver briefcase scenario

// The dark figure gives a breifcase to deliver
// to the deli on 4th.

// // look in the briefcase  -> boom
// // deliver the briefcase  -> devliver


// // boom scenario
// You accenditally activated a bomb that 
// was meant for someone else, killing yourself
// and letting an evil reign supreme. Congratulations.

// // play gain -> start_scenario

// // deliver scenatio

// You delivered a bomb to an evil empire doing
// your part to better humanity. You are a hero.
// You win. 9000.
