<template>
  <div class="ListVotePoll">
    <div id="poll-id-div">{{poll.id}}</div>
    <div id="poll-form">
      <p id="question">{{poll.title}}</p>
      <div v-for="(item, index) in items" :key="index" class="poll-item">
        <p class="text">{{item.text}}</p>
        <span class="vote-controls">
          <span @click="addAgree(item.text)" class="agree">{{item.agree.text}}</span>
          <span @click="addDisagree(item.text)" class="disagree">{{item.disagree.text}}</span>
        </span>
        <span class="line-break"></span>

        <div class="user-votes">
          <div
            v-for="(user, idx) in poll.getAgree(item.text).users"
            :key="`agree-${idx}`"
            class="user-list"
          >
            <span class="user-agree">{{user}}</span>
          </div>
          <div
            v-for="(user, idx) in poll.getDisagree(item.text).users"
            :key="`disagree-${idx}`"
            class="user-list"
          >
            <span class="user-disagree">{{user}}</span>
          </div>
        </div>
      </div>
    </div>
    <div
      id="user-input-form"
      title="👾 if you CTRL + click this input Ill let you set the agree/disagree text"
    >
      <div id="user-input-div">
        <input
          @click.ctrl="addExtraControls = !addExtraControls"
          @keyup.enter="onSubmit"
          autocomplete="off"
          v-model="user_input"
          id="user-input"
          type="text"
          placeholder="add your input and press enter"
        />
      </div>
      <div v-if="addExtraControls" class="extra-controls">
        <input
          class="agree-text-input"
          autocomplete="off"
          name="agree"
          v-model="agreeText"
          type="text"
          placeholder="agree"
        />
        <input
          class="disagree-text-input"
          autocomplete="off"
          name="disagree"
          v-model="disagreeText"
          type="text"
          placeholder="disagree"
        />
      </div>
    </div>
    <div v-if="errorMessage" id="errorMessage">{{errorMessage}}</div>
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
  data: () => {
    return {
      user_input: "",
      errorMessage: null,
      addExtraControls: false,
      items: [],
      agreeText: "yes",
      disagreeText: "no",
      user: {
        name: "mwritter",
      },
    };
  },
  mounted() {
    this.items = this.poll.items;
  },
  methods: {
    onVerifyInput() {
      let input = this.user_input;
      if (
        !input.trim().length ||
        this.items.find((item) => item.text == input)
      ) {
        this.errorMessage =
          "You have to enter something, and it should be unique";
        return false;
      } else {
        this.errorMessage = null;
      }
      this.agreeText = this.agreeText.trim();
      this.disagreeText = this.disagreeText.trim();
      if (!this.agreeText.length && !this.disagreeText.length) {
        this.agreeText = "yes";
        this.disagreeText = "no";
      }
      if (this.agreeText.length > 10) {
        this.agreeText = this.agreeText.substring(0, 10);
      }
      if (this.disagreeText.length > 10) {
        this.disagreeText = this.disagreeText.substring(0, 10);
      }
      this.addExtraControls = false;
      return true;
    },
    onSubmit() {
      if (!this.onVerifyInput()) {
        return;
      }
      this.poll.addUserInput({
        text: this.user_input,
        agree: {
          text: this.agreeText,
          users: [],
        },
        disagree: {
          text: this.disagreeText,
          users: [],
        },
      });
      this.user_input = "";
    },
    addAgree(text) {
      this.poll.agree({
        text,
        user: this.user.name,
      });
    },
    addDisagree(text) {
      this.poll.disagree({
        text,
        user: this.user.name,
      });
    },
  },
};
</script>

<style scoped>
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
}

.user-votes {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, 3rem);
  grid-column: 1/3;
  font-size: 0.7em;
}

.agree {
  cursor: pointer;
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
  cursor: pointer;
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

#user-input-form {
  display: grid;
  gap: 1rem;
}

#user-input-div {
  border-bottom: 1px solid black;
  height: 3rem;
}

#user-input {
  border: none;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.3em;
}

#user-input:focus {
  outline: none;
}
#errorMessage {
  color: lightcoral;
}

.agree-text-input {
  border: none;
  text-align: center;
  color: rgb(97, 187, 97);
}
.disagree-text-input {
  border: none;
  text-align: center;
  color: lightcoral;
}
.agree-text-input:focus {
  outline: none;
}
.disagree-text-input:focus {
  outline: none;
}
/* Small Screen */
@media only screen and (max-width: 700px) {
  .ListVotePoll {
    margin-top: 0;
  }

  #poll-form {
    width: 100vw;
  }
}
</style>