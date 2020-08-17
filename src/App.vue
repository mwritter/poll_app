<template>
  <div id="app">
    <div id="top-bar">
      <router-link to="/">
        Poll
        <strong>App</strong>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  display: grid;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

main {
  display: grid;
  max-width: 1000px;
  width: 70vw;
  gap: 5rem;
  margin-top: 5rem;
}

#top-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  height: 5rem;
  border-radius: 0 0 20px 20px;
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: #2c3e50;
  cursor: pointer;
}
</style>
