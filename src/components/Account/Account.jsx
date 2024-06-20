import * as Dialog from "@radix-ui/react-dialog";

import {
  PersonIcon,
  Cross1Icon,
  EyeClosedIcon,
  EyeNoneIcon,
  EyeOpenIcon,
} from "@radix-ui/react-icons";

export default function Account() {
  return (
    <Dialog.Root>
      <Dialog.Trigger c>
        <div className="flex items-center gap-2">
          <PersonIcon width={20} height={20} />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay fixed top-0 inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="flex flex-col gap-12 fixed top-0 right-0 h-screen  lg:w-[50%] bg-white min-w-96 px-20 py-10 max-w-full">
          <div className="flex justify-between">
            <p>Register or order as a guest</p>
            <Dialog.Close>
              <Cross1Icon />
            </Dialog.Close>
          </div>
          <div className="flex flex-col gap-2">
            <p>I already have an account</p>
            <p className="text-right text-xs">Required fields*</p>
            <div className="flex flex-col ">
              <label htmlFor="email">Email*</label>
              <input
                className=" p-2 border focus-within:border-black rounded-md focus:outline-none"
                type="email"
                id="email"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="password">Password*</label>
              <div className="flex border focus-within:border-black justify-between items-center rounded-md">
                <input
                  className="w-full p-2 focus:outline-none rounded-md"
                  type="password"
                  id="password"
                />
                <button>
                  <EyeNoneIcon className="mx-2" />
                  {/* <EyeOpenIcon className="mx-2" /> */}
                </button>
              </div>
            </div>
            <p className="underline text-xs">Forgot password?</p>
          </div>

          <button className="border border-black bg-black text-white hover:bg-white hover:text-black rounded-full duration-300 h-12">
            Log in
          </button>
          <hr />
          <p>New costumer</p>
          <p>Benefit from special services by creating a personal account.</p>
          <a href="/signup">
            <Dialog.Close className="rounded-full border w-full border-black hover:border-2 h-12 duration-300">
              Create account
            </Dialog.Close>
          </a>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
