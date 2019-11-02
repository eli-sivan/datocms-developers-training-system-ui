import React from "react";
import { graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Layout from "../components/layout";

const PocPage = ({ data }) => (
  <Layout>
    <Masonry className="showcase">
      {data.allDatoCmsQuestion.edges.map(({
                                id,
                                option1,
                                option2,
                                option3,
                                option4,
                                description
                              }) => (
        <div key={id} className="showcase__item">
          <figure className="card">
            <figcaption className="card__caption">
              <h6 className="card__title">
                <div>{description}</div>
              </h6>
              <div className="card__description">
                <ul>
                  <li>{option1}</li>
                  <li>{option2}</li>
                  <li>{option3}</li>
                  <li>{option4}</li>
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
