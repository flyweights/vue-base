var dataSource = {
    message: 'hello',
    boolArr: [],
    radioArr: [],

    selected: '',
    options: [
        {
            value: 'hello'
        },
        {
            value: 'hola'
        },
        {
            value: '你好'
        }
    ]
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






/*
//属性监听
vm.$watch('message', function (newValue, oldValue) {
    console.log(newValue, oldValue)
})
*/