// TYPE NARROWING WITH typeof
function format(input: string | number) {
  if (typeof input === "string") {
    // narrowed to string
    return input.toUpperCase();
  }

  // narrowed to number
  return input.toFixed(2);
}

console.log(format("Aryan"));
console.log(format(12.2345));

// INTERFACES
interface Bird {
  fly: () => void;
  species: string;
}

interface Fish {
  swim: () => void;
}

// TYPE NARROWING WITH "in"
function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    // narrowed to Bird
    animal.fly();
  } else {
    // narrowed to Fish
    animal.swim();
  }
}

// TYPE PREDICATE
function isValidBird(bird: Bird): bird is Bird {
  return bird && typeof bird.species === "string";
}

// OBJECT
const b1 = {
  fly: () => {},
  species: "aerial",
};

// TYPE GUARD CHECK
if (isValidBird(b1)) {
  // narrowed to Bird
  console.log(b1.species);
}
