import { FC } from 'react';
import { navRead } from "@/utils/read";
import style from './index.css';
import svg from '@/svg/test.svg';

export default function(): FC {
  return (
    <div className={style.ceshiCss}>
      {navRead('测试组件')}
      <img src={svg} />
    </div>
  );
};
