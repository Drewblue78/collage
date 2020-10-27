<template>
  <div>
    <h1>Collage</h1>

    <div class="row">
      <div class="column">
        <div id="leftSide">
          <div id="dropZone">
            <P>To load pictures click <u>here</u>!</P>
          </div>

          <div id=" images_preview"></div>
        </div>
      </div>
      <div class="column">
        <div id="buttonsArea">
          <select id="modelSelect" onchange="modelSelect()">
            <option value="">Select the pattern</option>
            <option value="model1">Model 1</option>
            <option value="model2">Model 2</option>
            <option value="model3">Model 3</option>
          </select>

          <div id="singleUploadSection">
            Click "Browse" to select a background image for your canvas!
            <input id="singleUpload" type="file" onchange="setBackground()" />
          </div>
          <a href="#" class="button" id="btn-download"
            >Save your collage image</a
          >
        </div>
      </div>

      <div id="photo">
        <canvas id="background" width="600" height="600"></canvas>
      </div>

      <div id="images"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
