## EthPubSub

Ethereumのスマートコントラクトで発行されるイベントをオフチェーンのアプリケーションで購読するサンプルです。

nodejsが必要。

## How to test

```
$ npm install
```

端末を3つ立ち上げます。

端末1はローカルブロックチェーンを起動しておきます。

```
$ npm run ganache
```

端末2はイベントを購読するnodeプログラムを起動しておきます。

```
$ node event-watcher/watcher.js
```

端末3でブロックチェーンとインタラクトします

```
$ truffle compile // EventEmitterコントラクトをコンパイル
$ truffle console --network live
> migrate // EventEmitter   コントラクトをデプロイ
> eventEmitter = EventEmitter.at(EventEmitter.address) // デプロイしたEventEmitterコントラクトを変数に格納
> eventEmitter.greet('hello') // コントラクトの関数を呼び出し
```

関数を呼び出すと、端末2でイベントの内容が表示されます。
