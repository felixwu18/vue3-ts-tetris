
import { rotate } from './matrix'

// 形成游戏对象box
export class Box {
    shape: number[][];
    x: number;
    y: number;
    
    constructor() {
        this.x = 0
        this.y = 0
        this.shape = [
            [1, 1],
            [1, 1]
        ]
    }

    // box
    _rotates = []
    _rotateIndex = 0
    rotate() {
        const rotateHandler: Function = this._rotates[this._rotateIndex]
        if(!rotateHandler) return;
        this.shape = rotateHandler(this.shape)

        this._rotateIndex++

        if(this._rotateIndex >= this._rotates.length) {
            this._rotateIndex = 0
        }
    }

    setRotates(val) {
        if (!val) return;
        this._rotates = val;
    }
}

// 继承=> oop

// 不同box
// 组合的开发思想

// 随机出现box
const boxInfos = {
    1: {
      type: 1,
      shape: [
        [1, 1],
        [1, 1],
      ],
    },
  
    2: {
      type: 2,
      shape: [
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0],
      ],
      rotateStrategy: [rotate, (m) => rotate(rotate(rotate(m)))]
    },
    3: {
        type: 3,
        shape: [
          [1, 0, 0],
          [1, 0, 0],
          [1, 1, 0],
        ],
        rotateStrategy: [rotate, rotate, rotate, rotate],
    },
  };
  

  export function createBox() {
    // const { shape, rotateStrategy, type } = getRandomBoxInfo();
    const box = new Box();
  
    // 倒着写
    const max = Object.keys(boxInfos).length
    const type = Math.floor(Math.random() * max) + 1 // 随机生成
    
    const { shape, rotateStrategy } = boxInfos[type];
    box.shape = shape;
    box.setRotates(rotateStrategy);
  
    return box;
  }
  