import React from "react";
import ASSET_CAMPUS_BG from "@/assets/banner_img.png";
const ASSET_STUDENT = "https://static.vecteezy.com/system/resources/previews/036/297/773/non_2x/ai-generated-business-woman-showing-thumbs-up-on-a-transparent-background-free-png.png";

export default function HeroBanner() {
    return (
        <section
            className="
        relative z-10 w-full overflow-hidden
       
        "
            aria-label="Dashboard hero" style={{
                backgroundImage: `url(${ASSET_CAMPUS_BG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="relative mx-auto max-w-6xl px-4 py-6 sm:py-8 md:py-10">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-25"

                />

                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                />


                <div
                    className="
            relative ml-auto flex h-[220px] w-[220px] items-end justify-center
            sm:h-[260px] sm:w-[260px]
            md:h-[300px] md:w-[300px]
          "
                >

                    <div
                        aria-hidden
                        className="
              absolute right-[-10px] top-[10px]
              h-[200px] w-[200px] rounded-full bg-[#ff7a1a]
              sm:h-[240px] sm:w-[240px]
              md:h-[280px] md:w-[280px]
            "
                    />
                    <img
                        src={ASSET_STUDENT}
                        alt="Student"
                        className="
              relative z-10 h-full w-auto select-none object-contain
            "
                        draggable={false}
                    />
                </div>
            </div>
        </section>
    );
}
