import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const topics = [
  "ヴィクトリアマイル2026予想",
  "オークス2026予想",
  "日本ダービー2026予想",
];

async function generatePost(topic) {
  console.log(`生成中: ${topic}`);

  const message = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `競馬ブログの記事をマークダウン形式で書いてください。

テーマ：${topic}

以下のフォーマットで出力してください。frontmatterから始めてください：

---
title: "${topic}"
date: "${new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })}"
tags: ["予想", "G1"]
---

本文をここに書いてください。見出し(##)を使って構成してください。
500文字程度でまとめてください。`,
      },
    ],
  });

  return message.content[0].text;
}

async function main() {
  const topic = topics[Math.floor(Math.random() * topics.length)];
  const content = await generatePost(topic);

  const fileName = `${Date.now()}.md`;
  const filePath = path.join(__dirname, "../posts", fileName);

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✅ 記事を保存しました: ${fileName}`);
  console.log(content);
}

main().catch(console.error);
