<template>
<div class="NavigationComp">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
</div>
</template>
<script>
export default {
  name: 'NavigationComp',
  data() {
    return {
      title: 'NavigationComp',
    };
  },
};
</script>
