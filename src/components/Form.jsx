import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

//Validation for Each input elemenst in the form
const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.name) {
    errors.name = "Please Enter a valid Name";
  } else if (!/^[a-zA-Z]+$/.test(values.name)) {
    errors.name = "Name should only contain Alphabets";
  }
  if (!values.street) {
    errors.street = "Please Enter a valid Street";
  }

  if (!values.postalcode) {
    errors.postalcode = "Please Enter a valid Postal Code";
  } else if (!/^\d+$/.test(values.postalcode)) {
    errors.postalcode = "Must only contain Numbers";
  } else if (values.postalcode.length < 5) {
    errors.postalcode = "Too Short";
  }

  if (!values.country) {
    errors.country = "Please Enter a valid Country";
  } else if (!/^[a-zA-Z]+$/.test(values.country)) {
    errors.country = "Country should only contain Alphabets";
  }

  return errors;
};

export default function Form({
  ingredients,
  totalPrice,
  setOrderlist,
  setCheckout,
}) {
  //state to check wheathe to show loader on the screen or not
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  //runs when the Contact form is submitted and redirects to the Orders page
  if (loading) {
    setTimeout(() => {
      setLoading(false);
      navigate("/orders");
    }, 3000);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      street: "",
      postalcode: "",
      country: "",
      email: "",
    },

    validate,

    onSubmit: (values) => {
      //Adds the current order in the order list
      setOrderlist((prevOrderList) => {
        const updatedOrderList = [
          ...prevOrderList,
          { ingredients, totalPrice },
        ];
        return updatedOrderList;
      });
    },
  });

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <h2>Enter your contact data:</h2>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name ? <div>{formik.errors.name}</div> : null}
          </div>
          <div className="mb-3">
            <label htmlFor="street" className="form-label">
              Street
            </label>
            <input
              type="text"
              id="street"
              className="form-control"
              name="street"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.street}
            />
            {formik.errors.street ? <div>{formik.errors.street}</div> : null}
          </div>
          <div className="mb-3">
            <label htmlFor="postalcode" className="form-label">
              Postal Code
            </label>
            <input
              type="text"
              id="postalcode"
              className="form-control"
              name="postalcode"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.postalcode}
            />
            {formik.errors.postalcode ? (
              <div>{formik.errors.postalcode}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <input
              type="text"
              id="country"
              className="form-control"
              name="country"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
            />
            {formik.errors.country ? <div>{formik.errors.country}</div> : null}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>

          {/* when pressed cancel it will take you back to the main page */}
          <div className="d-flex justify-content-center">
            <button
              onClick={() => setCheckout(false)}
              className="btn btn-danger px-4 m-3"
            >
              Cancel
            </button>

            {/* When Clicked will submit the form Set loading to true and displays the loader on the screen*/}
            <button
              type="submit"
              onClick={() => setLoading(true)}
              className="btn btn-success px-5 m-3"
              // keep the button disabled until the input in the form is valid
              disabled={!(formik.isValid && formik.dirty)}
            >
              Confirm Order
            </button>

            {/* displays the loader if the submit button is clicked */}
            {loading ? (
              <div className="spinner-border loader" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </>
  );
}
