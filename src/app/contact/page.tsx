"use client";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  async function handleSubmit(e: any) {
    e.preventDefault();
    const res = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: e.currentTarget.firstName.value,
        lastName: e.currentTarget.lastName.value,
        subject: e.currentTarget.subject.value,
        email: e.currentTarget.email.value,
        message: e.currentTarget.message.value,
      }),
    });
    const result = await res.json();
    if (result.status === "OK") {
      router.push("/thank-you");
    } else {
      console.error(result);
    }
  }
  return (
    <div className="bg-white">
      <main className="overflow-hidden">
        <div className="py-4 flex justify-center">
          <div className="relative z-10 mx-8 sm:mx-auto max-w-7xl pl-4 pr-8 py-4 sm:px-6 rounded lg:px-8 bg-sky-900 text-white">
            <h3 className="font-bold text-center">Get in touch</h3>
            <p className="mt-6 max-w-md mx-auto text-center">
              If you are interested in research opportunities or want to
              collaborate, please send us a message and we will get back to you
              as soon as possible.
            </p>
          </div>
        </div>

        <section
          className="relative bg-white"
          aria-labelledby="contact-heading"
        >
          <div className="absolute h-1/2 w-full" aria-hidden="true" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-xl">
              <h2 id="contact-heading" className="sr-only">
                Contact us
              </h2>

              <div className="grid grid-cols-1 sm:place-items-center">
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <form
                    onSubmit={handleSubmit}
                    method="POST"
                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-warm-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          autoComplete="given-name"
                          required
                          className="block w-full rounded-md border border-gray-500 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-sky-900 focus:ring-sky-900"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-warm-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          autoComplete="family-name"
                          required
                          className="block w-full rounded-md border border-gray-500 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-sky-900 focus:ring-sky-900"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-warm-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border border-gray-500 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-sky-900 focus:ring-sky-900"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-warm-gray-900"
                      >
                        Subject
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          required
                          className="block w-full rounded-md border border-gray-500 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-sky-900 focus:ring-sky-900"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-warm-gray-900"
                        >
                          Message
                        </label>
                        <span
                          id="message-max"
                          className="text-sm text-warm-gray-500"
                        >
                          Max. 500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full rounded-md border border-gray-500 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-sky-900 focus:ring-sky-900"
                          aria-describedby="message-max"
                          required
                          maxLength={500}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-sky-900 px-6 py-3  font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:w-auto"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
