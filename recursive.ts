function normal_sum_all(xs: number[]): number {
  let result = 0

  for(let i = 0; i < xs.length; i++) {
    result += xs[i]
  }

  return result
}

console.log(normal_sum_all([1, 2, 3, 4]))

type SumAll = (xs: number[]) => number
const sum_all: SumAll = xs => {
  if (xs.length === 0) {
    return 0
  }


  const [head, ...rest] = xs;
  return head + sum_all(rest)
}

console.log(sum_all([1, 2, 3, 4]))

const sum_all2: SumAll = xs => (xs.length === 0) ? 0 : xs[0] + sum_all2(xs.slice(1))

console.log(sum_all2([1, 2, 3, 4]))