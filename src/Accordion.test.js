import React from 'react';
import ReactDOM from 'react-dom';
import Renderer from 'react-test-renderer'
import Accordion from './Accordion';
import { exportAllDeclaration } from '@babel/types';

describe('<Accordion sections={sections}/>', () =>{
  it('Renders <Accodion /> Correctly', () => {
    const tree = Renderer.create(<Accordion sections={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})