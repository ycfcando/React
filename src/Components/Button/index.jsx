import React from "react";
import { Button } from "antd";

const MyButton = (props) => {
  const { title } = props;
  return <Button>{title}</Button>;
};

export default MyButton;
