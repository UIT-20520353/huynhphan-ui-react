import React from "react";
import { NumericFormat } from "react-number-format";

interface INumberFormatProps {
  value: number | string;
  thousandSeparator?: string | boolean | undefined;
  displayType?: "input" | "text";
  suffix?: string | undefined;
  prefix?: string | undefined;
}

const NumberFormat: React.FunctionComponent<INumberFormatProps> = ({
  value,
  thousandSeparator = ",",
  displayType = "text",
  suffix,
  prefix,
}) => {
  return (
    <NumericFormat
      value={value}
      thousandSeparator={thousandSeparator}
      displayType={displayType}
      suffix={suffix}
      prefix={prefix}
    />
  );
};

export default NumberFormat;
