// Simple test script to see console.log output
import ccxt from "./js/ccxt.js";

async function test() {
  console.log("=== Starting test ===");

  const exchange = new ccxt.pro.htx({
    verbose: false, // Disable verbose to see our logs better
    enableRateLimit: true,
  });

  console.log("Loading markets...");
  await exchange.loadMarkets();

  // console.log("\n=== NOW CALLING fetchTicker ===");
  // const ticker = await exchange.fetchTicker("BTC/USDT");

  // console.log("\n=== Ticker received ===");
  // console.log("Symbol:", ticker.symbol);
  // console.log("Last:", ticker.last);
  // console.log("=== Test complete ===");

  while (true) {
    try {
      const bidsAsks = await exchange.watchBidsAsks([
        "BTC/USDT",
        "ETH/USDT",
        "SOL/USDT",
      ]);
      console.log("BidsAsks:", bidsAsks);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

test().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
