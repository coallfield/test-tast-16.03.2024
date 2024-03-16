<template>
 <div class="form__input" v-for="field in form.items" :key="field.name">
        <template v-if="field.type === 'input'">
          <FormInput :label="field.label" :type="field.type"
            @input="updateFormData(form.formData, 'name', $event.target.value)"></FormInput>
        </template>
        <template v-else-if="field.type === 'select'">
          <FormSelect :label="field.label" :type="field.type" :options="field.additional.options"
            @change="updateFormData(form.formData, 'gender', $event.target.value)"></FormSelect>
        </template>
        <template v-else-if="field.type === 'radio'">
          <FormRadio :label="field.label" :type="field.type" :options="field.additional.options"
            @change="updateFormData(form.formData, 'age', $event.target.value)"></FormRadio>
        </template>
        <template v-else-if="field.name === 'pass'">
          <FormPassword :label="field.label" @input="updateFormData(form.formData, 'password', $event.target.value)">
          </FormPassword>
        </template>
        <template v-else-if="field.name === 'repeat-pass'">
          <FormPassword :label="field.label"
            @input="updateFormData(form.formData, 'doublePassword', $event.target.value)"></FormPassword>
        </template>
      </div>
</template>

<script>
import FormInput from "@/components/form-items/FormInput.vue";
import FormSelect from "@/components/form-items/FormSelect.vue";
import FormRadio from "@/components/form-items/FormRadio.vue";
import FormPassword from "@/components/form-items/FormPassword.vue";
export default {
    props: {
        form: {
            type: Object,
            required: true
        },
    },
    components: { FormInput, FormPassword, FormRadio, FormSelect },
    methods: {
        updateFormData(formData, key, value) {
            this.$emit("update", {formData, key, value});
        }
    }
}
</script>