<template>
 <b-container>
    <b-table  bordered hover :items="items" :fields="fields">
      <template v-slot:cell(buttons)>
        <b-button variant="success" class="mr-3">Info</b-button>
        <b-button type="button" variant="danger" @click="removeItem(i)">Delete</b-button>
      </template>
    </b-table>
  </b-container>
</template>

<script>
export default {
  
  data() {
    return {
       name: 'MainPage',
       fields: ['first_name', 'last_name', 'date_of_birth', 'diagnose', 'buttons'],
       items: [
       { isActive: true, date_of_birth: '14.05.1965', first_name: 'Dickerson', last_name: 'Macdonald', diagnose: 'Stomatology' },
       { isActive: false, date_of_birth: '10.04.1984', first_name: 'Larsen', last_name: 'Shaw', diagnose: 'Ortopedie' },
       { isActive: false, date_of_birth: '23.08.1978', first_name: 'Geneva', last_name: 'Wilson', diagnose: 'Ortopedie' },
       { isActive: true, date_of_birth: '20.03.1968', first_name: 'Jami', last_name: 'Carney', diagnose: 'Chirurgie'}
      ]
    }
  },
  props: {},
  methods: {
    removeItem: function(i) {
    this.items.splice(i, 1);
  }
    

  },
  
}
</script>
<style scoped>

</style>