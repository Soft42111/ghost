
import { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Twitter, MapPin, Phone, ExternalLink, Download, ArrowRight } from "lucide-react";
import ghostProfile from "@/assets/ghost-profile.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    "Growth Strategist",
    "Community Moderator", 
    "Content Creator",
    "Digital Marketer",
    "Web3 Contributor"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const typeText = async () => {
      const currentText = roles[currentRole];
      setIsTyping(true);
      
      // Type out the text
      for (let i = 0; i <= currentText.length; i++) {
        setDisplayText(currentText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      // Pause at full text
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Delete the text
      for (let i = currentText.length; i >= 0; i--) {
        setDisplayText(currentText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      // Move to next role
      setCurrentRole((prev) => (prev + 1) % roles.length);
    };

    typeText();
  }, [currentRole, roles]);

  const experiences = [
    {
      company: "WOW EARN",
      position: "Head Mod",
      duration: "FEB - till date",
      responsibilities: [
        "Organize community activities and promptly respond to member questions.",
        "Offer help and support, especially guidance on onboarding.",
        "Strengthened community presence across Africa, North America, and South America.",
        "Focused on interactive, organic growth via contests and community events."
      ]
    },
    {
      company: "RoboHero",
      position: "Moderator",
      duration: "FEB - OCT 2024",
      responsibilities: [
        "Conveying a positive view of RoboHero, highlighting its unique selling point, providing frequent updates, and publicizing forthcoming RoboHero events.",
        "Maintained safety and order in communities through effective moderation and automation.",
        "Granting exclusive roles and automating role expiration based on activity."
      ]
    },
    {
      company: "EGO PAYSENGER",
      position: "Community & Growth Strategist",
      duration: "MARCH - NOV 2023",
      responsibilities: [
        "Increased organic website traffic through the creation and application of guerilla marketing content strategies",
        "Crafted compelling brand contents to boost reputation and skyrocket awareness",
        "Led high-impact marketing and engagement campaigns."
      ]
    }
  ];

  const skills = [
    "Developing & Growing Communities",
    "Collaborations & Outreach to Influencers",
    "XP and Reward System Setup",
    "Planning and Implementation of Campaign for Viral Growth",
    "Safety & Community Moderation",
    "Designing incentives and interactivity",
    "Cross-Marketing and Strategic Partnerships",
    "Management of Telegram and Discord",
    "Events for Engagement (AMAs, Raids, Contests)",
    "Background Knowledge in programming: Html, CSS, JavaScript and React",
    "Blockchain and Crypto: Solid understanding of blockchain technology, with a focus on Ethereum and DeFi ecosystem",
    "Languages: Fluent in English, and have a strong passion for Spanish (intermediate)"
  ];

  const tools = [
    "Discord, Telegram, Twitter",
    "Zealy (Quest/XP grading)",
    "Notion, Google Workspace",
    "Discord and Telegram Moderation",
    "AI Content Tools (memes, quizzes)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden cursor-none">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-pulse"></div>
      
      {/* Custom Purple Cursor */}
      <div 
        className="fixed w-6 h-6 bg-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(1)',
        }}
      ></div>

      {/* Mouse Follow Effect */}
      <div 
        className="fixed w-96 h-96 rounded-full opacity-10 pointer-events-none transition-all duration-300 ease-out blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <Card className="bg-black/20 backdrop-blur-xl border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:border-purple-400/50 group">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-purple-500/50 ring-4 ring-purple-500/30 group-hover:ring-purple-400/50">
                    <img 
                      src={ghostProfile} 
                      alt="Gabriel Ghost Berry"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-4xl lg:text-6xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-purple-200">
                    Gabriel <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">"Ghost"</span> Berry
                  </h1>
                  <div className="text-xl lg:text-2xl text-purple-300 mb-4 transition-colors duration-300 group-hover:text-purple-200 h-8">
                    I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-semibold">{displayText}</span>
                    <span className="animate-pulse text-purple-400">|</span>
                  </div>
                  <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-300 hover:text-purple-300 transition-colors duration-300">
                      <Mail className="w-4 h-4" />
                      <span>dripsberry@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    <Button variant="outline" size="sm" className="border-purple-500/50 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 hover:scale-105 group/btn text-sm">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="border-purple-500/50 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 hover:scale-105 group/btn text-sm">
                      <Linkedin className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="border-purple-500/50 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 hover:scale-105 group/btn text-sm">
                      <Twitter className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Twitter
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 group/btn text-sm">
                      <Download className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                      Resume
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* About Section */}
        <div className={`mt-8 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <Card className="bg-black/20 backdrop-blur-xl border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:border-purple-400/50 group">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 group-hover:text-purple-200 transition-colors duration-300">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-600 rounded group-hover:h-10 transition-all duration-300"></div>
                About Myself
                <ArrowRight className="w-6 h-6 text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Results-oriented, Committed Web3 Contributor, Community Moderator, and Growth 
                Strategist with an established history of creating, growing, and maintaining thriving 
                Web3 communities. Knowledgeable about managing influencer marketing, engaging 
                campaigns that increase engagement and growth. Owner of Alpha DAO, a community 
                devoted to KOLs and ambassadors. Consistent leadership and real-time support are 
                guaranteed by being accessible online for at least 16 hours every day.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Experience Section */}
        <div className={`mt-8 transition-all duration-1000 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <Card className="bg-black/20 backdrop-blur-xl border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:border-purple-400/50 group">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 group-hover:text-purple-200 transition-colors duration-300">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-600 rounded group-hover:h-10 transition-all duration-300"></div>
                Work Experience
                <ArrowRight className="w-6 h-6 text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-purple-500/30 pl-6 relative hover:border-purple-400/60 transition-all duration-300 group/exp">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full group-hover/exp:bg-purple-400 group-hover/exp:scale-125 transition-all duration-300"></div>
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white group-hover/exp:text-purple-200 transition-colors duration-300">{exp.company}</h3>
                      <p className="text-purple-300 font-medium group-hover/exp:text-purple-200 transition-colors duration-300">{exp.position}</p>
                      <p className="text-gray-400 text-sm group-hover/exp:text-gray-300 transition-colors duration-300">{exp.duration}</p>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-gray-300 flex items-start gap-2 group-hover/exp:text-gray-200 transition-colors duration-300 hover:translate-x-2 transition-transform duration-200">
                          <span className="text-purple-400 mt-2 group-hover/exp:text-purple-300 transition-colors duration-300">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className={`mt-8 transition-all duration-1000 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <Card className="bg-black/20 backdrop-blur-xl border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:border-purple-400/50 group">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 group-hover:text-purple-200 transition-colors duration-300">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-600 rounded group-hover:h-10 transition-all duration-300"></div>
                Skills & Proficiencies
                <ArrowRight className="w-6 h-6 text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group/skill border border-transparent hover:border-purple-500/30">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0 group-hover/skill:bg-purple-300 group-hover/skill:scale-125 transition-all duration-300"></div>
                    <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-300">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tools Section */}
        <div className={`mt-8 transition-all duration-1000 delay-800 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <Card className="bg-black/20 backdrop-blur-xl border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:border-purple-400/50 group">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 group-hover:text-purple-200 transition-colors duration-300">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-600 rounded group-hover:h-10 transition-all duration-300"></div>
                Tools Stack
                <ArrowRight className="w-6 h-6 text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </h2>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-purple-500/20 text-purple-200 hover:bg-purple-500/30 hover:text-white px-4 py-2 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer border border-purple-500/30 hover:border-purple-400"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <p className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
            © 2024 Gabriel "Ghost" Berry. Crafted with passion for Web3 communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
