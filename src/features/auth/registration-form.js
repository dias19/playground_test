import React, { useState, useContext } from "react";
import FormInput from "~/components/ui/form-input";
import { PhoneIcon } from "../../../public/icons/phone";
import LockerIcon from "../../../public/icons/locker";
import { Button } from "~/components/ui/button";
import toast from "react-hot-toast";
import { fetchWithBaseUrl } from "~/utils/fetch";
import { GlobalContext } from "~/components/global-provider";
import { useRouter } from "next/navigation";

export function RegistrationForm() {
  const { updateToken } = useContext(GlobalContext);

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    repeatedPassword: "",
    isPrivacyAccepted: false,
  });

  const isPasswordsMatching =
    formValues.repeatedPassword === formValues.password;

  const isPasswordAtLeastFiveCharacters = formValues.password.length >= 5;

  const isFieldEmpty =
    formValues.email === "" ||
    formValues.password === "" ||
    formValues.repeatedPassword === "";

  const isPrivacyAccepted = formValues.isPrivacyAccepted;

  const isValid =
    isPrivacyAccepted &&
    !isFieldEmpty &&
    isPasswordAtLeastFiveCharacters &&
    isPasswordsMatching;

  const router = useRouter();

  const handleSubmit = async () => {
    if (isValid) {
      const result = await fetchWithBaseUrl("/user", "POST", {
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
      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        toast.error(
          "Допущена ошибка в форме. Проверьте, совпадают ли пароли или согласились ли с правилами."
        );
      }
    }
  };

  const validateForm = () => {
    if (formValues.password.length < 5) {
      return "Пароль должен состоять из 5 символов или больше.";
    }

    if (isFieldEmpty) {
      return "Все поля обязательны.";
    }

    return null;
  };

  return (
    <div className="space-y-4">
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
      <FormInput
        label="Повторите пароль"
        value={formValues.repeatedPassword}
        isPasswordField={true}
        Icon={<LockerIcon />}
        onChange={(e) =>
          setFormValues({ ...formValues, repeatedPassword: e.target.value })
        }
      />
      <div className="space-y-6">
        <div className="flex items-baseline gap-10">
          <input
            type="checkbox"
            className="w-10 h-10"
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
      <div className="my-4">
        <Button type="yellow" onClick={handleSubmit}>
          Зарегестрироваться
        </Button>
      </div>
    </div>
  );
}
