'use client';
import Link from "next/link";

const SecondaryButton = ({label,to}: {label: string, to: string}) => {
  return (
    <Link href={to} className="secondary-btn">
      {label}
    </Link>
  );
};

export default SecondaryButton;
