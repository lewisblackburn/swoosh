import React, { Fragment } from 'react'
import Link from "next/link"
import { Menu, Transition } from '@headlessui/react'

interface DropdownProps {
    title: string
    items: {
        name: string
        link: string
    }[]
}

export const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="capitalize inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base">
                    {title}
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
                <Menu.Items className="absolute mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        {items?.map((item, index) => {
                            return (<Menu.Item key={index}>
                                {({ active }) => (
                                    <Link href={`/${item.link}`}>
                                        <button className={`${active && 'bg-gray-200'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                            {item.name}
                                        </button>
                                    </Link>
                                )
                                }
                            </Menu.Item>
                            )
                        })}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu >

    )
}
