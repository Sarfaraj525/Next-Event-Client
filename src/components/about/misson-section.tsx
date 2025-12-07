"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Calendar, Users, Globe } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// 🔵 Easily change theme colors here  
const COLORS = {
  primary: "blue",
  gradient: "from-blue-50 to-indigo-50",
  badgeBg: "bg-blue-100",
  badgeText: "text-blue-700",
  iconBg: "bg-blue-100",
  iconText: "text-blue-600",
  number: "text-blue-700",
};

export default function MissionSection() {
  const missionRef = useRef<HTMLDivElement>(null);
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });

  const [stats, setStats] = useState({ events: 0, users: 0, countries: 0 });
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });

  // Smooth Stats Counter  
  useEffect(() => {
    if (!statsInView) return;

    const maxValues = { events: 10000, users: 50000, countries: 25 };
    const increments = { events: 200, users: 1200, countries: 1 };

    const interval = setInterval(() => {
      setStats((prev) => {
        const next = {
          events: Math.min(prev.events + increments.events, maxValues.events),
          users: Math.min(prev.users + increments.users, maxValues.users),
          countries: Math.min(prev.countries + increments.countries, maxValues.countries),
        };

        if (
          next.events === maxValues.events &&
          next.users === maxValues.users &&
          next.countries === maxValues.countries
        ) {
          clearInterval(interval);
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [statsInView]);

  return (
    <section ref={missionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={missionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          {/* LEFT SIDE CONTENT */}
          <div className="md:w-1/2">
            <Badge
              className={`mb-4 ${COLORS.badgeBg} ${COLORS.badgeText} hover:${COLORS.badgeBg}`}
            >
              Our Purpose
            </Badge>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>

            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              At{" "}
              <span className="font-semibold text-blue-600">EventHub</span>, we are on a mission to
              transform how people connect through events. We believe meaningful gatherings—whether
              professional conferences, community meetups, or celebrations—should be accessible,
              secure, and easy to organize.
            </p>

            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Our vision is to create a world where anyone can seamlessly plan, discover, and
              participate in events that matter to them, with transparent processes for everyone.
            </p>

            {/* STATS SECTION */}
            <div ref={statsRef} className="flex flex-col sm:flex-row gap-6 mt-8">
              <StatCard
                icon={<Calendar className={`h-7 w-7 ${COLORS.iconText}`} />}
                value={stats.events}
                label="Events Hosted"
                colors={COLORS}
              />
              <StatCard
                icon={<Users className={`h-7 w-7 ${COLORS.iconText}`} />}
                value={stats.users}
                label="Active Users"
                colors={COLORS}
              />
              <StatCard
                icon={<Globe className={`h-7 w-7 ${COLORS.iconText}`} />}
                value={stats.countries}
                label="Countries Served"
                colors={COLORS}
              />
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={missionInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/memory1.jpg"
                alt="Team collaboration"
                width={800}
                height={600}
                className="w-full h-auto"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <p className="text-xl font-medium">
                    Building connections through memorable events
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative circles */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200 rounded-full z-0"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-200 rounded-full z-0"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ icon, value, label, colors }: any) {
  return (
    <Card
      className={`flex-1 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br ${colors.gradient}`}
    >
      <CardContent className="pt-6">
        <div className={`${colors.iconBg} rounded-full w-14 h-14 flex items-center justify-center mb-4`}>
          {icon}
        </div>

        <h3 className={`text-3xl font-bold mb-2 ${colors.number}`}>
          {value.toLocaleString()}+
        </h3>

        <p className="text-gray-600 font-medium">{label}</p>
      </CardContent>
    </Card>
  );
}
