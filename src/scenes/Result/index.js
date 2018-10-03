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
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import Slider from 'react-slick'

class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showConfirmButton: false, hits: 60, total: 80 }
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

        <label className="data-result">
          Porcentagem de acertos <span>75%</span>
        </label>
        <label className="data-result">
          Tempo médio por questão <span>2m20s</span>
        </label>
        <label className="data-result">
          Tempo total <span>3h30s</span>
        </label>

        <br />
        <br />
        <br />

        <h3>Questões</h3>

        <Card>Porcentagem de acertos 75%</Card>
        <Card>Tempo médio por questão 2m20s</Card>
        <Card>Tempo total 3h30s</Card>
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
