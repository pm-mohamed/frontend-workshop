import { action } from '@storybook/addon-actions'
import Buttons from '../../components/buttons.vue'

import 'semantic-ui-css/semantic.min.css'

export default {
  title: 'Buttons',
  component: Buttons,
  argTypes: {
    name: { control: 'text' },
    className: {
      control: { type: 'select', options: ['primary', 'secondary', 'positive', 'negative']}
    },
    isLoading: { control: 'boolean' },
    useDiv: { control: 'boolean'}
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Buttons },
  template: `<Buttons :name="name" :className="className" :useDiv="useDiv" :isLoading="isLoading" @click="action" />`,
  methods: {
    action: action('button-clicked')
  }
});

export const Normal = Template.bind({});
Normal.args = {
  name: 'Primary Button',
  className: 'primary',
  useDiv: false,
  isLoading: false,
};
