import React from "react";
import { Container, List, Header } from "semantic-ui-react";
import proptypes, { InferProps } from "prop-types";

function ShortFacts({ facts }: InferProps<typeof ShortFacts.propTypes>) {
  return (
    <List bulleted>
      {facts.map((fact,i) => (
        <List.Item key={i}>{fact}</List.Item>
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
  return (
    <Container text>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Header as="h1"> {props.title} </Header>
        <div
          style={{
            borderStyle: "solid",
            borderRadius: "200px",
            minWidth: "200px",
            minHeight: "200px",
            maxHeight: "200px",
            maxWidth: "200px",
            backgroundImage: `url(${props.orderMarkImage})`,
            backgroundSize: "200px"
          }}
        ></div>
        <p>{props.orderDescriptionText}</p>
        <ShortFacts facts={props.facts} />
      </div>
    </Container>
  );
}

OrderDescription.propTypes = {
  title: proptypes.string.isRequired,
  orderMarkImage: proptypes.string.isRequired,
  orderDescriptionText: proptypes.string.isRequired,
  facts: ShortFacts.propTypes.facts
};
