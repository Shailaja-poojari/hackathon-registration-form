import { useState } from "react";
import { Users } from "lucide-react";

// Temporary mock count
const MOCK_PARTICIPANT_COUNT = 172;

const ParticipantCount = () => {
  const [count] = useState(MOCK_PARTICIPANT_COUNT);

  return (
    <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-violet-200 text-indigo-800 font-semibold shadow mx-auto border border-indigo-200 group animate-fade-in">
      <Users size={22} className="mr-2" />
      <span className="text-sm md:text-base">
        <span className="font-bold text-indigo-900">{count}</span>{" "}
        students registered so far!
      </span>
    </div>
  );
};

export default ParticipantCount;
