
<template>
<div id="header">
  <div class="container">
    <div class="row header"> 
      <div class="col-2">
      <img  class="img-fluid" src="../img/motol.png" alt="">
      </div>
      <div class="col-10 header-title">
        <h3  class="text-center">Fakultní Nemocnice Motol</h3>
      </div>
    </div>
     <div class="row d-flex flex-row-reverse my-3">
     <b-button :pressed.sync="loadfirst" variant="primary">{{ loadfirst ? 'New Card' : 'Close' }}</b-button>
    </div>
  </div>
  <component v-model="loadfirst" :is="componentName"></component>
</div>

</template>

<script>
export default {
  data() {
    return {
      myToggle: false,
      loadfirst: true,
      name: 'Header',
      show: true
    }
  },
   
   props: {},

   methods: { 
     toggle() {
      let name =  this.loadfirst ? "comp1" : "comp2"
      return () => import(`./${name}`)
    }
   },
   computed: {
    componentName() {
      let name =  this.loadfirst ? "comp1" : "comp2"
      return () => import(`./${name}`)
    }
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.header {
  padding: 10px 0;
  border-bottom: 1px solid black;
}

.header-title {
  color: red;
  margin: auto;
  justify-content: center;
}

.img-fluid {
  width: 40%;
  margin: 5px auto;
}
</style>