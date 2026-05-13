type AllEvents = "hover" | "drag" | "submit" | "reset" | "scroll";

type MouseEvents = Extract<AllEvents, "hover" | "drag">;
type NonFormEvents = Exclude<AllEvents, "submit" | "reset">;

const mouseAction1: MouseEvents = "hover";

const mouseAction2: MouseEvents = "drag";

const action1: NonFormEvents = "hover";

const action2: NonFormEvents = "scroll";

console.log(mouseAction1);
console.log(mouseAction2);
console.log(action1);
console.log(action2);


// const wrongMouse: MouseEvents = 'submit';
// Error