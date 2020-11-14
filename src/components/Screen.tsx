import React from "react";

const getUrl = (id: number): string => {
    const goodId = Math.min(1000, Math.max(1, id));
    return `https://picsum.photos/id/${goodId}/200`;
};

interface ScreenState {
    url: string
}

export class Screen extends React.Component<{}, ScreenState> {
    intervalId: any;
    
    constructor(props) {
        super(props);
        this.state = {
            url: ""
        };
        this.newImage = this.newImage.bind(this);
    }

    newImage() {
        const id = Math.floor(Math.random() * 200);
        this.setState(state => ({
            url: getUrl(id),
        }));
    }

    componentDidMount() {
        this.intervalId = setInterval(this.newImage, 1000);
    }

    componentWillUnmount() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    shouldComponentUpdate({}, nextState: ScreenState) {
        return this.state.url !== nextState.url;
    }

    render() {
        return (
            <img src={this.state.url} />
        );
    }
}