"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";

import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";

import { Button } from "../ui/button";

const SocialForm = () => {
  const buttonClassName =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-2 flex-1 px-4 py-3";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap  gap-2.5">
      <Button
        onClick={() => handleSignIn("github")}
        className={buttonClassName}
        variant="outline"
        size="icon"
      >
        <Image
          className="invert-colors mr-2.5 object-contain"
          src="/icons/github.svg"
          alt="github"
          width={20}
          height={20}
        />
        <span>LogIn with Github</span>
      </Button>

      <Button
        onClick={() => handleSignIn("google")}
        className={buttonClassName}
        variant="outline"
        size="icon"
      >
        <Image
          className="invert-colors mr-2.5 object-contain"
          src="/icons/google.svg"
          alt="google"
          width={20}
          height={20}
        />
        <span>LogIn with Google</span>
      </Button>
    </div>
  );
};

export default SocialForm;
