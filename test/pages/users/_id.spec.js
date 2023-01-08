import { mount } from '@vue/test-utils'
import id from '@/pages/users/_id.vue'

describe('_id', () => {

  it('h1タグにmessageの文字列が表示されていること', async () => {
    //期待値
    const expectMessage = "users/_id.vueを表示中";

    const $route = {
      params: {
        id: '1'
      }
    }
    const wrapper = await mount(id, {
      mocks: {
        $route
      }
    })
    expect(wrapper.find('h1').element.textContent).toBe(expectMessage);
  })
})
