var app = new Vue({
  el: "#app",
  data: {
     age:20
  },
  methods: {
   add:function(){
     this.age++;
   },
   btn:function(){
    this.age--;
   }
  },
});