import React, { useState } from "react";
import { EyeIcon } from "../../../public/icons/eye";

export default function FormInput({
  Icon,
  label,
  value,
  onChange,
  isPasswordField,
}) {
  const [isShowField, setShowField] = useState(false);

  const inputType = isPasswordField
    ? isShowField
      ? "text"
      : "password"
    : "text";

  return (
    <div>
      <p className="text-sm font-bold text-white mb-2">{label}</p>
      <div className="h-input rounded-input bg-white text-sm flex items-center px-4 py-2">
        {Icon}
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          className="grow h-full text-base text-black outline-none mx-2"
        />
        {isPasswordField && (
          <EyeIcon onClick={() => setShowField(!isShowField)} />
        )}
      </div>
    </div>
  );
}
