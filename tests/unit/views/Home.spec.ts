import { shallowMount } from '@vue/test-utils';
import Home from '../../../src/views/Home.vue';

describe('Home Page', () => {
  test('Renders Home Page', () => {
    // render the component
    const wrapper = shallowMount(Home);

    expect(wrapper.text()).toContain('Home');
  });
});
