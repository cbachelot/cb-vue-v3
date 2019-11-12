<template>
<div id="Headercomp">
  <div class="cb-logo">
    <img alt="Clark Bachelot Logo" src="../assets/images/cb.svg"/>
  </div>
  <div class="social-logos">
    <a href="https://www.linkedin.com/in/clarkbachelot/" target="_blank"><img alt="Linkedin Logo" src="../assets/images/linkedin.svg"/></a>
    <a href="https://twitter.com/clarkbachelot" target="_blank"><img alt="Twitter Logo" src="../assets/images/twitter.svg"/></a>
  </div>
</div>
</template>
<script>
export default {
  name: 'Headercomp',
  data() {
    return {
      title: 'Headercomp',
    };
  },
};
</script>
<style lang="scss">
@import "../assets/styles/variables.scss";
#Headercomp{
  text-align: left;
  padding: 2%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  -webkit-box-shadow: 0 3px 4px 0 rgba(49,54,53,.3);
box-shadow: 0 3px 4px 0 rgba(49,54,53,.3);
}
.cb-logo img{
  width: 50%;
}
.social-logos{
  text-align: right;
}
.social-logos img{
  height: 20px;
  widows: auto;
}
.social-logos img:last-child{
  margin-left:2%;
}

</style>
