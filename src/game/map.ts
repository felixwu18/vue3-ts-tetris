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

        // 有值操作
        if(box.shape[i][j] > 0) {
          map[row][col] = -1
        }
      }
  }
}


export function eliminateLine(map) {
  // 检测是否可以消行
  // 1. 先获取所有满行的 索引
  const lines = getEliminateLines()
  console.log(lines, 'lines');

  // 2. 基于索引做删除 再对应增加行
    _eliminateLine(lines)

  // 更极致写法   _eliminateLine(getEliminateLines())


  function _eliminateLine(lines) {
    const mapCol = map[0].length
    lines.forEach((n) => {
        map.splice(n, 1)
        
        map.unshift(new Array(mapCol).fill(0))
    })
  }

  function getEliminateLines() {
    return map.reduce((cacheArr, arr, index) => {
      const boo = arr.every(v => v === -1)
      if (boo) {
          cacheArr.push(index)
      }
      return cacheArr
    }, [])
  }
}