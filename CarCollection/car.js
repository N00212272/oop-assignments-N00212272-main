class car {

        constructor(_make, _model, _year, _color, _extras = 'none'){
            this.make = _make;
            this.model = _model;
            this.year = _year;
            this.color = _color;
            this.extras = _extras;

    }   

    getDetails(){
        return `
        Make: ${this.make}
        Model: ${this.model}
        Year: ${this.year}
        Color ${this.color}
        extras ${this.extras}
        `;
    }
}

export default car;
