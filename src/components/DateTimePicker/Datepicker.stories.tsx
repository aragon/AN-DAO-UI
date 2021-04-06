import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import { Story, Meta } from '@storybook/react';

import { ANDateTimePicker, ANDateTimePickerProps } from './DateTimePicker';

export default {
  title: 'DatePicker',
  component: ANDateTimePicker,
  argTypes: {
    value: { control: 'date' },
  },
} as Meta;

const Template: Story<ANDateTimePickerProps> = (args) => {
  const [value, updateValue] = useState(undefined);
  args.value = value;
  args.onChange = updateValue;
  return <ANDateTimePicker {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  placeHolder: 'Choose a start date',
};
