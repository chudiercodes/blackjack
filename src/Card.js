import React, { useEffect } from 'react';

const Card = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = './elements.cardmeister.full';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
       <card-t rank="Queen" suit="Hearts"></card-t>
    </div>
  );
};

export default Card;