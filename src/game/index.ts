
// 游戏的出口 放所有的游戏 业务逻辑

export * from './config'

import { createBox } from './box'
import { initMap, addBoxToMap, eliminateLine } from './map'
import { render } from './render'
import { addTicker } from './ticker'
import { intervalTimer } from './utils'
import { hitBottomBoundary, hitBottomBox } from './hit'


let activeBox;
export function startGame(map) {
    initMap(map)

    // box
    // 我要有一个方块 利用oop对象的思想 将方块逻辑抽离 实现方块的行为
    // 模式 - 简单工厂模式
    activeBox = createBox()

    //  box => map => 1 让box赋值给map 让对于type变为1 实现变色
    // 1秒执行一次
    let timeInterval = 300
    const isDown = intervalTimer(timeInterval)

    function handleTicker (n) {
        if(isDown(n)) {
            moveDown(activeBox, map)
        }
        render(activeBox, map)
    }


    addTicker(handleTicker)
    

    // 方块可以掉落 添加游戏对象的移动行为
    window.addEventListener("keydown", (e) => {
        // box.y++
        console.log('keydown')
        console.log(e.code);
        switch (e.code) {
            
            case "ArrowLeft":
                activeBox.x--;
                break;

            case "ArrowRight":
                activeBox.x++;
                break;

            case "ArrowUp":
                activeBox.rotate();
                break;

            default:
                break;
        }
    })
}


export function moveDown(box, map) {
    // 1. 获取 box 底部的所有的点
    // [
    //     [1, 1],
    //     [1, 1],
    // ]
    
    if(hitBottomBoundary(box, map) || hitBottomBox(box, map)) {

        // box => add map (-1)
        addBoxToMap(box, map)
        // 检测并消行
        eliminateLine(map)

        // 来一个新的box
        activeBox = createBox()

        return
    }

    // 2. 检测是不是有某个点超出了游戏的范围
    box.y++
}