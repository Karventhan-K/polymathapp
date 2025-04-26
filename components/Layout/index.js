import { Fragment } from "react";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
    const router = useRouter()
    return (
        <Fragment>
            <div className="min-h-screen bg-gray-50 flex ">
                <Sidebar />
                
                {router.pathname == '/' ?
                    <Fragment>
                        {children}
                    </Fragment> :
                    <div className="lg:px-[20px] lg:ml-[250px] w-full">
                        {children}
                    </div>
                }
            </div>
        </Fragment>
    )
}