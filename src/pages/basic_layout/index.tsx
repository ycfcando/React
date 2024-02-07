import { FC } from 'react'
import { navRead } from '@/utils/read'
import style from './index.css'
import svg from '@/svgs/test.svg'
import Demo from '@/pages/demo'

export default function (): FC {
  return (
    <div className={style.ceshiCss}>
      {navRead('测试组件')}
      <img src={svg} />
      <Demo />
    </div>
  )
};
