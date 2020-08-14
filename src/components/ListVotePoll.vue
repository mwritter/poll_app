<template>
  <div class="ListVotePoll">
    <div id="poll-id-div">jser45681asdflkheiausd5445</div>
    <div id="poll-form">
      <p id="question">{{poll.title}}</p>
      <div v-for="(item, index) in poll.items" :key="index" class="poll-item">
        <p class="text">{{item.text}}</p>
        <span class="vote-controls">
          <span class="agree">{{item.agree.text}}</span>
          <span class="disagree">{{item.disagree.text}}</span>
        </span>
        <span class="line-break"></span>

        <div class="user-votes">
          <div v-for="(user, idx) in item.agree.users" :key="`agree-${idx}`" class="user-list">
            <span class="user-agree">{{user}}</span>
          </div>
          <div
            v-for="(user, idx) in item.disagree.users"
            :key="`disagree-${idx}`"
            class="user-list"
          >
            <span class="user-disagree">{{user}}</span>
          </div>
        </div>
      </div>
    </div>
    <div id="user-input-div">
      <input id="user-input" type="text" placeholder="your input" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ListVotePoll",
  props: {
    poll: {
      type: Object,
    },
  },
};
</script>

<style>
.ListVotePoll {
  display: grid;
  justify-self: center;
  max-width: 1000px;
  width: 70vw;
  gap: 5rem;
  margin-top: 5rem;
}

#poll-id-div {
  max-width: 1000px;
  color: rgba(159, 159, 159, 0.5);
  font-size: min(max(16px, 5vw), 50px);
}

#question {
  margin-bottom: 2rem;
}

#poll-form {
  border: 1px solid black;
  border-radius: 20px;
  padding: 1rem;
}

.poll-item {
  display: grid;
  row-gap: 1rem;
  margin: 1rem;
}

.poll-item .text {
  justify-self: start;
}

.vote-controls {
  display: flex;
  justify-content: flex-end;
  opacity: 0.5;
}

.user-votes {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, 3rem);
  grid-column: 1/3;
  font-size: 0.7em;
}

.agree {
  margin-right: 1rem;
  color: rgb(97, 187, 97);
}

.user-list span {
  padding: 0.3rem;
  border-radius: 1rem;
}

.user-agree {
  background: rgba(97, 187, 97, 0.442);
}

.user-agree::before {
  content: "@";
}

.disagree {
  color: lightcoral;
}
.user-disagree {
  background: lightcoral;
}
.user-disagree::before {
  content: "@";
}

.line-break {
  border-bottom: 1px solid black;
  grid-column: 1/3;
}

#user-input-div {
  border-bottom: 1px solid black;
  height: 3rem;
}

#user-input {
  border: none;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.3em;
}

#user-input:focus {
  outline: none;
}
</style>