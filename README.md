# Vue基础知识
## 生命周期
![](https://cn.vuejs.org/images/lifecycle.png)

### 调用
```
...
var vm  = new Vue({
    el: '#app',
    data: {},
    beforeCreated: function () {
        console.log("创建前");
    }
})
...
```
简单概括：**红色圆角的都是方法**，共八个。```CMUD```算是```CRUD```的变种。```CMUD```要么就是前缀```before```,要么就是后缀```ed```，所以```2*4```组合，一共有八个方法。

## 模版
### 属性绑定```v-bind:```
#### ```index.html```内容
```
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue</title>
    <script src="./vue.js"></script>
</head>
<body>
    <div id="app">
        <img :src="imageSrc"
             :style="{width: imageWith}"
             alt="one image">
    </div>
<script src="./index.js"></script>
</body>
</html>
```

#### ```index.js```内容
```
var dataSource = {
    imageSrc: 'http://img.zcool.cn/community/016dca584bdddfa801219c77711628.jpg@900w_1l_2o_100sh.jpg',
    imageWith: '80%'
}

var vm  = new Vue({
    el: '#app',
    data: dataSource
})
```
简单概括：将原来就是直接在属性添加前缀```:```， 同时在```data```添加数据。

### 绑定类
#### 添加```semantic-ui```
```
$ https://semantic-ui.com/dist/semantic.min.css
```

#### ```index.html```内容
```
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue</title>
    <link rel="stylesheet" href="./semantic.min.css">
    <script src="./vue.js"></script>
</head>
<body>
    <div id="app">
        <div class="ui container">
            <div class="ui hidden divider">
                <button :class="[buttonClass, colorClass, { loading: isLoading }]">按钮</button>
            </div>
        </div>
    </div>
<script src="./index.js"></script>
</body>
</html>
```

#### ```index.js```内容
```
var dataSource = {
    buttonClass: 'ui button',
    colorClass: 'violet',
    isLoading: false
}

var vm  = new Vue({
    el: '#app',
    data: dataSource
})
```
简单概括：绑定属性用的是对象，绑定类用的是数组。

### 文本和```HTML```
```
<!--渲染html-->
<div v-html="message">
</div>

<!--渲染文本-->
<div v-text="message">
</div>
```

## 事件```@```
### 实现简单的点击事件
#### ```index.html```内容
```
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue</title>
    <link rel="stylesheet" href="./semantic.min.css">
    <script src="./vue.js"></script>
</head>
<body>
    <div id="app">
        <div class="ui container">
            <div class="ui hidden divider">
                <button class="ui button" @click="counter += 1">
                    按钮
                </button>
                <div class="ui red circular label">
                    {{ counter }}
                </div>
            </div>

        </div>
    </div>
<script src="./index.js"></script>
</body>
</html>
```

#### ```index.js```内容
```
var dataSource = {
    counter: 0
}

var vm  = new Vue({
    el: '#app',
    data: dataSource
})
```

### 实现在```methods```中添加方法
#### ```index.html```内容
```
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue</title>
    <link rel="stylesheet" href="./semantic.min.css">
    <script src="./vue.js"></script>
</head>
<body>
    <div id="app">
        <div class="ui container">
            <div class="ui hidden divider">
                <button class="ui button" @click="like">
                    按钮
                </button>
                <div class="ui red circular label">
                    {{ counter }}
                </div>
            </div>

        </div>
    </div>
<script src="./index.js"></script>
</body>
</html>
```

#### ```index.js```内容
```
var vm  = new Vue({
    el: '#app',
    data: dataSource,
    methods: {
        like: function (event) {
           this.counter = this.counter + 1;
           console.log(event);
        }
    }
})
```
### 键盘的点击事件
#### ```index.html```内容
```
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue</title>
    <link rel="stylesheet" href="./semantic.min.css">
    <script src="./vue.js"></script>
</head>
<body>
    <div id="app">
        <div class="ui container">
            <div class="ui hidden divider">
                <div class="ui input">
                    <input @keyup.enter="process">
                </div>
            </div>
        </div>
    </div>
<script src="./index.js"></script>
</body>
</html>
```

#### ```index.js```内容
```
var dataSource = {
}

var vm  = new Vue({
    el: '#app',
    data: dataSource,
    methods: {
        process: function (event) {
            console.log(event.target.value);
        }
    }
})
```

## 表单
### ```v-model```语法糖
#### ```index.html```内容
```
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue</title>
    <link rel="stylesheet" href="./semantic.min.css">
    <script src="./vue.js"></script>
</head>
<body>
    <div id="app">
        <div class="ui container">
            <div class="ui hidden divider">
                <div class="ui green inverted segment">
                    {{ message }}
                </div>

                <div class="ui input">
                    <input :value="message"
                           @input="messageTrigger">
                </div>

                <div class="ui input">
                    <input v-model="message">
                </div>
            </div>
        </div>
    </div>
<script src="./index.js"></script>
</body>
</html>
```

#### ```index.js```内容
```
var dataSource = {
    message: 'hello'
}

var vm  = new Vue({
    el: '#app',
    data: dataSource,
    methods: {
        messageTrigger: function ($event) {
            this.message =  $event.target.value
        }
    }
})

```
### 复选框
### 单选按钮
### 选择列表
