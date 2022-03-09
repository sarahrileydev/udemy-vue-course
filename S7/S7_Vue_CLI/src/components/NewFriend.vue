<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Friend</button>
    </div>
  </form>
</template>

<script>
// Since this is an input, we dont need props because we are passing
// the data back to the app, props are for passing the data down from the app

export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail);
    },
  },
};
</script>
