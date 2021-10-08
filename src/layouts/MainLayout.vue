<template>
  <div class="layout overflow-x-hidden">
    <div
      class="main-nav w-full absolute top-0 left-0 z-50 flex flex-row text-3xl"
    >
      <div class="flex-grow"></div>
      <a
        v-for="(item, index) in nav"
        :key="index"
        :href="item.link"
        class="nav-link"
        >{{ item.text }}</a
      >
      <a href="https://www.linkedin.com/in/lucas-portela-in" target="_blank">
        <div class="mdi mdi-linkedin"></div>
      </a>
      <a href="https://github.com/lucas-portela" target="_blank">
        <div class="mdi mdi-github"></div>
      </a>
      <a href="https://gitlab.com/lucas-portela" target="_blank">
        <div class="mdi mdi-gitlab"></div>
      </a>
      <div class="flex-grow md:flex-none"></div>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>
<style lang="scss">
.main-nav {
  padding: 5px;
  a {
    color: $primary-inverse;
    padding: 10px;
    margin-right: 5px;
    text-decoration: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    border: solid transparent 1px;
    transition: backdrop-filter 1s, border 1s;
    &:hover {
      border: solid $primary-inverse 1px;
      backdrop-filter: blur(4px);
    }
  }
}
.main-nav .nav-link:active,
.main-nav .nav-link:focus {
  background-color: $primary-inverse;
  color: $primary;
}
</style>
<script>
import $ from "jquery";
export default {
  data: () => ({
    nav: [],
  }),
  mounted() {
    window.$ = $;
    this.$skrollr.refresh();
    if (window.location.hash) {
      this.$scrollTo(window.location.hash);
    }
  },
  methods: {},
};
</script>
