import { boot } from "quasar/wrappers";
import _skrollr from "../lib/skrollr";

const skrollr = _skrollr.init();

export default boot(({ app }) => {
  window.skrollr = _skrollr + 1;
  app.config.globalProperties.$skrollr = skrollr;
  // app.config.globalProperties.$skrollr = {
  //   refresh() {},
  // };
});

export { skrollr };
