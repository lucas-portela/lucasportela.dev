<template>
  <div class="layout overflow-x-hidden">
    <div
      class="
        layout-nav
        w-full
        absolute
        top-0
        left-0
        z-50
        flex flex-row
        text-3xl
      "
    >
      <a v-if="$route.name != 'home'" @click="goBack()">
        <div class="mdi mdi-arrow-left"></div>
      </a>
      <div class="flex-grow"></div>
      <a
        v-for="(item, index) in nav"
        :key="index"
        :href="item.link"
        class="nav-link"
        >{{ item.text }}</a
      >
      <a href="http://lattes.cnpq.br/1286690602829243" target="_blank">
        <img src="images/cnpq-white.png" class="h-8" />
      </a>
      <a href="https://www.linkedin.com/in/lsnp" target="_blank">
        <div class="mdi mdi-linkedin"></div>
      </a>
      <a href="https://github.com/lucas-portela" target="_blank">
        <div class="mdi mdi-github"></div>
      </a>
    </div>
    <div class="layout-page">
      <router-view />
    </div>
    <div
      class="
        layout-bottom-bar
        p-5
        md:p-14
        grid grid-cols-1
        md:grid-cols-2
        content-around
        justify-self-end
        gap-5
      "
    >
      <router-link :to="{ name: 'home' }">
        <div class="title">Lucas Portela</div>
        <div class="subtitle">Senior Full Stack Developer</div>
      </router-link>
      <div class="md:text-right">
        <div class="nav-links">
          <router-link to="/#itseasytofindme">Contact</router-link> |
          <router-link to="/oss-licenses">OSS Licenses</router-link>
        </div>
        <div class="copyright">© 2021 Lucas Portela, All Rights Reserved.</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.layout-nav {
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
  .nav-link:active,
  .nav-link:focus {
    background-color: $primary-inverse;
    color: $primary;
  }
}
.layout-bottom-bar {
  color: white;
  background: $primary;
  .title {
    display: block;
    font-weight: 800;
    font-size: 1.2em;
  }
  .subtitle {
    display: block;
    font-weight: 500;
    color: $muted-color;
    cursor: pointer;
    font-size: 0.8em;
  }

  .nav-links {
    a {
      font-size: 1.2em;
    }
  }
  .copyright {
    display: block;
    font-size: 0.8em;
  }
}
</style>
<script>
import $ from "jquery";
export default {
  data: () => ({
    nav: [],
    previousRoutes: 0,
    goingBack: false,
  }),
  watch: {},
  mounted() {
    window.$ = $;
    this.$skrollr.refresh();
    if (window.location.hash) {
      this.$scrollTo(window.location.hash);
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (this.goingBack) {
      if (to.name == "home") this.previousRoutes = 0;
      else this.previousRoutes -= 1;
      this.goingBack = false;
    } else this.previousRoutes += 1;
    next();
  },
  methods: {
    goBack() {
      this.goingBack = true;
      if (this.previousRoutes > 0) this.$router.back();
      else this.$router.push({ name: "home" });
    },
  },
};
</script>
