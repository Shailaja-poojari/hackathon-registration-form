import { useState, useEffect } from "react";
import { Users } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

const ParticipantCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const { count, error } = await supabase
        .from("registration")
        .select("*", { count: "exact", head: true });

      if (error) {
        console.error("Error fetching participant count:", error.message);
        return;
      }

      setCount(count || 0);
    };

    fetchCount();
    const interval = setInterval(fetchCount, 10000); // refresh every 10 seconds

    return () => clearInterval(interval);
  }, []);

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
