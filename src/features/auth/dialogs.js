import React from "react";
import { Dialog } from "~/components/dialog";
import { LoginForm } from "./login-form";
import { RegistrationForm } from "./registration-form";

export function Dialogs({ action, onClose }) {
  return (
    <>
      <Dialog onClose={onClose} open={action === "openLogin"} title="Логин">
        <LoginForm />
      </Dialog>
      <Dialog
        onClose={onClose}
        open={action === "openRegistration"}
        title="Регистрация"
      >
        <RegistrationForm />
      </Dialog>
    </>
  );
}
