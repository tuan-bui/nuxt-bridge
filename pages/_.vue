<template>
  <Page>
    <h1 style="font-size: 5rem; font-weight: bold;">{{ title }}</h1>
    <Apple />
    <Cherry />
  </Page>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  components: {
    Page: () =>import(
            /* webpackChunkName: "Page" */"../components/Page.vue"),
    Apple: () =>import(
            /* webpackChunkName: "Apple" */"../components/Apple.vue"),
    Cherry: () =>import(
            /* webpackChunkName: "Cherry" */"../components/Cherry.vue")
  },
  async asyncData() {
    const content = await $fetch(
      `/api/hello`,
    )

    return {
      ...content
    }
  }
})
</script>
