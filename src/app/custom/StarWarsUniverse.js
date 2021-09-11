import Entity from './Entity'

export default class StarWarsUniverse {
    constructor() {

        this.entities = [];

        this.init();
    }


    // async init() {

    //     await fetch('https://swapi.boom.dev/api/')
    //         .then(response => response.json())
    //         .then(data => {

    //             console.log('aaaaaa')


    //             for (var name in data) {

    //                 let entityName = new Entity(name, data[name]);

    //                 this.entities.push(new Entity(entityName));

    //             }

    //         });
    // }

    async init(){
        
    }
}