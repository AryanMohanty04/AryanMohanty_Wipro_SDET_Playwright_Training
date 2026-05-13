// All Available Events
type AllEvents =
    | 'click'
    | 'dbclick'
    | 'submit'
    | 'reset'
    | 'keypress';

type MouseEvents = Extract<
    AllEvents,
    'click' | 'dbclick'
>;

type NonFormEvents = Exclude<
    AllEvents,
    'submit' | 'reset'
>;


const mouse1: MouseEvents = 'click';
const mouse2: MouseEvents = 'dbclick';

const event1: NonFormEvents = 'click';
const event2: NonFormEvents = 'keypress';

console.log(mouse1);
console.log(mouse2);
console.log(event1);
console.log(event2);
