<template>
  <div id="app">
    <NavigationComp></NavigationComp>
    <transition
        name="fade"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <router-view/>
      </transition>
  </div>
</template>

<script>
import NavigationComp from './components/NavigationComp.vue';

export default {
  name: 'App',
  data() {
    return {
      prevHeight: 0,
    };
  },
  components: {
    NavigationComp,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
