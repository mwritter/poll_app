<template>
  <main id="home">
    <div class="poll-id-div" title="Hey, while in development/testing id: 222 is the listpoll and any random id will be the yesno poll">
      <span class="label">Poll ID</span>
      <div id="poll-id-input-div">
        <input
          @keyup.enter="showPoll"
          autocomplete="off"
          id="poll-id-input"
          type="text"
          v-model="poll_id"
        />
        <span class="btn enter">Enter</span>
      </div>
    </div>
    <router-link to="/new_poll">
      <div class="btn" id="start-new-poll">start a new poll</div>
    </router-link>
  </main>
</template>

<script>
export default {
  name: "Home",
  data: () => {
    return {
      poll_id: "",
    };
  },
  methods: {
    showPoll(evt) {
      if (this.poll_id.trim().length) {
        this.$router.push({ name: "Poll", params: { poll_id: this.poll_id } });
      }
    },
  },
};
</script>

<style scoped>
main {
  justify-self: center;
  align-content: center;
  height: 70vh;
}

.poll-id-div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: rgb(159, 159, 159);
  
}

#poll-id-input-div {
  display: grid;
  grid-template-columns: 1fr auto;
  border-bottom: 1px solid black;
}

#poll-id-input {
  border: none;
  width: 100%;
  height: 100%;
  font-size: 1.3em;
  color: rgb(159, 159, 159);
}

.label {
  align-self: start;
}

#poll-id-input:focus {
  outline: none;
}

#start-new-poll {
  display: grid;
  justify-self: center;
  border: 1px solid black;
}

.enter {
  cursor: pointer;
}

.btn {
  padding: 1rem;
  place-content: center;
  border-radius: 20px;
  font-size: 1.3em;
  cursor: pointer;
}
</style>
