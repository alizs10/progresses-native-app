import Label from "./models/Label";
import Progress from "./models/Progress";
import ProgressStep from "./models/ProgressStep";
import Record from "./models/Record";
import RecordManual from "./models/RecordManual";

export const DATA = [

    new RecordManual('Kilometers', 15, [1, 2, 3, 5, 8, 10, 5, 6, 0, 10, 15], 5, true, new Label('Daily'), null, 'violet', 1),
    new Record('Days Without Smoking', 5, true, new Label('Daily'), null, 'red', 1),

    new Progress('Read 1948', true, new Label('Books'), null, 'yellow', 0, [
        new ProgressStep('', false, 1),
        new ProgressStep('', false, 2),
        new ProgressStep('', false, 3),
        new ProgressStep('', false, 4),
    ]),
    new Progress('BH', true, new Label('Daily'), null, 'turquoise', 2, [
        new ProgressStep('', false, 1),
        new ProgressStep('', false, 2),
        new ProgressStep('', false, 3),
        new ProgressStep('', false, 4),
        new ProgressStep('', false, 5),
        new ProgressStep('', false, 6),
        new ProgressStep('', false, 7),
    ]),
    new Progress('C/W', true, new Label('Daily'), null, 'blue', 2, [
        new ProgressStep('', true, 1),
        new ProgressStep('', true, 2),
        new ProgressStep('', true, 3),
        new ProgressStep('', true, 4),
        new ProgressStep('', false, 5),
        new ProgressStep('', false, 6),
        new ProgressStep('', false, 7),
    ]),
    new Progress('DNS', true, new Label('Daily'), null, 'white', 2, [
        new ProgressStep('', false, 1),
        new ProgressStep('', false, 2),
        new ProgressStep('', false, 3),
        new ProgressStep('', false, 4),
        new ProgressStep('', false, 5),
        new ProgressStep('', false, 6),
        new ProgressStep('', false, 7),
    ]),
]

export const LABELS = [
    new Label('Daily'),
    new Label('Books'),
    new Label('Work'),
    new Label('Health'),
    new Label('Finance'),
    new Label('Sports'),
    new Label('Travel'),
    new Label('Hobbies'),
    new Label('Family'),
    new Label('Friends'),
]