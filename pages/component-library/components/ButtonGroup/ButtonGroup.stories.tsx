// ButtonGroup.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonGroup from "./ButtonGroup";

//👇 Imports the Button stories
import * as ButtonStories from "../Button/Button.stories";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ButtonGroup",
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

export const Pair = Template.bind({});
Pair.args = {
  buttons: [
    { ...ButtonStories.Primary.args },
    { ...ButtonStories.Secondary.args },
  ],
  orientation: "horizontal",
};
