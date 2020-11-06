<template>
  <div>
    <h1>Collage</h1>

    <div id="singleUploadSection">
      <hr />
      Click "Choose File" then drag images to your canvas!
      <br />
      <input id="singleUpload" type="file" onchange="setBackground()" />
    </div>
    <br />
    <a href="#" class="button" @click="saveImage"
      >Save your collage image as

      {{ capitalizedTitle }}</a
    >
    <input v-model="title" />
    <hr />
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
      this.$root.phaser.renderer.snapshot((img) => {
        var a = document.createElement("a");

        a.href = img.replace("image/png", "image/octet-stream");
        a.download = this.title;
        document.body.appendChild(a);

        a.click();
        a.remove();
      });
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
