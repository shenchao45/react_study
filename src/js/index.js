var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/Header';
import ComponentFooter from './components/Footer';
import BodyIndex from './components/BodyIndex'
import MixinLog from './components/mixins'
import 'antd/lib/button/style';
export default class Index extends React.Component {
    componentWillMount() {
        MixinLog.log("index")
        console.log("Index-componentWillMount -------")
    }

    componentDidMount() {
        console.log("Index-componentDidMount--------")
    }

    componentWillUpdate() {
        console.log("Index-componentWillUpdate-------")
    }

    componentDidUpdate() {
        console.log("Index-componentDidUpdate----")
    }
	render() {
        console.log("Index-render----")
        var component = <ComponentHeader />
		return (
			<div>
                {component}
                <BodyIndex userid={123456}/>
                <ComponentFooter/>
                <div>
                    {this.props.children}
                </div>
			</div>
		);
	}
}
ReactDOM.render(
	<Index/>, document.getElementById('example'));
