import { Fragment } from "react";
const notesData = [
    {
        "id": 1,
        "title": "Note Title",
        "description": "Lorem Ipsum, often referred to as lipsum, is a widely used placeholder text in graphic design, publishing, and web development. Here’s a detailed overview of its origins, usage, and significance.",
        "tags": ["Tag 1", "+2"],
        "date": "2024-01-04"
    },
    {
        "id": 2,
        "title": "Note Title",
        "description": "Lorem Ipsum, often referred to as lipsum, is a widely used placeholder text in graphic design, publishing, and web development. Here’s a detailed overview of its origins, usage, and significance.",
        "tags": ["Tag 1", "+2"],
        "date": "2024-01-04"
    },
    {
        "id": 3,
        "title": "Note Title",
        "description": "Lorem Ipsum, often referred to as lipsum, is a widely used placeholder text in graphic design, publishing, and web development. Here’s a detailed overview of its origins, usage, and significance.",
        "tags": ["Tag 1", "+2"],
        "date": "2024-01-04"
    }

]

const resourcesData = {
    "group1": [
        { "id": 1, "title": "Title 1", "author": "Author 1" },
        { "id": 2, "title": "Title 2", "author": "Author 2" },
        { "id": 3, "title": "Title 3", "author": "Author 3" }
    ],
    "group2": [
        { "id": 4, "title": "Title 4", "author": "Author 4" },
        { "id": 5, "title": "Title 5", "author": "Author 5" },
        { "id": 6, "title": "Title 6", "author": "Author 6" },
        { "id": 7, "title": "Title 7", "author": "Author 7" },
        { "id": 8, "title": "Title 8", "author": "Author 8" },
        { "id": 9, "title": "Title 9", "author": "Author 9" }
    ]
}


