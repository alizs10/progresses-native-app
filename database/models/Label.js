class Label {
    constructor(name) {
        this.id = 'label-' + Math.floor(Math.random() * 10000);
        this.name = name
    }
}

export default Label