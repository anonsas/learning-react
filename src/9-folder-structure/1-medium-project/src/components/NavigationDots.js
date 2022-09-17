import React from 'react';

function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'contact'].map((item, i) => (
        <a
          key={item + i}
          href={`#${item}`}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
}

export default NavigationDots;
