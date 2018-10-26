import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchResult } from 'store/result/actions'
import { getResult } from 'store/result'

import './result.scss'
import Container from 'components/Container'
import Score from 'components/Score'
import CardQuestion from 'components/CardQuestion'

class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      time: 0,
      hits: 0,
    }
  }

  componentDidMount() {
    this.props
      .fetchResult(this.props.participationId) //for test, use 1, 2 or 3
      .then(this.extractData.bind(this))
  }

  extractData() {
    if (this.props.data.result) {
      let total = 0
      let time = 0
      let hits = 0

      this.props.data.result.map(r => {
        time += r.total_time
        hits += r.questions.filter(q => q.correct).length
        total += r.questions.length
      })

      this.setState({ total, time, hits })
    }
  }

  getPercent() {
    return (this.state.hits / this.state.total) * 100
  }

  getTime(time) {
    let hours = Math.floor(time / 3600)
    time %= 3600
    let minutes = Math.floor(time / 60)
    let seconds = time % 60

    return `${hours}h${minutes}m${seconds}s`
  }

  render() {
    return this.props.data.result ? (
      <Container>
        <Score title={true} hits={this.state.hits} total={this.state.total} />

        <div className="data-result data-result-border-bottom data-result-statistics">
          <div>Porcentagem de acertos</div> <div>{this.getPercent()}%</div>
        </div>
        <div className="data-result data-result-border-bottom data-result-statistics">
          <div>Tempo médio por questão</div>{' '}
          <div>{this.getTime(this.state.time)}</div>
        </div>
        <div className="data-result data-result-border-bottom data-result-statistics">
          <div>Tempo total</div>{' '}
          <div>{this.getTime(this.state.time / this.state.total)}</div>
        </div>

        <br />
        <br />
        <br />

        <h3>Questões</h3>

        {this.props.data.result.map((area, index) => (
          <CardQuestion
            key={`list-area-${index}`}
            area={area}
            getTime={this.getTime}
          />
        ))}
      </Container>
    ) : (
      <Container className="error">
        Ops! Ocorreu um arro ao buscar o resultado.
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  data: getResult(state),
})

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        fetchResult,
      },
      dispatch,
    ),
)(Result)
