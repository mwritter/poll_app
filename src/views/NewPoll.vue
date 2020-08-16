<template>
  <main>
    <div id="new-poll-form">
      <p>start a new poll</p>
      <div id="poll-title-div">
        <input v-model="title" type="text" placeholder="question..." />
      </div>
      <div class="poll-type">
        <p>pick a poll type</p>
        <select v-model="type" name="type" id>
          <option
            value="list-vote-poll"
            title="List style where participants add a short input to the question and vote on each input"
          >Short Input</option>
          <option value="yes-no-poll" title="umm yeah.. this is a yes or no poll">Yes/No</option>
        </select>
      </div>
      <p @click="onSubmit" class="submit">Submit</p>
    </div>
    <div v-if="errorMessage" id="errorMessage">{{errorMessage}}</div>
  </main>
</template>

<script>
export default {
  name: "NewPoll",
  data: () => {
    return {
      title: "",
      type: "list-vote-poll",
      errorMessage: null,
    };
  },
  methods: {
    onVerifyForm() {
      if (!this.title.trim().length || !this.type.length) {
        this.errorMessage =
          "Both those fields up there need to have a value. The poll type is pretty much set so please add some text so the other people know what the poll is for.";
      } else {
        this.errorMessage = null;
      }
    },
    onSubmit() {
      this.onVerifyForm();
    },
  },
};
</script>

<style scoped>
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
#poll-title-div {
  border-bottom: 1px solid black;
  height: 3rem;
}
input {
  border: none;
  width: 100%;
  height: 100%;
  text-align: center;
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
  /* display: none; */
  color: lightcoral;
}
</style>