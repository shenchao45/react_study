import React from 'react'
import ReactDOM from 'react-dom'
import BodyChild from './BodyChild'
import MixinLog from './mixins'
import { Input } from 'antd';
import ReactMixin from 'react-mixin'

const defaultProps = {
    username: '这是一个默认的用户名'
}

export default class BodyIndex extends React.Component {
    constructor() {
        super();
        MixinLog.log('bodyIndex')
        this.state = {
            username: "shenchao",
            age: 12
        };
    }

    componentWillMount() {
        console.log("BodyIndex-componentWillMount -------")
    }

    componentDidMount() {
        console.log("BodyIndex-componentDidMount--------")
    }

    componentWillUpdate() {
        console.log("BodyIndex-componentWillUpdate-------")
    }

    componentDidUpdate() {
        console.log("BodyIndex-componentDidUpdate----")
    }

    changeUserInfo() {
        this.setState({age: 50})
        //    第一种方式
        //     var mySubmitButton = document.getElementById('submitButton')
        //     ReactDOM.findDOMNode(mySubmitButton).style.color = 'red'
        //    第二种方式
        console.log(this.refs.submitButton)
        this.refs.submitButton.style.color = 'red'
    }

    handleChildValueChange(e) {
        this.setState({age: e.target.value})
    }

    render() {
        console.log("BodyIndex-render-----")
        var boolInput = false;
        var userName = 'Parry';
        var html = "沈超的萨芬&nbspsadf"
        return (
            <dev>
                <h2>页面的主体内容</h2>
                <p>{userName == '' ? '用户还没有登录' : '用户名：' + userName}</p>
                <p><input type="button" value="默认按钮" disabled={boolInput}/></p>
                <p>{html}</p>
                <p dangerouslySetInnerHTML={{__html: html}}></p>
                <p>{this.state.username}:{this.state.age}</p>
                <p>{this.props.userid} : {this.props.username}</p>
                <Input ref="submitButton" id="submitButton" type="button" value="提交"
                       onClick={this.changeUserInfo.bind(this)}/>
                <BodyChild {...this.props} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </dev>
        )
    }
}
BodyIndex.propTypes = {
    userid: React.PropTypes.number.isRequired
}

BodyIndex.defaultProps = defaultProps

ReactMixin(BodyIndex.prototype, MixinLog)