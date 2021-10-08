<template>
  <SectionBlock
    refs="section"
    class="portfolio"
    title="those are my works <3"
    subtitle="I'm not Ozymandias, so please do not despair!"
    background="primary-3"
    color="white"
    parallax="https://images.pexels.com/photos/2767814/pexels-photo-2767814.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    :dense="false"
  >
    <div class="flex flex-row justify-center"></div>
  </SectionBlock>
</template>
<style lang="scss"></style>
<script>
import $ from "jquery";
import SectionBlock from "components/SectionBlock.vue";

export default {
  components: {
    SectionBlock,
  },
  data: () => ({}),
  mounted() {},
  methods: {},
};
</script>
