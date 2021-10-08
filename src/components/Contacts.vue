<template>
  <SectionBlock
    refs="section"
    class="contacts"
    title="it's easy to find me"
    subtitle="No need for a bat sinal or telegraph. You can use my e-mail, social networks or this beautiful form below!"
    background="white"
    color="primary"
    :dense="false"
  >
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="message-anim">
        <MessageAnim />
      </div>
      <div class="form">
        <div class="text-h4 pb-5">Beautiful Contact Form</div>
        <q-form
          class="q-gutter-md"
          action="https://airform.io/contact@lucasportela.dev"
          method="post"
        >
          <input
            type="hidden"
            name="message"
            :value="message + ' (from ' + email + ')'"
          />
          <q-input
            filled
            name="name"
            label="Your Name"
            hint="Name and surname, like in every form on the web haha"
            v-model="name"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Sorry, but I need you to inform your name in order to submit the message.',
            ]"
          />

          <q-input
            filled
            label="Your E-mail"
            hint="So I can reply your message with all my attention"
            v-model="email"
            lazy-rules
            :rules="[
              (val) =>
                (val &&
                  (val.length > 0 ||
                    'Sorry, but I need you to inform your e-mail, so I can reply ASAP.') &&
                  val.match(emailRgx)) ||
                'Invalid e-mail!',
            ]"
          />

          <q-input
            filled
            label="The Message"
            hint="The great meaning of the hole life of this beautiful and mortal form"
            v-model="message"
            lazy-rules
            type="textarea"
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'In order to send the message, we need the message lol <3',
            ]"
          />

          <div>
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
              @click="reset()"
            />
          </div>
        </q-form>
      </div>
    </div>
    <div
      class="
        contact-links
        grid grid-cols-5
        justify-items-center
        w-full
        my-10
        text-2xl
        md:text-6xl
        lg:text-7xl
      "
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
      <a href="https://wa.me/+5561982047820" target="_blank">
        <div class="mdi mdi-whatsapp"></div>
      </a>
      <a href="mailto:contact@lucasportela.dev" target="_blank">
        <div class="mdi mdi-email-outline"></div>
      </a>
    </div>
  </SectionBlock>
</template>
<style lang="scss">
.contacts {
  .contact-links {
    a {
      text-align: center;
    }
  }
  .message-anim {
    text-align: center;
    svg {
      display: inline-block;
      width: 90%;
    }
  }
}
</style>
<script>
import $ from "jquery";
import SectionBlock from "components/SectionBlock.vue";
import MessageAnim from "components/MessageAnim.vue";
export default {
  components: {
    SectionBlock,
    MessageAnim,
  },
  data: () => ({
    name: "",
    email: "",
    message: "",
    emailRgx:
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  }),
  mounted() {},
  methods: {
    reset() {
      this.name = this.email = this.message = "";
    },
  },
};
</script>
