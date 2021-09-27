import { getBottomPoints } from './matrix'


export function hitBottomBoundary(box, map) {
    const points = getBottomPoints(box.shape);
    // y
    // point.y + box.y + 1 >= gameRow
    const mapRow = map.length;
  
    return points.some((point) => {
      return point.y + box.y + 1 >= mapRow;
    });
   // 只要有一个点大于了 游戏范围的话，那就不可以移动了
  }

  export function hitBottomBox(box, map) {
    const points = getBottomPoints(box.shape);
  
    return points.some((point) => {
      // 看看 这个位置上 在 map 里面 是不是有 其他的 box 的
  
      const col = point.x + box.x;
      const row = point.y + box.y + 1;
  
      return map[row][col] < 0;
    });
  }
  