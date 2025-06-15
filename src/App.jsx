import RegistrationForm from "./components/RegistrationForm";
import ParticipantCount from "./components/ParticipantCount";


const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-violet-100 to-purple-100 py-10 px-4 flex flex-col items-center justify-start">
      <header className="w-full max-w-3xl mx-auto flex items-center gap-8 bg-white/90 rounded-xl shadow-lg px-8 py-6 mb-8 border border-violet-100 animate-fade-in">
        <img
          src="/sit_logo.png"
          alt="Sambhram Institute of Technology Logo"
          className="h-16 w-auto object-contain"
        />
        <div className="flex-1 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-700 leading-tight tracking-wide">
            Sambhram Institute of Technology Hackathon/Ideathon
          </h1>
          <h2 className="text-lg font-medium text-indigo-700 mt-1 tracking-wide">
            Organized by OSCODE Community
          </h2>
        </div>
        <img
          src="/oscode_logo.png"
          alt="OSCODE Community Logo"
          className="h-14 w-auto object-contain"
        />
      </header>

      <div className="w-full max-w-2xl flex flex-col gap-6 items-center justify-center">
        <ParticipantCount />
        <RegistrationForm />
        <div className="text-center mt-6 text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Sambhram Institute of Technology &mdash; OSCODE Community. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default App;
