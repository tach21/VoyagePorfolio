import React from "react";
import styled from "styled-components";
import { About } from "../style";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How to order</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p>
            Vero natus dolores illo quod! Aperiam, et! Similique odio accusamus
            fugiat quidem perferendis nulla, natus vero ad explicabo? Placeat
            quasi saepe harum?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Shipping</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p>
            Vero natus dolores illo quod! Aperiam, et! Similique odio accusamus
            fugiat quidem perferendis nulla, natus vero ad explicabo? Placeat
            quasi saepe harum?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Creations in demand</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p>
            Vero natus dolores illo quod! Aperiam, et! Similique odio accusamus
            fugiat quidem perferendis nulla, natus vero ad explicabo? Placeat
            quasi saepe harum?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Ordering a unique design</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p>
            Vero natus dolores illo quod! Aperiam, et! Similique odio accusamus
            fugiat quidem perferendis nulla, natus vero ad explicabo? Placeat
            quasi saepe harum?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: Block;
  span {
    display: Block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #000;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
    color: #000;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
