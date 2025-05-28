"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, PhoneCallIcon } from "lucide-react";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(500, {
      message: "Message must not be longer than 500 characters.",
    }),
});

export default function ContactUs() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!formspreeEndpoint) {
      console.error(
        "Formspree endpoint URL environment variable (NEXT_PUBLIC_FORMSPREE_ENDPOINT) is not defined."
      );
      return;
    }

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.error("Submission error:", error);
    }
  }

  return (
    <section className="p-8">
      <div className="relative h-full overflow-hidden rounded-2xl bg-transparent py-16">
        <div className="flex h-full w-full flex-col items-center justify-center gap-16 px-8">
          {/* HEADING */}
          <div className="p-4 text-center">
            <h1 className="text-3xl font-semibold text-[#01627F]">
              Contact our team
            </h1>
            <p className="text-balance text-lg text-[#666666]">
              Transform your trade operations with VIXTERO. Our team is ready to
              assist you.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="mx-auto grid max-w-3xl grid-cols-[60%_40%] gap-16">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-2 gap-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white"
                          placeholder="Full name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white"
                          placeholder="you@company.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white"
                          placeholder="Your company"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How can we help you?"
                          className="resize-none bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="col-span-2 bg-[#365B96]" type="submit">
                  Submit
                </Button>
              </form>
            </Form>
            <div className="w-full">
              <h4 className="text-xl font-semibold">Contact us</h4>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <PhoneCallIcon />
                  <a href="" className="font-medium underline">
                    +62 21 2128 2128
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail />
                  <a href="" className="font-medium underline">
                    solusi@vixtero.com
                  </a>
                </li>
              </ul>
              <h4 className="mt-12 text-xl font-semibold">Visit us</h4>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin />
                  <a href="" className="font-medium underline">
                    EightyEight@Kasablanka, Jakarta
                  </a>
                </li>
                <li className="text-sm text-[#243D65]">
                  EightyEight@Kasablanka 9th Floor - Unit E Jl. Casablanca Raya
                  Kav. 88 Jakarta Selatan, DKI Jakarta - 12870 Indonesia
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Background />
      </div>
    </section>
  );
}

function Background() {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-white">
      <Image
        src="/svg/circle-grid.svg"
        alt="blob"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute right-0 top-0 h-auto w-full scale-x-[-1]"
      />
      <Image
        src="/svg/contact-waves.svg"
        alt="blob"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute -bottom-20 right-0 h-auto w-full scale-x-[-1]"
      />
    </div>
  );
}
