# EdgeOne Pages React Router Starter

A comprehensive React Router v7 starter template for EdgeOne Pages, showcasing various rendering modes and full-stack capabilities.

## 🚀 特性

- **Server-Side Rendering (SSR)** - 服务器端实时渲染
- **Static Site Generation (SSG)** - 构建时静态生成
- **Node Functions** - Node.js 运行时服务器函数
- **Edge Functions** - 边缘运行时函数
- **Client-Side Routing** - 快速客户端路由

## 🛠️ 技术栈

- **React Router v7** - 全栈 React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Lucide React** - 图标库
- **Vite** - 构建工具

## 📦 安装

```bash
# 克隆项目
git clone <repository-url>
cd react-router-v7-demo

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 🎯 页面说明

### 首页 (/)
展示项目概览和各个功能模块的入口。

### SSR (/ssr)
演示服务器端渲染：
- 每次请求都在服务器端重新渲染
- 实时数据获取
- SEO 友好
- 适合动态内容

### Pre-render (/prerender)
演示静态站点生成：
- 构建时预生成页面
- 最快的加载速度
- CDN 友好
- 适合静态内容

### Node Functions (/node-functions)
演示 Node.js 服务器函数：
- 完整的 Node.js 运行时
- 复杂后端逻辑
- 数据库操作
- API 集成

### Edge Functions (/edge-functions)
演示边缘函数：
- 轻量级边缘运行时
- 全球边缘部署
- 超低延迟响应
- 地理位置服务

### Client-Side Routing (/client-routing)
演示客户端路由：
- 无页面刷新导航
- 状态持久化
- 流畅的用户体验
- 预加载优化

## 🔧 开发命令

```bash
# 开发模式
npm run dev

# 构建项目
npm run build

# 启动生产服务器
npm run start

# 类型检查
npm run typecheck
```

## 📁 项目结构

```
app/
├── components/          # 组件
│   ├── ui/             # UI 组件
│   ├── layout/         # 布局组件
│   ├── Header.tsx      # 头部导航
│   ├── Hero.tsx        # 首页 Hero 区域
│   ├── Features.tsx    # 功能展示
│   └── FeatureCard.tsx # 功能卡片
├── lib/                # 工具函数
│   └── utils.ts        # 通用工具
├── routes/             # 路由页面
│   ├── home.tsx        # 首页
│   ├── ssr.tsx         # SSR 演示
│   ├── prerender.tsx   # Pre-render 演示
│   ├── node-functions.tsx    # Node 函数演示
│   ├── edge-functions.tsx    # Edge 函数演示
│   └── client-routing.tsx    # 客户端路由演示
├── app.css             # 全局样式
├── root.tsx            # 根组件
└── routes.ts           # 路由配置
```

## 🌟 与 Next.js 的对比

这个项目复刻了 Next.js 混合渲染模板的功能，但使用 React Router v7 实现：

### 相同点
- 支持 SSR、SSG
- 服务器函数支持
- 现代化的开发体验
- TypeScript 支持

### 不同点
- **路由系统**: React Router v7 使用文件系统路由 + 配置文件
- **API 路由**: 通过 loader/action 函数实现
- **构建工具**: 基于 Vite 而非 Webpack
- **部署**: 更灵活的部署选项

### React Router v7 的优势
- 更简洁的 API 设计
- 更好的 TypeScript 支持
- 更快的开发服务器 (Vite)
- 更灵活的部署选项
- 更好的错误处理

## 📚 学习资源

- [React Router v7 官方文档](https://reactrouter.com/start/framework)
- [React Router v7 GitHub](https://github.com/remix-run/react-router)
- [Vite 文档](https://vitejs.dev/)
- [Tailwind CSS 文档](https://tailwindcss.com/)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License