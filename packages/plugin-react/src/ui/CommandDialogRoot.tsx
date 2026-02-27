import { FC, PropsWithChildren, useEffect, useRef } from "react";
import {
  addCommandDialogOpenListener,
  CommandContext,
} from "@acme/plugin-contracts";

type CommandDialogRootProps = {
  pluginId: string;
  title: string;
};
export const CommandDialogRoot: FC<
  PropsWithChildren<CommandDialogRootProps>
> = ({ children, pluginId, title }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const ctrl = new AbortController();

    addCommandDialogOpenListener<CommandContext>(
      pluginId,
      (e) => {
        console.log(e);
        dialogRef.current?.showModal();
      },
      { signal: ctrl.signal },
    );
    return () => {
      ctrl.abort();
    };
  }, []);

  return (
    <dialog ref={dialogRef}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
    </dialog>
  );
};
