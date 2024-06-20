import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"
import Image from "next/image"
import { Menu, Transition } from "@headlessui/react"
import Link from "next/link"
import { Fragment } from "react"

function Navbar() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }
  return (
    <div className="navbar bg-white-200 2xl:mb-5 3xl:mb-2 rounded-full px-6 sticky top-2 lg:top-[2%] xl:top-[2%] z-50">
      <div className="navbar-start text-black flex gap-2 items-center w-full">
        <Menu as="div">
          <div>
            <Menu.Button className="w-full justify-center bg-zing-800 px-3 py-2 text-sm font-semibold text-white text-black btn-circle btn-ghost">
              {({ open }) =>
                //I used the Built-In state from Headless UI to harmonize between the two icons down below
                open ? (
                  <HiOutlineX className="lg:w-6 lg:h-6 w-5 h-5" />
                ) : (
                  <HiOutlineMenuAlt3 className="lg:w-6 lg:h-6 w-5 h-5" />
                )
              }
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute px-8 lg:origin-left-0 left-0 z-10 lg:w-[30%] w-full divide-y divide-white lg:mt-8 mt-4 origin-top-0 bg-dark-100 text-white focus:outline-none py-2 rounded-3xl">
              <div className="flex flex-col gap-6 p-6">
                <p className="text-gray-500 font-[500]">Menu</p>
                <Menu.Item>
                  <Link
                    href="/"
                    className="block mb-2 lg:text-start text-center text-white-200 lg:text-4xl text-3xl font-[500]"
                  >
                    Projects
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/"
                    className="block mb-2 lg:text-start text-center text-white-200 lg:text-4xl text-3xl font-[500]"
                  >
                    About me
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/"
                    className="block mb-2 lg:text-start text-center text-white-200 lg:text-4xl text-3xl font-[500]"
                  >
                    Stack
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/"
                    className="block mb-2 lg:text-start text-center text-white-200 lg:text-4xl text-3xl font-[500]"
                  >
                    Contact
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <p className="lg:text-lg text-md font-[500] uppercase">Menu</p>
      </div>

      <div className="navbar-center">
        <figure className="lg:w-[3.8rem] w-[3rem]">
          <Image
            src={"/images/logo2.png"}
            alt="logo"
            height={250}
            width={250}
            className="w-full h-full object-fit"
          />
        </figure>
      </div>
      <div className="navbar-end  lg:flex justify-end hidden w-full">
        <button className="btn btn-ghost rounded-full border-dark-100 uppercase text-black font-[500]">
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default Navbar
