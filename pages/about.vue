<template>
  <Page>
    <button @click="show">Show</button>
    <Cherry />
    <Blue />
    <Apple />
    <Apple />
    <Apple />
    <Melon v-if="isDisplaying" />
    <LazyHydrate never>
      <Grey />
    </LazyHydrate>
  </Page>
</template>

<script>
import Vue from 'vue';
import LazyHydrate from 'vue-lazy-hydration';

export default Vue.extend({
  name: 'About',
  components: {
    Page: () =>import(
            /* webpackChunkName: "Page" */"../components/Page.vue"),
    Apple: () => import(
            /* webpackChunkName: "Apple" */"../components/Apple.vue"),
    Cherry: () =>import(
            /* webpackChunkName: "Cherry" */"../components/Cherry.vue"),
    Grey: () =>import(
            /* webpackChunkName: "Grey" */"../components/Grey.vue"),
    Blue: () =>import(
            /* webpackChunkName: "Blue" */"../components/Blue.vue"),
    Melon: () =>import(
            /* webpackChunkName: "Melon" */"../components/Melon.vue"),
    LazyHydrate
  },
  asyncData() {
    return {
      component: Math.random() > 0.5 ?  "Melon" : "Grey"
    }
  },  
  data() {
    return {
      isDisplaying: false,
      isClient: process.client,
    }
  },
  methods: {
    show() {
      this.isDisplaying = !this.isDisplaying
      console.log('clicked')
    }
  }
})
</script>
