"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Heart, Award, Sparkles } from "lucide-react";
import img from "../../../public/images/register-cover.jpg";
import Title from "../shared/Title";

export default function ValuesSection() {
  const valuesRef = useRef<HTMLDivElement>(null);
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <section ref={valuesRef} className="relative py-24 overflow-hidden bg-white">
      
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${img.src})` }}
      ></div>

      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

      <div className="container relative z-10 px-4 mx-auto md:px-0">

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={valuesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <p className="mb-4 bg-blue-600/90 text-xs p-1 px-3 w-fit mx-auto text-white rounded-lg">
            @ What Drives Us
          </p>

          <Title title="Our Core Values" />

          <p className="text-xl text-gray-100">
            The principles that guide everything we do
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="p-8 shadow-xl bg-gradient-to-br from-blue-500/20 to-blue-400/10 rounded-xl border border-white/10 backdrop-blur-sm"
          >
            <div className="mb-6">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 bg-blue-300/50 rounded-xl rotate-6" />
                <div className="absolute inset-0 bg-blue-200/40 rounded-xl -rotate-3" />
                <div className="relative flex items-center justify-center w-full h-full bg-blue-700 rounded-xl">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">
              Security First
            </h3>
            <p className="text-gray-200 leading-relaxed">
              We prioritize the security of user data and financial transactions
              with robust JWT protection and secure payment systems.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="p-8 shadow-xl bg-gradient-to-br from-indigo-500/20 to-indigo-400/10 rounded-xl border border-white/10 backdrop-blur-sm"
          >
            <div className="mb-6">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 bg-indigo-300/50 rounded-xl rotate-6" />
                <div className="absolute inset-0 bg-indigo-200/40 rounded-xl -rotate-3" />
                <div className="relative flex items-center justify-center w-full h-full bg-green-600 rounded-xl">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">
              Community Focus
            </h3>
            <p className="text-gray-200 leading-relaxed">
              We build features that bring people together and foster community
              engagement through meaningful events.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -10 }}
            className="p-8 shadow-xl bg-gradient-to-br from-purple-500/20 to-purple-400/10 rounded-xl border border-white/10 backdrop-blur-sm"
          >
            <div className="mb-6">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 bg-purple-300/50 rounded-xl rotate-6" />
                <div className="absolute inset-0 bg-purple-200/40 rounded-xl -rotate-3" />
                <div className="relative flex items-center justify-center w-full h-full bg-purple-700 rounded-xl">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">
              Excellence
            </h3>
            <p className="text-gray-200 leading-relaxed">
              We deliver high-performance, reliable, and top-quality features
              to give users the best experience possible.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10 }}
            className="p-8 shadow-xl bg-gradient-to-br from-teal-500/20 to-teal-400/10 rounded-xl border border-white/10 backdrop-blur-sm"
          >
            <div className="mb-6">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 bg-teal-300/50 rounded-xl rotate-6" />
                <div className="absolute inset-0 bg-teal-200/40 rounded-xl -rotate-3" />
                <div className="relative flex items-center justify-center w-full h-full bg-teal-700 rounded-xl">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">
              Transparency
            </h3>
            <p className="text-gray-200 leading-relaxed">
              We maintain complete transparency in event creation, participation
              workflows, and payment processes.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
