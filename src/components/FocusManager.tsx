import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import styled from 'styled-components'

const StyledFocusManager = styled.div`
  height: 100%;
  &:focus {
    outline: none;
  }
`

class FocusManager extends React.Component<RouteComponentProps> {
  public screen = React.createRef<HTMLDivElement>()

  public componentDidMount() {
    this.focus()
  }

  public componentDidUpdate(prevProps: RouteComponentProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.focus()
    }
  }

  public focus = () => {
    // can't seem to find a better way than this, unfortunately.
    // the delay of 150 is to handle the case the Next button is selected
    // via arrow keys and then clicked. A shorter delay will fail to move
    // the focus away from "Next" in terms of audio. Even now, the Next button
    // stays highlighted, which is a bummer. We need to figure out a better solution.
    window.setTimeout(() => {
      const elementToFocus =
        document.getElementById('audiofocus') || this.screen.current!

      // eslint-disable-next-line no-unused-expressions
      elementToFocus && elementToFocus.focus()
      // eslint-disable-next-line no-unused-expressions
      elementToFocus && elementToFocus.click()
    }, 150)
  }

  public render() {
    return (
      <StyledFocusManager ref={this.screen} tabIndex={-1}>
        {this.props.children}
      </StyledFocusManager>
    )
  }
}

export default withRouter(FocusManager)
