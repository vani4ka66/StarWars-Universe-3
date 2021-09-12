import Entity from './Entity'

export default class StarWarsUniverse {
    constructor() {

        this.entities = [];

        this.init();
    }

    async init() {

        await fetch('https://swapi.boom.dev/api/')
          .then(response => response.json())
          .then(data => {

            let arr = [];

            for (var name in data) {

              let eName = name;

              fetch(data[name])
                .then(response => response.json())
                .then(data => {

                  let entityName = new Entity(eName, data);
                  arr.push(entityName)

                });
            }

            this.entities = arr;

            console.log(this.entities)
          });

    }
}