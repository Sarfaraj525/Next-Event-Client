"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function FaqSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            Help Center
          </Badge>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-xl text-gray-700">
            Answers to common questions about our platform
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">

            {/* FAQ 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                How do I create my first event?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                After registering and logging in, go to your dashboard and click on
                “Create Event”. Fill out all required details, choose visibility
                settings, set optional entry fees, and publish your event.
              </p>
            </motion.div>

            {/* FAQ 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                What payment methods do you support?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We support major debit/credit cards, mobile wallets and
                region-based payment gateways. All payments are fully encrypted
                with bank-level security standards.
              </p>
            </motion.div>

            {/* FAQ 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                How do I manage participant requests?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Organizer dashboards include a request management system where
                you can approve or reject join requests, invite users, or ban
                participants if necessary.
              </p>
            </motion.div>

            {/* FAQ 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                What is the difference between public and private events?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Public events are visible to everyone and allow instant joining
                if they are free. Private events require approval and can also be
                monetized if the organizer chooses.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
