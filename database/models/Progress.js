class Progress {

    constructor(name, isPinned, label, deadline, theme, importance, steps, hasDeadline = false) {
        this.id = 'progress-' + Math.floor(Math.random() * 10000);
        this.name = name;
        this.isPinned = isPinned;
        this.deadline = deadline;
        this.hasDeadline = hasDeadline;
        this.theme = theme;
        this.label = label;
        this.importance = importance;
        this.steps = steps;
        this.createdAt = Date.now();
        this.updatedAt = Date.now();
        this.deletedAt = null;
        this.type = 0;
    }
}

export default Progress;