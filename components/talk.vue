<template>
  <div class="talk-box" :style="{background: backgroundColor}">
    <div class="header">
      <div class="cell">
        <ChevronLeftIcon class="icon prev" :style="{color: roomTitleColor}" />
      </div>
      <div class="cell title" :style="{color: roomTitleColor}">
        <span class="name">{{roomTitle}}</span>
        <span class="count">{{roomParticipantsCount}}</span>
      </div>
      <div class="cell right">
        <SearchIcon class="icon search" :style="{color: roomTitleColor}" />
        <MenuIcon class="icon menu" :style="{color: roomTitleColor}" />
      </div>
    </div>
    <ul class="body">
      <Message v-for="(i, n) in messages" :key="n" :item="i" :color="roomTitleColor" />
    </ul>
  </div>
</template>
<script>
import { SearchIcon, ChevronLeftIcon, MenuIcon } from "vue-feather-icons";
import Message from "@/components/message.vue";

export default {
  components: {
    Message,
    SearchIcon,
    ChevronLeftIcon,
    MenuIcon
  },
  computed: {
    backgroundColor() {
      return this.$store.state.backgroundColor;
    },
    roomTitleColor() {
      return this.$store.state.roomTitleColor;
    },
    roomTitle() {
      return this.$store.state.roomTitle;
    },
    characters() {
      return this.$store.state.characters;
    },
    roomParticipantsCount() {
      return this.$store.state.roomParticipantsCount;
    },
    messages() {
      return this.$store.state.messages;
    }
  }
};
</script>
<style lang="scss" scoped>
.talk-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 830px;
  background: #c1d0db;
  margin-bottom: 20px;
  .header {
    width: 100%;
    height: 42px;
    padding: 12px;
    display: flex;
    justify-content: space-evenly;
    .cell {
      width: 100%;
      &.title {
        text-align: center;
      }
      &.right {
        text-align: right;
      }
    }
    .title {
      font-weight: bold;
      .name {
        opacity: 0.9;
      }
      .count {
        font-size: 15px;
        opacity: 0.6;
      }
    }
    .icon {
      position: relative;
      opacity: 0.8;
    }
    .prev {
      top: -2px;
      left: -3px;
    }
    .search {
      transform: scale(0.8);
      right: 3px;
      top: -2px;
    }
    .menu {
      transform: scale(0.8);
      right: -3px;
      top: -2px;
    }
  }
  .body {
    padding: 9px 20px;
  }
}
.btn {
  text-align: center;
  width: 100%;
}
</style>