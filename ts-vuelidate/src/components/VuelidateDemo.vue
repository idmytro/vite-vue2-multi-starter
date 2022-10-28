<script lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      name: '',
    };
  },
  validations() {
    return {
      name: { required },
    };
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect) return;
      // actually submit form
      console.log('submitted');
    },
  },
};
</script>

<template>
  <div>
    <p>
      <label>
        <input v-model="name">
        <div v-if="v$.name.$error">Name field has an error.</div>
      </label>
    </p>
    <button
      type="button"
      @click="submitForm"
    >
      submit
    </button>
  </div>
</template>
