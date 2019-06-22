import React,{Component} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <Frame />
    </div>
  );
}

class Frame extends Component{
    state={
            html: '',
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
        <div className={"container-fluid h-100"}>
            <div className={"row"}>
                <div className={"col-lg-5"}>
                    <iframe src={source} />
                </div>
                <div className={"col-lg-7"}>
                    <div className={"row"}>
                        <div className={"col-lg-12"}>
                            <textarea onChange={this.handleChange} value={this.state.html} name={"html"}/>
                        </div>
                        <div className={"col-lg-12"}>
                            <textarea onChange={this.handleChange} value={this.state.css} name={"css"} />
                        </div>
                        <div className={"col-lg-12"}>
                            <textarea onChange={this.handleChange} value={this.state.temp} name={"temp"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default App;
