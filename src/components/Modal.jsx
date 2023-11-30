function Modal({ ingredients, totalPrice, setCheckout }) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Order Summary
            </h5>
          </div>
          <div className="modal-body">
            A delicious burger with following ingredients:
            <ul>
              <li>Salad: {ingredients.Salad}</li>
              <li>Bacon: {ingredients.Bacon}</li>
              <li>Cheese: {ingredients.Cheese}</li>
              <li>Meat: {ingredients.Meat}</li>
            </ul>
            Total Price: ${totalPrice}
            <br />
            Continue to checkout
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>

            {/* if pressed then it shows the checkout page */}
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => setCheckout(true)}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal