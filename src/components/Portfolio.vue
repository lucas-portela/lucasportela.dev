<template>
  <SectionBlock
    refs="section"
    class="portfolio"
    title="those are my works"
    subtitle="It would just be work if it wasn't also art <3"
    color="white"
    parallax="images/vcai-certificate.jpg"
    :dense="false"
  >
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-10">
      <a
        v-for="(item, index) in portfolio"
        :key="index"
        class="work-summary-card"
        @click="$router.push('/project/' + item.id)"
      >
        <dib
          class="bg"
          :style="`background-image: url(${item.images[0]})`"
        ></dib>
        <div class="wrapper p-5">
          <div
            class="py-5 flex flex-row gap-2 text-3xl md:text-4xl justify-center"
          >
            <div
              v-for="(icon, index) in icons(item.tags || []).slice(0, 3)"
              :key="index"
              :class="`mdi mdi-` + icon"
            ></div>
            <div
              v-if="!icons(item.tags || []).length"
              class="mdi mdi-file"
            ></div>
          </div>
          <div class="title">{{ item.title }}</div>
          <div class="date">{{ item.date }}</div>
        </div>
      </a>
    </div>
  </SectionBlock>
</template>
<style lang="scss">
.portfolio {
  .section-block-bg {
    background-color: transparentize($color: $color-primary-4, $amount: 0);
  }
  min-height: 100vh;
  .work-summary-card {
    border-radius: 5px;
    overflow: hidden;
    // border: solid 1px white;
    cursor: pointer;
    transform: scale(1);
    transition: transform 1s, box-shadow 1s 0.3s;
    box-shadow: transparentize($color: $primary, $amount: 0.4) 0px 0px 0px 0px;

    &:hover {
      transform: scale(1.2);
      box-shadow: transparentize($color: white, $amount: 0.4) 0px 10px 40px 2px;
      .wrapper {
        top: -200%;
      }
    }

    .bg {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
    }

    .wrapper {
      position: relative;
      display: block;
      top: -100%;
      width: 100%;
      height: 100%;
      margin: 0px;
      background-color: transparentize($color: $color-primary-4, $amount: 0.05);
      // backdrop-filter: blur(2px);
      transition: top 1s 0.3s;
      .title {
        font-weight: 600;
        font-size: 1.2em;
        color: white;
      }
      .date {
        font-weight: 400;
        font-size: 0.8em;
        color: $color-accent-b-1;
      }
    }
  }
}
</style>
<script>
import $ from "jquery";
import SectionBlock from "components/SectionBlock.vue";
import portfolio from "../data/portfolio";

export default {
  components: {
    SectionBlock,
  },
  data: () => ({ portfolio }),
  mounted() {},
  methods: {
    icon(str) {
      return (str.match(/^icon:([^\s]+)/) || [])[1] || "";
    },
    icons(strArr) {
      return strArr.map((x) => this.icon(x)).filter((x) => x);
    },
  },
};
</script>
