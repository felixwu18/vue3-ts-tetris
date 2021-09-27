
import { getBottomPoints, rotate } from '../src/game/matrix'

test('should retrun bottom points', () => {
    const matrix = [
        [1, 1],
        [1, 1],
    ]
     expect(getBottomPoints(matrix)).toEqual([
         {
             x: 0,
             y: 1
         },
         {
             x: 1,
             y: 1
         }
     ])
})

test("rotate", () => {
    const matrix = [
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ];
  
    // 逆时针 -90
    expect(rotate(matrix)).toEqual([
      [0, 0, 0],
      [0, 1, 1],
      [1, 1, 0],
    ]);
  });
  