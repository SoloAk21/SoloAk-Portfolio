import React from "react";

const RemarksSection = () => {
  return (
    <div className="pb-10">
      <div className="w-fit rounded-full px-4 py-2 text-xl font-semibold">
        Remarks
      </div>
      <div className="pl-10">
        <div className="h-7 border-l border-dashed border-zinc-900"></div>
      </div>
      <div className="rounded border py-6 px-10 hover:rounded-xl hover:border-black">
        <div>
          <div className="group flex w-fit cursor-pointer items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide-icon lucide lucide-quote flex group-hover:hidden"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
            </svg>
            <span className="text-lg font-semibold">James 1:5</span>
          </div>
          <div className="group cursor-pointer pt-3 text-lg">
            <div className="flex flex-col">
              <p>
                If any of you lacks wisdom, let him ask of God, who gives to all
                liberally and without reproach,
              </p>
              <p>and it will be given to him.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-10">
        <div className="h-7 border-l border-dashed border-zinc-900"></div>
      </div>
      <div>
        <p>... so much more to come!</p>
      </div>
    </div>
  );
};

export default RemarksSection;
