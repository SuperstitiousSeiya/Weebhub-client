import React, { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  className: string;
}

const DynamicFontSize: React.FC<Props> = ({ children, className }) => {
  const [fontSize, setFontSize] = useState<number>(20); // Default font size

  useEffect(() => {
    const maxLength = 20; // Define the maximum length of the text before reducing font size
    const minFontSize = 14; // Define the minimum font size
    const maxFontSize = 20; // Define the maximum font size

    let calculatedFontSize =
      maxFontSize - (getChildrenLength(children) - maxLength); // Calculate the font size based on the length of the text
    calculatedFontSize = Math.max(minFontSize, calculatedFontSize); // Ensure the font size doesn't go below the minimum font size

    setFontSize(calculatedFontSize); // Update the font size state
  }, [children]); // Update font size when the text changes

  // Helper function to get the length of children
  const getChildrenLength = (children: ReactNode): number => {
    if (typeof children === "string") {
      return children.length;
    } else if (Array.isArray(children)) {
      return children.reduce((acc, child) => acc + getChildrenLength(child), 0);
    } else {
      return 1;
    }
  };

  return (
    <div style={{ fontSize }} className={` ${className}`}>
      {children}
    </div>
  );
};

export default DynamicFontSize;
