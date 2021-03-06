import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import MenuCard from 'components/MenuCard'
import { fetchExam } from 'store/exam/actions'
import { getExam } from 'store/exam'
import { getStudent } from 'store/user'

import './dashboard.scss'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Seja bem-vindo.</h1>
        <h6 className="dashboard__description">
          Existem diversas formas de se preparar para a prova. Selecione uma
          destas abaixo para darmos inicio.
        </h6>
        <div className="space-between-m">
          <MenuCard
            iconContainerColor="#EAF7E8"
            iconColor="#41C236"
            icon="clipboard"
            label="Simular Prova"
            buttonLabel="Iniciar"
            description="Selecione e execute uma prova dos anos anteriores"
            onClick={() => this.doExam()}
          />
          <MenuCard
            iconContainerColor="#FFD7D7"
            iconColor="#FE8184"
            icon="shuffle"
            label="Perguntas Aleatórias"
            buttonLabel="Iniciar"
            description="Prova com perguntas aleatórias de qualquer categoria."
            onClick={() => this.doRandomExam()}
          />
          <MenuCard
            iconContainerColor="#AEBAf9"
            iconColor="#5E69F5"
            icon="clipboard"
            label="Perguntas Especificas"
            buttonLabel="Iniciar"
            description="Prova com perguntas especificas de uma categoria."
            onClick={() => this.doSpecificExam()}
          />
          <MenuCard
            iconContainerColor="#F2F2F2"
            iconColor="#787878"
            icon="settings"
            label="Customizado"
            buttonLabel="Iniciar"
            description="Prova com categorias escolhidas por você."
            onClick={() => this.doCustomExam()}
          />
        </div>
      </div>
    )
  }

  doExam() {
    this.props.push('/edicao')
  }

  doRandomExam() {
    console.log('Buscar exame com perguntas aleatorias...')
  }

  doSpecificExam() {
    console.log('Buscar exame com perguntas especificas...')
  }

  doCustomExam() {
    console.log('Buscar exame perguntas customizadas...')
  }
}

const mapStateToProps = state => ({
  exam: getExam(state),
  student: getStudent(state),
})

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        fetchExam,
        push,
      },
      dispatch,
    ),
)(Dashboard)
