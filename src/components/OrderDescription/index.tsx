import React from "react";
import styled from "styled-components";
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


const DescriptionText = styled.div`
  margin-bottom: 10px;
`;


function ShortFacts({facts}: InferProps<typeof ShortFacts.propTypes>) {
    const FactItem = styled.li`
        list-style: circle;
        margin-bottom: 15px;
    `
    
    return <ul>
        {facts.map(fact => <FactItem> {fact} </FactItem>)}
    </ul>
}

ShortFacts.propTypes = {
    facts: proptypes.arrayOf(proptypes.node.isRequired).isRequired
}


/**
 * Test descprtion
 */
export default function OrderDescription(
  props: InferProps<typeof OrderDescription.propTypes>
) {
 

  const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
    font-size: 25px;

    h2 {
      font-size: 35px;
    }
  `;

 
  return (
    <Wrapper>
        <Logo image={props.orderMarkImage}></Logo>
        <DescriptionText>{props.orderDescriptionText}</DescriptionText>
        <ShortFacts facts={props.facts}/>
    </Wrapper>
  );
}

OrderDescription.propTypes = {
  orderMarkImage: proptypes.string.isRequired,
  orderDescriptionText: proptypes.string.isRequired,
  facts: ShortFacts.propTypes.facts,
};
