
## 一、基础数据类型

Go 语言的基本数据类型主要包括以下几种：

### 1. 整数类型

- `int`：平台相关的整数类型，通常为 32 或 64 位。
- `int8`：8 位有符号整数。
- `int16`：16 位有符号整数。
- `int32`：32 位有符号整数。
- `int64`：64 位有符号整数。
- `uint`：无符号整数，平台相关。
- `uint8`：8 位无符号整数（相当于 ASCII）。
- `uint16`：16 位无符号整数。
- `uint32`：32 位无符号整数。
- `uint64`：64 位无符号整数。

### 2. 浮点数类型

- `float32`：32 位浮点数。
- `float64`：64 位浮点数。

### 3. 布尔类型

- `bool`：表示真 (`true`) 或假 (`false`)。

### 4. 字符串类型

- `string`：表示文本数据，由 UTF-8 编码的字符组成。

## 二、基础语法

### 1. 变量声明

在 Go 中，可以使用 `var` 关键字声明变量：

```go
var x int = 10
var y float64 = 20.5
var name string = "Go"
