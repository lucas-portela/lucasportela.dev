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
          {{ project.title }}
        </div>
        <a
          class="my-name text-lg md:text-2xl mb-5 md:mb-10"
          @click="$router.push({ name: 'home' })"
          >By Lucas Portela</a
        >
        <a
          v-if="project.link"
          class="project-link"
          target="_blank"
          :href="project.link"
        >
          <i class="mdi mdi-open-in-new"></i>
          {{ project.link }}
        </a>
      </div>
      <div class="content px-5 md:px-20">
        <div class="w-full properties mb-4 mt-2 text-center">
          <div class="badge bg-info">
            <i class="mdi mdi-calendar"></i>
            {{ project.date }}
          </div>

          <a
            v-if="project.public"
            class="badge bg-positive"
            target="_blank"
            :href="project.link"
          >
            <i class="mdi mdi-earth"></i>
            Public Access
          </a>
          <div v-else class="badge bg-negative">Private Access</div>
          <div
            class="badge bg-accent-b-2"
            v-for="(tag, index) in project.tags"
            :key="index"
          >
            <i :class="`mdi mdi-` + icon(tag)"></i>
            {{ text(tag) }}
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-5 mb-10">
          <div>
            {{ project.description }}
          </div>
          <div>
            <q-carousel
              v-model="slide"
              transition-prev="scale"
              transition-next="scale"
              swipeable
              animated
              control-color="accent"
              :navigation="false"
              padding
              arrows
              class="images h-52 md:h-80"
            >
              <q-carousel-slide
                v-for="(image, index) in project.images"
                :key="index"
                :name="'image-' + index"
                class="image column no-wrap flex-center"
                :style="`background-image: url(${image});`"
              >
              </q-carousel-slide>
            </q-carousel>
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
      min-height: 100vh;
      background: white;
      font-size: 1.2em;
      font-weight: 300;
      color: rgba(0, 0, 0, 0.6);
      text-align: justify;
      box-shadow: 0px 0px 50px 10px
        transparentize($color: $primary, $amount: 0.5);

      .properties {
        & > * {
          display: inline-block;
          margin-right: 10px;
          margin-top: 10px;
          font-size: 0.8em;
        }
        .badge {
          padding: 5px 10px;
          border-radius: 10px;
          color: white;
        }
      }

      .images {
        border-radius: 10px;
        background-color: $color-primary-4;
        .image {
          display: block;
          width: 100%;
          height: 100%;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
      }
    }
  }
}
</style>
<script>
import portfolio from "../data/portfolio";
import trunkSketch from "assets/p5/trunk-sketch";
import p5 from "p5";
import * as $ from "jquery";

export default {
  components: {},
  data: () => ({
    portfolio,
    slide: "image-0",
  }),
  computed: {
    project() {
      return this.portfolio.find((x) => x.id == this.$route.params.id);
    },
  },
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
