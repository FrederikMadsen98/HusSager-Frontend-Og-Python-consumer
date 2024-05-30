const app = Vue.createApp({
    data() {
        return {
            newHusSag: {
                id: null,
                vej: '',
                husnr: null,
                by: '',
                pris: null
            },
            husSagId: '',
            husSag: null
        };
    },
    methods: {
        async createHusSag() {
            const response = await axios.post('https://localhost:7045/api/hussager', this.newHusSag);
            this.newHusSag = {
                id: null,
                vej: '',
                husnr: null,
                by: '',
                pris: null
            };
            alert('Hus Sag created with ID: ' + response.data.id);
        },
        async getHusSag() {
            const response = await axios.get('https://localhost:7045/api/hussager/' + this.husSagId);
            console.log(response.data);
            this.husSag = response.data;
        }
    }
});
app.mount('#app');