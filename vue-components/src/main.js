import Vue from 'vue'

Vue.component('my-component', {
  data: function () {
    return {
      titulo: 'Curso de VueJS',
    }
  },
  template: "<h1>{{titulo}}</h1>",
})

new Vue({
  el: "#app",
})
