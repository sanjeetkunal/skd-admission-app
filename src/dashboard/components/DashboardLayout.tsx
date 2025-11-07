import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import HeaderBar from "./HeaderBar";
import HeroBanner from "./HeroBanner";
import Sidebar from "./Sidebar";
import BottomDock from "./BottomDock";

const PAGE_META: Record<string, { title: string; icon?: React.ReactNode }> = {
    "/dashboard": { title: "Home" },
    "/dashboard/applications": { title: "My Applications" },
    "/dashboard/documents": { title: "My Documents" },
    "/dashboard/payments": { title: "My Payments" },
    "/dashboard/exam-details": { title: "Exam Details" },
    "/dashboard/query": { title: "My Query" },
    "/dashboard/request-callback": { title: "Request Call Back" },
    "/dashboard/profile": { title: "My Profile" },
};

function MenuIcon({ className = "w-6 h-6" }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
    );
}



function PageHeader({ onOpenMenu }: { onOpenMenu: () => void }) {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const meta = PAGE_META[pathname] || { title: "Dashboard" };

    return (
        <div className="flex min-h-[64px] items-center justify-between rounded-t-lg bg-white px-4">
            {/* mobile menu button */}
            <button
                type="button"
                onClick={onOpenMenu}
                className="mr-2 inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 md:hidden"
                aria-label="Open menu"
            >
                <MenuIcon className="w-5 h-5" />
            </button>

            <h1 className="flex items-center gap-2 text-xl font-semibold">
                <span>{meta.title}</span>
            </h1>


            <div className="hidden gap-2 md:flex">
                <button
                    onClick={() => navigate("/dashboard/counsellor")}
                    className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1.5 text-white cursor-pointer"
                >
                    <span className="text-[12px] leading-none">Know your counsellor</span>
                    <span className="text-[10px] opacity-80">Connect with us</span>
                </button>
                <button
                    onClick={() => navigate("/dashboard/request-callback")}
                    className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1.5 text-white cursor-pointer"
                >
                    <span className="text-[12px] leading-none">Request A</span>
                    <span className="text-[12px] leading-none">Callback</span>
                </button>
            </div>
        </div>
    );
}

export default function DashboardLayout() {
    const { pathname } = useLocation();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        setSidebarOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    }, [isSidebarOpen]);

    return (
        <div className="min-h-screen w-full bg-white text-slate-900">
            <HeaderBar logoSrc={""} userName={""} />
            <HeroBanner />

            <div className="relative z-20 -translate-y-[180px] sm:-translate-y-[160px] md:-translate-y-[180px] lg:-translate-y-[100px]">
                <div className="mx-auto max-w-6xl px-0">
                    {/* FLEX LAYOUT */}
                    <div className="flex flex-col md:flex-row md:items-start md:gap-0">
                        {/* DESKTOP SIDEBAR */}
                        <div className="hidden md:block md:w-[320px] md:shrink-0">
                            <Sidebar />
                        </div>

                        {/* MOBILE SIDEBAR (only when open) */}
                        {isSidebarOpen && (
                            <>
                                <Sidebar
                                    isMobileOpen={isSidebarOpen}
                                    onMobileClose={() => setSidebarOpen(false)}
                                />
                                <button
                                    aria-label="Close menu"
                                    onClick={() => setSidebarOpen(false)}
                                    className="fixed inset-0 z-30 bg-black/40 md:hidden"
                                />
                            </>
                        )}

                        {/* MAIN CONTENT */}
                        <section className="relative z-10 w-full md:flex-1 rounded-lg bg-[#efefef] pb-8 shadow-xl">
                            <PageHeader onOpenMenu={() => setSidebarOpen(true)} />
                            <div className="px-4 pt-3">
                                <Outlet />
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <footer className="mt-12 pb-16 text-center text-[12px] text-slate-600">
                © 2025 SKDU, All Rights Reserved.
            </footer>
            <BottomDock />
        </div>
    );
}
