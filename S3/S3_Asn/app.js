const app = Vue.createApp({
    data() {
        return {
            input: '',
            tasks: [],
            toggle: true
        }
    },
    computed: {
        setClass(){
            return{
                visible: this.toggle,
                hidden: !this.toggle
            }
        }
    },
    methods: {
        addTask(e) {
            this.tasks.push(this.input);
            this.input = "";
            e.preventDefault();
        },
        btnClicked (){
            this.toggle = !this.toggle;
        }
    }
})
app.mount('#assignment')