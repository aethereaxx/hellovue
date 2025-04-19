<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script setup>

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
  margin-top: 20px; 
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
}

.cv-container {
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
}
.cv-header {
  text-align: center;
  margin-bottom: 20px;
}
.cv-photo {
  max-width: 150px;
  height: auto;
  border-radius: 50%; 
  display: block;
  margin: 0 auto 15px auto;
}
.cv-section {
  margin-bottom: 15px;
}
.cv-section h2 {
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 10px;
}
</style>