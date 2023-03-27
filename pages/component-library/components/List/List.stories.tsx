import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { List } from "./List";
import { ListItem } from "./ListItem";

export default {
  title: "List",
  component: List,
} as ComponentMeta<typeof List>;

//👇 Always an empty list, not super interesting
const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Empty: ComponentStory<typeof List> = (args) => <List {...args} />;

export const OneItem: ComponentStory<typeof List> = (args) => (
  <List {...args}>
    <ListItem />
  </List>
);

export const ManyItems: ComponentStory<typeof List> = (args) => (
  <List {...args}>
    <ListItem />
    <ListItem />
    <ListItem />
  </List>
);
