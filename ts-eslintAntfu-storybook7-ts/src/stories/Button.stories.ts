import { type Meta, type StoryObj } from '@storybook/vue'
import MyButton from './Button.vue'

const meta: Meta<typeof MyButton> = {
  title: 'Example/Button',
  component: MyButton,
  tags: ['autodocs'],
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MyButton },
    template: '<my-button @onClick="onClick" v-bind="$props" />',
  }),
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
}

export default meta

type Story = StoryObj<typeof MyButton>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
}
