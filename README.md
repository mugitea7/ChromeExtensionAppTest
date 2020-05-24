# Chrome拡張機能の追加の仕方

1. 右上の...をクリック
1. その他のツール → 拡張機能をクリック
1. 右上の「デベロッパーモード」をオンに
1. パッケージ化されていない拡張機能を読み込む
1. ファイルを選択(今回はsrc) 

## Chrome拡張を作成する際の注意点

- manifest.js内の "version" は,何か変更点を適用させるたびにバージョンを上げなければならない.
- $ is not found. が出た場合
    - jQueryを使う場合,manifest.json内で "scripts" の欄にはjQueryを先頭に書く必要がある.

## 参考
[Chrome の拡張機能を作ってみる](https://blog.akagi.jp/archives/2361.html)<br>
[Chrome拡張機能でオプション画面を作ってみる](https://yk5656.hatenadiary.org/entry/20141011/1414984933)<br>
[jquery - Chrome拡張機能でJQueryを使用できない](https://ja.coder.work/so/jquery/1597037)<br>