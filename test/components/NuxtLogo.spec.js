import { shallowMount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'

describe('NuxtLogo', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(NuxtLogo);
  })
  
  afterEach(() => {
    wrapper.destroy();
  })

  it('Vueのインスタンスが起動すること', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  it("svgタグが存在していること", () => {
    expect(wrapper.find('svg').exists()).toBeTruthy()
  });
})
