import React, { useState } from "react";
import Assets from "../../../../assets";
interface Props {
  question: string;
  answer: string;
}
const Accordion = ({ answer, question }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="my-10">
      <div className="flex items-start gap-20">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Assets.PlusIcon />
        </button>
        <div className="">
          <h3 className="text-black font-[400] text-lg">{question}</h3>
          {isOpen ? <p className="text-primary">{answer}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
