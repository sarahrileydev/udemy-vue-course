const app = Vue.createApp({
    data() {
        return {
            input: '',
            confirmedInput: '',
            toggle: true,
            inputColor: ''
        }
    },
    computed: {
        paraClasses() {
            return {
                user1: this.confirmedInput === 'user1',
                user2: this.confirmedInput === 'user2',
                visible: this.toggle,
                hidden: !this.toggle
            }
        }
    },
    methods: {
        confirmInput() {
            this.confirmedInput = this.input;
        },
        setInput(event) {
            this.input = event.target.value;
        },
        buttonClicked() {
            this.toggle = !this.toggle;
            console.log(this.toggle)
        }
    }
});

app.mount('#assignment')