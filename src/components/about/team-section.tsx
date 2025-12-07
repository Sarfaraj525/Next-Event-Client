"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Title from "../shared/Title";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    image: "/images/profile/profile1.jpg",
    desc: "With 15+ years in tech and event management, Sarah leads our vision and strategy.",
    gradient: "from-blue-900/80 via-blue-900/40 to-transparent",
    roleColor: "text-blue-600",
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    image: "/images/profile/profile2.jpg",
    desc: "Michael architects our platform, ensuring security, scalability, and innovation.",
    gradient: "from-indigo-900/80 via-indigo-900/40 to-transparent",
    roleColor: "text-indigo-600",
  },
  {
    name: "Aisha Patel",
    role: "Head of Product",
    image: "/images/profile/profile3.jpg",
    desc: "Aisha translates user needs into features that make event planning seamless.",
    gradient: "from-purple-900/80 via-purple-900/40 to-transparent",
    roleColor: "text-purple-600",
  },
  {
    name: "David Rodriguez",
    role: "Head of Customer Success",
    image: "/images/profile/profile1.jpg",
    desc: "David ensures our users have the best experience with our platform.",
    gradient: "from-teal-900/80 via-teal-900/40 to-transparent",
    roleColor: "text-teal-600",
  },
];

export default function TeamSection() {
  const teamRef = useRef<HTMLDivElement>(null);
  const teamInView = useInView(teamRef, { once: true, amount: 0.3 });

  return (
    <section ref={teamRef} className="py-24 bg-white">
      <div className="container px-4 mx-auto md:px-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={teamInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <p className="mb-4 bg-[#1E3A8A] text-xs p-1 px-2 w-fit mx-auto text-white rounded-lg">
            @ Our People
          </p>
          <Title title="Meet the Team" />
          <p className="text-xl text-gray-700">
            The passionate individuals behind EventHub
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 mx-auto mt-20 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <TeamCard key={i} index={i} data={member} inView={teamInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ data, index, inView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <div className="overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl group-hover:shadow-2xl">
        {/* Image */}
        <div className="relative overflow-hidden aspect-square">
          <Image
            src={data.image}
            alt={data.name}
            width={400}
            height={400}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />

          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 flex items-end transition-opacity duration-300 opacity-0 bg-gradient-to-t ${data.gradient} group-hover:opacity-100`}
          >
            <div className="w-full p-6">
              <div className="flex justify-center space-x-3">
                {[Linkedin, Twitter, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-2 transition-colors rounded-full bg-white/20 hover:bg-white/40"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-1 text-xl font-bold text-gray-900">
            {data.name}
          </h3>
          <p className={`mb-3 font-medium ${data.roleColor}`}>{data.role}</p>
          <p className="text-sm text-gray-600">{data.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}
