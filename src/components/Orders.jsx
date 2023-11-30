function Orders({ orderList }) {
  console.log(orderList);
  return (
    <div className="container">
      {/* first checks whether the list is empty or not */}
      {orderList == 0 ? (
        <div>
          <h3>No orders yet</h3>
        </div>
      ) : (
        orderList.map((order) => {
          const { ingredients, totalPrice } = order;
          const { Salad, Cheese, Bacon, Meat } = ingredients;
          return (
            <div
              key={Date.now() + Math.random() * 101}
              className="card pb-3 m-3"
            >
              <div className="card-body">
                Ingredients:
                <span className="border px-1 m-1">Salad - {Salad}</span>
                <span className="border px-1 m-1">Bacon - {Bacon}</span>
                <span className="border px-1 m-1">Cheese - {Cheese}</span>
                <span className="border px-1 m-1">Meat -{Meat}</span>
                <br />
                Price: <b>USD {totalPrice}</b>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
export default Orders;
