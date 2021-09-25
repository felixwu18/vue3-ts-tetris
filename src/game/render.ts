
export function render(box, map)  {
  //  box => map => 1 让box赋值给map 让对于type变为1 实现变色
  for(let i = 0; i < box.shape.length; i++) {
      const arr: Array<number> = []
        for(let j = 0; j < box.shape[0].length; j++) {
          const row = i + box.y
          const col = j + box.x
          map[row][col] = 1
        }
    }
}