import React from 'react';

import Sources from '../components/Sources.jsx';
import NewsStore from '../stores/NewsStore';

export default class Featured extends React.Component {

  render() {
    console.log(NewsStore.getAll());
    const Source = NewsStore.getAll().map((title, i) => <Sources key={i} source={title} />);
    return (
      <div>
        <div className="row">{Source}</div>
      </div>
    );
  }
}
