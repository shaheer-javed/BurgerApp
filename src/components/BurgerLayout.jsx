import { Salad, Cheese, Bacon, Meat } from "./Ingredients";

function BurgerLayout({ ingredients }) {
  return (
    <div className="container d-flex justify-content-center">
      <div>
        <div className="col d-flex justify-content-center burgerlayout">
          <div>
            <div className="row">
              <img src="/burger_top.png" alt="burgertop" />
            </div>
            {/* Displays individual ingredients in the Burger accordingly */}
            <Salad count={ingredients.Salad} />
            <Bacon count={ingredients.Bacon} />
            <Cheese count={ingredients.Cheese} />
            <Meat count={ingredients.Meat} />

            <div className="row">
              <img src="/burger_bottom.png" alt="burgerbottom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BurgerLayout;
