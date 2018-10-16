import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { growl } from 'store/ui/actions'

import Card from 'components/Card'
import './result.scss'
import Container from 'components/Container'
import Icon from 'components/Icon'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import Score from 'components/Score'
import CardQuestion from 'components/CardQuestion'

class Result extends React.Component {
  constructor(props) {
    super(props)
  }

  getPercent() {
    return (this.state.hits / this.state.total) * 100
  }

  getTotalTime() {
    let time = this.state.time
    let final = ''
    while (time > 0) {
      if (time > 3600) {
        final += Math.trunc(time / 3600) + 'h'
        time = time % 3600
      }
      if (time > 60) {
        final += Math.trunc(time / 60) + 'm'
        time = time % 60
      }
      return final + time + 's'
    }
  }

  getQuestionTime() {
    let time = this.state.time / this.state.total
    let final = ''
    while (time > 0) {
      if (time > 3600) {
        final += Math.trunc(time / 3600) + 'h'
        time = time % 3600
      }
      if (time > 60) {
        final += Math.trunc(time / 60) + 'm'
        time = time % 60
      }
      return final + Math.trunc(time) + 's'
    }
  }

  render() {
    const areas = [
      {
        id: 1,
        name: 'Direito Civil',
        questions: [
          { id: 1, correct: true },
          { id: 2, correct: false },
          { id: 3, correct: true },
          { id: 4, correct: false },
        ],
      },
      {
        id: 2,
        name: 'Direito Criminal',
        questions: [
          { id: 1, correct: true },
          { id: 2, correct: false },
          { id: 3, correct: true },
          { id: 4, correct: false },
        ],
      },
    ]

    return (
      <Container>
        <Score title={true} hits={60} total={80} />

        <div className="data-result data-result-border-bottom">
          <div>Porcentagem de acertos</div> <div>75%</div>
        </div>
        <div className="data-result data-result-border-bottom">
          <div>Tempo médio por questão</div> <div>2m20s</div>
        </div>
        <div className="data-result data-result-border-bottom">
          <div>Tempo total</div> <div>3h30s</div>
        </div>

        <br />
        <br />
        <br />

        <h3>Questões</h3>

        {areas.map(area => (
          <CardQuestion key={area.id} area={area} />
        ))}
      </Container>
    )
  }
}

export default connect(
  null,
  dispatch =>
    bindActionCreators(
      {
        growl,
      },
      dispatch,
    ),
)(Result)
