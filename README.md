# 電影清單網頁

一個使用 Node.js + Express 打造的電影清單網站，提供使用者查看電影資訊內容，依照電影名稱搜尋自己想查詢的電影。

## 專案畫面

![image](https://github.com/tangcamy/MovieList-V2-FrontEnd/blob/main/public/img/homePage.png)

![image](https://github.com/tangcamy/MovieList-V2-FrontEnd/blob/main/public/img/MovieInformation.png)

![image](https://github.com/tangcamy/MovieList-V2-FrontEnd/blob/main/public/img/MovieSearch.png)


## Features - 產品功能
1. 使用者可以透過.json將電影清單資料帶入網頁
2. 使用者可以點擊任一部電影，查看更多電影資訊，如電影上映日期、電影簡介、電影海報
3. 使用者可以依照電影名稱進行搜尋


## Environment SetUp - 環境建置
1. [nvm 安裝 Node.js (14.16.0) - mac ](https://github.com/nvm-sh/nvm#installing-and-updating)
2. [Express](https://expressjs.com/)
3. [Nodemon](https://www.npmjs.com/package/nodemon)

## Installing - 專案安裝流程

1. 打開你的 terminal，Clone 此專案至本機電腦

```
git clone https://github.com/tangcamy/MovieList-V2-FrontEnd.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd MovieList-V2-FrontEnd
```

3. 安裝 npm 套件

```
在 Terminal 輸入 npm init  -y 指令 
在 Terminal 輸入 npm install express@4.16.4 指令 
在 Terminal 輸入 npm i express-handlebars@3.0.0
```
5. 靜態檔案
```
public/javascripts/bootstrap.js
public/javascripts/boostrap.js.map
public/javascripts/popper.js.
public/javascripts/popper.js.map
public/stylesheets/bootstrap.css
public/stylesheets/bootstrap.css.map
```

6. 啟動伺服器，執行  nodemon app.js 指令
```
nodemon app.js
```

7. 當 terminal 出現以下字樣，表示伺服器已啟動並成功連結

```
Express is listening on http://localhost:3000
```

現在，你可開啟任一瀏覽器瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 開始使用電影清單囉！

## Contributor - 專案開發人員

> [tangcamy](https://github.com/tangcamy)
