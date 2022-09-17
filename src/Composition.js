import React from 'react';
// COMPOSITION OVER > INHERITANCE

function Composition() {
  return (
    <>
      <Card title="Card-1" desc="This is card 1" />
      <Card title="Card-2" desc="This is card 2" footer="Only here" />
      <Card title="Card-3" desc="This is card 3" link="www.google.com" />
    </>
  );
}

// When we have a component, but only some props are different.
// Or maybe we want it to look a little bit different.
// We just pass the props, which we really need.
function Card({ title, desc, footer, link }) {
  return (
    <div>
      <p>{title}</p>
      <p>{desc}</p>
      <p>{footer}</p>
      <a href={link}>Go to google</a>
    </div>
  );
}

// BAD PRACTICE
// function Card1({ title, desc}) {
//   return (
//     <div>
//       <p>{title}</p>
//       <p>{desc}</p>
//     </div>
//   );
// }

// function Card2({ title, desc, footer }) {
//   return (
//     <div>
//       <p>{title}</p>
//       <p>{desc}</p>
//       <p>{footer}</p>
//     </div>
//   );
// }

export default Composition;
