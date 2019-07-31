import React from 'react';

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
        <div key={index}>
          <button
            
            onClick={() => this.setState({ showIndex: index })}
          >
            {section.title}
          </button>
          {(this.state.showIndex === index) && (<p>{section.content}</p>)}
        </div>


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

