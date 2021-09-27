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
