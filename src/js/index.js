// Javascript Entry Point

import $ from 'jquery';
import scenarios from './scenarios';

class Game {
  constructor(scenarios) {
    this.scenarios = scenarios;
    this.paths = [];
  }

  slide(scenario) {
    var buttons = scenario.paths.map(path => {
      return `<li><button data-scenario="${path.scenario}">${path.label}</button></li>`;
    })

    return `
      <h4>${scenario.message}</h4>
      <ul>${buttons.join('')}<ul>
    `
  }

  pathsLengthSum() {
    return this.paths.reduce((a, b) => a + b);
  }

  loadScenario(scenarioName) {
    this.paths.push(scenarioName.length);
    console.log(this.paths, this.pathsLengthSum());
    var scenario = this.scenarios[scenarioName];
    var scenarioSlide = this.slide(scenario);
    $('.app').html(scenarioSlide);
  }

  start() {
    this.loadScenario('start_scenario');

    $('.app').on('click', 'button', (event) => {
      var scenario = $(event.target).data('scenario');
      this.loadScenario(scenario);
    });
  }
}

var game = new Game(scenarios);
game.start();






