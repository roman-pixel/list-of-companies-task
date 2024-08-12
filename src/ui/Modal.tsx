import {
  cloneElement,
  createContext,
  JSXElementConstructor,
  ReactElement,
  useContext,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import { useOutsideClick } from '../hooks/useOutsideClick';
import { HiXMark } from 'react-icons/hi2';
import { IconContext } from 'react-icons/lib';
import { useKeyboardShortcut } from '../hooks/useKeyboardShortcut';

interface IModalContext {
  openName: string;
  open: (name: string) => void;
  close: () => void;
}

interface IModal {
  children: any;
}

interface IOpen {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  opens: string;
}

const defaultContextValue: IModalContext = {
  openName: '',
  open: () => {},
  close: () => {},
};

const ModalContext = createContext<IModalContext>(defaultContextValue);

function Modal({ children }: IModal) {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }: IOpen) {
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

  useKeyboardShortcut({ key: 'Escape', callback: close });

  if (name !== openName) return null;

  return createPortal(
    // overlay
    <div className="fixed left-0 top-0 z-50 h-screen w-full bg-white/20 backdrop-blur-sm transition-all duration-500 dark:bg-slate-500/20">
      {/* modal container */}
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-8 pb-8 pt-9 shadow-lg transition-all duration-500 dark:bg-slate-800"
        ref={ref}
      >
        <h1 className="absolute top-5 text-xl font-semibold text-gray-700 dark:text-gray-100">
          {header}
        </h1>
        <button
          className="absolute right-7 top-5 flex translate-x-3 items-center justify-center rounded-lg border-none bg-none p-1 text-gray-800 transition-all duration-200 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-slate-900"
          onClick={close}
        >
          <IconContext.Provider
            value={{ size: '1.5rem', className: 'stroke-1' }}
          >
            <HiXMark />
          </IconContext.Provider>
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
