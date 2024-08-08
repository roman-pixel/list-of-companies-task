import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';

import { useOutsideClick } from '../hooks/useOutsideClick';

interface IModalContext {
  openName: string;
  open: (name: string) => void;
  close: () => void;
}

const defaultContextValue: IModalContext = {
  openName: '',
  open: () => {},
  close: () => {},
};

const ModalContext = createContext<IModalContext>(defaultContextValue);

function Modal({ children }: { children: any }) {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({
  children,
  opens: openWindowName,
}: {
  children: any;
  opens: string;
}) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({
  children,
  name,
  header,
}: {
  children: any;
  name: string;
  header: string;
}) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    // overlay
    <div className="fixed left-0 top-0 z-50 h-screen w-full bg-white/20 backdrop-blur-sm transition-all duration-500">
      {/* modal container */}
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-white px-8 py-10 shadow-lg transition-all duration-500"
        ref={ref}
      >
        <h1 className="absolute top-6 text-xl font-semibold text-gray-700">
          {header}
        </h1>
        <button
          className="absolute right-7 top-5 flex h-8 w-8 translate-x-3 items-center justify-center rounded border-none bg-none p-2 text-3xl text-gray-700 transition-all duration-200 hover:bg-gray-200"
          onClick={close}
        >
          &times;
        </button>
        <div className="pt-10">
          {cloneElement(children, { onCloseModal: close })}
        </div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
