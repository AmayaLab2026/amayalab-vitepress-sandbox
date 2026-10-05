# amayalab-vitepress-sandbox

在Nólëbase的基础上自定义的文档框架w

## 项目结构

以下是项目的主要目录结构说明：

```text
.
├── .vitepress/          # VitePress 配置文件、自定义主题组件和全局 CSS 样式
├── public/              # 静态资源文件（Logo、PWA 图标、字体等）
├── zh-CN/               # 中文内容主要目录
│   ├── docs/            # 具体文档和文章页面
│   ├── index.md         # 站点首页
│   └── toc.md           # 目录导航页
├── scripts/             # 构建和工具相关脚本
├── package.json         # 项目依赖与脚本配置
├── pnpm-lock.yaml       # 依赖锁定文件
├── uno.config.ts        # UnoCSS 配置文件
└── README.md            # 项目说明文档
```

## 本地开发

本项目使用 [pnpm](https://pnpm.io/) 作为包管理器。请确保你已在本地安装了 Node.js 和 pnpm。

### 1. 安装依赖

克隆仓库后，首先在项目根目录下运行以下命令安装所需依赖：

```bash
pnpm install
```

### 2. 本地开发

启动本地开发服务器，支持热更新（HMR）。启动后可以在浏览器中访问 `http://localhost:5173` 预览网站：

```bash
pnpm run dev
```

### 3. 构建生产版本

如果你需要将网站部署到生产环境，可以运行构建命令。这会生成静态 HTML 文件到 `.vitepress/dist` 目录中：

```bash
pnpm run build
```

### 4. 预览构建结果

在本地预览刚刚构建好的生产版本：

```bash
pnpm run preview
```

## 编写内容

所有的页面和文章都在 `zh-CN/` 目录中，你可以直接使用 Markdown 语法创建新的 `.md` 文件来撰写内容。VitePress 会自动处理基于文件路径的路由。
