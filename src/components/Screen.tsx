import React from "react";

// Обработчик ошибок

export class ErrorScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
    }
    
    render() {
      if (this.state.errorInfo) {
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      return this.props.children;
    }  
}

// Компонент внутри обработчика ошибок

export const getUrl = (id: number): string => {
    const goodId = Math.min(1000, Math.max(1, id));
    return `https://picsum.photos/id/${goodId}/200`;
};

interface ScreenState {
    url: string,
    interval: number
}

export class Screen extends React.Component<{}, ScreenState> {
    intervalId: any;
    //class-properties
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            interval: 1000
        };
        this.newImage = this.newImage.bind(this);
        //this.increment = this.increment.bind(this);
        //this.decrement = this.decrement.bind(this);
        this.incrementDecrement = this.incrementDecrement.bind(this);
    }

    newImage() {
        const id = Math.floor(Math.random() * 200);
        this.setState({
            url: getUrl(id),
        });
    }

    /*increment() {
        this.setState(state => ({ interval: state.interval + 1000 }));
    }
    
    decrement() {
        this.setState(state => ({ interval: state.interval - 1000 }));
    }*/

    incrementDecrement(value: number) { 
        this.setState(state => ({ interval: state.interval + (value) }));
    }

    componentDidMount() {
        this.intervalId = setInterval(this.newImage, this.state.interval);
    }

    componentDidUpdate({}, prevState: ScreenState) {
        if (prevState.interval !== this.state.interval) {
            this.intervalId = setInterval(this.newImage, this.state.interval);
        }
    }

    componentWillUnmount() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    shouldComponentUpdate({}, nextState: ScreenState) {
        return this.state.url !== nextState.url || this.state.interval !== nextState.interval;
    }

    render() {
        if (this.state.interval < 1000) {
            throw new Error('I crashed!');
        } else {
            return (
                <div>
                    <h1>Lifecycle Screen</h1>
                    <h2>Интервал {this.state.interval}</h2>
                    <button onClick={this.incrementDecrement(-1000)}>-</button>
                    <img src={this.state.url} />
                    <button onClick={this.incrementDecrement(+1000)}>+</button>
                </div>
            )
        }
    }
}