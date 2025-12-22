# Geek out with Me! LP - Pattern Selection Spec

## 目的
- クライアントにA/B/Cのデザイン案を比較して選定してもらう。
- 最終納品時は選定された1パターンのみ残し、選定ページは削除する。

## 共通要件
- 内容は全パターン同一。
- POPさ、はつらつさを維持。
- オレンジ系カラーを必ず使用。
- 絵文字は使用しない。
- HTML/CSS/JSは分離済み。

## ページ構成
- `index.html`: 選定用メインページ（最終納品時に削除）
- `pattern-a.html`: デザインパターンA
- `pattern-b.html`: デザインパターンB
- `pattern-c.html`: デザインパターンC

## CSS
- `styles-a.css`: Pattern A (Citrus Pop)
- `styles-b.css`: Pattern B (Sunset Pop)
- `styles-c.css`: Pattern C (Citrus Grid)
- `selector.css`: 選定ページ専用

## パターンの方向性
- Pattern A: オレンジ主体の王道ポップ、暖色の勢いと透明感。
- Pattern B: オレンジ×ブルーの夕景感、立体的で軽快。
- Pattern C: オレンジ×グリーンのフレッシュ感、シャープな輪郭。

## 仕様メモ
- すべてのページで同一テキスト・同一セクション構成。
- CTA/カード/バッジなどのスタイルはCSSで差分化。
- 検証時は `index.html` から各パターンへ遷移。

## 作業分割（並列化前提）
- Task A: `index.html` + `selector.css`（選定ページ）
- Task B: `pattern-a.html` + `styles-a.css`
- Task C: `pattern-b.html` + `styles-b.css`
- Task D: `pattern-c.html` + `styles-c.css`
- Task E: 絵文字排除の最終確認（全HTML）

## 最終納品時の対応
- `index.html` と `selector.css` を削除。
- 採用パターンのHTML/CSSのみ残す。
