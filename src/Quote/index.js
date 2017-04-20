import React, { PropTypes } from 'react';

import './style.less';

export default function Quote(props) {
  return (
    <aside className="bg-dark">
      <div className="container">
        <div className={"call-to-action ctaStyle"}>
          <h2 className={"h2Style"}>
            <span className={"spanStyle1"}>“</span>
            {props.content}
            <span className={"spanStyle2"}>”</span>
            <span className={"author"}>{props.author}</span>
          </h2>
        </div>
      </div>
    </aside>
  );
}

Quote.PropTypes = {
  content: PropTypes.string,
  author: PropTypes.string,
}
