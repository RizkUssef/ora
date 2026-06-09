"use client";
import Link from "next/link";

const PrimaryButton = ({ label,to }: { label: string, to: string }) => {
  return (
    <Link href={to} className="primary-btn">
      {label}
    </Link>
  );
};

export default PrimaryButton;
