
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Link, hashHistory } from 'react-router'
import { Spin, Modal } from 'antd'
import RModal from 'react-modal'
import style from './style.scss'
import Header from '../../components/Header'
import Step from '../../components/Step'
import Back from '../../components/Back'


let timer = null;
@inject('duola') @observer
export default class  extends Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false
    }
  }

  componentDidMount(){
    timer = setInterval(()=>(
      this.props.duola.scanCode.fetchThePrintFile()
    ),1000)
  }

  componentWillUnmount(){
    this.props.duola.setErrorModal(false,'');
    timer && clearInterval(timer)
  }

  goHome = () => {
    this.props.duola.socket.socketSend('closePrint', {terminal_id: this.props.duola.user.id})
    hashHistory.push('/')
  }

  showModal = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  onCloseModal = () => {
    const { showError, errorMessage }= this.props.duola;
    if(errorMessage.indexOf('取消') > -1){
      hashHistory.push('/')
    }
    this.props.duola.setErrorModal(false,'')
  }

  render(){
      const tips = [{
        title: '在待打印文件列表中选中文件',
        img: 'choose_step1.jpg'
      },{
        title: '选中后耐心等待打印机打印',
        img: 'choose_step2.jpg'
      }]
      const { showError, errorMessage, activity } = this.props.duola;
      return(
        <div className={style['container']} id="waiting">
          <Header title="在微信小程序中选择文件"  hasHelp={false} hasBack={false} />
          <div className={style['content']}>
            <div className={style['left-box']}>
              <img className={style['active-logo']} src={activity.activityPic} style={{display: activity.hasActivity ? '' : 'none'}}/>
              <h2>还差一步就能打印了～</h2>
              <h2>请在微信小程序中选择需打印的文件，并完成支付^_^</h2>
            </div>
            <div className={style['right-box']}>
              <h3>多拉小贴士：</h3>
              <ul>
                {
                  tips.map((tip, index)=>(
                    <li key={index}>
                      <img src={`https://qnactivity.duoladayin.com/${tip.img}`} height={483}/>
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
          <Back customClick={this.showModal} home/>
          <Modal
            visible={this.state.visible}
            closable={false}
            onOk={this.goHome}
            onCancel={this.showModal}
            okText="确认取消"
            cancelText="继续打印"
            wrapClassName="waitingModal"
            width={600}
          >
          <p>
            您是否要取消本次打印？
          </p>
          </Modal>
          <RModal
            isOpen={showError}
            className="duola-modal"
            overlayClassName="duola-modal-overlay"
            contentLabel="Err-Modal"
            onRequestClose={this.onCloseModal}
          >
            <div className="error-modal-box">
              <p>{errorMessage}</p>
              <button className="error-modal-btn" onClick={this.onCloseModal}>确定</button>
            </div>
          </RModal>
        </div>
      )
   }
}
