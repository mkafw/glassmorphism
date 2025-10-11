/*
  Netlify requires a static output directory. For Next.js 13+，推荐使用 `next export` 生成静态站点。
  你可以在 package.json 添加如下脚本：

  "scripts": {
    ...,
    "export": "next build && next export"
  }

  然后将 netlify.toml 的 publish 字段改为 "out"。
*/
