# Vue Boilerplate


## 环境配置
node: v6.0.0 以上的LTS版本  

npm: v5.0.0 以上的版本

## 项目配置

``` bash
# 安装依赖包
npm install

# 使用内测环境数据进行开发
npm run dev

# 使用其它环境数据进行开发, env 为 beta(内测),beta(公测), abtest(灰度，预上线) or release(正式)
npm run dev:<env>

# 打包到内测
npm run build

# 打包到不同环境,  env 为 beta(内测),beta(公测), abtest(灰度，预上线) or release(正式)
npm run build:<env>

# 打包并查看打包分析 build后面加env 一样可以打包到不同环境，report查看项目打包文件大小分布图
npm run build --report

# 运行单元测试
npm run unit

# 运行所有测试
npm test
```

## 页面交互实现
```bash
# 使用styule， 函数rem，进行换算，直接使用设计稿尺寸，
eg: 长100px， height: rem(100)

# 页面转场模拟app切换：交互动效
基本实现，页面回退，首次访问页面交互动效

```

## 主要使用技术
```bash
# vue-navigation
模拟历史记录，缓存页面

# vue-router
路由跳转

# superagent
接口请求

# vuex
数据状态管理

# lodash
常用工具库

```
