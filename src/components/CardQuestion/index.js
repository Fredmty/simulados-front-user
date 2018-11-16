import React, { Component } from 'react'
import Card from '../Card'
import Icon from '../Icon'
import Score from '../Score'
import './cardQuestion.scss'

export default class CardQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = { toogleArea: false }
  }

  showQuestions() {
    let invert = !this.state.toogleArea
    this.setState({ toogleArea: invert })
  }

  render() {
    const { area, getTime } = this.props
    return (
      <Card
        className={'card-question' + this.state.toogleArea ? 'card-question--expanded' : ''}
        onClick={this.showQuestions.bind(this)}
      >
        <div className="data-result data-result--areas">
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
        <div className="card-question_toggleQuestions">
          {area.questions.map((q, index) => (
            <div
              key={`${index}question-${q.id}`}
              className="data-result data-result--border-bottom data-result--questions"
            >
              <div>Questão {q.question_id}</div>
              <div>
                <Icon
                  name={q.correct ? 'check' : 'x'}
                  color={q.correct ? '#629c44' : '#e61610'}
                />
              </div>
              <div>{getTime(q.time_to_answer)}</div>
            </div>
          ))}
        </div>
      </Card>
    )
  }
}
