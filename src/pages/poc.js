import React from "react";
import { graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Layout from "../components/layout";

const PocPage = ({ data }) => (
  <Layout>
    <Masonry className="showcase">
      {data.allDatoCmsQuestion.edges.map(({ node: question }) => (
        <div key={question.id} className="showcase__item">
          <figure className="card">
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
        </div>
      ))}
    </Masonry>
  </Layout>
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
