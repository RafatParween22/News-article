import React from 'react';
import { Data } from './data';

const Display = ({ response }) => {
  if (response && response.article) {
    let i = 0;

    while (i < Data.length && response.article[0]) {
      const article = response.article[0];
      Data[i].title = article.title;
      Data[i].description = article.discription;
      Data[i].img = article.image;
      Data[i].about = article.about;

      i++;
    }
  }

  const renderDataItem = (item, index) => (
    <div key={index} className="col-lg-4 col-md-6 mb-4">
      <img src={item.img} alt={item.title} className="data-item img-fluid" />
      <div className="item-container">
        <h3>{item.title}</h3>
      </div>
      <div className="item-container">
        <p>{item.description}</p>
      </div>
      <div className="item-container">
        <a href={item.about}>{item.about}</a>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        {Data.map((item, index) => renderDataItem(item, index))}
      </div>
    </div>
  );
};

export default Display;