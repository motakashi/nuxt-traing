// /* Vuexのクラシックモードによるコーディング
// import Vuex from 'vuex'

// const createStore = () => {
//   return new Vuex.Store({
//     // 1, 初期値
//     state: function(){
//       return {
//         message: "Hello Vuex"
//       }
//     },
//     // 2, ミューテーションによるデータの書き換え
//     mutations: {
//       updateMessage: function(state, paylaodValue){
//         state.message = "Update Message!" + paylaodValue
//       }
//     },
//     // 3, アクションからミューテーションの呼び出し
//     actions: {
//       updateMessageAction(context, paylaodValue){
//         context.commit('updateMessage', paylaodValue)
//       }
//     }
//   })
// }

// export default createStore

import { vuexfireMutations } from 'vuexfire'

export const mutations = {
  ...vuexfireMutations
}