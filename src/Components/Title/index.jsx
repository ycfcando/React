import React from "react";

const Title = (props) => {
  const { title } = props;
  return <h2 className={style["titles"]}>{title}</h2>;
};

export default Title;
