<template>
  <div>
    <div id="home-screen">
      <div
        class="p5-bg absolute w-screen top-0 left-0"
        :data-0="
          $skipInMobile(
            'filter: blur(1px); opacity: 1; transform: translateY(0vh);'
          )
        "
        :data-100p="
          $skipInMobile(
            'filter: blur(12px); opacity: 0; transform: translateY(30vh);'
          )
        "
      ></div>
      <div
        class="content absolute bottom-28 md:bottom-20 md:left-20 p-5 bx-24"
        :data-0="$skipInMobile('transform: translateY(0vh)')"
        :data-100p="$skipInMobile('transform: translateY(-50vh)')"
      >
        <div class="title text-7xl md:text-8xl w-3/4 md:w-full">{{ name }}</div>
        <div class="subtitle text-lg md:text-2xl">
          {{ devlevel }}
        </div>
        <div class="intro-joke text-xl md:text-3xl">
          <i class="mdi mdi-format-quote-open"></i>{{ introJoke
          }}<i class="mdi mdi-format-quote-close"></i>
        </div>
      </div>
      <div
        id="btn-scroll-down"
        class="absolute left-1/2 bottom-5 text-4xl mdi mdi-arrow-down"
      ></div>
    </div>
    <div id="home-content" class="text-white">
      <TerminalIntro />
      <Experience />
      <Portfolio />
      <Contacts />
    </div>
  </div>
</template>

<style lang="scss">
#home-screen {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  .p5-bg {
    canvas {
      position: absolute;
      transform: scale(1.2);
    }
  }
  .content {
    max-width: 800px;
    font-size: 1.7em;
    font-weight: 300;
    color: white;
    .title {
      font-weight: 800;
      margin-bottom: 0px;
    }
    .subtitle {
      font-weight: 500;
      color: $muted-color;
      padding-top: 0px;
      margin-bottom: 0.8em;
    }
  }
}
#home-content {
  margin-top: 100vh;
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  padding: 0px;
  box-shadow: 0px 0px 50px 10px transparentize($color: $primary, $amount: 0.5);
  background-color: $page-bg;
}

#btn-scroll-down {
  animation: btn-scroll-down 2s infinite;
  color: transparentize($color: $color-accent-a-1, $amount: 0);
}

@keyframes btn-scroll-down {
  0% {
    opacity: 0;
    transform: translateY(-100%) translateX(-50%);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(0%) translateX(-50%);
  }
}
</style>
<script>
import TerminalIntro from "components/TerminalIntro.vue";
import Experience from "components/Experience.vue";
import Portfolio from "components/Portfolio.vue";
import Contacts from "components/Contacts.vue";
import trunkSketch from "assets/p5/trunk-sketch";

import p5 from "p5";
import * as $ from "jquery";

export default {
  components: {
    TerminalIntro,
    Experience,
    Portfolio,
    Contacts,
  },
  data: () => ({
    name: "Lucas Portela",
    devlevel: "Senior Full Stack Developer",
    introJoke:
      "A brazilian dude Javascripting since the ages of the handy and elegant Notepad++ Code Editor.",
    sketch: null,
  }),
  mounted() {
    this.setupSketch();
    this.$skrollr.refresh();
  },
  beforeUnmount() {
    this.removeSketch();
  },
  updated() {
    this.removeSketch();
    this.setupSketch();
  },
  methods: {
    setupSketch() {
      this.sketch = new p5(
        trunkSketch(this.$q.platform.is.mobile),
        $("#home-screen .p5-bg")[0]
      );
    },
    removeSketch() {
      if (this.sketch) this.sketch.remove();
    },
  },
};
</script>
