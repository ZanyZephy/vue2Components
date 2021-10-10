<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  mounted() {
    // navigator.clipboard
    //   .readText()
    //   .then(
    //     (clipText) => (document.querySelector(".editor").innerText += clipText)
    //   );
  },
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
</style>
