<template>
 <b-container>
 <h3>New Pacient</h3>
 <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Surname:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.surname"
          type="text"
          required
          placeholder="Enter surname"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Date of Birth:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.date"
          type="date"
          required
          placeholder="Enter date of birth"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4">
      <p>Diagnose</p>
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="Stomatologie">Stomatology</b-form-checkbox>
          <b-form-checkbox value="Chirurgie">Chirurgie</b-form-checkbox>
          <b-form-checkbox value="Kardiologie">Kardiology</b-form-checkbox>
          <b-form-checkbox value="Ortopedie">Ortopedie</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary" class="mr-3">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
    <p> Name: {{ form.name }}</p>
    <p> Surname: {{ form.surname }}</p>
    <p> Date of birth: {{ form.date }}</p>
    <p> Diagnose: {{ form.checked }}</p>
      <pre class="m-0">{{ form }}</pre>
    </b-card>
 </b-container>
</template>

<script>
export default {
    data() {
      return {
        form: {
          name: '',
          surname: '',
          date: '',
          checked: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.surname = ''
        this.form.date = ''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style scoped>
h1 {
  width: 500px;
  height: 300px;
  background-color: blue;
}
</style>