export default function RightPanel({ onNodeClick }) {
    return (
        <Fragment>
            <div
                id="main-pane"
                className="flex bg-white  h-full w-full"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "100%",
                    overflow: "hidden",
                    width: "100%"
                }}

            >

                <div
                    className="relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90 z-[100000]"
                    role="separator"
                    tabIndex={0}

                >
                    <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-grip-vertical h-2.5 w-2.5"
                        >
                            <circle cx={9} cy={12} r={1} />
                            <circle cx={9} cy={5} r={1} />
                            <circle cx={9} cy={19} r={1} />
                            <circle cx={15} cy={12} r={1} />
                            <circle cx={15} cy={5} r={1} />
                            <circle cx={15} cy={19} r={1} />
                        </svg>
                    </div>
                </div>
                <div
                    className="h-full z-40"
                    data-panel=""
                    data-panel-group-id=":R1ultb:"
                    data-panel-id=":rn:"
                    data-panel-size={60.0}
                    style={{ flex: "60 1 0px", overflow: "hidden" }}
                >
                    <div className="h-screen overflow-y-auto flex flex-col gap-6 pb-8 bg-card">
                        <div className="flex justify-between p-4 pb-0">
                            <div className="flex gap-2">
                                <button
                                    onClick={() => onNodeClick()}
                                    className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-panel-right-close"
                                    >
                                        <rect width={18} height={18} x={3} y={3} rx={2} />
                                        <path d="M15 3v18" />
                                        <path d="m8 9 3 3-3 3" />
                                    </svg>
                                </button>
                                <button
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                                    disabled=""
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-maximize"
                                    >
                                        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                                        <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                                        <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                                        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                                    </svg>
                                </button>
                                <button
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                                    disabled=""
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-columns2"
                                    >
                                        <rect width={18} height={18} x={3} y={3} rx={2} />
                                        <path d="M12 3v18" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                                    disabled=""
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-link"
                                    >
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                    </svg>
                                </button>
                                <button
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                                    disabled=""
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-ellipsis-vertical"
                                    >
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6  px-8">
                            <h2 className="text-2xl font-bold">Second Page</h2>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-wrap gap-2  items-center">
                                    <small className="w-32 text-sm font-medium leading-none">
                                        Parent
                                    </small>
                                    <div className="flex flew-wrap gap-2 h-fit">
                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white shadow hover:bg-black/80">
                                            Parent Page
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 items-center">
                                    <small className="w-32 text-sm font-medium leading-none">
                                        Children
                                    </small>
                                    <div className="flex flew-wrap gap-2 h-fit">
                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white shadow hover:bg-black/80">
                                            Red
                                        </div>
                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white shadow hover:bg-black/80">
                                            +2
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 items-center">
                                    <small className="w-32 text-sm font-medium leading-none">
                                        Links
                                    </small>
                                    <div className="flex flew-wrap gap-2 h-fit">
                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white shadow hover:bg-black/80">
                                            Goanna
                                        </div>
                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white shadow hover:bg-black/80">
                                            +1
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full"
                            />
                            <div className="prose w-full max-w-none">
                                <div>
                                    <div contentEditable="true" role="textbox"
                                        translate="no"
                                        className="tiptap ProseMirror"
                                        tabIndex={0}
                                    >
                                        <div className="w-full bg-white lg:p-8">
                                            <h1 className="text-3xl font-bold text-black mb-4">Hi there,</h1>
                                            <p className="text-lg text-gray-800 mb-4">
                                                this is a <span className="font-bold text-blue-600">basic</span> example of <span className="italic text-pink-500">tiptap</span>. Sure, there are all kinds of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
                                            </p>
                                            <ul className="list-disc list-inside mb-4">
                                                <li className="text-lg text-gray-800">That’s a bullet list with one …</li>
                                                <li className="text-lg text-gray-800">… or two list items.</li>
                                            </ul>

                                            <p className="text-lg text-gray-800 mb-4">
                                                Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
                                            </p>

                                            <pre className="bg-gray-800 text-white p-4 rounded-md mb-4">
                                                <code>body {'{'}</code><br />
                                                <code>  display: none;</code><br />
                                                <code>{'}'}</code>
                                            </pre>

                                            <blockquote className="italic text-gray-500 border-l-4 border-gray-300 pl-4 mt-6">
                                                “Wow, that’s amazing. Good work, boy! 👏”<br />
                                                <span className="text-gray-400">— Mom</span>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full"
                            />
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center mb-8">
                                    <h1 className="text-4xl font-bold">Notes</h1>
                                    <button className="flex items-center gap-2 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
                                        + New Note
                                    </button>
                                </div>

                                {notesData.map((note, index) => (
                                    <Fragment key={index}>

                                        <div className="rounded-xl border border-gray-200 text-card-foreground p-4 bg-transparent min-h-40 cursor-pointer">
                                            <div className="flex gap-4">
                                                <div className="min-w-10 max-w-32 w-full aspect-square bg-[#f5f5f5] rounded-lg" />
                                                <div className="flex flex-col gap-2 justify-between">
                                                    <div>
                                                        <h3 className="font-semibold">{note.title}</h3>
                                                        <p className="text-sm text-muted-foreground line-clamp-3">
                                                            {note.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 items-center justify-between">
                                                        <div className="flex flex-wrap items-center gap-2">
                                                            {note.tags.map((tag, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="bg-black text-white  text-sm py-1 px-3 rounded-md"
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground min-w-fit">
                                                            04 Jan 24
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                ))}
                            </div>
                            <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full"
                            />
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                                        Resources
                                    </h2>
                                    <div className="flex gap-2">
                                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-8 rounded-md px-3 text-xs">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-settings2"
                                            >
                                                <path d="M20 7h-9" />
                                                <path d="M14 17H5" />
                                                <circle cx={17} cy={17} r={3} />
                                                <circle cx={7} cy={7} r={3} />
                                            </svg>{" "}
                                            View
                                        </button>
                                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-black text-white shadow hover:bg-black/90 h-8 rounded-md px-3 text-xs">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-plus"
                                            >
                                                <path d="M5 12h14" />
                                                <path d="M12 5v14" />
                                            </svg>{" "}
                                            New Resource
                                        </button>
                                    </div>
                                </div>



                                <div className="flex flex-col gap-4">
                                    <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                        Group 1
                                    </h2>
                                    <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-4 w-full">
                                        {resourcesData.group1.map((item) => (
                                            <div key={item.id} className="flex flex-col last:col-span-2 lg:last:col-span-1">
                                                <div className="bg-gray-200 rounded-lg w-full h-[121px] lg:h-64"></div>
                                                <div className="mt-2">
                                                    <h3 className="font-semibold">{item.title}</h3>
                                                    <p className="text-gray-600 text-sm">{item.author}</p>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                        Group 2
                                    </h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-4 w-full">
                                        {resourcesData.group2.map((item) => (
                                            <div key={item.id} className="flex flex-col w-full">
                                                <div className="bg-gray-200 rounded-lg w-full h-32"></div>
                                                <div className="mt-2">
                                                    <h3 className="font-semibold text-sm">{item.title}</h3>
                                                    <p className="text-gray-600 text-xs">{item.author}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Fragment>
    )
}