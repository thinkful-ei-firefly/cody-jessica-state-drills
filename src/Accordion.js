import React from 'react';
import './Accordion.css';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showIndex: null };
  }

  getSections() {
    const sectionList = this.props.sections;
    const jdxSectionList = [];

    sectionList.forEach((section, index) => {
      jdxSectionList.push(
        <li key={index}>
          <button
            
            onClick={() => this.setState({ showIndex: index })}
          >
            {section.title}
          </button>
          {(this.state.showIndex === index) && (<p>{section.content}</p>)}
        </li>


      )
    });
    // return jdxSectionList
    return jdxSectionList;
  }

  render() {
    return (
      <main className='App'>
        <ul>
          {this.getSections()}
        </ul>
      </main>
    );
  }
}

