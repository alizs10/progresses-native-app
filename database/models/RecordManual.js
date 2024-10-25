class RecordManual {

    constructor(name, value, valueHistory, step, isPinned, label, deadline, theme, importance) {
        this.id = 'record-manual-' + Math.floor(Math.random() * 10000);
        this.name = name;
        this.value = value;
        this.valueHistory = valueHistory;
        this.step = step;
        this.isPinned = isPinned;
        this.label = label;
        this.deadline = deadline;
        this.theme = theme;
        this.importance = importance;
        this.createdAt = Date.now();
        this.updatedAt = Date.now();
        this.deletedAt = null;
        this.type = 2;
    }

}

export default RecordManual;