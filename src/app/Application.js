import config from '../config';
import StarWarsUniverse from './custom/StarWarsUniverse';
import Entity from './custom/Entity';

import EventEmitter from 'eventemitter3';

const EVENTS = {
  APP_READY: 'app_ready',
};

/**
 * App entry point.
 * All configurations are described in src/config.js
 */
export default class Application extends EventEmitter {
  constructor() {
    super();

    this.config = config;
    this.data = {};

    this.init();
  }

  static get events() {
    return EVENTS;
  }

  /**
   * Initializes the app.
   * Called when the DOM has loaded. You can initiate your custom classes here
   * and manipulate the DOM tree. Task data should be assigned to Application.data.
   * The APP_READY event should be emitted at the end of this method.
   */
  async init() {
    // Initiate classes and wait for async operations here.

    // await StarWarsUniverse.init;


    await fetch('https://swapi.boom.dev/api/')
      .then(response => response.json())
      .then(data => {

        console.log('aaaaaa')

        let arr = [];


        for (var name in data) {

          let entityName = new Entity(name, data[name]);

          arr.push(entityName)

          // StarWarsUniverse.entities.push('1');

        }

        StarWarsUniverse.entities = arr;

        console.log(StarWarsUniverse.entities)

      });

    console.log('dfdsfjds')

    this.emit(Application.events.APP_READY);
  }
}