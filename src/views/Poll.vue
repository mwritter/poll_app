<template>
  <main>
    <ListVotePoll v-if="poll.type == 'ListVotePoll'" :poll="poll" />
    <YesNoPoll v-else-if="poll.type == 'YesNoPoll'" :poll="poll" />
    <h1 v-else>No Poll Found</h1>
  </main>
</template>

<script>
import db from "../db";
import ListVotePoll from "../components/ListVotePoll";
import YesNoPoll from "../components/YesNoPoll";
import ListVotePollModel from "../Models/ListVotePollModel";
import YesNoPollModel from "../Models/YesNoPollModel";
export default {
  components: {
    ListVotePoll,
    YesNoPoll,
  },
  props: {
    poll_id: String,
  },
  name: "Poll",
  data: () => {
    return {
      poll: {},
    };
  },
  mounted() {
    let poll = db.getPoll(this.poll_id);
    if (poll) {
      this.createPollModel(poll);
    }
  },
  methods: {
    createPollModel(poll) {
      switch (poll.type) {
        case "ListVotePoll":
          this.poll = new ListVotePollModel(poll);
          break;
        case "YesNoPoll":
          this.poll = new YesNoPollModel(poll);
      }
    },
  },
};
</script>

<style>
/* Large Screen */
@media only screen and (min-width: 700px) {
  main {
    justify-self: center;
  }
}

@media only screen and (max-width: 700px) {
  main {
    justify-self: normal;
  }
}
</style>