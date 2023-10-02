import React, { useState, useContext } from "react";
import FormInput from "~/components/ui/form-input";
import { PhoneIcon } from "../../../public/icons/phone";
import LockerIcon from "../../../public/icons/locker";
import { Button } from "~/components/ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { GlobalContext } from "~/components/global-provider";
import { fetchWithBaseUrl } from "~/utils/fetch";

export function LoginForm() {
  const { updateToken } = useContext(GlobalContext);

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    isPrivacyAccepted: false,
  });

  const router = useRouter();

  const isFieldEmpty = formValues.email === "" || formValues.password === "";

  const isPrivacyAccepted = formValues.isPrivacyAccepted;

  const isValid = !isFieldEmpty && isPrivacyAccepted;

  const validateForm = () => {
    if (!isPrivacyAccepted) {
      return "Примите правила соглашения условия.";
    }
    return "Все поля обязательны.";
  };

  const handleSubmit = async () => {
    if (isValid) {
      const result = await fetchWithBaseUrl("/login", "POST", {
        email: formValues.email,
        password: formValues.password,
      });

      if (result.ok) {
        updateToken(result.token);

        router.push("/home");
      } else {
        toast.error(`${result.errors.email ?? result.errors.password}`);
      }
    } else {
      const errorMessage = validateForm();

      toast.error(errorMessage);
    }
  };

  return (
    <div className="space-y-5">
      <FormInput
        label="Ваша почта"
        value={formValues.email}
        isPasswordField={false}
        Icon={<PhoneIcon />}
        onChange={(e) =>
          setFormValues({ ...formValues, email: e.target.value })
        }
      />
      <FormInput
        label="Пароль"
        value={formValues.password}
        isPasswordField={true}
        Icon={<LockerIcon />}
        onChange={(e) =>
          setFormValues({ ...formValues, password: e.target.value })
        }
      />
      <div className="space-y-6">
        <p className="text-[#86BFEB] underline text-xs">Забыли пароль?</p>
        <div className="flex items-baseline gap-4">
          <input
            type="checkbox"
            className="w-5 h-5"
            value={formValues.isPrivacyAccepted}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                isPrivacyAccepted: e.target.checked,
              })
            }
          />
          <div>
            <span className="text-xs font-medium text-white">
              Нажимая кнопку, вы подтверждаете, что ознакомились и соглашаетесь
              с<span className="underline"> Условиями Соглашения!</span>{" "}
              Правилами и политикой конфиденциальности компании
            </span>
          </div>
        </div>
      </div>
      <div className="my-8">
        <Button type="yellow" onClick={handleSubmit}>
          Войти
        </Button>
      </div>
    </div>
  );
}
