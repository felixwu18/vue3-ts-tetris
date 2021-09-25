

export function getBottomPoints(matrix) {
    const points: any = []
    const row = matrix.length
    matrix[row - 1].forEach((value, index) => {
        points.push({
            x: index,
            y: row - 1
        })
    })
    return points
}