# 三上剛太 | ポートフォリオサイト

システム開発・インフラエンジニアとしてのポートフォリオサイトと、制作実績サンプルのLPページです。

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **スタイリング**: Tailwind CSS v4
- **フォント**: Outfit / Noto Sans JP / IBM Plex Mono（next/font）
- **アイコン**: Font Awesome 6

## ページ構成

| パス | 内容 | テーマ |
|------|------|--------|
| `/` | ポートフォリオ（サービス・スキル・実績・稼働時間・お問い合わせ） | ダーク |
| `/lp` | マーケティングSaaS LPサンプル（料金・FAQ・フォーム・導入事例） | ライト |

## ローカル開発

```bash
npm install
npm run dev
```

`http://localhost:3000` で確認できます。

## ビルド

```bash
npm run build
```

## デプロイ

Vercelでのデプロイを想定しています。
