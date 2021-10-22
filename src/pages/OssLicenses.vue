<template>
  <div class="project">
    <div
      class="p5-bg absolute w-screen top-0 left-0"
      :data-0="
        $skipInMobile(
          'filter: blur(1px); opacity: 1; transform: translateY(0vh);'
        )
      "
      :data-30p="
        $skipInMobile(
          'filter: blur(12px); opacity: 0; transform: translateY(30vh);'
        )
      "
    ></div>
    <div class="wrapper">
      <div
        class="header px-5 pt-20 pb-2 md:px-20 md:pt-28"
        :data-0="$skipInMobile('opacity: 1; transform: translateY(0vh);')"
        :data-30p="$skipInMobile('opacity: 0; transform: translateY(-30vh);')"
      >
        <div class="title text-5xl md:text-6xl">
          Open Source Software Licenses
        </div>
        <a
          class="my-name text-lg md:text-2xl mb-5 md:mb-10"
          @click="$router.push({ name: 'home' })"
          >By Lucas Portela</a
        >
      </div>
      <div class="content px-5 md:px-20 pt-4">
        <div class="grid md:grid-cols-2 gap-5 mb-10">
          <div>
            <div class="text-h5 mb-2">This Website IS NOT Open Source</div>
            <div>
              This website depends on some open source libs and projects, but it
              is not open source. Therefore this work by
              <a
                xmlns:cc="http://creativecommons.org/ns#"
                href="https://lucasportela.dev"
                property="cc:attributionName"
                rel="cc:attributionURL"
                >Lucas Santana do Nascimento Portela</a
              >
              is licensed under a
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
                >Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
                International License</a
              >.
              <div class="text-center mt-2">
                <a
                  rel="license"
                  href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
                  ><img
                    alt="Creative Commons License"
                    style="border-width: 0"
                    src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"
                    class="inline-block"
                /></a>
              </div>
            </div>
          </div>
          <div>
            <div class="text-h5 mb-2">HERE are the Open Source Stuff</div>
            <div>
              This work depends on or includes substantial copies of the
              following projects:
              <ul class="ml-5 my-5">
                <li
                  class="mb-1"
                  v-for="(license, index) in ossLicenses"
                  :key="index"
                >
                  <i class="mdi mdi-chevron-right"></i>
                  <b>{{ license.title }}:</b> {{ license.description }}
                  <a :href="license.link" target="_blank" class="text-xs"
                    >(view license)
                  </a>
                </li>
              </ul>
              Click <a href="3rd-party-licenses.txt">here</a> to view all
              licenses associated to this work.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.project {
  .p5-bg {
    z-index: -1;
  }
  .wrapper {
    width: 100%;
    .header {
      font-size: 1.7em;
      font-weight: 300;
      color: white;
      text-align: center;
      .title {
        display: block;
        font-weight: 800;
        margin-bottom: 0.1em;
      }
      .my-name {
        display: block;
        font-weight: 500;
        color: $muted-color;
        padding-top: 0px;
        cursor: pointer;
      }
      .project-link {
        display: block;
        font-size: 0.6em;
        font-weight: 500;
        color: $muted-color;
        padding-top: 0px;
        cursor: pointer;
      }
    }
    .content {
      display: inline-block;
      width: 100%;
      background: white;
      font-size: 1.2em;
      font-weight: 300;
      color: rgba(0, 0, 0, 0.6);
      // text-align: justify;
      box-shadow: 0px 0px 50px 10px
        transparentize($color: $primary, $amount: 0.5);
      a {
        color: $color-accent-a-1;
        font-style: italic;
      }
    }
  }
}
</style>
<script>
import ossLicenses from "../data/oss-licenses";
import trunkSketch from "assets/p5/trunk-sketch";
import p5 from "p5";
import * as $ from "jquery";

export default {
  components: {},
  data: () => ({
    ossLicenses,
  }),
  computed: {},
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
    icon(str) {
      return (str.match(/^icon:([^\s]+)/) || [])[1] || "";
    },
    text(str) {
      return str.replace(/^icon:([^\s]+)\s*/, "");
    },
    setupSketch() {
      this.sketch = new p5(
        trunkSketch(
          this.$q.platform.is.mobile,
          $(".project .header").outerHeight() * 1.5
        ),
        $(".project .p5-bg")[0]
      );
    },
    removeSketch() {
      if (this.sketch) this.sketch.remove();
    },
  },
};
</script>
