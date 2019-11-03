import proptypes, { InferProps } from 'prop-types'
import React from 'react';

export default function Submain({ text }: InferProps<typeof Submain.propTypes>) {
    return (<div>{text}</div>)
}

Submain.propTypes = {
    text: proptypes.string.isRequired
}