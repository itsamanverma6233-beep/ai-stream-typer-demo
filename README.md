# ai-stream-typer-demo 🚀

> Sample consumer application demonstrating how to integrate and use the [`ai-stream-typer`](https://www.npmjs.com/package/ai-stream-typer) npm package for smooth streaming AI responses.

[![npm package](https://img.shields.io/badge/npm-ai--stream--typer-6366f1.svg?style=flat-square)](https://www.npmjs.com/package/ai-stream-typer)
[![license](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)

---

## 📦 Package Installation

This project installs `ai-stream-typer` directly from the npm registry:

```bash
npm install ai-stream-typer
```

---

## 💡 How It Works

This demo consumes `StreamTyper` from the published npm package to smooth out erratic LLM stream bursts into a natural, human-like typewriter cadence.

```javascript
const { StreamTyper } = require("ai-stream-typer");

const typer = new StreamTyper({
  minDelay: 15,
  maxDelay: 35,
  punctuationPause: 100,
  onText: (text) => {
    process.stdout.write(text);
  },
  onComplete: () => {
    console.log("\n[Stream Complete]");
  }
});

// Feed streaming chunks from your AI model:
typer.feed("Hello world! ");
typer.end();
```

---

## 🏃 Running the Demo

### 1. Terminal Demo
Run the Node.js console demo:
```bash
node index.js
```

### 2. Interactive Web Chat UI
Start the local server and test the web chat interface:
```bash
npm start
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 📄 License
MIT © [Aman Verma](https://github.com/itsamanverma6233-beep)
