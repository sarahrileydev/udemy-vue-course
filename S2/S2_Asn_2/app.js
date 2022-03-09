const app = Vue.createApp({
    data() {
        return {
            input: '',
            confirmedInput: '', 
            secondInput: '',
            confirmAgain: ''
        };
    },
    methods: {
        triggerAlert() {
            alert("alert");
        },
        setInput(event) {
            this.input = event.target.value;
        },
        confirmInput() {
            this.confirmedInput = this.input;
        },
        setAnotherInput(event) {
            this.secondInput = event.target.value;
        },
        confirmInputAgain() {
            this.confirmAgain = this.secondInput;
        },
    }
});
app.mount('#assignment');