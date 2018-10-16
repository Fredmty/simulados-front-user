import React, { Component } from 'react'
import Card from '../Card'
import Icon from '../Icon'
import Score from '../Score'
import './cardQuestion.scss'

export default class CardQuestion extends Component {
  constructor() {
    super()
    this.state = { toogleArea: false }
  }

  showQuestions() {
    let invert = !this.state.toogleArea
    this.setState({ toogleArea: invert })
  }

  render() {
    const { area } = this.props

    return (
      <Card
        className={this.state.toogleArea ? 'card-expanded' : ''}
        onClick={this.showQuestions.bind(this)}
      >
        <div className="data-result data-result-areas">
          <div>{area.name}</div>
          <div>
            <Score
              hits={area.questions.filter(q => q.correct).length}
              total={area.questions.length}
            />
          </div>
          <div>
            <Icon
              name={this.state.toogleArea ? 'chevron-up' : 'chevron-down'}
            />
          </div>
        </div>
        <div className="toggleQuestions">
          {area.questions.map(q => (
            <div
              key={`${area.id}-${q.id}`}
              className="data-result data-result-border-bottom"
            >
              <div>Questão {q.id}</div>
              <div>{q.correct ? 'V' : 'X'}</div>
            </div>
          ))}
        </div>
      </Card>
    )
  }
}
