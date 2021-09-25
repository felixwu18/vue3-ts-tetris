

// 帧循环 ticker
function handleFrame() {
    tickers.forEach(ticker => {
        ticker()
    })
    requestAnimationFrame(handleFrame)
}

requestAnimationFrame(handleFrame)


type ticker = Function
const tickers: Array<ticker> = []
export function addTicker(ticker: ticker) {
    tickers.push(ticker)
    
}