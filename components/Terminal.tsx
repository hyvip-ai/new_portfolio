import React from 'react';

function Terminal() {
  const handleClick = () => {
    window.open('https://rajat-mondal-terminal-portfolio.netlify.app/');
  };
  return (
    <button className='terminal' onClick={handleClick}>
      Check out the <b>Terminal Version</b>
    </button>
  );
}

export default Terminal;
