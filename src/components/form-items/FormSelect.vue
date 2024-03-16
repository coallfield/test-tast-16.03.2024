<template>
  <div>
    <p>{{ label }}</p>
    <select>
      <option selected disabled>Укажите пол</option>
      <option
        v-for="option in options"
        :key="option.value"
      >{{ option.text }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FormSelect",

  props: {
    label: {
      type: String,
      default: ''
    },

    options: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
  select {
    width: 350px;
    height: 40px;
    outline: none;
    border: 1px solid black;
  }
</style>
