const app = Vue.createApp({
    data() {
        return {
            number: 0
        }
    },
    watch: {
        number(value) {
            if (value > 0) {
                const that = this;
                setTimeout(function () {
                    that.number = 0;
                }, 5000);
            }
        }
    },
    computed: {
        result() {
            if (this.number < 38) {
                return 'Not there yet!';
            }
            return 'Too much!';
            
        }
    },
    methods: {
        addFive(num) {
            this.number = this.number + num;
        },
        addOne(num) {
            this.number = this.number + num;
        }
    }
});

app.mount('#assignment')