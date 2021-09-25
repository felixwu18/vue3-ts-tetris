
// 游戏的出口 放所有的游戏 业务逻辑

export * from './config'
import { gameRow, gameCol } from '../game'

// map 地图
export const map = []

// initMap 初始化
for(let i = 0; i < gameRow; i++) {
  const arr: Array<number> = []
    for(let j = 0; j < gameCol; j++) {
        arr.push(0)
    }
  map.push(arr)
}