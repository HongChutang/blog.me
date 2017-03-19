# blog.me

> a blog platform built with vue, koa and mongo. 使用vue,koa和mongo搭建的博客页面和markdown语法的博客编写平台,自动保存草稿。

博客预览地址:[http://evanhung.me/blog/](http://evanhung.me/blog/#!/posts)

`blog.me` 使用了`vue`、`vuex`、`koa`和`mongo`等框架和技术。前后端分离,restful架构。项目主要包含三个文件夹和项目：

- server 后台 包含了所有的后台服务，为博客和博客管理提供后台接口
- client 前端 博客的前端呈现，界面模仿了[vue官方博客](http://v1.vuejs.org/blog/)
- admin  前端 博客管理平台的前端，功能上类似于带发布博客功能的印象笔记，markdown语法，预览和编写同步进行，带有自动保存功能，书写的文章只有在`发布`之后才会同步当前内容到博客client页面上，也完全可以当做一个笔记类应用去用.

**使用了许多es6新特性,请使用6.0以上版本的node!**

**使用之前请先确保已经安装mongo!**


## server


基于restful，nodejs的话采用koa框架(koa 1)，数据库用了mongo。登录这块的话用了[jwt](https://jwt.io/introduction/).

生产环境下可在server/configs目录下增加private.js文件,增加私有配置.

**因为使用了许多es6/7 新语法,所以请使用6.x版本node**

**使用windows的同学在npm run dev-server之前请看下面的npm command的说明哈.**

### npm command

```
# install dependencies
npm install

# 开发
# 带热重载，跑在本地3000端口
# npm run dev-server在mac/linux下run起来没问题,但是NODE_ENV=development DEBUG=kov-blog这样的语法在windows上的cmd上面是不行的
# 所以使用windows的cmd的同学请不要使用npm run dev-server 而是输入下面这行命令吧
# set NODE_ENV=production && set DEBUG=kov-blog && supervisor --harmony server/index.js
npm run dev-server

# 部署
npm run build-server


```

## client

博客呈现页面，基于vue(1.0)，前后端通信用的[fetch](https://www.npmjs.com/package/whatwg-fetch)，界面模仿了[vue博客](http://cn.vuejs.org/blog/)，大量使用了其[样式效果](https://github.com/vuejs/cn.vuejs.org)，还有很多要完善的地方。

### 技术栈
1.  [Vue](http://vuejs.org.cn) && [vue-router](https://github.com/vuejs/vue-router)
3.  [fetch](https://www.npmjs.com/package/whatwg-fetch)
4.  [stylus](http://stylus-lang.com/)
5.  [marked](https://github.com/chjj/marked) && [highlight](https://github.com/isagalaev/highlight.js)

### npm command

```
# install dependencies
npm install

# 开发,跑在本地8080端口
npm run dev-client

# 打包
npm run build-client


```


## admin

**初始用户名:admin,初始密码:password**

博客管理系统，也是前后端完全分离的。功能上类似于印象笔记，实时保存你的文章，当你觉得写好了之后可以`发布`文章，每次`发布`都会把文章同步更新到博客上，这样在client端就能看到。采用markdown语法，编辑器采用的是[SimpleMDE](https://github.com/NextStepWebs/simplemde-markdown-editor)，支持大量快捷键。

快捷键 | Action
:------- | :-----
*Cmd-'* | "toggleBlockquote"
*Cmd-B* | "toggleBold"
*Cmd-E* | "cleanBlock"
*Cmd-H* | "toggleHeadingSmaller"
*Cmd-I* | "toggleItalic"
*Cmd-K* | "drawLink"
*Cmd-L* | "toggleUnorderedList"
*Cmd-P* | "togglePreview"
*Cmd-Alt-C* | "toggleCodeBlock"
*Cmd-Alt-I* | "drawImage"
*Cmd-Alt-L* | "toggleOrderedList"
*Shift-Cmd-H* | "toggleHeadingBigger"
*F9* | "toggleSideBySide"
*F11* | "toggleFullScreen"

### 技术栈
1.  [Vue](http://vuejs.org.cn) && [vuex](https://github.com/vuejs/vuex) && [vue-router](https://github.com/vuejs/vue-router)
3.  [fetch](https://www.npmjs.com/package/whatwg-fetch)
4.  [stylus](http://stylus-lang.com/)
5.  [SimpleMDE](https://github.com/NextStepWebs/simplemde-markdown-editor) && [marked](https://github.com/chjj/marked) && [highlight](https://github.com/isagalaev/highlight.js)

### npm command

```
# install dependencies
npm install

# 开发,跑在本地8081端口
npm run dev-admin

# 打包
npm run build-admin

```

