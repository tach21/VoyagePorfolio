import React from "react";
import styled from "styled-components";
import { About } from "../style";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How to order?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p>
              Vero natus dolores illo quod! Aperiam, et! Similique odio
              accusamus fugiat quidem perferendis nulla, natus vero ad
              explicabo? Placeat quasi saepe harum?
            </p>
          </div>
        </Toggle>
        <Toggle title="Shipping details">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p>
              Vero natus dolores illo quod! Aperiam, et! Similique odio
              accusamus fugiat quidem perferendis nulla, natus vero ad
              explicabo? Placeat quasi saepe harum?
            </p>
          </div>
        </Toggle>
        <Toggle title="Creations in demand">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p>
              Vero natus dolores illo quod! Aperiam, et! Similique odio
              accusamus fugiat quidem perferendis nulla, natus vero ad
              explicabo? Placeat quasi saepe harum?
            </p>
          </div>
        </Toggle>
        <Toggle title="Ordering a unique design">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p>
              Vero natus dolores illo quod! Aperiam, et! Similique odio
              accusamus fugiat quidem perferendis nulla, natus vero ad
              explicabo? Placeat quasi saepe harum?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
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
