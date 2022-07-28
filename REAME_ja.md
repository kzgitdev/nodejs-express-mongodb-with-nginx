# README_ja.md

## 概要
下記のコンテナをドッカライズする構成ファイルです。
 - app server(nodejs + express)   
  ポート番号8080で待ち受けます。
 - database server(mongodb)   
  ポート番号27017でapp serverと通信します。
 - revers proxy server(nginx)   
  ポート番号80からnodejsサーバーのポート番号8080にフォワードします。

## 開発環境
 OS: Windows 10 64bit with wsl(Ubuntu 20.04 LTS)  
 Docker Desptop v4.10.1  
 $ docker --version  
 Docker version 20.10.17, build 100c701  
 $ docker-compose --version  
 Docker Compose version v2.6.1  


## 特徴
 - .env (contain enviroments key: value)  
  イメージタグや環境変数、（サブ・）ドメイン名などを予め記載しておきます。
 - nginx/templets/*.conf.template (contains nginx variables)  
  複数パターンのdefault.conf.templeteファイルを準備しておくことでdefautl.confに反映されます。
 - mongodb with authenticated user and password.  
  mongodbにアクセスする際に、ユーザ名とパスワードを設定します。

## さらに必要な設定（場合によっては必要）
 - SSL setup  
  VPSなど本番環境ではLetsecnryptなどのSSL認証ファイルの生成が必要です。
 - If you use jwilder/nginx-proxy continer, you shuld set up it before.  
  VPSを使っている場合、複数のドメインをフロントで捌くためのreverse proxy（jwilder/nginx-proxy）の設定が必要です。
