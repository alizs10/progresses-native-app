class RecordManual {

    constructor(name, valueHistory, step, isPinned, label, theme, importance) {
        this.id = 'record-manual-' + Math.floor(Math.random() * 10000);
        this.name = name;
        this.valueHistory = valueHistory;
        this.value = valueHistory.length ? valueHistory.reduce((prevValue, currentValue) => prevValue.step + currentValue.step) : 0;
        this.step = step;
        this.isPinned = isPinned;
        this.label = label;
        this.theme = theme;
        this.importance = importance;
        this.createdAt = Date.now();
        this.updatedAt = Date.now();
        this.deletedAt = null;
        this.type = 2;
    }

}

export default RecordManual;