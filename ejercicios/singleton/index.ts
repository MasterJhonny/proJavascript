import Singleton from "./singleton";

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log("a es igual igual que b?", a === b);

