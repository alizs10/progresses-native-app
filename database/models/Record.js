class Record {

    constructor(name, value, isPinned, label, deadline, theme, importance) {
        this.id = 'record-' + Math.floor(Math.random() * 10000);
        this.name = name;
        this.value = value;
        this.isPinned = isPinned;
        this.label = label;
        this.deadline = deadline;
        this.theme = theme;
        this.importance = importance;
        this.createdAt = Date.now();
        this.updatedAt = Date.now();
        this.deletedAt = null;
        this.type = 1;
    }

}

export default Record;