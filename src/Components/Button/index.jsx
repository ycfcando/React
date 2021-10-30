import React from "react";
import { Button } from "antd";
import styles from "./style.less";

const MyButton = (props) => {
  const { title } = props;
  return <Button className={styles.button}>{title}</Button>;
};

export default MyButton;
