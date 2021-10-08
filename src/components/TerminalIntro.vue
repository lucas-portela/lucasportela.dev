<template>
  <SectionBlock
    refs="section"
    class="terminal-intro"
    title="let's $bash me out"
    background="primary-3"
    color="white"
    parallax="https://images.pexels.com/photos/2767814/pexels-photo-2767814.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    :dense="false"
  >
    <div class="flex flex-row justify-center">
      <div
        ref="termynal"
        data-emit-events
        data-id="termynal"
        @click="showDetails()"
        :data-0p="
          $skipInMobile(
            'filter: blur(10px); opacity: 0; transform: translateY(100vh) scale(0.5);'
          )
        "
        :data-80p="
          $skipInMobile(
            'filter: blur(0px); opacity: 1; transform: translateY(0vh) scale(1);'
          )
        "
        :data--60p-bottom="
          $skipInMobile(
            'filter: blur(0px); opacity: 1; transform: translateY(0vh) scale(1);'
          )
        "
        :data--120p-bottom="
          $skipInMobile(
            'filter: blur(10px); opacity: 1; transform: translateY(200vh)  scale(0.5);'
          )
        "
        class="termynal shadow-12 bg-white"
        data-termynal
      ></div>
    </div>
  </SectionBlock>
</template>
<style lang="scss">
.terminal-intro {
  .termynal {
    min-height: 50vh !important;
  }
}
</style>
<script>
import $ from "jquery";
import SectionBlock from "components/SectionBlock.vue";
import { Termynal } from "../lib/termynal.js";

export default {
  components: {
    SectionBlock,
  },
  data: () => ({
    termynal: null,
    keyframeEvent: "termynal.data80p.down",
    state: 0,
    summary:
      "Web App Development, Mobile App Development, Geolocation, RFID Systems, Web Scrapping, IA and Computer Vision.",
    skills: [
      "NodeJS, Tomcat, Apache and Nginx",
      "Amazon S3 and EC2, Google Cloud Computing, Firebase",
      "REST API, WebSocket, GraphQL, MQTT, WebHooks and raw TCP/UDP (For low level data transport)",
      "Dart, JavaScript, TypeScript, Python, BPMN, PHP, SQL, JAVA, C#, C++ and Prolog",
      "MongoDB, Oracle and Postgres",
      "Webpack, Gulp and Babel",
      "Google Maps, LeafletJS and OpenStreetMap",
      "Google Charts, D3, PIXIJS and EASELJS",
      "Linux (whatever linux I have in hands)",
      "CSS3, CSS3 ANIMATIONS, SASS and STYLUS",
      "JQuery, Flutter, Vue 2, Angular, React with Hooks and SolidJS",
      "Payment API Integration",
      "Bootstrap and Material Design (with Quasar in Vue and Angular Material in Angular lol)",
      "Reverse Engineering communication protocols with WireShark and similar tools",
      "Arduino, Raspberry Pi and basic eletronics knowledge for hardware prototyping",
    ],
  }),
  computed: {
    touchText() {
      return this.$q.platform.is.mobile ? "Touch" : "Click";
    },
  },
  mounted() {
    this.$skrollr.keyframeEvt.on(this.keyframeEvent, this.skrollrListener);
  },
  beforeUnmount() {
    this.removeSkrollrListener();
  },
  methods: {
    removeSkrollrListener() {
      this.$skrollr.keyframeEvt.off(this.keyframeEvent, this.skrollrListener);
    },
    skrollrListener() {
      if (this.state != 0) return this.removeSkrollrListener();
      this.state = 1;
      $(this.$refs.termynal).find("*").remove();
      this.termynal = new Termynal(this.$refs.termynal, {
        callback: () => {
          this.$skrollr.refresh();
          this.state = 2;
        },
        lineDelay: 50,
        progressLength: 18,
        typeDelay: 10,
        lineData: [
          {
            type: "input",
            prompt: "guest@shiwak:~$",
            value: "skillset --summary",
          },
          { type: "progress" },
          { prompt: "Summary: ", value: this.summary },
          {
            prompt: "Help: ",
            value:
              this.touchText + " in this terminal to show more information.",
          },
        ],
      });
    },
    showDetails() {
      if (this.state == 4) {
        this.state = 0;
        this.skrollrListener();
        this.$skrollr.animateTo(window.innerHeight);
      } else if (this.state == 2) {
        this.state = 3;
        $(this.$refs.termynal).find("*").remove();
        this.termynal = new Termynal(this.$refs.termynal, {
          callback: () => {
            this.$skrollr.refresh();
            this.state = 4;
          },
          lineDelay: 50,
          progressLength: 18,
          typeDelay: 10,
          lineData: [
            {
              type: "input",
              prompt: "guest@shiwak:~$",
              value: "skillset --list",
            },
            { type: "progress" },
            ...this.skills.map((skill) => ({
              prompt: "-> ",
              value: skill,
            })),
            {
              prompt: "Help: ",
              value:
                this.touchText +
                " in this terminal to show summary information.",
            },
          ],
        });
      }
    },
  },
};
</script>
