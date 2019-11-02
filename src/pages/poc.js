import React, {useState} from 'react'
import {graphql} from "gatsby";
import styled from 'styled-components'
import '../styles/poc.sass'

const StyledPageContainer = styled.div`
    height: 100%;
`;

const StyledCard = styled.div`
    .hide {
      display:none;
    }
    height: 100%
    width: 100%
    padding-left: 0;
`;

const PocPage = ({data}) => {
    const [questionIndex, setIndex] = useState(0);
    const handleAnsweredQuestion = function (clickedAnswer) {
        const { node: question } = data.allDatoCmsQuestion.edges.find((_, index) => index === questionIndex);
        if (question.answer == clickedAnswer) {
            alert(true);
        } else {
            alert(false);
        }
        setIndex(questionIndex + 1);
    }
    return (
        <StyledPageContainer>
            {data.allDatoCmsQuestion.edges.map(({node: question}, index) => questionIndex === index && (
                <StyledCard key={question.id} className='showcase__item'>
                    <figure className="card">
                        <figcaption className="card__caption">
                            <h6 className="card__title">
                                <div>{question.description}</div>
                            </h6>
                            <div className="card__description">
                                <ul>
                                    <li onClick={() => handleAnsweredQuestion(1)}>{question.option1}</li>
                                    <li onClick={() => handleAnsweredQuestion(2)}>{question.option2}</li>
                                    <li onClick={() => handleAnsweredQuestion(3)}>{question.option3}</li>
                                    <li onClick={() => handleAnsweredQuestion(4)}>{question.option4}</li>
                                </ul>
                            </div>
                        </figcaption>
                    </figure>
                </StyledCard>
            ))}
        </StyledPageContainer>
    );
}

export default PocPage;

export const query = graphql`
  query allQuestionsQuery {
      allDatoCmsQuestion {
          edges {
              node {
                  id
                  option1
                  option2
                  option4
                  option3
                  subject
                  description
                  answer
              }
          }
      }
  }`;
