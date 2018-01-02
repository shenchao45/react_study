import React from 'react';
import ReactDOM from 'react-dom';
import MixinLog from './mixins'
import ReactMixin from 'react-mixin'
import {Link} from 'react-router'

export default class ComponentHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            miniHeader: false
        }
    }

    switchHeader() {
        this.setState({
            miniHeader: !this.state.miniHeader
        })
    }

    render() {
        MixinLog.log('header')
        const styleComponentHeader = {
            header: {
                backgroundColor: "#754142",
                color: "#FFFFFF",
                paddingTop: this.state.miniHeader ? "3px" : "15px",
                paddingBottom: "15px"
            }
        }
        // onClick={this.switchHeader.bind(this)}
        return (
            <header style={styleComponentHeader.header} >
                <h1>这里是头部</h1>
                <ul>
                    <li><Link to={'/'}>首页</Link></li>
                    <li><Link to={'/details'}>嵌套的详情页面</Link></li>
                    <li><Link to={'/list/1234'}>列表页面</Link></li>
                </ul>
            </header>
        )
    }
}
ReactMixin(ComponentHeader.prototype, MixinLog)