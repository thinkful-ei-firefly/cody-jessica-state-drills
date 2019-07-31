import React from 'react';
import ReactDOM from 'react-dom';
import Renderer from 'react-test-renderer'
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

describe('<Accordion sections={sections}/>', () =>{
  it('Renders an empty list when no components are defined', () => {
    const tree = Renderer.create(<Accordion sections={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('renders no sections as active by default', () => {
    const tree = Renderer.create(<Accordion sections={sections} />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('renders a <p> element below the button that was clicked that displays content', () =>{
    const wrapper = shallow(<Accordion sections={sections}/>);
    wrapper.find('button').at(0).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('renders the last section when multiple sections have been clicked', () =>{
    const wrapper = shallow(<Accordion sections={sections}/>);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})