import React from "react";
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

const PocPage = ({data}) => (
    <StyledPageContainer>
        {data.allDatoCmsQuestion.edges.map(({node: question}, index) => (
            <StyledCard key={question.id} className='showcase__item'>
                <figure className={(index > 0 && 'hide' || '') + " card"}>
                    <figcaption className="card__caption">
                        <h6 className="card__title">
                            <div>{question.description}</div>
                        </h6>
                        <div className="card__description">
                            <ul>
                                <li>{question.option1}</li>
                                <li>{question.option2}</li>
                                <li>{question.option3}</li>
                                <li>{question.option4}</li>
                            </ul>
                        </div>
                    </figcaption>
                </figure>
            </StyledCard>
        ))}
    </StyledPageContainer>
);

export default PocPage;

export const query = graphql`
 query allQuestionsQuery {
  allDatoCmsQuestion {
    edges {
      node {
        option1
        option2
        option3
        option4
        subject
        description
        id
      }
    }
  }
}
`;
