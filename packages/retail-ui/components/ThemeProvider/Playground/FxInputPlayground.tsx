import * as React from 'react';
import FxInput from '../../FxInput';

export class FxInputPlayground extends React.Component<{}, { value: string; auto: boolean }> {
  constructor(props: {}) {
    super(props);

    this.state = {
      auto: true,
      value: 'auto',
    };
  }

  public render(): JSX.Element {
    return (
      <FxInput
        auto={this.state.auto}
        type={'text'}
        value={this.state.value}
        onRestore={this.handleRestore}
        onChange={this.handleChange}
        width={150}
      />
    );
  }

  private handleChange = (_: any, value: string) => {
    this.setState({ value, auto: false });
  };

  private handleRestore = () => {
    this.setState({
      value: 'auto',
      auto: true,
    });
  };
}
