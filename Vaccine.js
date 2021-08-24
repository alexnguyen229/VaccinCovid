
export default class Vaccine {
    name;
    manufacture;
    country;

    constructor(name, manufacture, country) {
        this.name = name;
        this.manufacture = manufacture;
        this.country = country;
    }

    CheckVaccine() {
        
    }
}

console.log(Vaccine.name);