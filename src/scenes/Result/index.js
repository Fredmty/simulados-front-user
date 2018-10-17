import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { growl } from 'store/ui/actions'

import { fetchResult } from 'store/result/actions'
import { getResult } from 'store/result'

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

  componentDidMount() {
    this.props.fetchResult(3) //this.props.participationId
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
    console.log('>>>>>>>>>')
    console.log(this.props)
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

        {this.props.data.result.map((area, index) => {
          if (area)
            return <CardQuestion key={`list-area-${index}`} area={area} />
        })}
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
