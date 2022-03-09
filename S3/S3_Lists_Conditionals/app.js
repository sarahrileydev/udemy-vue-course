const app = Vue.createApp({
  data() {
    return { 
      input: '',
      goals: [] };
  },
  methods: {
    addGoals(){
      this.goals.push(this.input);
    },
    removeGoal(index){
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
