"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "How It Works", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-28 lg:px-10">

        {/* ================= LOGO ================= */}

        <Link
          href="#home"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/logo/deblessco-logo-v2.png"
            alt="Deblessco Logistics"
            width={500}
            height={150}
            priority
            className="h-16 w-auto object-contain sm:h-[72px] lg:h-20 xl:h-24"
          />
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}

        <nav className="hidden items-center gap-12 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                relative
                text-[15px]
                font-semibold
                tracking-wide
                text-slate-700
                transition-all
                duration-300
                hover:text-[#0057D9]

                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-[#0057D9]
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* ================= CTA ================= */}

        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="
              rounded-full
              bg-[#0B1F3A]
              px-8
              py-3.5
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#0057D9]
            "
          >
            Request Quote
          </Link>
        </div>

        {/* ================= MOBILE ================= */}

        <div className="lg:hidden">

          <Sheet>

            <SheetTrigger
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                transition
                hover:bg-slate-100
              "
            >
              <Menu size={26} />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[320px] bg-white"
            >

              <div className="mt-8">

                {/* Mobile Logo */}

                <div className="mb-10">

                  <Image
                    src="/logo/deblessco-logo-v2.png"
                    alt="Deblessco Logistics"
                    width={420}
                    height={120}
                    className="h-16 w-auto object-contain"
                  />

                </div>

                {/* Links */}

                <div className="space-y-2">

                  {navLinks.map((item) => (

                    <SheetClose
                      key={item.name}
                      render={
                        <Link
                          href={item.href}
                          className="
                            block
                            rounded-xl
                            px-4
                            py-4
                            text-lg
                            font-medium
                            text-slate-700
                            transition
                            hover:bg-slate-100
                            hover:text-[#0057D9]
                          "
                        />
                      }
                    >
                      {item.name}
                    </SheetClose>

                  ))}

                </div>

                {/* CTA */}

                <div className="mt-8">

                  <SheetClose
                    render={
                      <Link
                        href="#contact"
                        className="
                          block
                          rounded-full
                          bg-[#0B1F3A]
                          py-4
                          text-center
                          font-semibold
                          text-white
                          transition
                          hover:bg-[#0057D9]
                        "
                      />
                    }
                  >
                    Request Quote
                  </SheetClose>

                </div>

              </div>

            </SheetContent>

          </Sheet>

        </div>

      </div>
    </header>
  );
}