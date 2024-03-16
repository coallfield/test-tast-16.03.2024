<template>
    <div class="form-builder__attentions">
        <h4 v-if="form.formData.dataAttention">Введите все данные</h4>
        <h4 v-if="form.formData.passwordAttention">Пароли не совпадают</h4>
        <h4 class="form-builder__attentions__attention" v-if="form.formData.allFormsAttention">Заполните все формы</h4>
    </div>
</template>

<script>
    export default {
        props: {
            form: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
.form-builder__attentions {

  color: red;
  margin-top: 10px;
}
.form-builder__attentions__attention {
    width:215%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-size: larger;
}
</style>