import React, { useState, useEffect } from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import { getCartItems, purchaseCartItems } from "../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Payment = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCartItems = async () => {
      await dispatch(getCartItems());
      handleCheckOut();
    };
    fetchCartItems();
  }, [dispatch]);

  const { cartProducts } = useSelector((state) => state.cart);

  const handleCheckOut = () => {
    if (cartProducts) {
      let totalPrice = 0;
      let totalItems = 0;
      cartProducts.forEach((item) => {
        totalPrice += item.count * item.cartProduct.price;
        totalItems += item.count;
      });
      setTotalPrice(totalPrice);
      setTotalItems(totalItems);
    }
  };

  const handlePurchase = () => {
    dispatch(purchaseCartItems({ totalItems, totalPrice }));
  };

  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16 dark:bg-amazonBlue">
      <div
        className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 dark:bg-amazonLight text-gray-700 dark:text-black"
        style={{ maxWidth: "300px" }}
      >
        <div className="w-full pt-1 pb-5">
          <div className="bg-amazonYellow text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
            <PaymentIcon />
          </div>
        </div>
        <div className="mb-10">
          <h1 className="text-center font-bold text-xl uppercase dark:text-white">
            Secure payment info
          </h1>
        </div>
        <div className="mb-3 flex -mx-2">
          <div className="px-2">
            <label htmlFor="type1" className="flex items-center cursor-pointer">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-amazonYellow"
                name="type"
                id="type1"
                defaultChecked
              />
              <img
                src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                className="h-8 ml-3"
                alt="Card Type 1"
              />
            </label>
          </div>
          <div className="px-2">
            <label htmlFor="type2" className="flex items-center cursor-pointer">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-amazonYellow"
                name="type"
                id="type2"
              />
              <img
                src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                className="h-8 ml-3"
                alt="Card Type 2"
              />
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label
            className="font-bold text-sm mb-2 ml-1 dark:text-white"
            htmlFor="cardName"
          >
            Name on card
          </label>
          <div>
            <input
              className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-amazonYellow transition-colors"
              placeholder="John Smith"
              type="text"
              id="cardName"
            />
          </div>
        </div>
        <div className="mb-3">
          <label
            className="font-bold text-sm mb-2 ml-1 dark:text-white"
            htmlFor="cardNumber"
          >
            Card number
          </label>
          <div>
            <input
              className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-amazonYellow transition-colors"
              placeholder="0000 0000 0000 0000"
              type="text"
              id="cardNumber"
            />
          </div>
        </div>
        <div className="mb-3 -mx-2 flex items-end">
          <div className="px-2 w-1/2">
            <label
              className="font-bold text-sm mb-2 ml-1 dark:text-white"
              htmlFor="expirationMonth"
            >
              Expiration date
            </label>
            <div>
              <select
                className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-amazonYellow transition-colors cursor-pointer"
                id="expirationMonth"
              >
                <option value="01">01 - January</option>
                <option value="02">02 - February</option>
                <option value="03">03 - March</option>
                <option value="04">04 - April</option>
                <option value="05">05 - May</option>
                <option value="06">06 - June</option>
                <option value="07">07 - July</option>
                <option value="08">08 - August</option>
                <option value="09">09 - September</option>
                <option value="10">10 - October</option>
                <option value="11">11 - November</option>
                <option value="12">12 - December</option>
              </select>
            </div>
          </div>
          <div className="px-2 w-1/2">
            <select
              className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-amazonYellow transition-colors cursor-pointer"
              id="expirationYear"
            >
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
          </div>
        </div>
        <div className="mb-10">
          <label
            className="font-bold text-sm mb-2 ml-1 dark:text-white"
            htmlFor="securityCode"
          >
            Security code
          </label>
          <div>
            <input
              className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-amazonYellow transition-colors"
              placeholder="000"
              type="text"
              id="securityCode"
            />
          </div>
        </div>
        <div>
          <button
            onClick={handlePurchase}
            className="block w-full max-w-xs mx-auto bg-amazonYellow hover:bg-amazonYellow focus:bg-amazonYellow text-white rounded-lg px-3 py-3 font-semibold"
          >
            <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;

// import React, { useState } from "react";
// import PaymentIcon from "@mui/icons-material/Payment";
// import Cards from 'react-credit-cards';
// import 'react-credit-cards/es/styles-compiled.css';

// const Payment = () => {
//   const [cvc, setCvc] = useState('');
//   const [expiry, setExpiry] = useState('');
//   const [focus, setFocus] = useState('');
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleInputFocus = (e) => {
//     setFocus(e.target.name);
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case 'cvc':
//         setCvc(value);
//         break;
//       case 'expiry':
//         setExpiry(value);
//         break;
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         break;
//     }
//   }

//   return (
//     <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
//       <div
//         className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
//         style={{ maxWidth: "600px" }}
//       >
//         <div className="w-full pt-1 pb-5">
//           <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
//             <PaymentIcon />
//           </div>
//         </div>
//         <div className="mb-10">
//           <h1 className="text-center font-bold text-xl uppercase">
//             Secure payment info
//           </h1>
//         </div>
//         <div className="mb-3">
//           <Cards
//             cvc={cvc}
//             expiry={expiry}
//             focused={focus}
//             name={name}
//             number={number}
//           />
//         </div>
//         <div className="mb-3 flex -mx-2">
//           {/* Add radio buttons for card type */}
//         </div>
//         <div className="mb-3">
//           <label className="font-bold text-sm mb-2 ml-1" htmlFor="cardName">
//             Name on card
//           </label>
//           <div>
//             <input
//               className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
//               placeholder="John Smith"
//               type="text"
//               id="cardName"
//               name="name"
//               value={name}
//               onChange={handleInputChange}
//               onFocus={handleInputFocus}
//             />
//           </div>
//         </div>
//         {/* Add other input fields for card details */}
//         <div>
//           <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
//             <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;
