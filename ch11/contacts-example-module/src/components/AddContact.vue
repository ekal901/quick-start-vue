// src/components/AddContact.vue
<template>
  <contactForm mode="add"></contactForm>
</template>

<script>
import ContactForm from "./ContactForm";
export default {
  name: "addContact",
  components: { ContactForm }
};
</script>
