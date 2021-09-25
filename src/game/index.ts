
// 游戏的出口 放所有的游戏 业务逻辑

export * from './config'

import { Box } from './box' 
export { map } from './map'
import { initMap, map } from './map'
import { render } from './render' 

initMap()

// box
// 我要有一个方块 利用oop对象的思想 将方块逻辑抽离 实现方块的行为

const box = new Box()
box.x = 1
box.y = 3


//  box => map => 1 让box赋值给map 让对于type变为1 实现变色
render(box, map)
