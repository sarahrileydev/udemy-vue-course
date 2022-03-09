const app = Vue.createApp({

    data(){
        return{
            a: false,
            b: false,
            c: false
        };
    },
    computed: {
        boxAClasses(){
            return {active: this.a};
        }
    },
    methods: {
        boxSelected (box){
            if(box === 'A') {
                this.a = !this.a; 
            } else if (box === 'B') {
                this.b = !this.b;
            }else if( box === 'C') {
                this.c = !this.c;
            }
        }
    }
});


app.mount('#styling');