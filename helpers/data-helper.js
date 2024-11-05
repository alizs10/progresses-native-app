export function isProgressCompleted(progress) {
    return !progress.steps.some(step => !step.isCompleted);
}