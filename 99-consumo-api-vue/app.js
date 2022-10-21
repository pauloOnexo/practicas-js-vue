const app = Vue.createApp({
    data() {
        return {
            cp: '',
            estado: 'Estado',
            municipio:'Municipio',
            assents: []

        }
    },
    methods: {
        getLocation(){
            this.connectSepomex();
        },

        async connectSepomex(){

            const response = await fetch(`http://sepomex.icalialabs.com/api/v1/zip_codes?zip_code=${this.cp}`)
            let data = await response.json()
            this.assents = data.zip_codes

            this.estado = data.zip_codes[0].d_estado
            this.municipio = data.zip_codes[0].d_mnpio
        }
    },
})

app.mount('#myApp')




