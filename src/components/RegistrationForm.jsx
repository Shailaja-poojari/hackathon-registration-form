import emailjs from "@emailjs/browser";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const DEPARTMENTS = [
  "Computer Science", "Information Science", "Electronics", "Mechanical",
  "Civil", "Electrical", "MBA", "Other"
];
const EVENTS = ["Hackathon", "Ideathon", "Both"];

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "", email: "", department: "", event: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.department || !form.event) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    // Save to Supabase
    const { error } = await supabase.from("registration").insert([
      {
        name: form.name,
        email: form.email,
        department: form.department,
        event: form.event,
        created_at: new Date().toISOString()
      }
    ]);

    if (error) {
      console.error("Supabase insert error:", error.message);
      alert("Something went wrong while submitting. Please try again.");
      setLoading(false);
      return;
    }

    // Send confirmation email via EmailJS
    emailjs.send(
      "service_2ymvswk",           // ✅ Your EmailJS service ID
      "template_pskgueh",          // ✅ Your EmailJS template ID
      {
        name: form.name,
        email: form.email,
        department: form.department,
        event: form.event
      },
      "8RtEkb-fV8yYbCCqV"          // ✅ Your EmailJS public key
    ).then(
      () => {
        alert(`Thanks ${form.name}, confirmation sent to ${form.email}`);
      },
      (emailError) => {
        console.error("EmailJS Error:", emailError);
        alert("Registration saved, but failed to send confirmation email.");
      }
    );

    setForm({ name: "", email: "", department: "", event: "" });
    setLoading(false);
  };

  return (
    <form
      className="w-full bg-white rounded-2xl border border-violet-200 shadow-xl p-8 flex flex-col gap-8 animate-scale-in"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl font-bold text-indigo-700 text-center">Event Registration</h3>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
          className="input"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
          className="input"
          required
        />
        <select
          value={form.department}
          onChange={(e) => setForm(f => ({ ...f, department: e.target.value }))}
          className="input"
          required
        >
          <option value="">Select Department</option>
          {DEPARTMENTS.map(d => <option key={d}>{d}</option>)}
        </select>
        <select
          value={form.event}
          onChange={(e) => setForm(f => ({ ...f, event: e.target.value }))}
          className="input"
          required
        >
          <option value="">Choose Event</option>
          {EVENTS.map(e => <option key={e}>{e}</option>)}
        </select>
      </div>
      <button
        disabled={loading}
        className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg"
      >
        {loading ? "Registering..." : "Register"}
      </button>
      <div className="text-xs text-center text-gray-400">
        Only Sambhram Institute of Technology students may register.
      </div>
    </form>
  );
};

export default RegistrationForm;
