# AngularHandson
Angularの[チュートリアル](https://angular.io/guide/quickstart)を通して使い方を覚えたいと思います。
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## 開発環境構築    
### angular-cliを使えるようにする
1.angular-cliをグローバルインストールする    
> npm install -g @angular/cli        

2.プロジェクトを作ってみる    
> ng new my-app    

3.アプリを起動する    
> cd my-app      
> ng serve --open      

"ng serve"で開発用のサーバを起動しファイルに対して変更があればすぐに修正を反映する動きをします。--openのオプションをつけることでコマンド実行時にブラウザを自動で開きます。

### Atomで開発
Atomで開発する場合はプラグインを探して入れておけば良さそうです。
[atom-typescript](https://github.com/TypeStrong/atom-typescript)をとりあえず入れておいた
## 開発
### angular-cliでのアプリ開発について
#### .angular-cli.json
開発環境の設定は.angular-cli.jsonで行なっており、最初に読み込みhtmlやスクリプト、ルートディレクトリやビルド時の出力先もここで設定している。アプリ全体でスタイルやスクリプトを適用したいという場合はここのscriptとstylesや、デフォルトのstyles.cssを修正する。アプリのルートディレクトリはsrcに設定してある。
```
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "project": {
    "name": "my-app"
  },
  "apps": [
    {
      "root": "src",
      "outDir": "dist",
      "assets": [
        "assets",
        "favicon.ico"
      ],
      "index": "index.html",
      "main": "main.ts",
      "polyfills": "polyfills.ts",
      "test": "test.ts",
      "tsconfig": "tsconfig.app.json",
      "testTsconfig": "tsconfig.spec.json",
      "prefix": "app",
      "styles": [
        "styles.css"
      ],
      "scripts": [],
      "environmentSource": "environments/environment.ts",
      "environments": {
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      }
    }
  ],
  "e2e": {
    "protractor": {
      "config": "./protractor.conf.js"
    }
  },
  "lint": [
    {
      "project": "src/tsconfig.app.json"
    },
    {
      "project": "src/tsconfig.spec.json"
    },
    {
      "project": "e2e/tsconfig.e2e.json"
    }
  ],
  "test": {
    "karma": {
      "config": "./karma.conf.js"
    }
  },
  "defaults": {
    "styleExt": "css",
    "component": {}
  }
}
```

### index.html
angular-cliで作成したプロジェクトのindex.htmlは以下のようになっている。app-rootという独自のタグを読み込んでいます。コンポーネントが初期化されるまではタグの中身の"Loading..."が表示されます。
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AngularHandson</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root>Loading...</app-root>
</body>
</html>

```

### main.ts
main.tsではアプリに必要なモジュールを読み込んでいます。環境変数などはJsonを読み込ませるかプロパティに直接定義するなどしてenvironmentで読み込めるようにしておくと良さそうです。リリース時はenableProdModeが有効になるようですが、angularの開発モードが無効になるなどの違いがあるようです。

```JavaScript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './main.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
```

### main.module.ts
main.tsで読み込んでいるモジュール。NgModuleでページの単位となるコンポーネント一覧を読み込んでいるのが確認できる。bootstrapはエントリポイントを指定していて、providersにはデータ共有に使うサービスとかを指定して、importsでは外部のモジュールを読み込んだりしていて、declarationsではディレクティブとパイプを読み込ませるらしい。ディレクティブとは先ほどのapp-rootなど独自に定義したタグのことを言っており、パイプについてはangularのhtml内で条件指定でフィルターかけるのに使う。BrowserModuleはブラウザの情報を取ってくるので必要になるっぽい。
```JavaScript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### index.component.ts
Componentアノテーションのselectorではディレクティブと使用するタグ名、templeteUrlでテンプレートhtml、styleUrlsでcssを指定してからclassないでスクリプトを記述している。titleはクラス変数でapp.component.htmlの表示で使用している。TypeScriptのクラス変数ではconstやletを付与しようとしたらコンパイラに怒られたので普遍にする場合はstatic readonlyとかつけたら良さそうと思ったけどそうしたらbindできなくなる動きをしていた。
```JavaScript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class AppComponent {}
```

### index.component.html
index.component.tsのhtml表示用のテンプレートは最初は以下のようになっています。
```html
<!--The whole content below can be removed with the new code.-->
<div style="text-align:center">
  <h1>
  </h1>
</div>
```

### htmlとコンポーネントで2wayバインディングさせてみる
まずmain.module.tsで2wayバインディングに必要となるFormModuleを読み込ませます
main.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //テンプレートでバインディングしたり、validationするのに必要

import { AppComponent } from './index.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
それからindex.component.tsとindex.component.htmlでコンポーネント内のクラス変数をbindさせてみます。
index.component.ts
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class AppComponent {
  textInput = "input test";
}
```
index.component.html
```
<!--The whole content below can be removed with the new code.-->
<div style="text-align:center">
  <h1>
    <input [(ngModel)]="textInput"><br />
    {{ textInput }}
  </h1>
</div>
```
これで実際に動かしてみると画面にコンポーネントのクラス変数が表示され、またinputタグへ入力を行いbindしている変数を変更すると値自体が変更され表示にも反映されるのが確認できます。
