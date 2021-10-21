<template>
  <SectionBlock
    refs="section"
    class="portfolio"
    title="those are my works"
    subtitle="It would just be work if it wasn't also art <3"
    background="accent-a-4"
    color="white"
    parallax="images/morro-triste.jpg"
    :dense="false"
  >
    <div class="grid grid-cols-2 md:grid-cols-5 gap-10">
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
        <div class="wrapper px-5 pb-5">
          <div class="title">{{ item.title }}</div>
          <div class="date">{{ item.date }}</div>
        </div>
      </a>
    </div>
  </SectionBlock>
</template>
<style lang="scss">
.portfolio {
  min-height: 100vh;
  .work-summary-card {
    border-radius: 5px;
    overflow: hidden;
    color: white;
    border: solid 5px white;
    cursor: pointer;
    transform: scale(1);
    transition: transform 1s, box-shadow 1s;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 2px;

    &:hover {
      transform: scale(1.1);
      box-shadow: rgba(0, 0, 0, 0.8) 0px 10px 40px 2px;
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
      padding-top: 15vh;
      margin: 0px;
      background-color: transparentize($color: $color-accent-b-4, $amount: 0.9);
      backdrop-filter: blur(2px);
      transition: top 1s;
      .title {
        font-weight: 600;
        font-size: 1.2em;
      }
      .date {
        font-weight: 400;
        font-size: 0.8em;
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
  methods: {},
};
</script>
