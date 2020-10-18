<template>
  <li :class="item.me ? 'me' : ''">
    <img v-if="!item.me" :src="item.avatar" alt="프로필 이미지" class="avatar" />
    <div class="content">
      <div v-if="!item.me" class="nickname" :style="{color: color}">{{item.nickname}}</div>
      <div class="msg">
        <div class="text" v-html="item.txt"></div>
        <div class="meta">
          <span v-if="item.unread > 0" class="unread">{{item.unread}}</span>
          <span class="time" :style="{color: color}">{{item.time}}</span>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    },
    item: {
      type: Object,
      default: {
        me: false,
        avatar: null,
        nickname: null,
        txt: null,
        unread: null,
        time: null
      }
    }
  }
};
</script>
<style lang="scss" scoped>
li {
  list-style: none;
  display: flex;
  margin-bottom: 15px;
  max-width: 95%;
  .avatar {
    width: 36px;
    height: 36px;
    margin-right: 7px;
    border-radius: 18px;
    padding: 5px;
    background: #ffffff;
  }
  .content {
    max-width: 85%;
    .nickname {
      margin: 1px 0 5px;
      opacity: 0.8;
    }
    .text {
      word-break: break-all;
      background: white;
      line-height: 18px;
      letter-spacing: -0.5px;
      border-radius: 10px;
      padding: 10px;
      margin-right: 5px;
    }
  }
  .msg {
    display: flex;
  }
  .meta {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-width: 60px;
    .unread {
      color: #fae44c;
      font-size: 12px;
    }
    .time {
      opacity: 0.5;
      font-size: 12px;
    }
  }
  &.me {
    flex-direction: row-reverse;
    .content {
      margin-right: -20px;
      .text {
        background: #f9e50a;
      }
    }
    .msg {
      flex-direction: row-reverse;
    }
    .meta {
      align-items: flex-end;
      margin-right: 5px;
    }
  }
}
</style>