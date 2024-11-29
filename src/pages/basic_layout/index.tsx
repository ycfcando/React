import { FC } from 'react';
import { navRead } from '@/utils/read';
import style from './index.scss';
import svg from '@/svgs/test.svg';
import Demo from '@/pages/demo';

export default function BasicLayout(): FC {
  return (
    <div className={style.ceshiCss}>
      {navRead('测试组件')}
      <img alt="测试组件" src={svg} />
      <Demo />
    </div>
  );
}
