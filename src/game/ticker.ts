

// 帧循环 ticker
let startTime = Date.now()
function handleFrame() {
    tickers.forEach(ticker => {
        ticker(Date.now() - startTime)
    })
    startTime = Date.now()
    requestAnimationFrame(handleFrame)
}

requestAnimationFrame(handleFrame)


type ticker = Function
const tickers: Array<ticker> = []
export function addTicker(ticker: ticker) {
    tickers.push(ticker)
    
}