<template>
  <SectionBlock
    refs="section"
    class="experience-section shadow-up-24"
    title="expertise comes from experience"
    background="white"
    color="primary"
    :dense="true"
  >
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="clock mb-10">
        <svg viewBox="0 0 640 640">
          <g transform="translate(320, 320)">
            <g
              data-bottom-top="@transform: rotate(180) rotate(0);"
              data-top-bottom="@transform: rotate(180) rotate(360);"
            >
              <rect
                class="pointer-one"
                x="-15"
                y="-50"
                width="30"
                height="300"
              />
            </g>

            <g
              data-bottom-top="@transform: rotate(180) rotate(0);"
              data-top-bottom="@transform: rotate(180) rotate(1080);"
            >
              <rect
                class="pointer-two"
                x="-7"
                y="-40"
                width="15"
                height="190"
              />
            </g>
            <rect
              class="center-pieces"
              x="-10"
              y="-10"
              width="20"
              height="20"
            />
            <circle class="center-pieces" r="2" />
            <rect
              v-for="(angle, angleI) in [
                0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330,
              ]"
              :key="angle"
              class="center-pieces"
              x="270"
              y="-7"
              width="35"
              height="15"
              :[calculateClockDotStartKeyframe(angleI*0.5)]="`@transform: rotate(${angle}) scale(0)`"
              :data-70p-top-bottom="`@transform: rotate(${angle}) scale(1)`"
            />
            <rect
              v-for="(angle, angleI) in [
                0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330,
              ]
                .map((x) => [x + 10, x + 20])
                .flat()"
              :key="angle"
              class="center-pieces"
              x="270"
              y="-2.5"
              width="35"
              height="5"
              :[calculateClockDotStartKeyframe(angleI)]="`@transform: rotate(${angle}) scale(0)`"
              :data-50p-top-bottom="`@transform: rotate(${angle}) scale(1)`"
            />
          </g>
        </svg>
      </div>

      <div class="timeline">
        <div
          v-for="(year, yearI) of timeline"
          :key="yearI"
          class="flex flex-row flex-nowrap"
        >
          <div
            class="timeline-year flex-none"
            data--40p-bottom-top="transform: translateX(-50px); opacity: 0; "
            data--60p-bottom-top="transform: translateX(0px); opacity: 1;"
          >
            <div class="hidden md:block text-h4 desktop">{{ year.name }}</div>
            <div class="block md:hidden text-h6 mobile">{{ year.name }}</div>
          </div>
          <div class="flex-grow">
            <div class="timeline-months">
              <div
                v-for="(month, monthI) of year.months"
                :key="monthI"
                :class="{
                  'timeline-month': true,
                  'last-month':
                    yearI >= timeline.length - 1 &&
                    monthI >= year.months.length - 1,
                }"
                data-bottom-top="transform: translateY(30vh); opacity: 0; border-color: transparent;"
                data--30p-bottom-top="transform: translateY(0vh); opacity: 1; border-color: transparent;"
                data--30p-bottom-bottom="transform: translateY(0vh); opacity: 1; border-color: initial;"
              >
                <div class="month-name">
                  <div class="text-h5">{{ month.name }}</div>
                </div>
                <div class="content">
                  <div class="text-body1 title">{{ month.title }}</div>
                  <div class="text-caption">
                    role: {{ month.role }}, duration: {{ month.duration }}
                  </div>
                  <div>
                    {{ month.content }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionBlock>
</template>
<style lang="scss">
.experience-section {
  min-height: 100vh;
  .clock {
    display: inline-block;
    text-align: center;
    transition: transform 0.1s;
    svg {
      display: inline-block;
      fill: $color-accent-a-1;
      stroke: white;
      stroke-width: 3;
      width: 70%;
    }
  }
  .timeline {
    display: inline-block !important;
    .timeline-year {
      .desktop {
        margin-top: -1.6em;
      }
      .mobile {
        margin-top: -0.8em;
      }

      text-align: right;
      padding-right: 20px;
      .text-h5 {
        margin-top: 0.25em;
      }
    }
    .timeline-month {
      padding-left: 20px;
      border-left: solid transparentize($color: $primary, $amount: 0.5) 3px;
      padding-bottom: 3em;
      &.last-month {
        margin-left: 3px;
        border-width: 0px;
      }
      .month-name {
        position: relative;
        left: 0px;
        top: -16px;
        margin-bottom: -1em;
        ::before {
          content: "";
          position: relative;
          display: inline-block;
          left: -32px;
          top: 2px;
          width: 20px;
          height: 20px;
          border-radius: 20px;
          margin-right: -20px;
          background-color: $primary;
        }
      }
      .content {
        text-align: justify;
        margin-top: 0.5em;
        font-weight: 300;
        .title {
          font-weight: 400;
          margin-bottom: -0.2em;
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
<script>
import experience from "../data/experience";
import SectionBlock from "components/SectionBlock.vue";

export default {
  components: {
    SectionBlock,
  },
  data: () => ({
    termynal: null,
  }),
  mounted() {
    this.$skrollr.refresh();
  },
  computed: {
    timeline() {
      const timeline = [];
      experience.forEach((exp) => {
        const year =
          timeline.find((y) => y.name == exp.year) ||
          timeline[
            timeline.push({
              name: exp.year,
              months: [],
            }) - 1
          ];
        year.months.push({
          name: exp.month,
          title: exp.title,
          role: exp.role,
          duration: exp.duration,
          content: exp.description,
        });
      });

      return timeline;
    },
  },
  beforeUnmount() {},
  methods: {
    calculateClockDotStartKeyframe(angleI) {
      return `data-${-20 + Math.round((angleI * 100) / (12 * 3))}p-bottom-top`;
    },
  },
};
</script>
