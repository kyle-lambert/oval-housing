import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Primary: React.VFC = () => <Button variant="primary" label="Submit" />;
export const Secondary: React.VFC = () => <Button variant="secondary" label="Submit" />;

