
<template>
 <div>
 <b-button :pressed.sync="loadfirst" variant="primary">{{ loadfirst ? Hello : Bye}} Toggle Me</b-button>
 </div>
</template>
<script>

export default {
  
  data() {
    return {
      myToggle: false,
      name: 'MainPage',
      loadfirst: true
       // fields: ['first_name', 'last_name', 'age'],
       // items: [
      //    { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
       //   { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
       //   { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
       //   { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
       // ]
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
