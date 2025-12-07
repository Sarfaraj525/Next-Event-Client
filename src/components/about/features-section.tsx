"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Zap,
  CreditCard,
  Users,
  Lightbulb,
  Globe,
  CheckCircle2,
  Shield,
  Calendar,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Title from "../shared/Title"
import NextButton from "../shared/NextButton"

export default function FeaturesSection() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 })
  const [activeFeatureTab, setActiveFeatureTab] = useState("organizers")

  return (
    <section
      ref={featuresRef}
      className="container relative mx-auto my-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-blue-50/20"
    >
      {/* Background Blurs */}
      <div className="absolute top-0 right-0 w-1/3 -translate-y-1/2 rounded-full h-1/3 bg-blue-200/40 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 translate-y-1/2 rounded-full h-1/4 bg-purple-200/40 -translate-x-1/3 blur-3xl"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 px-4 mx-auto md:px-0">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <p className="mb-4 bg-gradient-to-r from-blue-700 to-indigo-700 text-xs p-1 px-3 w-fit mx-auto text-white rounded-full shadow-md">
            @ Platform Features
          </p>

          <Title title="How EventHub Works" />

          <p className="text-xl text-gray-700 mt-2">
            Our platform simplifies every aspect of event planning & participation
          </p>
        </motion.div>

        {/* TAB SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Tabs value={activeFeatureTab} onValueChange={setActiveFeatureTab} className="mx-auto">
            <TabsList className="grid w-full grid-cols-2 p-1 mb-12 bg-gray-100 rounded-full shadow-inner">
              <TabsTrigger
                value="organizers"
                className="rounded-full py-3 transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                For Event Organizers
              </TabsTrigger>

              <TabsTrigger
                value="attendees"
                className="rounded-full py-3 transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                For Event Attendees
              </TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">

              {/* ORGANIZER TAB */}
              <TabsContent value="organizers" className="mt-0">
                <motion.div
                  key="organizers"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden bg-white shadow-xl rounded-3xl border border-blue-50"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* TEXT AREA */}
                    <div className="p-8 md:p-12">
                      <h3 className="mb-8 text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                        Create & Manage Events
                      </h3>

                      <ul className="space-y-6">

                        <FeatureItem
                          icon={<Zap className="w-6 h-6 text-blue-600" />}
                          title="Create public or private events"
                          desc="Control who can see and join your events with flexible visibility options."
                        />

                        <FeatureItem
                          icon={<CreditCard className="w-6 h-6 text-blue-600" />}
                          title="Optional registration fees"
                          desc="Monetize your events with secure payment processing and automated attendee management."
                        />

                        <FeatureItem
                          icon={<Users className="w-6 h-6 text-blue-600" />}
                          title="Participant management"
                          desc="Approve requests, send invitations, and manage attendees with our intuitive dashboard."
                        />

                        <FeatureItem
                          icon={<Lightbulb className="w-6 h-6 text-blue-600" />}
                          title="Detailed analytics"
                          desc="Track registrations, payments, and attendance with real-time insights."
                        />
                      </ul>

                      <div className="mt-16">
                        <Link href="/dashboard">
                          <NextButton name="Create Events" />
                        </Link>
                      </div>
                    </div>

                    {/* IMAGE AREA */}
                    <div className="relative h-full min-h-[400px]">
                      <Image
                        src="/images/events/image1.png"
                        alt="Event organizer dashboard"
                        fill
                        className="object-cover rounded-md"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 mix-blend-multiply"></div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              {/* ATTENDEE TAB */}
              <TabsContent value="attendees" className="mt-0">
                <motion.div
                  key="attendees"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden bg-white shadow-xl rounded-3xl border border-purple-50"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* IMAGE LEFT */}
                    <div className="relative h-full min-h-[400px] order-2 md:order-1">
                      <Image
                        src="/images/events/image2.png"
                        alt="Event discovery"
                        fill
                        className="object-cover rounded-md"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 mix-blend-multiply"></div>
                    </div>

                    {/* TEXT RIGHT */}
                    <div className="order-1 p-8 md:p-12 md:order-2">
                      <h3 className="mb-8 text-3xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
                        Discover & Join Events
                      </h3>

                      <ul className="space-y-6">

                        <FeatureItem
                          icon={<Globe className="w-6 h-6 text-indigo-600" />}
                          title="Browse upcoming events"
                          desc="Find events via homepage slider or detailed listings with advanced filtering."
                        />

                        <FeatureItem
                          icon={<CheckCircle2 className="w-6 h-6 text-indigo-600" />}
                          title="Simple joining process"
                          desc="Join free public events instantly or request access to private ones."
                        />

                        <FeatureItem
                          icon={<Shield className="w-6 h-6 text-indigo-600" />}
                          title="Secure payments"
                          desc="Pay registration fees with full encryption."
                        />

                        <FeatureItem
                          icon={<Calendar className="w-6 h-6 text-indigo-600" />}
                          title="Event reminders"
                          desc="Never miss an event with our notification system & calendar integration."
                        />
                      </ul>

                      <div className="mt-16">
                        <Link href="/events">
                          <NextButton name="Explore Events" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

/* ----------- REUSABLE LIST ITEM COMPONENT ----------- */

function FeatureItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <li className="flex">
      <div className="flex items-center justify-center flex-shrink-0 p-3 mr-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-900">{title}</p>
        <p className="text-gray-600">{desc}</p>
      </div>
    </li>
  )
}
