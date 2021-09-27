import { gameRow, gameCol } from '../game'


// 执行脚本即初始化，所以封装 在game里直接调用执行
export function initMap(map) {
    // initMap 初始化
    for(let i = 0; i < gameRow; i++) {
      const arr: Array<number> = []
        for(let j = 0; j < gameCol; j++) {
           arr.push(0)
        }
      map.push(arr)
    }
}


export function addBoxToMap(box, map) {
  for(let i = 0; i < box.shape.length; i++) {
    const arr: Array<number> = []
      for(let j = 0; j < box.shape[0].length; j++) {
        const row = i + box.y
        const col = j + box.x
        map[row][col] = -1
      }
  }
}

