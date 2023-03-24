import React from "react";
import { Button } from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// story list에 story가 어디 위치할지를 정의:
export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// story list에 story를 추가:
export const Primary: ComponentStory<typeof Button> = () => (
  <Button primary>Button</Button>
);

// 여러 버전의 story를 추가할 수 있다:
export const Secondary: ComponentStory<typeof Button> = () => (
  <Button backgroundColor="#ff0" label="😄👍😍💯" />
);

export const Tertiary: ComponentStory<typeof Button> = () => (
  <Button backgroundColor="#ff0" label="📚📕📈🤓" />
);

// 스토리북 사이드바에 story 이름 변경하기:
Primary.storyName = "Primary Button";
