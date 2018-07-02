import * as React from 'react';

interface Props {
  name: string;
}

class HelloWorld extends React.Component<Props, any> {
  render() {
    const { name } = this.props;
    let nameLabel = name || 'World';
    return (
      <div>
        <h1>Hello, {nameLabel}!</h1>
      </div>
    );
  }
}

export default HelloWorld;
