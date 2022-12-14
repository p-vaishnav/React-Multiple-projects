import React from 'react';
import Card from './Card';

const CardSection = function(){
    return(
        <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <Card buttonText="One"/>
          <Card buttonText="Two"/>
          <Card buttonText="Three"/>
        </div>
      </div>
    </section>
    );
}

export default CardSection;