import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WorkItem } from "./components/WorkItem";
import { SystemWork } from "./components/SystemWork";
import { Archives } from "./components/Archives";
import { ScoutLogoVector } from "./components/Icons";

import imgTataLogo from "../assets/1c1ad50e012c07e52523b63d34933bb65477a783.png";
import imgTataScreen from "../assets/12a005575d49e7830ee70b49266fe77cc469b992.png";
import imgScout from "../assets/c2a5e46b6dacba5132f7ab25861600a172fb7f4a.png";

export default function App() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden font-sans">
      <Header />
      
      <main className="flex flex-col items-center w-full">
        <Hero />
        
        <div className="w-full max-w-[1664px] px-6 md:px-16 flex flex-col gap-24 pb-32">
          {/* Selected Work Title */}
          <div className="w-full">
            <h2 className="font-medium leading-tight tracking-[-2.2px] text-black font-[DM_Sans] text-[32px] text-[#6e4452b3]">
              Selected Work:
            </h2>
          </div>

          {/* Tata Play Project */}
          <WorkItem 
            logo={
              <div className="h-[40px] w-[235px] relative overflow-hidden">
                <img 
                  src={imgTataLogo} 
                  alt="Tata Play Logo" 
                  className="absolute w-full max-w-none left-0 top-[-250%] h-[588%]" 
                />
              </div>
            }
            title="Shaping the Tata Play app experience for 100M+ users"
            date="Sept 2024 - Present"
            tags={[
              "UI/UX Design",
              "User engagement & retention strategy",
              "B2C"
            ]}
            imageSrc={imgTataScreen}
            imageAlt="Tata Play App Interface"
            imageStyle="bg-[#d9d9d9]"
          />

          {/* System Design Project */}
          <SystemWork />

          {/* Scout Project */}
          <WorkItem 
            logo={<ScoutLogoVector />}
            title="Re-imagining Vineyard management with AI"
            date="2022 - 2023"
            tags={[
              "Designing modular tools for complex agricultural workflows",
              "Visualize patterns to simplify data interpretation"
            ]}
            imageSrc={imgScout}
            imageAlt="Vineyard Management"
            imageStyle="bg-[#d9d9d9]"
          />

          {/* Archives */}
          <Archives />
        </div>
      </main>
    </div>
  );
}
