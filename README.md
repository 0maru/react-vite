# react-vite

- React
  - メインのフレームワーク
- Vite
  - ビルドツール
- Biome
  - Linter + Formatter
- TailwindCSS
  - CSSフレームワーク
- React-Aria
  - Headless UI
- Storybook
  - コンポーネントのプレビュー
- Chromatic
  - Storybookのデプロイ
- TypeSpec
  - OpenAPIの型定義
- TurboRepo
  - monorepoの管理、コンポーネントの生成

## メモ

### Handlebarsファイルをフォーマットさせない

JSXで書くとWebStorm のフォーマットが期待通りに動作しない。  
Preferences > Editor > Code Style > formatter > Do not format に `turbo/generators/templates/*.hbs` を追加する

### Storybook を運用する

コンポーネントの作成は `@turbo/gen` を使う。  
テンプレートからコンポーネント用のファイルを作成することで、storiesファイルを作成する手間を減らし、  
実際にコンポーネントを作成したらStorybookに追加されるようにする。  
Story の管理を簡略化するためにコンポーネントは `src/components/ui/コンポーネント` のディレクトリに配置する。
