// Option

import { Either, isLeft, right } from "./either";
import { cons, isNil, List, nil, Cons } from "./linked-list";
import { isNone, none, Option, some } from "./maybe-option-null";
import { match } from "ts-pattern";

// type Match = <A, B, C>(onNone: () => B, onSome: (a: A) => C)
//   => (x: Option<A>) => B | C

// const match: Match = (onNone, onSome) => x =>
//   isNone(x) ? onNone() : onSome(x.value)

// const maybeNum: Option<number> = some(15)
// const result = match(
//   () => -2,
//   (a: number) => `num is ${a}`
// )(maybeNum)

// console.log(result)

// Either

// type Match = <E, A, B>(onLeft: (e: E) => B, onRight: (a: A) => B) 
//   => (x: Either<E, A>) => B
// const match: Match = (onLeft, onRight) => x =>
//   isLeft(x) ? onLeft(x.left) : onRight(x.right)

// const errorOrNum: Either<string, number> = right(12)
// const result = match(
//   (e: string) => `Error happened: ${e}`,
//   (a: number) => `num is ${a}`
// )(errorOrNum)

// console.log(result)

// List

// type Match = <A, B>(onNil: () => B, onCons: (head: A, tail: List<A>) => B)
//   => (xs: List<A>) => B
// const match: Match = (onNil, onCons) => xs =>
//   isNil(xs) ? onNil() : onCons(xs.head, xs.tail)

// const myList: List<number> = cons(1, cons(2, cons(3, nil)))
// const result = match(
//   () => `list is empty`,
//   (head: number, tail: List<number>) => `head is ${head}`
// )(myList)

// console.log(result)

// ts-pattern

const myList: List<number> = cons(1, cons(2, cons(3, nil)))

const result = match(myList)
  .with({_tag: 'Nil'}, () => `list is empty`)
  .with({_tag: 'Cons'}, ({ head, tail }: Cons<number>) => `head is ${head}`)
  .exhaustive()

console.log(result)