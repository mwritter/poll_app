<template>
  <main>
    <form id="new-poll-form">
      <p>start a new poll</p>
      <div class="poll-title-div">
        <span class="label">Question</span>
        <div id="poll-title-input-div">
          <input v-model="title" type="text" required />
          <span class="btn enter">Enter</span>
        </div>
      </div>
      <div class="poll-type">
        <p>pick a poll type</p>
        <select v-model="type" name="type" required>
          <option
            value="ListVotePoll"
            title="List style where participants add a short input to the question and vote on each input"
          >Short Input</option>
          <option value="YesNoPoll" title="umm yeah.. this is a yes or no poll">Yes/No</option>
        </select>
      </div>
      <button type="submit" @click.prevent="onSubmit" class="submit">Submit</button>
    </form>
    <div v-if="errorMessage" id="errorMessage">{{errorMessage}}</div>
  </main>
</template>

<script>
import db from "../db";

export default {
  name: "NewPoll",
  data: () => {
    return {
      title: "",
      type: "ListVotePoll",
      errorMessage: null,
    };
  },
  methods: {
    onVerifyForm() {
      if (!this.title.trim().length || !this.type.length) {
        this.errorMessage = "Both those fields up there need to have a value.";
      } else {
        this.errorMessage = null;
      }
      return !this.errorMessage;
    },
    onSubmit() {
      if (!this.onVerifyForm()) {
        return;
      }
      db.addPoll(this);
    },
  },
};
</script>

<style scoped>
main {
  justify-self: center;
}
#new-poll-form {
  display: grid;
  justify-self: center;
  padding: 2rem 5rem;
  max-width: 1000px;
  width: 70vw;
  gap: 5rem;
  margin-top: 5rem;
  border: 1px solid black;
  border-radius: 20px;
}

.poll-title-div {
  display: flex;
  margin: 0 1rem;
  flex-direction: column;
  color: rgb(159, 159, 159);
}

.label {
  align-self: start;
}

#poll-title-input-div {
  display: grid;
  grid-template-columns: 1fr auto;
  border-bottom: 1px solid black;
}
input {
  border: none;
  width: 100%;
  height: 100%;
  font-size: 1.3em;
}

input:focus {
  outline: none;
}

select {
  margin-top: 1rem;
  width: 100%;
  padding: 10px;
}

.submit {
  cursor: pointer;
}

#errorMessage {
  color: lightcoral;
}

button {
  background: none;
  border: none;
  font-size: inherit;
  color: inherit;
}

button:focus {
  outline: none;
}
.btn {
  padding: 1rem;
  place-content: center;
  border-radius: 20px;
  font-size: 1.3em;
  cursor: pointer;
}

@media only screen and (max-width: 700px) {
  main {
    justify-self: normal;
  }
  #new-poll-form {
    width: 100vw;
    margin-top: 0;
  }
}
</style>