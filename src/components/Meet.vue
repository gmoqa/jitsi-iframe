<template>
  <div class="container">
    <div class="columns is-flex">
        <div class="column is-8 is-offset-2 mt-6 has-text-centered">
          <h1 class="title">
            <router-link class="title" :to="{ name: 'Home' }">#jitsi-iframe</router-link>
          </h1>
          <h2 class="subtitle">Clean jitsi IFrame configuration</h2>
          <jitsi-meet
              ref="jitsiRef"
              domain="meet.jit.si"
              :options="options"
          />
          <div class="buttons mt-5 is-centered">
            <b-button tag="a" target="_blank" href="https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe" type="is-dark">IFrame API Doc</b-button>
            <b-button tag="a" target="_blank" href="https://github.com/gmoqa/jitsi-iframe/blob/master/src/config.js" type="is-warning">Show config file</b-button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { JitsiMeet } from '@mycure/vue-jitsi-meet'
import config from '@/config'
export default {
  components: {
    JitsiMeet
  },
  created() {
    this.room = this.$route.params.room
  },
  data: () => {
    return {
      room: null,
    }
  },
  computed: {
    options () {
      return {
        roomName: this.room,
        noSSL: false,
        ...config
      };
    },
  },
}
</script>
