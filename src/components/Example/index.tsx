import React from 'react';
import proptypes, {InferProps} from 'prop-types';
import styled from 'styled-components';


type ExampleType = "good" | "bad" ;

const colorMapping = {
    background: {
        good: '#ccffc7',
        bad: '#eb6c6e'
    },
    border: {
        good: '#86ff7a',
        bad: '#eb2a2d'
    }
}

const ExampleBlock = styled.div<{ type: ExampleType }>`
  background-color: ${props => colorMapping.background[props.type]};
  border-style: solid;
  border-width: 2px;
  border-color: ${props => colorMapping.border[props.type]};
  box-shadow: 3px 3px 3px 3px gray;
  padding: 6px;

  h3 {
    font-size: 30px;
  }

  .text {
    text-align: justify;
  }
`;

export default function Example({
  title,
  image,
  text,
  type
}: InferProps<typeof Example.propTypes>) {
  return (
    <ExampleBlock type={type}>
      <h3> {title} </h3>
      <img alt="картинка примера" src={image}></img>
      <div className="text">{text}</div>
    </ExampleBlock>
  );
}

Example.propTypes = {
  title: proptypes.string.isRequired,
  image: proptypes.string.isRequired,
  text: proptypes.string.isRequired,
  type: proptypes.oneOf<ExampleType>(["good", "bad"]).isRequired
};