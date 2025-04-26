import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useContext, useState } from "react";
import { LuPanelRight } from "react-icons/lu";
import MobileSideBar from "./MobileSideBar";
import { ChatContext } from "@/context/ChatContext";
import { Trash2Icon } from "lucide-react";


const menuData = {
    mainMenu: [
        { link: "/search", icon: "🔍", label: "Search" },
        { link: "/ask-ai", icon: "🤖", label: "Ask AI" },
        { link: "/", icon: "🏠", label: "Home", active: true },
    ],
    favorites: [
        { link: "/", icon: "📊", label: "Project Management & Task Tracking", color: "text-blue-500" },
        { link: "/", icon: "🍳", label: "Family Recipe Collection & Meal Planning", color: "text-gray-500" },
    ],
    collections: [
        { link: "/", icon: "🏠", label: "Personal Life Management" },
        { link: "/", icon: "👨‍💼", label: "Professional Development" },
        { link: "/", icon: "🎨", label: "Creative Projects" },
    ]
};

const optionsMenu = {
    user: {
        name: "shadcn",
        email: "m@example.com",
    },
    menu: [
        { label: "Upgrade to Pro", icon: "🚀" },
        { label: "Account", icon: "👤" },
        { label: "Billing", icon: "💳" },
        { label: "Notifications", icon: "🔔" },
        { label: "Log out", icon: "↩️" }
    ]
};


function MenuSection({ title, items }) {
    const router = useRouter()
    const { chatSessions, createNewSession, deleteSession, switchSession } = useContext(ChatContext);

    return (
        <div className="mt-8">
            <h4 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:block">{title}</h4>
            <div className="lg:hidden border-t border-gray-200 my-2"></div>
            <ul className="mt-2 space-y-1">
                {items.map((item, index) => (
                    <li key={index}>
                        <div className="flex justify-between">
                            <Link 
                            onClick={()=>{
                                switchSession(item.id)
                            }}
                            href={item?.link ?? "/search"} className="w-[80%]" >
                                <span className={`flex items-center truncate p-2 text-[.875rem] rounded-lg hover:bg-gray-100 group cursor-pointer ${router.pathname == item.link ? "bg-indigo-50 text-indigo-600" : "text-gray-600"} ${item.color || ""}`}>
                                    <span className={`w-5 h-5 text-center ${item.color || "text-gray-500"}`}>{item.icon ?? "💬"}</span>
                                    <span className="ml-3 truncate">{item.label ?? item.title}</span>
                                </span>
                            </Link>
                            {title === 'Collections' &&
                                <span onClick={() => { deleteSession(item.id) }} className="cursor-pointer text-[.875rem] truncate">
                                    <Trash2Icon className="text-[20px] h-[20px]" />
                                </span>
                            }
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}


const SideBarMenus = () => {
    const { chatSessions, createNewSession } = useContext(ChatContext);
    const router = useRouter()
    const [open, setOpen] = useState(false)
    return (
        <Fragment>
            <aside id="sidebar"
                className="relative md:flex md:w-16 lg:min-w-[255px] lg:w-64 bg-white border-r border-gray-200 flex-col h-screen left-0 top-0 transition-all duration-300 ease-in-out z-10 w-64" >
                <div id="user-profile" className="p-4 border-b border-gray-200">
                    <div className="relative">

                        <div className="flex items-center cursor-pointer" onClick={() => { setOpen((e) => !e) }}>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold">
                                    CN
                                </div>
                                <div className="overflow-hidden">
                                    <p className="font-semibold text-sm truncate">shadcn</p>
                                    <p className="text-xs text-gray-500 truncate">me@example.com</p>
                                </div>
                            </div>

                        </div>
                        {open === true &&
                            <div className="absolute -right-56 z-[10000] w-56 bg-white border rounded-lg shadow-lg ">
                                <div className="p-4 border-b">
                                    <div className="font-semibold">{optionsMenu.user.name}</div>
                                    <div className="text-sm text-gray-500">{optionsMenu.user.email}</div>
                                </div>
                                <div className="p-2">
                                    {optionsMenu.menu.map((item, idx) => (
                                        <button
                                            key={idx}

                                            className="flex !text-[.875rem] w-full items-center gap-2 p-2 rounded-md hover:bg-gray-100 text-left text-sm"
                                        >
                                            <span>{item.icon}</span> {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                    <ul className="space-y-2 mt-4">
                        {menuData.mainMenu.map((item, index) => (
                            <li key={index}>

                                <Link href={item.link}
                                    onClick={() => { item.link === "/search" ? createNewSession() : "" }}
                                    >

                                    <span className={`!text-[.875rem] flex items-center p-2 rounded-lg hover:bg-gray-100 group cursor-pointer ${router.pathname == item.link ? "bg-indigo-50 text-indigo-600" : "text-gray-600"}`}>
                                        <span className="w-5 h-5 text-center">{item.icon}</span>
                                        <span className="ml-3 ">{item.label}</span>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Menu */}
                <nav id="main-menu" className="flex-1 p-4 overflow-y-auto">
                    <MenuSection title="Favorites" items={menuData.favorites} />
                    <MenuSection title="Collections" items={chatSessions} />
                    {/* <MenuSection title="Collections" items={menuData.collections} /> */}
                </nav>

                {/* Bottom Links */}
                <div id="bottom-links" className="p-4 border-t border-gray-200">
                    <ul className="space-y-2">
                        <li>
                            <span className="flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100 group cursor-pointer">
                                <span className="text-gray-500 w-5 h-5 text-center">⚙️</span>
                                <span className="ml-3 ">Settings</span>
                            </span>
                        </li>
                        <li>
                            <span className="flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100 group cursor-pointer">
                                <span className="text-gray-500 w-5 h-5 text-center">🚪</span>
                                <span className="ml-3 ">Logout</span>
                            </span>
                        </li>
                    </ul>
                </div>

            </aside>
        </Fragment>
    )
}

export default function Sidebar() {
    const router = useRouter()
    const [translateRight, setTranslateRight] = useState(false);
    const { chatSessions, createNewSession } = useContext(ChatContext);

    const handleClick = () => {
        setTranslateRight((e) => !e);
    };
    return (
        <Fragment>
            <div className="block  lg:hidden font-arial ">
                <div className={`w-64 h-64 bg-lightblue absolute z-[100] transition-transform duration-1000 ease-out transform ${translateRight ? '-translate-x-0' : '-translate-x-full'}`}>
                    <div className="absolute top-0 z-[1000000]">
                        <MobileSideBar />
                    </div>
                    <div className="p-4 ">
                        <LuPanelRight
                            onClick={handleClick}

                            className="w-[25px] h-[25px] absolute top-2 z-[10000000] lg:text-gray-900 cursor-pointer right-[-30px]" />

                    </div>
                </div>
                {translateRight === true &&
                    <div className="bg-black fixed top-0 z-[10] opacity-[0.7] left-0 w-full h-screen"></div>
                }
            </div>
            <div className="hidden  md:block fixed ">
                <div className="relative">
                    <div className={`w-64 h-64 bg-lightblue absolute z-[100] transition-transform duration-1000 ease-out transform ${!translateRight ? '-translate-x-0' : '-translate-x-full'}`}>
                        <SideBarMenus />
                        <LuPanelRight
                            onClick={handleClick}

                            className="w-[25px] h-[25px] absolute top-2 z-[10000000] lg:text-gray-900 cursor-pointer right-[-30px]" />
                    </div>

                </div>
            </div>


        </Fragment>
    );
}
