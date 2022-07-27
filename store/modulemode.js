//  モジュールモードの条件 
//  1, index.jsがストアオブジェクトをexportしない
//  2, index.jsがstoreフォルダ配下に存在しない
// */

export const state = () => ({
  message: "Hello Vuex モジュールモード"
})

export const mutations = {
  updateMessage: function(state, paylaodValue){
    state.message = "Update Message!" + paylaodValue
  }
}

export const actions = {
  updateMessageAction(context, paylaodValue){
    context.commit('updateMessage', paylaodValue)
  }
}