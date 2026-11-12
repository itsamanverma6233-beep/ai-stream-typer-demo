const { StreamTyper } = require("ai-stream-typer");

console.log("==================================================");
console.log("  ai-stream-typer Consumer Demo (Node.js)");
console.log("==================================================\n");

// Simulated choppy LLM response chunks
const chunks = [
  "Hello! ",
  "I am an AI assistant ",
  "powered by large language models.\n\n",
  "Normally, network latency causes streaming chunks to appear in ",
  "jarring, uneven bursts. ",
  "However, by using the `ai-stream-typer` npm package, ",
  "these erratic chunks are buffered into a silky-smooth ",
  "reading experience with natural punctuation pauses! ✨\n"
];

let lastLength = 0;

const typer = new StreamTyper({
  minDelay: 15,
  maxDelay: 35,
  punctuationPause: 100,
  onText: (fullText) => {
    // Print newly emitted characters to console
    const newChars = fullText.slice(lastLength);
    process.stdout.write(newChars);
    lastLength = fullText.length;
  },
  onComplete: () => {
    console.log("\n[Stream Complete - ai-stream-typer finished typing]\n");
  }
});

// Feed chunks at irregular intervals to simulate network stream
let delay = 0;
chunks.forEach((chunk) => {
  delay += Math.floor(Math.random() * 200) + 100;
  setTimeout(() => {
    typer.feed(chunk);
  }, delay);
});

setTimeout(() => {
  typer.end();
}, delay + 50);
