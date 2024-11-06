export function isProgressCompleted(progress) {
    return !progress.steps.some(step => !step.isCompleted);
}

export function isLabelExists(labels, labelName) {
    return labels.some(label => label.name.toLowerCase() === labelName.toLowerCase());
}