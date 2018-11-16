import React, { Component } from 'react'
import Card from '../Card'
import Icon from '../Icon'
import Score from '../Score'
import './card-question.scss'

const CardQuestion = ({ area, getTime, toogleArea, onClick }) => (
      <Card
        className={'card-question' + toogleArea ? 'card-question--expanded' : ''}
        onClick={onClick}
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
              name={toogleArea ? 'chevron-up' : 'chevron-down'}
            />
          </div>
        </div>
        <div className="card-question_toggle-questions">
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

export default CardQuestion
