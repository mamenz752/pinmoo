# pinmoo

感情共有 SNS【pinmoo（ピンモ）】の Web 開発リポジトリです。

## 概要

メンタルの状態を見つめ直してみんなとつなげる、感情共有 SNS アプリケーションです。
自分の感情を親しい人たちにシェアできるだけでなく、日々の振り返りや感情日記としても使用できます。

**デプロイ先はこちら： [pinmoo](https://pinmoo-c1f82ba8fd13.herokuapp.com/)**

主に、以下のような機能を提供しています。

-   感情ステータス投稿機能
-   ひとこと・場面追加編集機能
-   日記投稿機能
-   日記お気に入り機能

## 技術スタック

#### 使用言語

-   HTML / CSS
-   JavaScript
-   PHP

#### ライブラリ・フレームワーク

-   React
-   Laravel

#### 開発環境・デプロイ

-   Laravel sail (Docker)
-   Heroku

## 図表

#### デザインカンプ (Figma)

[Figma(1 枚目)](https://www.figma.com/design/y0EeR6LTAmpekd9KjZfDYh/Personal-Dev-vol.1?node-id=0-1&t=7dKLQp3UudksCL7J-1)

#### ER 図

[draw.io](https://drive.google.com/file/d/1fz6Q8OfgEQCYh6a-b_Tm4UTRYXT3L47G/view?usp=sharing)

#### アーキテクチャ図

Coming soon...

## 環境構築

### 前提

-   [ ] Docker Desktop がインストールされている (Docker が使用できれば OK)

### DB 関連を起動

```
$ sail up -d
```

### サーバの起動

#### React をビルドする

```
$ npm run build
```
