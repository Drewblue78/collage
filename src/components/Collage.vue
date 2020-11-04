<template>
  <div>
    <h1>Collage</h1>

    <div id="singleUploadSection">
      Click "Choose File" then drag images to your canvas!
      <input id="singleUpload" type="file" onchange="setBackground()" />
    </div>
    <a href="#" class="button" @click="saveImage"
      >Save your collage image as {{ capitalizedTitle }}</a
    >
    <input v-model="title" />
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "image.png",
  }),
  computed: {
    capitalizedTitle() {
      return this.title.toUpperCase();
    },
  },
  methods: {
    saveImage(event) {
      var a = document.createElement("a");

      var img = this.$root.phaser.canvas.toDataURL("image/png");
      a.href = img.replace("image/png", "image/octet-stream");
      a.download = this.title;
      document.body.appendChild(a);
      a.click();
      a.remove();
    },
  },
  watch: {},
};
</script>

<style scoped>
div {
  text-align: center;
}
h1 {
  text-align: center;
}
</style>
