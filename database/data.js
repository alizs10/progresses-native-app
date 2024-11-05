import Label from "./models/Label";
import Progress from "./models/Progress";
import ProgressStep from "./models/ProgressStep";
import Record from "./models/Record";
import RecordManual from "./models/RecordManual";

export const DATA = [

    // new Record('Days Without Smoking', 5, true, new Label('Daily'), 'red', 1),
    // new Record('Days 2', 5, true, new Label('Daily'), 'violet', 1),
    // new Record('Days 3', 5, true, new Label('Daily'), 'white', 1),

    new RecordManual('Kilometers', [
        {
            date: Date.now(),
            step: 5
        },
        {
            date: Date.now(),
            step: 10
        },
    ], 5, true, new Label('Daily'), 'white', 0),
    new Record('Days 3', 5, false, new Label('Daily'), 'white', 1),
    new Record('Days 4', 15, true, new Label('Daily'), 'blue', 2),
    new Record('Days 5', 25, true, new Label('Daily'), 'red', 0),
    new Progress('BH', true, new Label('Daily'), null, 'white', 2, [
        new ProgressStep('', false, 1),
        new ProgressStep('', false, 2),
        new ProgressStep('', false, 3),
        new ProgressStep('', false, 4),
        new ProgressStep('', false, 5),
        new ProgressStep('', false, 6),
        new ProgressStep('', false, 7),
    ]),

    // new Progress('DNS', true, new Label('Daily'), null, 'white', 2, [
    //     new ProgressStep('', false, 1),
    //     new ProgressStep('', false, 2),
    //     new ProgressStep('', false, 3),
    //     new ProgressStep('', false, 4),
    //     new ProgressStep('', false, 5),
    //     new ProgressStep('', false, 6),
    //     new ProgressStep('', false, 7),
    // ]),

    // new Record('Days 4', 5, true, new Label('Daily'), 'yellow', 1),
    // new Progress('Read 1948', true, new Label('Books'), null, 'yellow', 0, [
    //     new ProgressStep('', false, 1),
    //     new ProgressStep('', false, 2),
    //     new ProgressStep('', false, 3),
    //     new ProgressStep('', false, 4),
    // ]),

    // new Record('Days 5', 5, true, new Label('Daily'), 'blue', 1),
    // new Progress('C/W', true, new Label('Daily'), null, 'blue', 2, [
    //     new ProgressStep('', true, 1),
    //     new ProgressStep('', true, 2),
    //     new ProgressStep('', true, 3),
    //     new ProgressStep('', true, 4),
    //     new ProgressStep('', false, 5),
    //     new ProgressStep('', false, 6),
    //     new ProgressStep('', false, 7),
    // ]),

    // new Record('Days 6', 5, true, new Label('Daily'), 'red', 1),

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