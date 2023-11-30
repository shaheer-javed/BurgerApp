import { memo } from "react";

export const Item = memo(
  ({ name, cost, ingCount, setTotalPrice, setIngredients }) => {
    // add ingredients to the list
    function addIng() {
      setTotalPrice((prevTotalPrice) => {
        return (prevTotalPrice += cost);
      });
      setIngredients((prevIngredients) => {
        const updatedIngredients = { ...prevIngredients };
        updatedIngredients[name] += 1;
        return updatedIngredients;
      });
      //   console.log("add ING  called");
    }

    // remove ingredients from the list
    function removeIng() {
      setTotalPrice((prevTotalPrice) => {
        return (prevTotalPrice -= cost);
      });
      setIngredients((prevIngredients) => {
        const updatedIngredients = { ...prevIngredients };
        updatedIngredients[name] -= 1;
        return updatedIngredients;
      });
      //   console.log("remove ING called");
    }
    // console.log("item rendered");
    return (
      <div className="row item">
        <div className="col">
          {name}-{cost}$
        </div>
        <div className="col">
          {/* keeps the button disabled until the ingredient is added in the list */}
          <button
            className={ingCount == 0 ? " btn disabled" : "btn btn-light"}
            onClick={removeIng}
          >
            Less
          </button>
        </div>
        <div className="col">
          <button onClick={addIng} className="btn btn-primary">
            More
          </button>
        </div>
      </div>
    );
  }
);
