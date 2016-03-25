// Javascript Entry Point

import $ from 'jquery';
import scenarios from './scenarios';

function slide(scenario) {
  var buttons = scenario.paths.map(path => {
    return `<li><button data-scenario="${path.scenario}">${path.label}</button></li>`;
  })

  return `
    <h4>${scenario.message}</h4>
    <ul>${buttons.join('')}<ul>
  `
}

function loadScenario(scenarioName) {
  var scenario = scenarios[scenarioName];
  var scenarioSlide = slide(scenario);
  $('.app').html(scenarioSlide);
}

loadScenario('start_scenario');

$('.app').on('click', 'button', event => {
  var scenario = $(event.target).data('scenario');
  loadScenario(scenario);
});








