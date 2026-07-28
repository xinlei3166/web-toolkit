# web-toolkit

前端可复用工具箱，附带可运行 Demo。

面向日常开发中的工具函数、组件封装和页面示例，按场景分目录存放，方便直接拷贝或对照改写。

## 目录

| 目录 | 说明 |
|------|------|
| `utils/` | 工具函数：防抖 / 节流、密码校验、笛卡尔积、请求封装、下载等 |
| `html/` | 可运行页面示例：扫码、滑块、购物车、颜色生成等 |
| `iview/` | Vue2 + iView 表格 / 表单封装 |
| `vue/` | Vue 表格高度等通用能力 |
| `calendar/` / `element/` | 日历组件（手写 / Element 插槽） |
| `observe/` | Proxy 响应式原理练习 |
| `node/` | Node 片段：JWT、COS STS、LDAP（依赖宿主项目配置） |
| `canvas/` / `video/` / `G6/` | Canvas、视频控件、流程图示例 |
| `lazyload/` / `loading/` / `table/` | 懒加载、Loading、表格样式示例 |
| `css/` | Reset、辅助样式、移动端适配笔记 |
| `markdown/` | Remark 相关处理示例 |

## 使用方式

- **工具函数**：从 `utils/` 按需拷贝，或按模块拆进自己的项目。
- **Demo 页面**：用浏览器直接打开 `html/` 下对应文件查看效果。
- **Vue 组件**：参考 `iview/`、`calendar/` 等目录，按现有项目栈适配后接入。

## 说明

- 偏可复用实现，同一能力只保留一份。
- 部分示例基于 Vue2 / iView / Element UI，接入新项目时注意版本差异。
- `node/` 下脚本依赖宿主项目的 `settings`、`exception` 等模块，不能单独直接跑通。
