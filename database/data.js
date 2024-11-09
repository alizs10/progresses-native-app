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
    ], 5, true, 0, 'black', 0),
    new Record('Days 3', 5, false, 0, 'white', 1),
    new Record('Days 31', 5, false, 0, 'black', 1),
    new Record('Days 4', 15, true, 0, 'blue', 2),
    new Record('Days 5', 25, true, 0, 'red', 0),
    new Progress('BH', true, 0, null, 'black', 2, [
        new ProgressStep('', false, 1),
        new ProgressStep('', false, 2),
        new ProgressStep('', false, 3),
        new ProgressStep('', false, 4),
        new ProgressStep('', false, 5),
        new ProgressStep('', false, 6),
        new ProgressStep('', false, 7),
    ]),

    // new Progress('DNS', true, 0, null, 'white', 2, [
    //     new ProgressStep('', false, 1),
    //     new ProgressStep('', false, 2),
    //     new ProgressStep('', false, 3),
    //     new ProgressStep('', false, 4),
    //     new ProgressStep('', false, 5),
    //     new ProgressStep('', false, 6),
    //     new ProgressStep('', false, 7),
    // ]),

    // new Record('Days 4', 5, true, 0, 'yellow', 1),
    // new Progress('Read 1948', true, new Label('Books'), null, 'yellow', 0, [
    //     new ProgressStep('', false, 1),
    //     new ProgressStep('', false, 2),
    //     new ProgressStep('', false, 3),
    //     new ProgressStep('', false, 4),
    // ]),

    // new Record('Days 5', 5, true, 0, 'blue', 1),
    // new Progress('C/W', true, 0, null, 'blue', 2, [
    //     new ProgressStep('', true, 1),
    //     new ProgressStep('', true, 2),
    //     new ProgressStep('', true, 3),
    //     new ProgressStep('', true, 4),
    //     new ProgressStep('', false, 5),
    //     new ProgressStep('', false, 6),
    //     new ProgressStep('', false, 7),
    // ]),

    // new Record('Days 6', 5, true, 0, 'red', 1),

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