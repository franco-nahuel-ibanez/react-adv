import { useState } from "react";

interface useProductResponse {
  counter: number,
  increaseBy: (value: number) => void
}

export const useProduct = (): useProductResponse => {
  const [counter, setCounter] = useState<number>(0)

  const increaseBy = (value: number) => {
    setCounter(prev => Math.max( prev + value, 0 ))
  }

  return {
    counter,
    increaseBy
  }
}