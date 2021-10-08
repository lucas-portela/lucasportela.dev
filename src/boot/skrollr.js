import $ from "jquery";
import { boot } from "quasar/wrappers";
import _skrollr from "../lib/skrollr";
import { EventEmitter } from "events";

const skrollr = _skrollr.init();
skrollr.keyframeEvt = new EventEmitter();
skrollr.on("keyframe", (element, name, direction) => {
  if (!element) return;
  const id = element.getAttribute("data-id") || "--";
  skrollr.keyframeEvt.emit(`${id}.${name}.${direction}`);
});
export default boot(({ app }) => {
  window.skrollr = skrollr;

  app.config.globalProperties.$skrollr = skrollr;
  app.config.globalProperties.$skrollr;

  app.config.globalProperties.$scrollTo = (el) =>
    setTimeout(() => skrollr.animateTo($(el).offset().top - 10));
});

export { skrollr };
