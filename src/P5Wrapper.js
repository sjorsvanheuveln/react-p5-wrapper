import React from 'react';
import p5 from 'p5';

export default class P5Wrapper extends React.Component {

  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.wrapper);
    if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
    }
		// additional props for throwing in your function the sketch from outside of the component
		if (this.props.canvasUpdate) {
			this.canvas.canvasUpdate = this.props.canvasUpdate;
		}
  }

  componentWillReceiveProps(newprops) {
    if(this.props.sketch !== newprops.sketch){
      this.wrapper.removeChild(this.wrapper.childNodes[0]);
      this.canvas = new p5(newprops.sketch, this.wrapper);
    }
    if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
    }
  }

  render() {
    return <div ref={wrapper => this.wrapper = wrapper}></div>;
  }
}
