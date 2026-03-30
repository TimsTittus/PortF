import React from 'react';
import { Building, Calendar, Award, BookOpen } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { workExperience, volunteeringExperience } from '@/data/experience';
import { skills } from '@/data/skills';
import { education } from '@/data/education';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Experience | Tims Tittus",
  description: "A detailed overview of my professional journey, skills, and expertise.",
};

export default function ExperiencePage() {
  return (
    <div className="container mx-auto max-w-5xl">
      <section className="py-12">
        <SectionHeader
          title="Experience"
          subtitle="A detailed overview of my professional journey, skills, and expertise."
        />

        <div className="mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-nb-black mb-12 flex items-center px-4 sm:px-0">
            <div className="p-2 sm:p-3 bg-nb-purple border-4 border-nb-black shadow-nb-hard mr-4 sm:mr-6">
              <Building className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />
            </div>
            Work Experience
          </h2>

          <div className="space-y-12">
            {workExperience.map((job) => (
              <div
                key={job.id}
                className="group relative"
              >
                <div className="absolute inset-0 bg-nb-black translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
                <div className="relative bg-white border-4 border-nb-black p-6 sm:p-8 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="md:w-1/3">
                      <h3 className="text-3xl font-black uppercase tracking-tight text-nb-black">{job.title}</h3>
                      <div className="flex items-center text-nb-purple font-black uppercase text-sm mt-3">
                        <Building size={18} className="mr-2" strokeWidth={3} />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center text-nb-black/60 font-bold text-sm mt-2">
                        <Calendar size={18} className="mr-2" strokeWidth={3} />
                        <span>{job.period}</span>
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <p className="text-lg sm:text-xl font-bold text-nb-black mb-6 leading-relaxed bg-nb-cream p-4 border-l-4 border-nb-purple">{job.description}</p>
                      <h4 className="text-lg font-black uppercase mb-4 text-nb-black underline decoration-4 underline-offset-4">Key Responsibilities:</h4>
                      <ul className="space-y-3">
                        {job.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-start gap-3 text-nb-black font-medium leading-relaxed">
                            <span className="mt-1 w-2 h-2 bg-nb-black flex-shrink-0"></span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-nb-black mb-12 flex items-center px-4 sm:px-0">
            <div className="p-2 sm:p-3 bg-nb-green border-4 border-nb-black shadow-nb-hard mr-4 sm:mr-6">
              <Building className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />
            </div>
            Volunteering
          </h2>

          <div className="grid grid-cols-1 gap-12">
            {volunteeringExperience.map((job) => (
              <div
                key={job.id}
                className="group relative"
              >
                <div className="absolute inset-0 bg-nb-black translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-all"></div>
                <div className="relative bg-white border-4 border-nb-black p-6 sm:p-8 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="md:w-1/3">
                      <h3 className="text-2xl font-black uppercase tracking-tight text-nb-black">{job.title}</h3>
                      <div className="flex items-center text-nb-green font-black uppercase text-sm mt-3">
                        <Building size={18} className="mr-2" strokeWidth={3} />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center text-nb-black/60 font-bold text-sm mt-2">
                        <Calendar size={18} className="mr-2" strokeWidth={3} />
                        <span>{job.period}</span>
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <p className="text-lg font-bold text-nb-black mb-4 leading-relaxed">{job.description}</p>
                      <ul className="grid grid-cols-1 gap-2">
                        {job.responsibilities.map((responsibility, i) => (
                          <li key={i} className="text-nb-black/70 font-bold text-sm bg-nb-cream px-3 py-1 border-2 border-nb-black">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-nb-black mb-12 flex items-center px-4 sm:px-0">
            <div className="p-2 sm:p-3 bg-nb-yellow border-4 border-nb-black shadow-nb-hard mr-4 sm:mr-6">
              <Award className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />
            </div>
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-6 sm:p-8 bg-white border-4 border-nb-black shadow-nb-hard">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-8 text-nb-black underline decoration-8 decoration-nb-purple underline-offset-4">Technical</h3>
              <div className="space-y-8">
                {skills.technical.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2 font-black uppercase tracking-tight text-lg">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-6 bg-nb-cream border-4 border-nb-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div
                        className="h-full bg-nb-purple border-r-4 border-nb-black"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div className="p-6 sm:p-8 bg-white border-4 border-nb-black shadow-nb-hard">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-6 text-nb-black underline decoration-8 decoration-nb-yellow underline-offset-4">Design</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.design.map((skill) => (
                    <div key={skill.name} className="p-4 bg-nb-yellow border-2 border-nb-black font-black uppercase text-xs text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {skill.name} - {skill.level}%
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-white border-4 border-nb-black shadow-nb-hard">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-6 text-nb-black underline decoration-8 decoration-nb-green underline-offset-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.soft.map((skill) => (
                    <div key={skill.name} className="px-4 py-2 bg-nb-green border-2 border-nb-black font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-nb-black mb-12 flex items-center px-4 sm:px-0">
            <div className="p-2 sm:p-3 bg-nb-blue border-4 border-nb-black shadow-nb-hard mr-4 sm:mr-6">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />
            </div>
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {education.map((edu) => (
              <div key={edu.title} className="group relative">
                <div className="absolute inset-0 bg-nb-black translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
                <div className={`relative bg-white border-4 border-nb-black p-6 sm:p-8 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all h-full`}>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${edu.color} border-2 border-nb-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}></div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-nb-black">{edu.title}</h3>
                  <p className="text-nb-purple font-black uppercase text-sm mt-2">{edu.loc}</p>
                  <p className="text-nb-black font-medium mt-6 text-base sm:text-lg leading-relaxed">{edu.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}