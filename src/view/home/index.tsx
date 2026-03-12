import { useState, useEffect } from "react"
import { officeData, portfolioData } from "../../utils/constants"
import DeviceFrame from "../../components/DeviceFrame"
import {
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaTag,
  FaUser,
  FaBriefcase,
  FaCheckCircle,
  FaTimesCircle,
  FaGithub,
  FaTelegram
} from "react-icons/fa"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("hammasi")

  const filteredProjects = () => {
    switch (activeTab) {
      case "aktiv":
        return projects.filter(p => p.status)
      case "frontend":
        return projects.filter(p => p.position.includes("Frontend"))
      case "backend":
        return projects.filter(p => p.position.includes("Backend"))
      case "fullstack":
        return projects.filter(p => p.position.includes("Full-stack"))
      default:
        return projects
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <section className="container px-4 py-16 mx-auto md:py-24">
        {/* T-Bank Project Showcase */}
        <div className="mb-20">
          <div className="flex justify-center mb-12">
            <DeviceFrame 
              type="phone" 
              imageSrc="/images/tbank-ui.jpg" 
              alt="T-Bank T-Pay Mobile Interface"
            />
          </div>
          <div className="text-center">
            <p className="max-w-2xl mx-auto text-lg text-slate-700">
              Frontend Developer sifatida React va web texnologiyalar bilan ishlayman. Asosan tezkor, qulay va foydalanuvchi uchun tushunarli interfeyslar yaratishga e'tibor qarataman. Murakkab vazifalarni sodda va samarali yechimlarga aylantirish hamda doimiy ravishda yangi texnologiyalarni o'rganish meni rivojlantiradi.
            </p>
          </div>
        </div>

        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text">
            My Portfolio
          </h1>
        </div>

        {/* Ish joylari */}
        <div className="mb-20">
          <h2 className="mb-8 text-2xl font-bold text-center text-slate-900 md:text-3xl">Ish joylarim</h2>
          <div className="grid items-center grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
            {companies.map((company) => (
              <div key={company.id} className="relative flex flex-col items-center group">
                <div className="flex items-center justify-center w-24 h-24 p-4 transition-all duration-300 bg-white shadow-md rounded-xl group-hover:shadow-lg group-hover:scale-105">
                  <img
                    src={company.src || "/placeholder.svg"}
                    alt={company.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <span className="mt-3 text-sm font-medium text-center text-slate-600">{company.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Qilingan ishlar */}
        <div>
          <h2 className="mb-8 text-2xl font-bold text-center text-slate-900 md:text-3xl">Qilingan ishlar</h2>

          <div className="flex justify-center mb-6">
          <div className="overflow-x-auto">
            <div className="inline-flex p-1 rounded-lg bg-slate-100 min-w-max">
                {["hammasi", "aktiv", "frontend", "backend", "fullstack"].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    activeTab === tab
                        ? "bg-white shadow-sm text-slate-900"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
                ))}
            </div>
            </div>

          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects().map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-16 space-y-4">
            <a
              href="http://github.com/azadov-azamat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-teal-500 to-emerald-500 hover:shadow-lg hover:scale-105"
            >
              <FaGithub className="w-5 h-5 mr-2" />
              Visit My GitHub
            </a>
            <p className="text-sm text-slate-600">
              Check out more of my projects and contributions on GitHub
            </p>
          </div>
      </section>
    </main>
  )
}

function ProjectCard({ project }: any) {
  return (
    <div className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.src || "/placeholder.svg"}
          alt={project.title}
          loading="lazy"
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <div
            className={`flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
              project.status
                ? "bg-teal-500 text-white"
                : "bg-slate-200 text-slate-700"
            }`}
          >
            {project.status ? (
              <FaCheckCircle className="w-3.5 h-3.5 mr-1" />
            ) : (
              <FaTimesCircle className="w-3.5 h-3.5 mr-1" />
            )}
            {project.status ? "Aktiv" : "Aktiv emas"}
          </div>
        </div>
      </div>

      <div className="p-4 pb-2">
        <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
        <p className="text-sm text-slate-500">{project.owner}</p>
      </div>

      <div className="px-4 pb-3 space-y-3">
              <div className="flex items-center text-sm text-slate-700">
                <FaUser className="w-4 h-4 mr-2 text-slate-600" />
                <span>{project.owner}</span>
              </div>
              <div className="flex items-center text-sm text-slate-700">
                <FaBriefcase className="w-4 h-4 mr-2 text-slate-600" />
                <span>{project.position}</span>
              </div>
              <div className="flex items-center text-sm text-slate-700">
                <FaCalendarAlt className="w-4 h-4 mr-2 text-slate-600" />
                <span>{project.date}</span>
              </div>

        <div className="flex items-center text-sm text-slate-700">
          <FaBriefcase className="w-4 h-4 mr-2 text-teal-500" />
          <span>{project.position}</span>
        </div>

        <div className="flex items-center text-sm text-slate-700">
          <FaCalendarAlt className="w-4 h-4 mr-2 text-teal-500" />
          <span>{project.start_date}</span>
        </div>

        {project.url && (
              <div className="flex items-center text-sm">
                <FaExternalLinkAlt className="w-4 h-4 mr-2 text-slate-600" />
            {project.url.label ? <a
              href={project.url.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 truncate hover:underline"
            >
              {project.url.label}
            </a> : <a
              href={`https://${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 truncate hover:underline"
            >
              {project.url}
            </a>}
          </div>
        )}

        {project.telegram && (
              <div className="flex items-center text-sm">
                <FaTelegram className="w-4 h-4 mr-2 text-slate-600" />
            <a
              href={`https://${project.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 truncate hover:underline"
            >
              {project.telegram}
            </a>
          </div>
        )}

        <p className="text-sm line-clamp-4 text-slate-600">{project.desc}</p>
      </div>

      <div className="px-4 pb-4 pt-0 flex flex-wrap gap-1.5">
        {project.hash.map((tech: any, index: number) => (
          <div
            key={index}
            className="inline-flex items-center px-2 py-1 text-xs font-medium border rounded-md bg-slate-100 text-slate-800 border-slate-200"
          >
            <FaTag className="w-3 h-3 mr-1 text-slate-600" />
            {tech}
          </div>
        ))}
      </div>
    </div>
  )
}

const companies = officeData;
const projects = portfolioData;
