<template>
  <div id="app">
    <Headercomp></Headercomp>
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
import Headercomp from './components/Headercomp.vue';

export default {
  name: 'App',
  data() {
    return {
      prevHeight: 0,
    };
  },
  components: {
    NavigationComp,
    Headercomp,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/variables.scss";
body{
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $cb-black;
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
