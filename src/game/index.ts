
// 游戏的出口 放所有的游戏 业务逻辑

export * from './config'

import { Box } from './box'
import { initMap } from './map'
import { render } from './render'
import { addTicker } from './ticker'
import { intervalTimer } from './utils'
import { getBottomPoints } from './matrix'


export function startGame(map) {
    initMap(map)

    // box
    // 我要有一个方块 利用oop对象的思想 将方块逻辑抽离 实现方块的行为

    const box = new Box()
    box.x = 1
    box.y = 3

    //  box => map => 1 让box赋值给map 让对于type变为1 实现变色
    // 1秒执行一次
    let timeInterval = 1000
    const isDown = intervalTimer(timeInterval)

    function handleTicker (n) {
        if(isDown(n)) {
            moveDown(box, map)
        }
        render(box, map)
    }


    addTicker(handleTicker)
    

    // 方块可以掉落 添加游戏对象的移动行为
    window.addEventListener("keydown", () => {
        box.y++
        console.log('keydown')
    })
}


export function moveDown(box, map) {
    // 1. 获取 box 底部的所有的点
    // [
    //     [1, 1],
    //     [1, 1],
    // ]
    
    function hitBottomBoundary(box, map) {
        const points = getBottomPoints(box.shape);
        // y
        // point.y + box.y + 1 >= gameRow
        const mapRow = map.length;
      
        return points.some((point) => {
          return point.y + box.y + 1 >= mapRow;
        });
       // 只要有一个点大于了 游戏范围的话，那就不可以移动了
      }

    if(hitBottomBoundary(box, map)) return

    // 2. 检测是不是有某个点超出了游戏的范围
    box.y++
}