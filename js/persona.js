class Persona {
    constructor(firstName, lastName, major) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._major = major;
    }  

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    get major() {
        return this._major;
    }

    set major(major) {
        this._major = major;
    }
}