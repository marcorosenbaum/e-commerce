import * as Dialog from "@radix-ui/react-dialog";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

export default function Menu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="text-md">
        <div className="flex items-center gap-2">
          <HamburgerMenuIcon width={20} height={20} />
          Menü
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed top-0 left-0 inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed top-0 left-0 bottom-0 p-4 bg-white min-w-80 max-w-full">
          <Dialog.Close className="flex items-center gap-2">
            <Cross1Icon className="" />
            close menu
          </Dialog.Close>

          <ul className="p-4 flex flex-col gap-4 text-left w-full">
            <li className="text hover:bg-gray-300 ">
              <a className="p-4" href="/">
                Home
              </a>
            </li>
            <li className="text hover:bg-gray-300 ">
              <a className="p-4" href="/products">
                Products
              </a>
            </li>
            <li className="hover:bg-gray-300 ">
              <a className="p-4" href="/about">
                About
              </a>
            </li>

            <li className="hover:bg-gray-300">
              <a className="p-4" href="/blog">
                Blog
              </a>
            </li>
          </ul>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
