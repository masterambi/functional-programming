import {compose} from "./composition";

type DivideTwo = (x: number) => number
const divideTwo: DivideTwo = x => 2 / x

console.log(divideTwo(8))
console.log(divideTwo(0)) // Infinity

type Increment = (x: number) => number;
const increment: Increment = x => x + 1;

const composed = compose(increment, divideTwo)
console.log(composed(8))
console.log(composed(0)) // Infinity

interface Some<A> {
  _tag: "Some"
  value: A
}
interface None {
  _tag: "None"
}

type Option<A> = Some<A> | None;


const some = <A>(x: A): Option<A> => ({ _tag: 'Some', value: x })
const none: Option<never> = { _tag: "None" }

const isNone = <A>(x: Option<A>): x is None => x._tag === "None"

type DivideTwo2 = (x: number) => Option<number>
const divideTwo2: DivideTwo2 = x => x === 0 ? none : some(2/x)

const composed2 = compose(
  (x: Option<number>) => isNone(x) ? none: some(increment(x.value)), 
  divideTwo2
)

console.log(composed2(8))
console.log(composed2(0))