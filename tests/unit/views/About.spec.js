import { shallowMount } from '@vue/test-utils';
import About from '../../../src/views/About.vue';

describe('About Page', () => {
  test('Renders About Page', () => {
    // render the component
    const wrapper = shallowMount(About);

    expect(wrapper.text()).toContain('About');
  });
});
