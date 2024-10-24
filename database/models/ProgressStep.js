class ProgressStep {
    constructor(name, isCompleted, index) {
        this.id = 'step-' + Math.floor(Math.random() * 10000);
        this.name = name;
        this.isCompleted = isCompleted;
        this.index = index;
        this.createdAt = Date.now();
        this.updatedAt = Date.now();
    }
}

export default ProgressStep;