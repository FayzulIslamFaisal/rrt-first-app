"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const CheckoutPage = () => {
  const [billingInfoOpen, setBillingInfoOpen] = useState(true);
  const [shippingInfoOpen, setShippingInfoOpen] = useState(false);
  const [cartInfoOpen, setCartInfoOpen] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState("cod");

  const toggleBillingInfo = () => {
    setBillingInfoOpen(!billingInfoOpen);
    setShippingInfoOpen(false);
    setCartInfoOpen(false);
  };

  const toggleShippingInfo = () => {
    setShippingInfoOpen(!shippingInfoOpen);
    setBillingInfoOpen(false);
    setCartInfoOpen(false);
  };

  const toggleCartInfo = () => {
    setCartInfoOpen(!cartInfoOpen);
    setBillingInfoOpen(false);
    setShippingInfoOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-4">
        <div className="w-3/4">
          <h1 className="capitalize text-3xl mb-4">Order Summary</h1>

          {/* Billing Information */}
          <div className="billing-info-area pb-3">
            <div className="">
              <h4
                className="flex justify-between items-center cursor-pointer py-1 bg-gray-800 px-4 text-white capitalize"
                onClick={toggleBillingInfo}
              >
                <span>Billing Information</span>
                <FaChevronDown
                  className={`text-white ${
                    billingInfoOpen ? "transform rotate-180" : ""
                  }`}
                />
              </h4>
            </div>
            {billingInfoOpen && (
              <div className="px-4 py-4 bg-gray-600 text-white">
                <form>
                  <div className="mb-3">
                    <label
                      htmlhtmlFor="name"
                      className="pb-2 w-full inline-block"
                    >
                      User Name
                    </label>
                    <input type="text" className="w-full px-3 py-1" id="name" />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlhtmlFor="email"
                      className="pb-2 w-full inline-block"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-1"
                      id="email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlhtmlFor="password"
                      className="w-full pb-2 inline-block"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-1"
                      id="password"
                    />
                  </div>

                  <button
                    type="submit"
                    className=" bg-white px-4 py-2 text-center text-black"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Shipping Information */}
          <div className="shipping-info-area pb-3">
            <div className="">
              <h4
                className="flex justify-between items-center cursor-pointer py-1 bg-gray-800 px-4 text-white capitalize"
                onClick={toggleShippingInfo}
              >
                <span>Shipping Information</span>
                <FaChevronDown
                  className={`text-white ${
                    shippingInfoOpen ? "transform rotate-180" : ""
                  }`}
                />
              </h4>
            </div>
            {shippingInfoOpen && (
              <div className="px-4 py-4 bg-gray-600 text-white">
                <form>
                  <div className="mb-3">
                    <label
                      htmlhtmlFor="address"
                      className="pb-2 w-full inline-block"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-1"
                      id="address"
                      placeholder="address..."
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlhtmlFor="city"
                      className="pb-2 w-full inline-block"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-1"
                      id="city"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlhtmlFor="zipcod"
                      className="w-full pb-2 inline-block"
                    >
                      Zipcod
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-1"
                      id="zipcod"
                    />
                  </div>

                  <button
                    type="submit"
                    className=" bg-white px-4 py-2 text-center text-black"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Cart Information */}
          <div className="cart-info-area pb-3">
            <div className="">
              <h4
                className="flex justify-between items-center cursor-pointer py-1 bg-gray-800 px-4 text-white capitalize"
                onClick={toggleCartInfo}
              >
                <span>Cart Information</span>
                <FaChevronDown
                  className={`text-white ${
                    cartInfoOpen ? "transform rotate-180" : ""
                  }`}
                />
              </h4>
            </div>
            {cartInfoOpen && (
              <div className="px-4 py-4 bg-gray-600 text-white">
                <div className="mb-2 flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="cod"
                    checked={paymentInfo === "cod"}
                    onChange={() => setPaymentInfo("cod")}
                  />
                  <label className="form-check-label" htmlFor="cod">
                    Cash On Delevery
                  </label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={paymentInfo === "dd"}
                    onChange={() => setPaymentInfo("dd")}
                    className="form-check-input"
                    id="dd"
                  />
                  <label className="form-check-label" htmlFor="dd">
                    Debit CarD
                  </label>
                </div>
                {paymentInfo === "dd" && (
                  <div>
                    <h4>Debit Card Information</h4>
                    <div className="mb-3">
                      <label
                        htmlhtmlFor="card-number"
                        className="pb-2 w-full inline-block"
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-1"
                        id="card-number"
                        placeholder="Card Number..."
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlhtmlFor="card-holder-name"
                        className="pb-2 w-full inline-block"
                      >
                        card holder name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-1"
                        id="card-holder-name"
                        placeholder="card-holder-name..."
                      />
                    </div>
                    <div className="mb-3 flex gap-4">
                      <div className=" w-1/2">
                        <label
                          htmlhtmlFor="expiry-date"
                          className="pb-2 w-full inline-block"
                        >
                          Expiry date
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-1"
                          id="expiry-date"
                          placeholder="Expiry date..."
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlhtmlFor="cvv"
                          className="pb-2 w-full inline-block"
                        >
                          cvv
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-1"
                          id="cvv"
                          placeholder="cvv..."
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="w-1/4">
          <div className="text-center font-bold mb-4 capitalize text-2xl">
            Product Summary
          </div>
          <div className="pb-4">
            <h1 className="capitalize font-medium flex justify-between pb-2 border-b-2 border-gray-200 mb-2">
              <span>Total Items </span>
              <span>{/* Add total items count here */}</span>
            </h1>
            <div className="border-b-2 border-gray-200 pb-2"></div>
            <div className="pt-4">
              <strong className="mb-4 flex justify-between items-center cursor-pointer py-1">
                <span>Total Price</span>
                <span>{/* Add total price here */}</span>
              </strong>
              <button className="w-full px-4 py-2 bg-red-500 text-white">
                Proceed To Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
