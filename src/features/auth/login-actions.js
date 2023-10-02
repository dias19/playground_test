import React from "react";
import { Button } from "~/components/ui/button";
import { useQueryParams } from "~/hooks/useQueryParams";
import { Dialogs } from "./dialogs";

export function LoginActions() {
  const { action, setQueryParams } = useQueryParams();

  const onDialogOpen = (action) => setQueryParams({ action });

  const onDialogClose = () => setQueryParams({ action: undefined });

  return (
    <div className="flex flex-col h-withNavItems px-7">
      <h3 className="text-2xl text-[#1E1E2E] font-bold mt-16 mb-20">
        Выберите действие
      </h3>
      <div className="space-y-5">
        <Button type="yellow" onClick={() => onDialogOpen("openLogin")}>
          Login
        </Button>
        <Button type="blue" onClick={() => onDialogOpen("openRegistration")}>
          Registration
        </Button>
      </div>
      <Dialogs action={action} onClose={onDialogClose} />
    </div>
  );
}
