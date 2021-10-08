import { boot } from "quasar/wrappers";
import $ from "jquery";
// import mouseWheel from "../lib/jquery.mousewheel";
// import srSmoothscroll from "../lib/jquery.simplr.smoothscroll";

export default boot(({ app }) => {
  app.config.globalProperties.$scrollTo = (el) =>
    setTimeout(() =>
      $("html, body").animate(
        {
          scrollTop: $(el).offset().top - 10,
        },
        1000
      )
    );
  //   mouseWheel($);
  //   srSmoothscroll($);
  //   $(() => {
  //     $.srSmoothscroll({
  //       // defaults
  //       step: 10,
  //       speed: 400,
  //       ease: "swing",
  //       target: $("body"),
  //       container: $(window),
  //     });
  //   });
});
