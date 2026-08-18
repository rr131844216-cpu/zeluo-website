# 澤洛科技網站（Hostinger Horizons 搬出版）

這是一個從 Hostinger Horizons 畫面與可見原始碼重建的獨立 React + Vite 網站。

## 先做這件事：把 Hostinger 圖片存到本機

目前專案已經把 5 個原始圖片網址寫入 `scripts/fetch-images.mjs`。

在 **取消 Hostinger / 刪除 Horizons 專案之前**，先在有網路的電腦執行：

```bash
npm install
npm run fetch-images
```

成功後，圖片會出現在：

```text
public/images/
```

網站程式已設定為：**優先讀本機圖片；若本機沒有圖片，就暫時回退到原 Hostinger 圖片網址。**

## 本機預覽

```bash
npm install
npm run dev
```

Vite 會顯示一個網址，通常是：

```text
http://localhost:5173
```

## 建置正式版本

```bash
npm run build
```

輸出資料夾：

```text
dist/
```

## Cloudflare Pages 免費部署

1. 把整個專案上傳到 GitHub repository。
2. 到 Cloudflare Dashboard → Workers & Pages → Create → Pages。
3. 連接 GitHub repository。
4. Framework preset 選 **Vite**。
5. Build command：`npm run build`
6. Build output directory：`dist`
7. Deploy。

完成後會得到類似：

```text
zeluo-tech.pages.dev
```

之後也能綁自己的網域。

## 重要說明

- 這份專案是依你在 Horizons Code 頁面提供的可見程式碼與截圖重建。
- 大量未使用的 shadcn/ui 元件沒有搬入，讓專案比較乾淨。
- `HomePage.jsx` 的主要文案、區塊、動畫、導覽、聯絡資訊與黑橘色視覺已重建。
- Hostinger 的 5 張原始圖片因這個執行環境無法直接連到 Hostinger CDN，所以 ZIP 內不含圖片本體；請務必先執行 `npm run fetch-images`，或手動把圖片放進 `public/images/`。
