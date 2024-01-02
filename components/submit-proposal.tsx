"use client";
import { useRef, useState } from "react";
import { InputFilled } from "./common/InputFilled";
import { TextFieldFilled } from "./common/TextFieldFilled";

export const SubmitProposal = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Request a quote</h1>
      <p className="mb-8">
        Let's discuss your project! Please, provide us with a brief description of what you already have and what you
        are going to achieve.
      </p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-4">
          <InputFilled name="name" placeholder="Your name" />
          <InputFilled name="company" placeholder="Your company name" />
          <div>
            <span className="font-semibold block mb-2">Project type</span>
            <div className="flex gap-2 flex-wrap">
              <ButtonOption>Web App</ButtonOption>
              <ButtonOption>Mobile App</ButtonOption>
              <ButtonOption>SaaS</ButtonOption>
              <ButtonOption>Marketplace</ButtonOption>
              <ButtonOption>Website</ButtonOption>
            </div>
          </div>
          <label className="font-semibold" htmlFor="description">
            Describe your project in short
          </label>
          <TextFieldFilled id="description" placeholder="Project description" />

          <div className="flex gap-2">
            <input ref={fileInputRef} type="file" onChange={handleFileChange} className="hidden"></input>
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => {
                if (fileInputRef.current) {
                  fileInputRef.current.click();
                }
              }}
            >
              <PaperclipIcon className="text-white mr-2" />
              <p className="text-md">attach file</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <InputFilled name="email" placeholder="Your email" />

          <div>
            <span className="font-semibold block mb-2">Project Budget</span>
            <div className="flex gap-2 flex-wrap">
              <ButtonOption>{`< $50k`}</ButtonOption>
              <ButtonOption>$50k - 100k</ButtonOption>
              <ButtonOption>$100k - 200k</ButtonOption>
              <ButtonOption>{`> $200k`}</ButtonOption>
            </div>
          </div>
          <p className="text-xs mt-8">
            By submitting this form I consent to having Brights collect and process my personal details and agree with{" "}
            <a className="underline" href="#">
              Privacy Policy
            </a>
          </p>
          <button className="btn text-white mt-4 bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

function PaperclipIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

function ButtonOption({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className=" p-3 bg-transparent border rounded-lg border-gray-600 text-white active:bg-zinc-800 transition duration-150 ease-in-out"
    >
      {children}
    </button>
  );
}
