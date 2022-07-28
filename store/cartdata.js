export const state = () => ({
  count: 0
})

export const mutations = {
  updateCount: function(state){
    state.count = state.count + 1
  },
  resetCount: function(state){
    state.count = 0
  }
}

export const actions = {
  updateCountAction(context){
    context.commit('updateCount')
  },
  resetCountAction(context){
    context.commit('resetCount')
  }
}