import React from "react";
import { Button } from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// story list에 story가 어디 위치할지를 정의:
export default {
  title: "Button",
  component: Button,
  // Wrapper를 통해 모든 story에 공통적으로 적용되는 decorator를 정의할 수 있다:
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

// args를 통해 story를 생성한다. 여기서 Template.bind({})는 함수를 복사하는 자바스크립트 기능이다:
export const Primary = Template.bind({});
Primary.args = { backgroundColor: "#ff0", label: "Button" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "😄👍😍💯" };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: "📚📕📈🤓" };

// 스토리북 사이드바에 story 이름 변경하기:
Primary.storyName = "Primary Button";
