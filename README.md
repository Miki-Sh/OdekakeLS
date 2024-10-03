# おでかけチェック（ログインなしVer）

## なぜこのアプリを作ったのか

&emsp;私がデイサービスで働いていた時に出会った、あるおばあさんに向けて作りました。その方は、軽度の認知症がありながらもいろんなサービスを利用しながら一人暮らしをされていました。デイサービスのお迎えに伺った際に、職員が一緒に戸締りや火の元、
内服薬などの確認を一緒にすることになっていました。けれど、送迎の車の中で度々「あら、戸締りちゃんとしたかしら...」と、とても心配そうに話され、その都度、一緒に確認したので大丈夫なことをお伝えしていました。もしもその時、職員の話だけでなく、目に見えて一緒にチェックしたことがわかるものがあったら、その方もより安心できるのではないか。
もし、お一人で外出される時も、自分で確実に戸締りなどができて、外出先で不安になった時も、外出時にやることをきちんとやってきたことを確認できるものがあると、他者の支援なしでもできることが増えるのではないか。そう思ったことが、このアプリを作ったきっかけです。  
&emsp;このアプリによって、様々な障害や病気を抱えた人が「自分の力でできる」という場面を増やす一助になれると、とてもとてもうれしいです。

## アプリURL

https://odekake-ls.vercel.app/

## 目次

- [機能](#機能)
- [開発環境](#開発環境)
- [本番環境](#本番環境)
- [使用技術](#使用技術)

## 機能

- タスク管理
  - 作成 / 表示 / 更新 / 削除
- 全てのチェックを外す

- 利用登録やログインをしなくても利用できるよう、データの保存は**ブラウザのローカルストレージ**を利用しています。

## 開発環境

シングルページアプリケーション (SPA) として作成しており、開発言語に**JavaScript / React**、インフラに**Vercel**を使用しています。開発環境の構築には**Create React App**を使用しました。(括弧内の数字はバージョン)  

- [Create React App](https://create-react-app.dev) (4.0.3)
  - [npm](https://www.npmjs.com/) (9.5.0)
  - [Node.js](https://nodejs.org/) (19.7.0)
  - [JavaScript](https://www.typescriptlang.org/) (4.2.4)
  - [React](https://reactjs.org) (18.2.0)

動作確認のブラウザには、Chrome (Mac) を使用しています。

## 本番環境

- [Vercel](https://vercel.com/)

## 使用技術

- [JavaScript](https://developer.mozilla.org/ja/docs/Web/JavaScript) (4.2.4) - 開発言語、静的型付け
- [React](https://reactjs.org) (18.2.0) - SPA構築ライブラリ
- [React DOM](https://reactrouter.com/web/guides/quick-start) (18.2.0) - ReactコンポーネントをDOMにレンダリングするためのライブラリ
- ローカルストレージ　- ブラウザ上にデータを保存する
- [Webpack](https://webpack.js.org)	(5.88.20) - JavaScriptモジュールバンドラ
- [Webpack CLI](https://webpack.js.org)	(5.1.4)	-Webpackのコマンドラインインターフェース
- [Webpack Dev Server](https://webpack.js.org/configuration/dev-server) (4.15.1) - Webpack用の開発サーバー
- [Babel Core](https://babeljs.io) (7.22.15) - JavaScriptトランスパイラ
- [Babel Preset Env](https://babeljs.io/docs/en/babel-preset-env) (7.22.15) - 最新のJavaScript機能をES5にトランスパイルするためのプリセット
- [Babel Preset React](https://babeljs.io/docs/en/babel-preset-react) (7.22.15) - ReactコードをトランスパイルするためのBabelプリセット
- [Babel Loader](https://webpack.js.org/loaders/babel-loader) (9.1.3) - WebpackでBabelを使うためのローダー
- [CSS Loader](https://webpack.js.org/loaders/css-loader) (6.8.1) - WebpackでCSSファイルを読み込むためのローダー
- [Style Loader](https://webpack.js.org/loaders/style-loader) (3.3.3) - WebpackでCSSをDOMに注入するためのローダー
- [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin) (5.5.3) - HTMLファイルを生成し、Webpackバンドルを注入するプラグイン
