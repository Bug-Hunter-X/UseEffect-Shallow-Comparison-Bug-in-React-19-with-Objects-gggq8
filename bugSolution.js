```javascript
import React, { useState, useEffect } from 'react';
import { isEqual } from 'lodash'; // or any deep comparison library

function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Use deep comparison
    if (!isEqual(props.someObject, prevProps.someObject)) {
      // ...side effects...
      console.log('Object changed!');
    }
  }, [props.someObject]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```