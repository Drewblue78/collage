<template>
  <div>
    <h1>Collage</h1>

    <div id="singleUploadSection">
      Select the images for your canvas!
      <input id="singleUpload" type="file" onchange="setBackground()" />
    </div>
    <a href="#" class="button" id="btn-download">Save your collage image</a>
  </div>
</template>

<script>
export default {};
</script>

<style>
div.singleUploadSection {
  text-align: center;
}
div {
  text-align: center;
}
h1 {
  text-align: center;
}
</style>
