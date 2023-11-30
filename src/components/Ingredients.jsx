import { memo } from "react";
import saladImg from  '../assets/salad.png'
import baconImg from  '../assets/bacon.png'
import cheeseImg from  '../assets/cheese.png'
import meatImg from  '../assets/meat.png'

// memo skip re-rendering when its props are the same as on last render

// push the ingredients in the respective array and show them on the burger layout
export const Salad = memo(({ count }) => {
  const rows = [];
  for (let i = 0; i < count; i++) {
    rows.push(
      <div key={Date.now() + i} className="row">
        <img src={saladImg} alt="Salad" />
      </div>
    );
  }
  //   console.log("Salad component rendered");
  return rows;
});
export const Bacon = memo(({ count }) => {
  const rows = [];
  for (let i = 0; i < count; i++) {
    rows.push(
      <div key={Date.now() + i} className="row">
        <img src={baconImg} alt="Bacon" />
      </div>
    );
  }
  //   console.log("bacon component rendered");
  return rows;
});
export const Cheese = memo(({ count }) => {
  const rows = [];
  for (let i = 0; i < count; i++) {
    rows.push(
      <div key={Date.now() + i} className="row">
        <img src={cheeseImg} alt="Cheese" />
      </div>
    );
  }
  //   console.log("cheese component rendered");
  return rows;
});
export const Meat = memo(({ count }) => {
  const rows = [];
  for (let i = 0; i < count; i++) {
    rows.push(
      <div key={Date.now() + i} className="row">
        <img src={meatImg} alt="Meat" />
      </div>
    );
  }
  //   console.log("meat component rendered");
  return rows;
});
