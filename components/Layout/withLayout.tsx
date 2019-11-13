import React from 'react';
import Layout from './index'

export default function withLayout() {
    return (Component: any) =>  <Layout><Component/></Layout>
}