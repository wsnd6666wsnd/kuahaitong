// 跨海通 · 演示配置
// 说明：本文件为公开演示用的临时配置。
// 比赛结束后请立即到 platform.deepseek.com 吊销该密钥。
// 建议在后台设置「额度上限」（如 10 元），防止被滥用。

window.KHT_CONFIG = {
  // 演示用密钥（前端可见，仅限比赛演示期使用）
  DEMO_KEY: "sk-0a1bf780af0d451ba2717017988ccebc",
  API_URL: "https://api.deepseek.com/chat/completions",
  MODEL: "deepseek-chat",
  // 是否允许前端直连（纯静态部署时开启；有后端时关闭）
  ALLOW_DIRECT: true
};
