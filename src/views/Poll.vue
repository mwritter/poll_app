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
    this.poll = db.getPoll(this.poll_id);
    this.createPollModel(this.poll.type);
  },
  methods: {
    createPollModel(type) {
      switch (type) {
        case "ListVotePoll":
          this.poll = new ListVotePollModel(this.poll);
          break;
        case "YesNoPoll":
          this.poll = new YesNoPollModel(this.poll);
      }
    },
  },
};
</script>

<style>
</style>