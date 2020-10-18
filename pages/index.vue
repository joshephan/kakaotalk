<template>
  <main>
    <div class="container">
      <div class="col">
        <h1></h1>
        <talk />
      </div>
      <div class="col">
        <div class="box">
          <h2>1. 방 정보 입력</h2>
          <div class="input-row">
            <h3>방 이름:</h3>
            <input type="text" v-model="inputRoomTitle" />
          </div>
          <div class="input-row">
            <h3>참여자 숫자:</h3>
            <input type="number" v-model="inputRoomCount" />
            <a @click.prevent="add('inputRoomCount')" class="num-btn">▲</a>
            <a @click.prevent="substract('inputRoomCount')" class="num-btn">▼</a>
          </div>
          <div class="input-row">
            <h3>배경 색상:</h3>
            <input type="text" v-model="inputRoomBackgroundColor" />
          </div>
          <div class="input-row">
            <h3>방 텍스트 색상:</h3>
            <a
              @click.prevent="$state.commit('SET_STATE', {key: 'roomTitleColor', value: '#ffffff'})"
              class="text-btn"
            >화이트</a>
            <a
              @click.prevent="$state.commit('SET_STATE', {key: 'roomTitleColor', value: '#000000'})"
              class="text-btn"
            >블랙</a>
          </div>
        </div>
        <div class="box">
          <h2>2. 참여자 추가</h2>
        </div>
        <div class="box">
          <h2>3. 대화 내용 입력</h2>
          <div class="text-field">
            <h3>내용:</h3>
            <textarea v-model="inputText"></textarea>
          </div>
          <div class="input-row">
            <h3>읽지 않은 사람 숫자:</h3>
            <input type="number" v-model="inputUnreadNumber" />
            <a @click.prevent="add('inputUnreadNumber')" class="num-btn">▲</a>
            <a @click.prevent="substract('inputUnreadNumber')" class="num-btn">▼</a>
          </div>
          <div class="input-row"></div>
        </div>
        <div class="box">
          <h2>4. 대화 추가</h2>
          <p>캐릭터를 선택하면 위에서 입력한 내용이 해당 참여자가 한 말로 추가됩니다.</p>
          <div class="characters">
            <div v-for="(u, i) in characters" class="user" :key="i">
              <picture>
                <img :src="u.avatar" alt="프로필 이미지" class="avatar" />
              </picture>
              <span>{{u.nickname}}</span>
            </div>
          </div>
        </div>
        <div class="box">
          <h2>5. 이미지 다운로드</h2>
          <p>메시지를 다 입력하셨다면 화면을 저장하세요.</p>
          <a @click.prevent="download" class="cta">이미지 다운로드</a>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import talk from "@/components/talk.vue";
export default {
  components: {
    talk
  },
  computed: {
    characters() {
      return this.$store.state.characters;
    }
  },
  data() {
    return {
      inputText: null,
      inputUnreadNumber: 0
    };
  },
  methodS: {
    download() {},
    add(property) {},
    substract(property) {}
  }
};
</script>
<style lang="scss" scoped>
main {
  max-width: 1200px;
  margin: auto;
}
.container {
  display: flex;
  .col {
    min-height: 100vh;
    width: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    .box {
      width: 100%;
      margin-bottom: 15px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      padding: 10px;
      .input-row {
        display: flex;
      }
      .characters {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .user {
          display: flex;
          flex-direction: column;
        }
        .avatar {
          width: 36px;
          height: 36px;
          background: #ffffff;
          border-radius: 18px;
        }
      }
    }
  }
}
</style>
