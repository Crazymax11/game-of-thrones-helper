import React from "react";
import styled from "styled-components";
import proptypes, { InferProps } from "prop-types";

import Example from '../Example/index';

const Logo = styled.div<{ image: string }>`
  border-style: solid;
  border-radius: 200px;
  min-width: 200px;
  min-height: 200px;
  max-height: 200px;
  max-width: 200px;
  margin-right: 10px;
  background-image: url(${props => props.image});
  background-size: 200px;
  float: left;
`;

const DescriptionBlock = styled.div`
`;

const DescriptionText = styled.div`
  font-size: 25px;
`;


/**
 * Test descprtion
 */
export default function OrderDescription(
  props: InferProps<typeof OrderDescription.propTypes>
) {
  const ExamplesList = styled.div`
    * {
      margin-bottom: 10px;
    }
  `;

  const Wrapper = styled.div`
    font-size: 25px;

    h2 {
      font-size: 35px;
    }
  `;

  const Examples = props.examples.length
    ? [
        <h2> Примеры использования: </h2>,
        <ExamplesList>
          {props.examples.map(({ title, image, text, type }) => (
            <Example
              key={title}
              title={title}
              image={image}
              text={text}
              type={type}
            />
          ))}
        </ExamplesList>
      ]
    : null;

  return (
    <Wrapper>
      <DescriptionBlock>
        <Logo image={props.orderMarkImage}></Logo>
        <DescriptionText>{props.orderDescriptionText}</DescriptionText>
      </DescriptionBlock>

      {Examples}
    </Wrapper>
  );
}

OrderDescription.propTypes = {
  orderMarkImage: proptypes.string.isRequired,
  orderDescriptionText: proptypes.string.isRequired,
  examples: proptypes.arrayOf(
    proptypes.shape({
      title: Example.propTypes.title,
      image: Example.propTypes.image,
      text: Example.propTypes.text,
      type: Example.propTypes.type
    }).isRequired
  ).isRequired
};
