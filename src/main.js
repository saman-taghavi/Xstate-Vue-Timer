import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPause, faStop, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// import { inspect } from "@xstate/inspect";
// inspect({ iframe: false });

library.add(faPause, faStop, faPlay);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
