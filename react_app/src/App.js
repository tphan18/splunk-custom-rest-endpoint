import React, { Component } from 'react'
import { Terminal } from 'xterm'
import 'xterm/dist/xterm.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.terminalRef = React.createRef()
  }

  componentDidMount() {
    this.terminal = new Terminal()
    this.terminal.open(this.terminalRef.current)

    function runFakeTerminal(term) {
      if (term._initialized) {
        return
      }

      term._initialized = true

      term.prompt = () => {
        term.write('\r\n$ ')
      }

      term.writeln('Welcome to Splunk server')
      term.writeln('Type some keys and commands to play around.')
      term.writeln('')
      term.prompt()

      term.on('key', function (key, ev) {
        const printable =
          !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey

        if (ev.keyCode === 13) {
          term.prompt()
        } else if (ev.keyCode === 8) {
          // Do not delete the prompt
          if (term._core.buffer.x > 2) {
            term.write('\b \b')
          }
        } else if (printable) {
          term.write(key)
        }
      })

      term.on('paste', function (data) {
        term.write(data)
      })
    }

    runFakeTerminal(this.terminal)
  }

  render() {
    return <div ref={this.terminalRef} />
  }
}
