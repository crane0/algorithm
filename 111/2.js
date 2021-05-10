
import React, { Component } from 'react'
import style from './style.scss'
import Header from '../Header'
import Download from '../Download'
import Back from '../Back'


export default class  extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const tips = [
      {
        title: '扫描二维码关注微信公众号，使用多拉打印微信小程序，立即体验便捷、方便的现代打印体验',
        img: 'gongzhonghao.jpg'
      },
      {
        title: '在多拉打印微信小程序中选择“文档打印”或者“照片冲印””',
        img: 'howtouse-step1.jpg'
      },
      {
        title: '在“我的文档”或者“文档打印”中选择将要打印的文件',
        img: 'howtouse-step2.jpg'
      },
      {
        title: '在多拉打印微信小程序中完成打印设置，并完成支付',
        img: 'howtouse-step3.jpg'
      },
      {
        title: '在任意多拉自助打印机上扫描屏幕二维码，选取订单进行打印',
        img: 'login_step2.jpg'
      },
    ]
    return(
      <div>
        <Header title="如何打印" hasBack={false}/>
        <div className={style['content']}>
           <ul className={style['screenshot-list']}>
              {
                tips.map((tip, index)=>(
                  <li key={index}>
                    <img className={style['screenshot']} src={`https://qnactivity.duoladayin.com/${tip.img}`} />
                    <div className={style['describe-box']}>
                      <span className={style['step']}>{index+1} </span>
                      <p>
                      {tip.title}
                      </p>
                    </div>
                  </li>
                ))
              }
           </ul>
        </div>
        <Back />
      </div>
    )
 }
}
