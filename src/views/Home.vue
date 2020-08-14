<template>
  <main id="home">
    <div id="poll-id-input-div">
      <input @keyup.enter="getPoll" id="poll-id-input" type="text" placeholder="what's the poll id" />
    </div>
    <div id="start-new-poll">start a new poll</div>
  </main>
</template>

<script>
import db from "../db";

export default {
  name: "Home",
  data: () => {
    return {};
  },
  methods: {
    getPoll(evt) {
      let poll = db.getPoll(evt.target.value);
      if (poll) {
        this.$router.push({ name: "Poll", params: { poll } });
      }
    },
  },
};
</script>

<style scoped>
#poll-id-input-div {
  border-bottom: 1px solid black;
  height: 3rem;
}

#poll-id-input {
  border: none;
  color: rgb(159, 159, 159);
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.3em;
}

#poll-id-input:focus {
  outline: none;
}

#start-new-poll {
  display: grid;
  justify-self: center;
  padding: 1rem;
  place-content: center;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 1.3em;
  cursor: pointer;
}
</style>
