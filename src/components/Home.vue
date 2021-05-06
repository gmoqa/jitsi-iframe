<template>
  <div class="container">
    <div class="columns">
        <div class="column is-8 is-offset-2 mt-6 has-text-centered">
          <h1 class="title">#jitsi-iframe</h1>
          <h2 class="subtitle">Clean jitsi IFrame configuration</h2>
          <div class="buttons mt-5 is-centered">
            <b-button class="has-text-weight-bold" @click="randomRoom()" type="is-warning" size="is-medium">
              GENERATE RANDOM ROOM
            </b-button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import uniqid from 'uniqid'
export default {
  methods: {
    randomRoom() {
      const room = uniqid()
      this.$router.push({ name: 'Meet', params: { room } })
    },
  },
}
</script>