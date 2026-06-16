"use client";

import Note from "./Note";

interface PackagesCardProps {
  type?: "normal" | "premium";
  title: string;
  price: string;
  hint: string;
  features: string[];
  buttonText?: string;
}
const PackagesCard = ({
  type = "normal",
  title,
  price,
  hint,
  features,
  buttonText = "SELECT SILVER",
}: PackagesCardProps) => {
  return (
    <div className={`${type}-package w-1/4`}>
      {type === "premium" && <Note>Most Popular</Note>}
      <h1 className="packages-sub-title">{title}</h1>
      <h2 className="price">
        ${price}
        <span className="hint">/{hint}</span>
      </h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="text">
            {feature}
          </li>
        ))}
      </ul>
      <button className="btn">{buttonText}</button>
    </div>
  );
};

export default PackagesCard;
