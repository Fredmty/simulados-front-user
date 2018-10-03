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
    this.state = { showConfirmButton: false }
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    }

    return (
      <Container>
        <Card>
          <h1>Resultado</h1>
          <h3>30/40</h3>
          <Card>Porcentagem de acertos 75%</Card>
          <Card>Tempo médio por questão 2m20s</Card>
          <Card>Tempo total 3h30s</Card>
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
