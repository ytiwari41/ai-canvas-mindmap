import express from "express";

const app = express();

/* =========================
   CORS MIDDLEWARE
   ========================= */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  next();
});

/* Handle browser preflight requests */
app.options("*", (req, res) => {
  res.sendStatus(200);
});

app.use(express.json());

/* =========================
   AI IDEAS ENDPOINT
   ========================= */
app.post("/ai/ideas", async (req, res) => {
  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ error: "Topic is required" });
  }

  try {
    const response = await fetch(
      "http://host.docker.internal:11434/api/generate",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama3",
          prompt: `Generate 5 short mind map ideas for: ${topic}`,
          stream: false
        })
      }
    );

    const data = await response.json();

    if (!data.response) {
      return res.status(500).json({ error: "Empty response from Ollama" });
    }

    const ideas = data.response
      .split("\n")
      .map(i => i.replace(/^[0-9).\\-]+/, "").trim())
      .filter(Boolean);

    res.json({ ideas });
  } catch (err) {
    console.error("Ollama error:", err);
    res.status(500).json({ error: "AI generation failed" });
  }
});

/* =========================
   SERVER START
   ========================= */
app.listen(3000, () => {
  console.log("AI backend running on port 3000");
});

