### 运行项目 `npm start`
### 修改项目运行地址 直接在`package.json`文件中修改
```json
"scripts": {
    "ng": "ng",
--- "start" :"ng serve",
+++ "start": "ng serve --port 4321",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
```