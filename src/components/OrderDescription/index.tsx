import React from "react";
import styled from "styled-components";
import { Container, List, Header } from "semantic-ui-react";
import proptypes, { InferProps } from "prop-types";

const Logo = styled.div<{ image: string }>`
  border-style: solid;
  border-radius: 200px;
  min-width: 200px;
  min-height: 200px;
  max-height: 200px;
  max-width: 200px;
  background-image: url(${props => props.image});
  background-size: 200px;
`;

function ShortFacts({ facts }: InferProps<typeof ShortFacts.propTypes>) {
  return (
    <List bulleted>
      {facts.map(fact => (
        <List.Item>{fact}</List.Item>
      ))}
    </List>
  );
}

ShortFacts.propTypes = {
  facts: proptypes.arrayOf(proptypes.node.isRequired).isRequired
};

/**
 * Test descprtion
 */
export default function OrderDescription(
  props: InferProps<typeof OrderDescription.propTypes>
) {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <Container text>
      <Wrapper>
        <Header as="h1"> {props.title} </Header>
        <Logo image={props.orderMarkImage}></Logo>
        <p>{props.orderDescriptionText}</p>
        <ShortFacts facts={props.facts} />
      </Wrapper>
    </Container>
  );
}

OrderDescription.propTypes = {
  title: proptypes.string.isRequired,
  orderMarkImage: proptypes.string.isRequired,
  orderDescriptionText: proptypes.string.isRequired,
  facts: ShortFacts.propTypes.facts
};
