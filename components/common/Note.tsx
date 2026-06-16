"use client";

const Note = ({ children }: { children: React.ReactNode | string }) => {
  return <div className="note">{children}</div>;
};

export default Note;
