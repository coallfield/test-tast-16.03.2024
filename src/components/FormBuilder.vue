<template>
  <div class="form-builder">
    <form @submit.prevent="onSubmit(form)" v-for="form in forms" :key="form.name" class="form">
      <FormFields :form="form" @update="(data) => updateFormData(data)"></FormFields>
      <FormButtons></FormButtons>
      <FormAttentions :form="form"></FormAttentions>
    </form>
  </div>
</template>

<script>
import FormFields from "@/components/form-items/FormFields.vue";
import FormButtons from "@/components/form-items/FormButtons.vue";
import FormAttentions from "@/components/form-items/FormAttentions.vue";
export default {
  name: "FormBuilder",
  data() {
    return {
      forms: []
    }
  },
  methods: {
    async onSubmit(form) {
      
      if (this.isFormDataEntered(form.formData)) {
        this.startAttention(form.formData, 'dataAttention');
      } else if (form.formData.password !== form.formData.doublePassword) {
        this.startAttention(form.formData, 'passwordAttention');
      } else if (this.isAllFormsEntered()) {
        this.startAttention(form.formData, 'allFormsAttention');
      } else {
        try {
          const body = this.createBody();
          await this.postFormData(body);
        } catch (error) {
          console.error(error);
        }
      }
    },
    updateFormData(data) {
      data.formData[data.key] = data.value;
    },
    isFormDataEntered(formData) {
      return Object.values(formData).some(val => typeof val === 'string' && val.trim() === '');
    },
    isAllFormsEntered() {
      return Object.values(this.forms).some(form => this.isFormDataEntered(form.formData));
    },
    createBody() {
      const body = {};
      for (const form of  Object.values(this.forms)) {
        const { name, age, password, gender } = form.formData;
        body[form.name] = { name, age, password, gender };
      }
      return body;
    },
    async postFormData(body) {
      const response = await fetch('somewhere', {
        method: 'POST',
        body: JSON.stringify(body)
      });
      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }
    },
    async fetchData() {
      try {
        const response = await fetch('form-config.json');
        if (!response.ok) {
          throw new Error('Failed to fetch form data');
        }
        const formData = await response.json();
        this.forms = formData;
        Object.values(this.forms).forEach(el => {
          el.formData = {
            name: '',
            gender: '',
            age: '',
            password: '',
            doublePassword: '',
            dataAttention: false,
            passwordAttention: false,
            allFormsAttention: false
          };
        })

      } catch (error) {
        console.error(error);
      }
    },
    startAttention(form, attention) {
      form[attention] = true;
      setTimeout(() => {
        form[attention] = false;
      }, 1000);
    }
  },
  mounted() {
    this.fetchData();
  },
  components: {FormFields, FormButtons, FormAttentions}
}
</script>

<style scoped>
.form-builder {
  margin-top: 50px;
  width: 900px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-gap: 60px;
  justify-content: center;

}

.form {
  border: 2px solid black;
  border-radius: 25px;
  width: 400px;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  grid-gap: 20px
}

</style>
