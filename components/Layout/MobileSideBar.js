import { Fragment, useContext, useState } from "react";
import { ChevronRight, ChevronDown, Settings, HelpCircle, Sun, Trash2Icon } from 'lucide-react';
import { ChatContext } from "@/context/ChatContext";
import { useRouter } from "next/router";
import Link from "next/link";

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

export default function MobileSideBar() {
    const [openCollection, setOpenCollection] = useState(null);
    const { chatSessions, createNewSession, deleteSession, switchSession } = useContext(ChatContext);
    const router = useRouter()

    const toggleCollection = (label) => {
        setOpenCollection(openCollection === label ? null : label);
    };

    return (
        <Fragment>
            <div className="w-64 min-h-screen bg-white flex flex-col justify-between border-r overflow-hidden">
                <div>
                    {/* Profile */}
                    <div className="p-4 flex flex-col gap-1">
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

                    {/* Main Menu */}
                    <div className="px-4 mt-4 space-y-2">
                        {menuData.mainMenu.map((item, idx) => (
                            <Link
                                href={item.link}
                                key={idx}
                                onMouseDown={() => { item.link === "/search" ? createNewSession() : "" }}
                                className={`flex items-center gap-3 w-full text-sm p-2 rounded-md hover:bg-gray-100 ${item.active ? "bg-gray-200 font-semibold" : "text-gray-700"
                                    } overflow-hidden`}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span className="truncate">{item.label}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="max-h-[2%]  overflow-scroll">
                        {/* Favorites */}
                        <div className="px-4 mt-6">
                            <h4 className="text-xs font-bold text-gray-500 mb-2">Favorites</h4>
                            <div className="flex flex-col gap-2">
                                {menuData.favorites.map((fav, idx) => (
                                    <a
                                        href={fav.link}
                                        key={idx}
                                        className={`flex items-center gap-2 text-sm text-left hover:underline ${fav.color} truncate`}
                                    >
                                        <span className="text-lg">{fav.icon}</span>
                                        <span className="truncate">{fav.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Collections */}
                        <div className="px-4 mt-6">
                            <h4 className="text-xs font-bold text-gray-500 mb-2">Collections</h4>
                            <div className="flex flex-col gap-2">
                                {chatSessions.map((col, idx) => (
                                    <div key={idx} className="overflow-hidden">
                                        <button
                                            onClick={() => { switchSession(col.id); router.push('/search'); }}
                                            className="flex items-center justify-between w-full text-sm text-gray-700 hover:bg-gray-100 p-2 rounded-md overflow-hidden"
                                        >
                                            <div className="flex items-center gap-2 overflow-hidden">
                                                <span className="text-lg">{col.icon ?? "💬"}</span>
                                                <span className="truncate">{col.title}</span>
                                            </div>
                                            <span onClick={() => { deleteSession(col.id) }} className="cursor-pointer text-[.875rem] truncate">
                                                <Trash2Icon className="text-[20px] h-[20px]" />
                                            </span>
                                            {/* {openCollection === col.label ? <ChevronDown size={16} /> : <ChevronRight size={16} />} */}
                                        </button>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="px-4 mb-4 flex flex-col gap-2 text-sm">
                    <button className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-md">
                        <Settings size={16} /> Settings
                    </button>
                    <button className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-md">
                        <HelpCircle size={16} /> Help
                    </button>
                    <button className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-md">
                        <Sun size={16} /> Toggle Theme
                    </button>
                </div>
            </div>
        </Fragment>
    );
}
