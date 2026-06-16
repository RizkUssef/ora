"use client";
import Note from "../common/Note";
import PackagesCard from "../common/PackagesCard";

const Packages = () => {
  return (
    <div className="packages-section  py-10">
      <p className="label">PRICING & TIERS</p>
      <h1 className="packages-title">Event Packages</h1>
      <div className="packages-wrapper container">
        <PackagesCard
          type="normal"
          title="Silver"
          price="4,500"
          hint="base"
          features={[
            "6 Hour Hall Access",
            "Essential Staffing",
            "Standard Decor",
          ]}
          buttonText="SELECT SILVER"
        />
        <PackagesCard
          type="premium"
          title="Gold"
          price="8,200"
          hint="base"
          features={[
            "Full Day Hall Access",
            "Premium Catering Team",
            "Floral & Event Design",
            "AV & Lighting Package"
          ]}
          buttonText="SELECT GOLD"
        />
        <PackagesCard
          type="normal"
          title="Platinum"
          price="Custom"
          hint="bespoke"
          features={[
            "Multi-Day Venue Hire",
            "Elite Master Concierge",
            "Fully Bespoke Decor",
          ]}
          buttonText="CONTACT SALES"
        />
      </div>
    </div>
  );
};

export default Packages;
