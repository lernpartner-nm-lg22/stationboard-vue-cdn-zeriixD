"use strict";
// opendata api URL

const stationboard = {
    data() {
        return {
            station: "",
            stationName: "",
            trains: [],
        };
    },
    methods: {
    async loadConnections() {
        if (this.station === "") return;
        const url = `https://transport.opendata.ch/v1/stationboard?station=${this.station}`;
        const response = await fetch(url);
        const data = await response.json();

        this.stationName = data.station.name;
        this.trains = data.stationboard;
    },
    timestampToTime(timestamp) {
        const date = new Date(timestamp);
       return date.toLocaleTimeString("de-CH", { hour: "2-digit", minute: "2-digit" });

    },
  }
};

const app = Vue.createApp(stationboard);
app.mount("#app");
