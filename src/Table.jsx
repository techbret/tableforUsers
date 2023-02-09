import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'



const data = [
    {
        district: "A",
        originalAdmin: "User Alpha",
        districtAdmin: "Alpha Admin",
        provider: "Provider 1",
        users: [
            {
                name: "User1 f_name",
                role: "userone@gmail.com",
                phone: "(555)-555-5555",

            },
            {
                name: "User2 f_name",
                role: "usertwo@gmail.com",
                phone: "(222)-222-2222",
            },
            {
                name: "User3 f_name",
                role: "userthree@gmail.com",
                phone: "(333)-333-3333",
            },
            {
                name: "User4 f_name",
                role: "userfour@gmail.com",
                phone: "(444)-444-4444",
            },
        ]
    },
    {
        district: "B",
        originalAdmin: "User Bravo",
        districtAdmin: "Bravo Admin",
        provider: "Provider 2",
        users: [
            {
                name: "User5 f_name",
                role: "userone@gmail.com",
                phone: "(555)-555-5555",

            },
            {
                name: "User6 f_name",
                role: "usertwo@gmail.com",
                phone: "(222)-222-2222",
            },
            {
                name: "User7 f_name",
                role: "userthree@gmail.com",
                phone: "(333)-333-3333",
            },
            {
                name: "User8 f_name",
                role: "userfour@gmail.com",
                phone: "(444)-444-4444",
            },
            {
                name: "User9 f_name",
                role: "userone@gmail.com",
                phone: "(555)-555-5555",

            },
            {
                name: "User10 f_name",
                role: "usertwo@gmail.com",
                phone: "(222)-222-2222",
            },
            {
                name: "User11 f_name",
                role: "userthree@gmail.com",
                phone: "(333)-333-3333",
            },
            {
                name: "User8 f_name",
                role: "userfour@gmail.com",
                phone: "(444)-444-4444",
            },
        ]
    },
    {
        district: "C",
        originalAdmin: "User Charlie",
        districtAdmin: "Charlie Admin",
        provider: "Provider 2",
        users: []
    },
    {
        district: "D",
        originalAdmin: "User Delta",
        districtAdmin: "Delta Admin",
        provider: "Provider 2",
        users: [
            {
                name: "User5 f_name",
                role: "userone@gmail.com",
                phone: "(555)-555-5555",

            },
            {
                name: "User6 f_name",
                role: "usertwo@gmail.com",
                phone: "(222)-222-2222",
            },
            {
                name: "User7 f_name",
                role: "userthree@gmail.com",
                phone: "(333)-333-3333",
            },
            {
                name: "User8 f_name",
                role: "userfour@gmail.com",
                phone: "(444)-444-4444",
            },
            {
                name: "User9 f_name",
                role: "userone@gmail.com",
                phone: "(555)-555-5555",

            },
            {
                name: "User10 f_name",
                role: "usertwo@gmail.com",
                phone: "(222)-222-2222",
            },
            {
                name: "User11 f_name",
                role: "userthree@gmail.com",
                phone: "(333)-333-3333",
            },
            {
                name: "User8 f_name",
                role: "userfour@gmail.com",
                phone: "(444)-444-4444",
            },
        ]
    }
];


export default function Table() {
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [open, setOpen] = useState(true)
    const [modalVisible, setModalVisible] = useState(false);
    const [viewAll, setViewAll] = useState(false)
    const [edit, setEdit] = useState(false)

    const handleSelect = (e, users) => {
        e.preventDefault();
        setSelectedUsers(users);
        setOpen(true);
        setModalVisible(true);
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">User Access</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Create a nested table structure where each provider and its associated users in a district are grouped together in a sub-table. Here's an example:
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:w-auto"
                        onClick={() => {setViewAll(true)}}
                    >
                        View All
                    </button>
                </div>
            </div>
            <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                District/Listing
                            </th>
                            <th
                                scope="col"
                                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                            >
                                Organization Admin
                            </th>
                            <th
                                scope="col"
                                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                            >
                                District Admin
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Provider
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {data.map((district, index) => (
                            <tr key={index}>
                                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                    District {district.district}
                                    <dl className="font-normal lg:hidden">
                                        <dd className="mt-1 truncate text-gray-700">{district.originalAdmin}</dd>
                                        <dd className="mt-1 truncate text-gray-500 sm:hidden">{district.districtAdmin}</dd>
                                    </dl>
                                </td>
                                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{district.originalAdmin}</td>
                                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{district.districtAdmin}</td>
                                <td className="px-3 py-4 text-sm text-gray-500">
                                    
                                    {district.users.length > 0 ? (
                                        <button className="text-blue-500"
                                        onClick={(e) => { handleSelect(e, district.users) }}
                                    >View Users</button>

                                    ) : <div>No Current Users</div>}
                                    
                                
                                </td>
                                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <button href="#" className="text-sky-600 hover:text-sky-900" onClick={() => {setEdit(true)}}>
                                        Edit<span className="sr-only">, {district.name}</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {modalVisible ? (
                    <Transition.Root show={open} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={setOpen}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            <div className="fixed inset-0 z-10 overflow-y-auto">
                                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    >
                                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                                            <div>
                                                <div className="mx-auto text-center font-bold text-xl">
                                                    List of Users for District
                                                </div>


                                                <div className="mt-3 sm:mt-5">
                                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                        {selectedUsers.map((user, index) => (
                                                            <div key={index}>
                                                                <div className='grid grid-cols-3 gap-4'>
                                                                    <button className='col-span-1 text-blue-500'><div>{user.name}</div></button>
                                                                    <div>{user.role}</div>
                                                                    <div>{user.phone}</div>

                                                                </div>

                                                            </div>
                                                        ))}
                                                    </Dialog.Title>
                                                    <div className="mt-2">
                                                        <p className="text-sm text-gray-500 text-center mt-12">
                                                            This Modal will display a list off all the users for that district. Each will link to their user profile cards
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-5 sm:mt-6">
                                                <button
                                                    type="button"
                                                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:text-sm"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    Go back to table
                                                </button>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition.Root>

                ) : <></>}
            </div>
            {viewAll ? (
                <>
            <div className='mt-12 text-center text-5xl font-bold'>This button should route them to an expanded list of users. How you have it currently will work for now. So keep this button available</div>
            <button className='flex mt-4 bg-sky-500 hover:bg-sky-700 text-white p-6 rounded-lg text-2xl mx-auto'
            onClick={()=>{setViewAll(false)}}>Close This Notice</button>
            </>
            ) : <></>}
            {edit ? (
                <>
            <div className='mt-12 text-center text-5xl font-bold'>The edit button will allow an enterprise Admin to edit District/Listing user access information</div>
            <button className='flex mt-4 bg-sky-500 hover:bg-sky-700 text-white p-6 rounded-lg text-2xl mx-auto'
            onClick={()=>{setEdit(false)}}>Close This Notice</button>
            </>
            ) : <></>}

        </div>
    )
}


