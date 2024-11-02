import SocialForm from "@/components/forms/SocialForm";
import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat px-4 py-10">
      <section className="light-border background-light800_dark200 shadow-light-100_dark-100 min-w-full rounded-[10px] p-10 border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark100_light900">Join DevFlow</h1>
            <p className="paragraph-regular text-dark500_light400">
              Create an account
            </p>
          </div>
          <Image
            className="object-contain"
            src="/images/site-logo.svg"
            alt="logo"
            width={50}
            height={50}
          />
        </div>

        {children}
        <SocialForm />
      </section>
    </main>
  );
};

export default AuthLayout;
