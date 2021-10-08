<template>
  <div
    ref="section"
    :class="{
      section: true,
      dense: dense,
      ['bg-' + background]: background,
      ['text-' + color]: color,
    }"
  >
    <div
      v-if="parallax"
      class="parallax"
      :style="{ 'background-image': `url(${parallax})` }"
      data-top-bottom="background-position-y: -70%"
      data-bottom-top="background-position-y: 70%"
    ></div>
    <div
      :class="{
        content: true,
        'px-5': padding !== false,
        'py-10': padding !== false,
        'lg:px-20': padding !== false,
        'lg:pt-15': padding !== false,
        'lg:pb-24': padding !== false,
      }"
    >
      <a
        v-if="title"
        class="section-title"
        :id="sectionId"
        :href="'#' + sectionId"
      >
        <div class="title">
          <b class="icon mdi mdi">#</b>
          {{ title }}
        </div>
        <div v-if="subtitle" class="text-overline subtitle">
          <div>{{ subtitle }}</div>
        </div>
      </a>
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
.section {
  position: relative;
  display: block;
  width: 100%;
  &:not(.dense) {
    min-height: 100vh;
  }
  box-sizing: border-box;
  .section-title {
    margin-top: 0.5em;
    display: block;
    text-align: center;
    font-size: 3em;
    font-weight: 800;
    margin-bottom: 1.7em;
    line-height: 0;
    .title {
      display: block;
      line-height: 0.9em;
    }
    .subtitle {
      margin-top: 1em;
      display: inline-block;
      width: 100%;
      text-align: center;
      line-height: 1.5em;
      div {
        display: inline-block;
        max-width: 640px;
      }
    }
    .icon {
      font-size: 0.7em;
    }
    span:hover {
      text-decoration: underline;
    }
  }
  .content {
    position: relative;
  }
  .parallax {
    position: absolute;
    background-size: auto 150%;
    background-position: center 0px;
    opacity: 0.1;
  }
}
.section .parallax {
  top: 0px;
  width: 100%;
  height: 100%;
}
</style>
<script>
export default {
  props: [
    "title",
    "subtitle",
    "color",
    "background",
    "parallax",
    "dense",
    "padding",
  ],
  mounted() {
    this.$skrollr.refresh();
  },
  computed: {
    sectionId() {
      return (this.title || "").replace(/\W/g, "").toLowerCase().trim();
    },
  },
};
</script>
