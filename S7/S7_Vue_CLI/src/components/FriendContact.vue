<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>

    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
  
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "email", "isFavorite"],
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    isFavorite: { type: Boolean, required: false, default: false },
  },
  emits: ['toggle-favorite', 'delete'],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // toggleFavorite event when emitted will carry the id as a first argument to a methods that listens to this event
      this.$emit("toggle-favorite", this.id);
    }
  },
};
</script>
