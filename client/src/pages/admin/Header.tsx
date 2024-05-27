import React from 'react'
import logoIcon from '/dashboard/logo.svg'

const Header = () => {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full text-sm py-2.5 sm:py-4 lg:ps-64 bg-inherit">
        <nav
        aria-label="Global"
        className="flex basis-full items-center w-full mx-auto px-4 sm:px-6"
        >
            <div className="me-5 lg:me-0 lg:hidden">
                <a
                aria-label="Preline"
                className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                href="../templates/admin/index.html"
                >
                    <img
                        src={logoIcon}
                        alt=""
                        width={200}
                        height={200}
                    />
                </a>
            </div>
            <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
                <div className="sm:hidden">
                    <button
                        className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                        type="button"
                    >
                        <svg
                        className="flex-shrink-0 size-4"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle
                            cx="11"
                            cy="11"
                            r="8"
                        />
                        <path d="m21 21-4.3-4.3" />
                        </svg>
                    </button>
                </div>

                <strong className='text-2xl'>
                    Dashboard
                </strong>

                <div className="flex flex-row items-center justify-end gap-2">
                    <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                        <button
                        className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                        id="hs-dropdown-with-header"
                        type="button"
                        >
                        <img
                            alt="Image Description"
                            className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-neutral-800"
                            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header
