import React,{Component} from 'react';
import './App.css';
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div>
        <Frame />
    </div>
  );
}

class Frame extends Component{
    state={
            html: '<h3>A simple code playground in react</h3>',
            css: '',
            js: '',
            temp: ''
        };

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            if(this.state.js.length !== this.state.temp.length){
                    this.setState({
                        js: this.state.temp
                    })
                }
            }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

  render() {
        const html = `<html><head><style>${this.state.css}</style><script>${this.state.js}</script></head><body>${this.state.html}</body></html>`;
        const source = 'data:text/html,' + encodeURIComponent(html);

    return(
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className={"col-lg-7 p-0"}>
                    <iframe src={source} />
                </div>
                <div className={"col-lg-5"} style={{width: '95%', background: 'gray'}}>
                    <div className={"row"}>
                        <div className={"col-lg-12 mb-1"}>
                            <Card className={"bg-dark"}>
                                <Card.Header>HTML</Card.Header>
                                <Card.Body>
                                    <textarea onChange={this.handleChange} value={this.state.html} name={"html"}/>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-lg-12 mb-1"}>
                            <Card className={"bg-dark"}>
                                <Card.Header>CSS</Card.Header>
                                <Card.Body>
                                    <textarea onChange={this.handleChange} value={this.state.css} name={"css"} />
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-lg-12 mb-1"}>
                            <Card className={"bg-dark"}>
                                <Card.Header>JS</Card.Header>
                                <Card.Body>
                                    <textarea onChange={this.handleChange} value={this.state.temp} name={"temp"} />
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default App;
