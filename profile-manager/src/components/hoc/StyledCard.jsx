const { Component } = require("react")

const CardWithStyle = (WrappedComponent) => {
    return class HOC extends Component {
        constructor(props) {
            super(props);
            this.state = {
                styles: {
                    backgroundColor: 'white',
                    border: 'none'
                }
            }
            this.handleMouseEnter = this.handleMouseEnter.bind(this);
            this.handleMouseLeave =this.handleMouseLeave.bind(this);
        }

        handleMouseEnter(e) {
            let styles = {
                backgroundColor: 'lightyellow',
                border: '1px solid black'
            }
            this.setState({ styles })
        }
        handleMouseLeave(e) {
            let styles = {
                backgroundColor: 'white',
                border: 'none'
            }
            this.setState({ styles })
        }
        render() {
            return (
                <div style={this.state.styles} onMouseEnter={this.handleMouseEnter} 
                    onMouseLeave={this.handleMouseLeave}>
                    <WrappedComponent user={this.props.data} />
                </div>
            )
        }
    }
}

export default CardWithStyle;