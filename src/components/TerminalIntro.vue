<template>
  <SectionBlock
    refs="section"
    class="terminal-intro"
    title="let's $bash me out"
    background="primary-3"
    color="white"
    parallax="https://images.pexels.com/photos/2767814/pexels-photo-2767814.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    :dense="true"
  >
    <div class="flex flex-row justify-center">
      <div
        ref="termynal"
        :data-0p="
          $skipInMobile(
            'filter: blur(10px); opacity: 0; transform: translateY(100vh) scale(0.7);'
          )
        "
        :data-100p="
          $skipInMobile(
            'filter: blur(0px); opacity: 1; transform: translateY(0vh) scale(1);'
          )
        "
        :data--30p-bottom="
          $skipInMobile(
            'filter: blur(0px); opacity: 1; transform: translateY(0vh) scale(1);'
          )
        "
        :data--80p-bottom="
          $skipInMobile(
            'filter: blur(10px); opacity: 1; transform: translateY(200vh)  scale(0.7);'
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
    min-height: 200vh !important;
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
  mounted() {
    $(window).on("scroll", this.scrollHandler);
  },
  beforeUnmount() {
    this.removeScrollHandler();
  },
  methods: {
    removeScrollHandler() {
      $(window).off("scroll", this.scrollHandler);
    },
    scrollHandler() {
      console.log("handling scroll");
      const target = $(this.$refs.termynal).offset().top;
      const current = $(window).scrollTop();
      if (Math.abs(target - current) < 300) {
        this.termynal = new Termynal(this.$refs.termynal, {
          callback: () => this.$skrollr.refresh(),
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
            { prompt: "Summary: ", value: this.summary },
            ...this.skills.map((skill) => ({ prompt: "-> ", value: skill })),
          ],
        });
        this.removeScrollHandler();
      }
    },
  },
};
</script>
