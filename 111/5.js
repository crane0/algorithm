
import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import { inject, observer } from 'mobx-react'
import { Link, hashHistory } from 'react-router'
import { Spin } from 'antd'
import $ from 'jquery'
import { apis } from '../../apis'
import style from './style.scss'
import Header from '../../components/Header'
import Step from '../../components/Step'
import Back from '../../components/Back'
import QRCode from './qrcode'

let timer = null;
@inject('duola') @observer
export default class  extends Component {
  constructor(props){
    super(props)
    this.qrcode = null;
    this.state = {
      showApp: false,
      showCount: false
    }
  }

  componentDidMount(){
    const { duola } = this.props;
    // duola.socket.fetchCode()
    duola.scanCode.fetchCode();
    // this.handleCount();
    timer = setInterval(()=>(
      duola.scanCode.checkLoginByPhone()
    ),1000)
  }

  componentWillUnmount(){
    this.props.duola.scanCode.setCode(null);
    timer && clearInterval(timer);
  }

  componentDidUpdate(prevProps, prevState) {
    const { code } = this.props.duola.scanCode;
    if(code){
      this.qrcode && this.qrcode.clear();
      this.qrcode && this.qrcode.makeCode(`http://a.app.qq.com/o/simple.jsp?pkgname=com.duola.yunprint&terminal_id=${code}`);
    }
    if(code && !this.qrcode){
      this.qrcode = new QRCode("qrcode", {
          width: 200,
          height: 200,
          colorDark : "#000000",
          colorLight : "transparent",
          correctLevel : QRCode.CorrectLevel.H
      });
      this.qrcode.makeCode(`http://a.app.qq.com/o/simple.jsp?pkgname=com.duola.yunprint&terminal_id=${code}`);
    }
  }

  handleApp = (e) => {
    if(e.target.className == 'download-btn'){
      this.setState({
        showApp: !this.state.showApp
      })
    }else {
      this.setState({
        showApp: false
      })
    }

  }

  handleCount = async() => {
    const { photoPage } = await $.post(`${apis.API_URL}${apis.getPaperCount}`,{
      terminalId: this.props.duola.user.id
    });
    if( photoPage === 0){
      this.setState({
        showCount: true
      })
    }
  }

  render(){
    const { code } = this.props.duola.scanCode;
    const tips = [{
      title: '打开多拉打印微信小程序',
      img: 'login_step1.jpg'
    },{
      title: '点击“扫码取件”',
      img: 'login_step2.jpg'
    },{
      title: '扫描屏幕二维码',
      img: 'login_step3.jpg'
    }];
    return(
      <div className={style['container']} ref={(e)=>{this.container = e}} onClick={this.handleApp}>
        <Header title="请使用多拉打印微信小程序扫码"/>
        <div className={style['content']}>
          <div className={style['left-box']}>
            <p>请使用多拉打印微信小程序扫码</p>
            {
              code ?
                (
                  <div className={style['qrcode-box']}>
                    <div id="qrcode"></div>
                  </div>
                )
                :<Spin size="large" wrapperClassName={style['spin']}><div> </div></Spin>
            }
            <p>设备编号：{code && code.slice(0, 3) + " " + code.slice(3)} </p>
            <img src={require('./assets/app.png')} width={312} className={style['app']} style={{display: this.state.showApp ? 'block' : 'none'}}/>
          {/* <img src={require('./assets/download-btn.png')} width={316} className="download-btn" onClick={this.handleApp}/> */}
          </div>
          <div className={style['right-box']}>
            <h3>多拉小贴士：</h3>
            <ul>
              {
                tips.map((tip, index)=>(
                  <li key={index}>
                    <img src={`https://qnactivity.duoladayin.com/${tip.img}`} height={380}/>
                    <p>
                      <span>{index + 1}</span>
                      {tip.title}
                    </p>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <Back home/>
      </div>
    )
 }
}
