import { boot } from "quasar/wrappers";

export default boot(({ app }) => {
  app.config.globalProperties.$skipInMobile = function (value) {
    return this.$q.platform.is.mobile ? "" : value;
  };
});
