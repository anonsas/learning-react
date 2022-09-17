import React from 'react';

function Count({ text, count }) {
  console.log(`Rendering ${text}`);

  return (
    <p>
      {text} - {count}
    </p>
  );
}

export default React.memo(Count);
