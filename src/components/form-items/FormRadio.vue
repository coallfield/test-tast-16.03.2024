<template>
  <fieldset>
    <legend>{{ label }}</legend>

    <div
        v-for="option in options"
        :key="option.value"
    >
      <input type="radio" name="radio" :id="option.value" :value="option.value"  />
      <label :for="option.value">{{ option.text }}</label>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "FormRadio",

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
  fieldset {
    width: 350px;
    height: 100px;
    outline: none;
    border: 1px solid black;
  }
</style>
