const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
      // fullname: ''
    };
  },
  watch: {
    // repeat a data property or a computed property inside these functions to 'watch' them
    // we wouldn't use this to return anything because we are not using it in the HTML
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
    counter(value) {
      if(value > 50) {
        this.counter = 0;
      }
    }
  },
  computed: {
    // name your computed properties just as you would your data properties
    // Vue will run this function once when the page is rendered and only run it again
    // if the dependency 'name' is updated. Vue stores the initial render in a cahce until it
    // needs to be updated which is better for performance.
    // USE FOR OUT PUTTING SOMETHING  NOT FOR EVENTS
    fullname() {
        if(this.name === '' || this.lastName === '') {
          return '';
        }
        return this.name + ' ' + this.lastName;
    }

  },
  // Only use methods if you know you want the function to run every time the page is rendered (less common)
  // Bind EVENTS to METHODS
  methods: {
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Riley';
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
