export function isProgressCompleted(progress) {
    return !progress.steps.some(step => !step.isCompleted);
}

export function isLabelExists(labels, labelName, except = null) {

    console.log(labelName, except)

    if (except && labelName.toLowerCase() === except.toLowerCase()) {
        return false;
    }

    return labels.some(label => ((label.name.toLowerCase() === labelName.toLowerCase()) || (label.name.toLowerCase() === 'all')));
}