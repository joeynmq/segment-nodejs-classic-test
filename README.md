# 🚀 Segment Node.js Classic Testing Environment

Welcome to our shared testing playground for the Segment [Node.js Classic]([https://www.twilio.com/docs/segment/connections/sources/catalog/libraries/server/node](https://www.twilio.com/docs/segment/connections/sources/catalog/libraries/server/node/classic)) library (`analytics-node`). This environment is pre-configured to build automatically inside **GitHub Codespaces**, completely removing the need for local Node setup or external sandboxes.

---

## 🛠️ How to Launch the Environment

This master repository is configured as **Read-Only** to preserve the core template. When you launch a Codespace, GitHub will automatically create a personal copy (fork) for you in the background. You can safely modify the code or keys inside your instance without affecting the main repository.

### One-Click Launch
Click the badge below to automatically fork this repository and spin up your personal testing instance instantly:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/joeynmq/segment-nodejs-classic-test)
*(Tip: **Cmd/Ctrl + Click** to open the Codespace in a new tab!)*

---

## 🔑 How to Change the Write Key

By default, the script contains a placeholder `XXXXX`. To route the test data to a specific Segment workspace debugger, you must update the Write Key using either of these two methods:

### Method A: Via the Terminal (Recommended - No Code Changes)
Before running the script, set an environment variable in the terminal window at the bottom of your screen. The script will automatically pick it up:

```bash
export SEGMENT_WRITE_KEY="your_write_key_here"
```

### Method B: Hardcoding Directly in `index.js`

If you prefer to change it directly in the source file:

1. Open `index.js` from the file explorer on the left side of your Codespace.
2. Locate the line:
```JavaScript
const writeKey = process.env.SEGMENT_WRITE_KEY || 'XXXXXX';
```
3. Replace `XXXXXX` with your own Write Key inside the single quotes:
```JavaScript
const writeKey = process.env.SEGMENT_WRITE_KEY || 'your_write_key_here';
```

---

## 🏃‍♂️ How to Run the Code

Once your Write Key is set, executing the script is simple. The environment configuration has already automatically run npm install for you behind the scenes, so you just need to run:
```Bash
npm start
```

> [!IMPORTANT]
> **Always stop your environment when you're done!**  
> While Codespaces eventually time out automatically, manually stopping your active container when you finish testing helps conserve our shared monthly free compute hours. 
> 
> **How to stop it:**  
> Click the `Codespaces` status indicator in the bottom-left corner of the window, then select **Stop Current Codespace** from the menu.
> 
> For a complete walkthrough on managing your container states, see the official [GitHub Codespaces Documentation on Stopping a Codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/stopping-and-starting-a-codespace#stopping-a-codespace).

---

## 📦 What's Inside?
- `index.js`: The main execution script triggering Segment events.
- `.devcontainer/devcontainer.json`: The container architecture file ensuring everyone on the team runs on the exact same Node.js runtime environment.
- `package.json`: Tracks library dependencies like analytics-node.

---

## 💡 Troubleshooting & Tips
- Checking Payloads: Remember to keep your target Segment Source Debugger open in your browser before running `npm start` so you can watch the incoming events populate in real-time.
- Saving Your Work: Since GitHub automatically creates a personal fork for you, any changes you make to `index.js` (like hardcoding a key) can be saved and committed directly to your personal GitHub profile if you wish to reference them later.
