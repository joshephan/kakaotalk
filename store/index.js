export const state = () => ({
  backgroundColor: "#c1d0db",
  roomTitleColor: "#000000",
  roomTitle: "방이름",
  roomParticipantsCount: 1,
  messages: [],
  characters: [
    {
      me: true,
      avatar: '/user.svg',
      nickname: '작성자(본인)'
    }
  ]
});

export const mutations = {
  SET_STATE(state, { key, value }) {
    state[key] = value;
  },
  ADD_CHARACTER(state, character) {
    state.characters.push(character);
  },
  REMOVE_CHARACTER(state, idx) {
    const index = state.characters.findIndex(v => v.idx === idx);
    if (index >= 0) {
      state.characters = state.characters.splice(index, 1);
    }
  },
  ADD_MESSAGE(state, message) {
    state.messages.push(message);
  },
  REMOVE_MESSAGE(state, idx) {
    const index = state.messages.findIndex(v => v.idx === idx);
    if (index >= 0) {
      state.messages = state.messages.splice(index, 1);
    }
  }
};
