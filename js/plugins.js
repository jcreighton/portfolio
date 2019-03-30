      class ColorBox extends React.Component {
        toggleColor() {
          this.setState({
            color: this.state.color === 'blue' ? 'tomato' : 'blue',
          });
        }

        render() {
          return (
            <div
              style={{ backgroundColor: this.state.color }}
              onClick={this.toggleColor}
            >
              {this.state.color}
            </div>
          );
        }
      }
