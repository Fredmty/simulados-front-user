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

class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showQuestions: false }
  }

  render() {
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

        <Card>
          <div className="data-result data-result-areas">
            <div>Direito Civil</div>
            <div>
              <Score hits={6} total={7} />
            </div>
            <div>
              <Icon name="chevron-down" />
            </div>
          </div>
        </Card>
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
