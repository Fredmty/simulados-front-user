import React from 'react'

import './score.scss'

class Score extends React.Component {
  getMessage(hits, total) {
    let score = total / 2
    if (hits > score) return 'Acima da média! :)'
    if (hits == score) return 'Na média! :|'
    if (hits < score) return 'Abaixo da média :('
  }

  getClass(hits, total) {
    let score = total / 2
    if (hits > score) return 'score--green'
    if (hits == score) return 'score--yellow'
    if (hits < score) return 'score--red'
  }

  render() {
    const { title, hits, total } = this.props

    const Elem = title ? 'h1' : 'strong'
    const SubTitle = () =>
      title ? <h3>{this.getMessage(hits, total)}</h3> : ''

    return (
      <div className="score">
        <Elem className={this.getClass(hits, total)}>
          {hits}/{total}
        </Elem>
        <SubTitle />
      </div>
    )
  }
}

export default Score
