import Vue from 'vue'
import Vuex from 'vuex'
import json from '../db.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data: json.data || [],
      total:{
          all:0
      }
  },
  getters: { 
    record: (state) => state.data,
    total: (state) => state.total
  },
  mutations: {
    fetch(state, { res }) {
        state.data = res.data
    },
    insert(state,{ payload }){
        state.data.push(payload)
    },
    sum(state) {
        state.total.all=0
        state.data.forEach((rec) => {
            if (rec.type == 'Income') {
              state.total.all = (state.total.all*1)+(rec.amount*1)
              //state.total.all += rec.amount
          }
            else {
                state.total.all = state.total.all*1,
              state.total.all -= rec.amount
          }
      })
    }

  },
  actions: {
    insertData({ commit }, payload) {
        commit("insert", { payload })
    },

    sumTotal({ commit }) {  
        let res = this.state.data
        commit("sum", { res })
      }
  },
  modules: {
  }
})
