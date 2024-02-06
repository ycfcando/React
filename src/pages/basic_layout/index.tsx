import { FC } from 'react';
import { navRead } from "@/utils/read";

export default function(): FC {
  return (
    <div>{navRead('测试组件')}</div>
  );
};
