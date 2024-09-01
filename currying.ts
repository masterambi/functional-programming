function normal_sum(a, b) {
  return a + b
}

console.log(normal_sum(1, 2))

type Sum = (a: number) => (b: number) => number
const sum: Sum = a => b => a + b

console.log(sum(1)(2))

type IncrementCurrying = (x: number) => number
const incrementCurrying: Increment = sum(1)

type Decrement = (x: number) => number
const decrementCurrying: Decrement = sum(-1)

console.log(incrementCurrying(6)) // 7
console.log(decrementCurrying(6)) // 5

type Curry2 = <A, B, Z> (f: (a: A, b: B) => Z)
  => (a: A)
  => (b: B)
  => Z;

const curry2: Curry2 = f => a => b => f(a, b)

const sum2 = curry2(normal_sum)

console.log(sum2(1)(2))