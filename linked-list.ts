export type List<A> = Nil | Cons<A>

export interface Nil {
  _tag: "Nil"
}

export interface Cons<A> {
  _tag: "Cons"
  head: A
  tail: List<A>
}

export const nil: List<never> = { _tag: "Nil" }
export const cons = <A>(head: A, tail: List<A>): List<A> => ({
  _tag: "Cons",
  head,
  tail,
})

export const isNil = <A>(xs: List<A>): xs is Nil => xs._tag === "Nil"

// 1, 2, 3
const myList = cons(1, cons(2, cons(3, nil)))

console.log(JSON.stringify(myList, null, 2))

type ShowList = <A>(xs: List<A>) => string
const showList: ShowList = xs =>
  isNil(xs) ?
  "" :
  `${xs.head}` + (isNil(xs.tail) ? "" : `, ${showList(xs.tail)}`)

console.log(showList(myList))