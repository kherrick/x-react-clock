import { createCustomElement, DOMModel, byAttrVal, byBooleanAttrVal, registerEvent } from '@adobe/react-webcomponent';
import * as React from 'react';
import Clock from 'react-clock';

class XReactClock extends React.Component<{ rendernumbers: boolean, size: number }, {}> {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    )
  }

  render() {
    return (<Clock renderNumbers={this.props.rendernumbers} size={this.props.size} value={this.state.date} />)
  }
}

class XReactModel extends DOMModel {
  @byAttrVal size = 150
  @byBooleanAttrVal rendernumbers = true

  @registerEvent('change') change
}

export default createCustomElement(XReactClock, XReactModel, 'container')
