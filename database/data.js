import Label from "./models/Label";
import Progress from "./models/Progress";
import ProgressStep from "./models/ProgressStep";
import Record from "./models/Record";
import RecordManual from "./models/RecordManual";

export const DATA = [

    new Record('Days Without Smoking', 5, true, new Label('Daily'), 'red', 1),
    new Record('Days 2', 5, true, new Label('Daily'), 'violet', 1),
    new Record('Days 3', 5, true, new Label('Daily'), 'white', 1),

    new RecordManual('Kilometers', 15, [1, 2, 3, 5, 8, 10, 5, 6, 0, 10, 15], 5, true, new Label('Daily'), 'violet', 1),

    new Progress('BH', true, new Label('Daily'), null, 'violet', 2, [
        new ProgressStep('', false, 1),
        new ProgressStep('', false, 2),
        new ProgressStep('', false, 3),
        new ProgressStep('', false, 4),
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

    new Record('Days 4', 5, true, new Label('Daily'), 'yellow', 1),
    new Progress('Read 1948', true, new Label('Books'), null, 'yellow', 0, [
        new ProgressStep('', false, 1),
        new ProgressStep('', false, 2),
        new ProgressStep('', false, 3),
        new ProgressStep('', false, 4),
    ]),

    new Record('Days 5', 5, true, new Label('Daily'), 'blue', 1),
    new Progress('C/W', true, new Label('Daily'), null, 'blue', 2, [
        new ProgressStep('', true, 1),
        new ProgressStep('', true, 2),
        new ProgressStep('', true, 3),
        new ProgressStep('', true, 4),
        new ProgressStep('', false, 5),
        new ProgressStep('', false, 6),
        new ProgressStep('', false, 7),
    ]),

    new Record('Days 6', 5, true, new Label('Daily'), 'red', 1),




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