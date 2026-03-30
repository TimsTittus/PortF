import * as React from 'react';
import { Download } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { services } from '@/data/services';
import { education } from '@/data/education';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About | Tims Tittus",
  description: "Learn about Tims Tittus, a full-stack developer, UI/UX designer, and public speaker with expertise in networking, web development, and cybersecurity.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl">
      <section className="py-12">
        <div className="flex flex-col md:flex-row gap-16 items-start w-full">
          <div className="md:w-1/3 sticky top-24">
            <div className="group relative">
              <div className="absolute inset-0 bg-nb-black translate-x-3 translate-y-3 transition-all"></div>
              <div className="relative bg-white border-4 border-nb-black p-1 transition-all overflow-hidden shadow-nb-hard">
                <div className="aspect-square bg-nb-purple border-b-4 border-nb-black flex items-center justify-center overflow-hidden">
                  <span className="text-8xl drop-shadow-[4px_4px_0px_#000]">: )</span>
                </div>

                <div className="p-6 text-center">
                  <h2 className="text-2xl font-black uppercase tracking-tight text-nb-black">Tims Tittus</h2>
                  <p className="text-nb-purple font-black text-sm uppercase mt-1">Engineering Polymath</p>

                  <div className="mt-6">
                    <a
                      href="/assets/Resume.pdf"
                      download="TimsTittus_Resume.pdf"
                      className="group relative inline-block w-full"
                    >
                      <div className="absolute inset-0 bg-nb-black translate-x-1 translate-y-1 transition-all"></div>
                      <div className="relative bg-nb-yellow border-2 border-nb-black px-4 py-2 text-nb-black font-black uppercase text-sm flex items-center justify-center gap-2 hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all">
                        <Download size={18} strokeWidth={3} />
                        Download CV
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 min-w-0">
            <div className="space-y-16">
              <div>
                <SectionHeader
                  title="About"
                  highlight="Me"
                  className="text-left mb-8 px-4 sm:px-0"
                  titleClassName="text-5xl md:text-8xl font-black uppercase tracking-tighter text-nb-black"
                />
                <div className="space-y-6 text-lg sm:text-xl font-bold text-nb-black leading-relaxed px-4 sm:px-0">
                  <p>
                    I’m a full-stack developer, UI/UX designer, and public speaker with expertise in networking, web development, and cybersecurity. I’ve contributed to ethical hacking projects, mentorship programs, and collaborative applications that combine security with usability.
                  </p>
                  <p className="bg-nb-cream p-6 border-l-8 border-nb-purple">
                    I lead multiple professional societies and hold key roles in executive committees, driving technology initiatives and student-led projects within and beyond my college.
                  </p>
                  <p>
                    Outside of technology, I enjoy reading, traveling, networking, and exploring diverse hobbies that expand my skills and perspectives.
                  </p>
                </div>
              </div>

              <div className="px-4 sm:px-0">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nb-black mb-8">What I <span className="bg-nb-green px-2 border-2 border-nb-black">Do</span></h2>
                <div className="relative group/carousel max-w-full overflow-hidden">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-4 sm:-ml-8">
                      {services.map((item) => (
                        <CarouselItem key={item.title} className="pl-4 sm:pl-8 basis-full sm:basis-1/2">
                          <div className="group relative h-full">
                            <div className="absolute inset-0 bg-nb-black translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-all"></div>
                            <div className="relative bg-white border-4 border-nb-black p-6 sm:p-8 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all h-full">
                              <div className={`w-14 h-14 ${item.color} border-2 border-nb-black flex items-center justify-center text-nb-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                                {item.icon}
                              </div>
                              <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-nb-black">{item.title}</h3>
                              <p className="text-nb-black font-medium leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    <div className="flex justify-end gap-3 mt-10 px-4 sm:px-0">
                      <CarouselPrevious className="relative static translate-y-0 bg-white border-2 border-nb-black h-12 w-12 rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-nb-yellow active:shadow-none active:translate-x-[1px] active:translate-y-[1px] transition-all" />
                      <CarouselNext className="relative static translate-y-0 bg-white border-2 border-nb-black h-12 w-12 rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-nb-yellow active:shadow-none active:translate-x-[1px] active:translate-y-[1px] transition-all" />
                    </div>
                  </Carousel>
                </div>
              </div>

              <div className="px-4 sm:px-0">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nb-black mb-8">Education</h2>
                <div className="space-y-8">
                  {education.filter(edu => edu.title.includes("Higher") || edu.title.includes("Engineering")).map((edu) => (
                    <div key={edu.title} className={`p-6 sm:p-8 bg-white border-4 border-nb-black ${edu.color} shadow-nb-hard`}>
                      <h3 className="text-2xl font-black uppercase tracking-tight text-nb-black">{edu.title}</h3>
                      <p className="text-nb-purple font-black uppercase text-sm mt-1">{edu.loc}</p>
                      <p className="text-nb-black font-medium mt-4 text-lg leading-relaxed">{edu.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}