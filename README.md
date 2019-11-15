# webAssembly 初探

> 就在昨天，技术部开了一个分享会，说到了 WebAssembly，说它是一个新的语言，未来可能代替 Javascript 的，我表示怀疑。接下来，一起是了解一下这个神奇的语言吧。

## Mac OS 安装
通过 shell终 端安装SDK。可以通过Gihhub轻松获得用于将C/C++编译为WebAssembly的预编译工具链
```
$ git clone https://github.com/emscripten-core/emsdk.git
$ cd emsdk
$ ./emsdk install latest
$ ./emsdk activate latest
```

## 安装后的环境设置
安装或编译SDK后，安装完成，要在下载预编译的工具链或构建自己的工具链后在当前命令行提示符中输入Emscripten编译器环境
```
$ source ./emsdk_env.sh --build=Release
```

## 编译并运行一个简单的程序
我们现在有一个完整的工具链，我们可以使用它来编译一个简单的程序到WebAssembly。但是，还有一些警告：

* 我们必须链接标志传递-s WASM=1到emcc（否则默认情况下emcc将编译成asm.js）。
* 如果我们希望Emscripten生成一个运行我们程序的HTML页面，那么除了Wasm二进制文件和JavaScript包装器之外，我们还必须指定一个带.html扩展名的输出文件名。
* 最后，为了实际运行程序，我们不能简单地在Web浏览器中打开HTML文件，因为file协议方案不支持跨源请求。我们必须通过HTTP实际提供输出文件。

下面的命令将创建一个简单的“hello world”程序并进行编译。
```
$ mkdir hello
$ cd hello
$ cat << EOF > hello.c
#include <stdio.h>
int main(int argc, char ** argv) {
  printf("Hello, world!\n");
}
EOF
$ emcc hello.c -s WASM=1 -o hello.html
```

> 运行之后，使用 http-server 访问 hello.html 页面，可以看到 命令行框中打印处理 Hello, world! 的字样。如下图

![hello world](./test1.png)

完整文档：[https://wasm.comptechs.cn/docs/DevelopersGuide.html](https://wasm.comptechs.cn/docs/DevelopersGuide.html)

## 如何将 Typescript 编译成 WebAssembly

Javascript 固有的特质就是，只有想不到，没有做不到。一切可能的尝试，Javascript 都会孜孜不倦的探索和尝试。
目前新出的可以将 ts 编译成 WebAssembly 的方式是可以使用 TypeScript 的子集 Assemblyscript

下面的命令将创建一个简单的“as hello world”程序并进行编译。
```
$ mkdir hello
$ cd hello
$ cat << EOF > hello.c
#include <stdio.h>
int main(int argc, char ** argv) {
  printf("Hello, world!\n");
}
EOF
$ emcc hello.c -s WASM=1 -o hello.html
```
