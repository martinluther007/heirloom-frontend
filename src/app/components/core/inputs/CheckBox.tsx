import { useRef } from "react";

const CheckBox = ({
  plan,
  price,
  text,
  value,
}: {
  plan: string;
  price: string;
  text: string;
  value: string;
}) => {
  const paymentRef = useRef<any>();
  return (
    <div className="checkbox-cont">
      <input
        type="radio"
        id={plan}
        className="checkbox"
        name="plan"
        value={value}
        ref={paymentRef}
        // onChange={() => payment(paymentRef.current.value)}
      />
      <label htmlFor={plan} className="check-box">
        <div className="checkbox-box">
          <p>{text}</p>
          <h2>{price}</h2>
          <h3>Set up your digital vault now to secure</h3>
        </div>
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default CheckBox;
