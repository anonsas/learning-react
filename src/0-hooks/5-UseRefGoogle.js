import React, { useRef } from 'react';
import { useRouter } from 'next/router';

function UseRefGoogle() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const input = searchInputRef.current.value;
    if (!input) return;
    router.push(`/search?input=${input}`);
  };

  return (
    <form>
      <div>
        <input ref={searchInputRef} type="text" />
      </div>

      <div>
        <button onClick={formSubmitHandler} className="btn">
          Google Search
        </button>
        <button onClick={formSubmitHandler} className="btn">
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
}

export default UseRefGoogle;
