import { shallowMount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'


let wrapper

beforeEach(() => {
  wrapper = shallowMount(NuxtLogo);
})

afterEach(() => {
  wrapper.destroy();
})

describe('NuxtLogo', () => {
  test('Vueのインスタンスが起動すること', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  it("svgタグが存在していること", () => {
    expect(wrapper.find('sve').exists()).toBeTruthy()
  });
})
