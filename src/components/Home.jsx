import { useState } from "react";
import { Item } from "./Item";
import Modal from "./Modal";
import BurgerLayout from "./BurgerLayout";
import Form from "./Form";
import "./style.css";

const ingredientList = [
  { id: Date.now() + Math.random() * 102, name: "Salad", cost: 1 },
  { id: Date.now() + Math.random() * 103, name: "Bacon", cost: 2 },
  { id: Date.now() + Math.random() * 104, name: "Cheese", cost: 2 },
  { id: Date.now() + Math.random() * 106, name: "Meat", cost: 3 },
];

function Home({ setOrderlist }) {
  const [ingredients, setIngredients] = useState({
    Salad: 0,
    Bacon: 0,
    Cheese: 0,
    Meat: 0,
  });

  const [totalPrice, setTotalPrice] = useState(4);

  //State to check whether to move to the checkout page or not
  const [checkout, setCheckout] = useState(false);

  return (
    <>
      {/* BurgerLayout contains the Burger items */}
      <BurgerLayout ingredients={ingredients} />

      <br />
      <hr />
      <br />

      <div className="d-flex justify-content-center">
        Total Price ${totalPrice}
      </div>
      <br />

      <div className="d-flex justify-content-center">
        {/* Checkout checks if the user proceed to checkout or not */}
        {checkout ? (
          <div>
            {/* Form contains the Contact Info Form */}
            <Form
              ingredients={ingredients}
              totalPrice={totalPrice}
              setOrderlist={setOrderlist}
              setCheckout={setCheckout}
            />
          </div>
        ) : (
          <section>
            {ingredientList.map((ingredient) => {
              return (
                // Item contains the buttons below the burger
                <Item
                  key={ingredient.id}
                  {...ingredient}
                  ingCount={ingredients[ingredient.name]}
                  setTotalPrice={setTotalPrice}
                  setIngredients={setIngredients}
                />
              );
            })}

            {/* <!-- This Button trigger Modal --> */}
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-success px-5 m-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                disabled={
                  !(
                    ingredients.Salad ||
                    ingredients.Bacon ||
                    ingredients.Cheese ||
                    ingredients.Meat
                  )
                }
              >
                Order
              </button>
            </div>
          </section>
        )}
      </div>
      {/* Modal contains the Order Summary shown after selecting the ingredients for the burger */}
      <Modal
        ingredients={ingredients}
        totalPrice={totalPrice}
        setCheckout={setCheckout}
      />
    </>
  );
}

export default Home;
