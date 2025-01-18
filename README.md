# React 19 useEffect Shallow Comparison Bug

This repository demonstrates a subtle bug related to shallow comparisons in React 19's `useEffect` hook when dealing with objects.  Incorrectly comparing objects within the dependency array can lead to unexpected re-renders and side effects.

## Bug Description
The `MyComponent` component uses `useEffect` to detect changes in a prop called `someObject`. However, it directly compares objects using `!==`, which performs a reference comparison. This means the effect will only trigger if a new object reference is provided, not if the object's properties change.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe that clicking the button increments the count, but changes to the `someObject` prop's properties might not trigger the `useEffect` as expected.

## Solution
The solution involves using a deep comparison of the objects or relying on other comparison methods to compare the object properly within useEffect dependency array. This will ensure that the effect fires whenever the object's properties change, not just when the object reference itself is replaced.