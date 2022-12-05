<template>
  <Page>
    <Apple />
    <Cherry />
  </Page>
</template>

<script>
import Vue from 'vue';
import LazyHydrate from 'vue-lazy-hydration';

export default Vue.extend({
  components: {
    Page: () =>import(
            /* webpackChunkName: "Page" */"../components/Page.vue"),
    Apple: () =>import(
            /* webpackChunkName: "Apple" */"../components/Apple.vue"),
    Cherry: () =>import(
            /* webpackChunkName: "Cherry" */"../components/Cherry.vue")
  }
})
</script>
