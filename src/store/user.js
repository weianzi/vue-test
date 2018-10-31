import { request } from '@/utils/axios'

export default {
  state: {
    name: ''
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    }
  },
  actions: {
    //��ȡ�û���Ϣ
    async getUserInfo({ commit, state }) {
      try {
        const userObj = await request({
          method: 'POST',
          url: '/login/login'
          //data: {},
        })
        console.log(state)
        commit('SET_NAME', userObj.name)
      } catch (err) {
        console.log(err)
      }
    }
  }
}