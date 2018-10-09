import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { growl } from 'store/ui/actions'
import { GROWL_INFO, GROWL_ERROR, GROWL_SUCCESS } from 'store/ui/constants'

import Button from 'components/Button'
import Input from 'components/Input'
import Field from 'components/Field'
import Card from 'components/Card'
import RadioGroup from 'components/RadioGroup'
import { Radio } from 'components/RadioGroup'
import Select from 'components/Select'
import Modal from 'components/Modal'
import './result.scss'
import Container from 'components/Container'
import Icon from 'components/Icon'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import Slider from 'react-slick'

class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showQuestions: false, hits: 60, total: 80 }
  }

  getMessage() {
    let score = this.state.total / 2
    if (this.state.hits > score) return 'Acima da média! :)'
    if (this.state.hits == score) return 'Na média! :|'
    if (this.state.hits < score) return 'Abaixo da média :('
  }

  getClass() {
    let score = this.state.total / 2
    if (this.state.hits > score) return 'green'
    if (this.state.hits == score) return 'yellow'
    if (this.state.hits < score) return 'red'
  }

  render() {
    return (
      <Container>
        <h1 className={this.getClass()}>
          {this.state.hits}/{this.state.total}
        </h1>
        <h3>{this.getMessage()}</h3>

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
          <div className="data-result-areas">
            <div>Direito Civil</div>
            <div>
              <strong>6/7</strong>
              <Icon name="chevron-down" />
            </div>
          </div>
          <div>
            <div>
              Direito Civil
              <span>
                <Icon name="chevron-down" className="right" />
              </span>
            </div>
          </div>
        </Card>
        <Card>
          <div className="data-result">
            Direito Penal
            <Icon name="chevron-down" className="right" />
          </div>
        </Card>
        <Card>
          <div className="data-result">
            Direito Criminal
            <Icon name="chevron-down" className="right" />
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
