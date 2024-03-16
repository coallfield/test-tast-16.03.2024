<template>
  <div>
    <p>{{ label }}</p>
    <input
        v-bind="$attrs"
        :type="type"
     
    />
  </div>
</template>

<script>

export default {
  name: "FormInput",
  
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style scoped>
    input {
      height: 40px;
      width: 350px;
      border: 1px solid black;
      outline: none
    }
</style>
