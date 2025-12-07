"use client";

import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TestimonialsSection() {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.3,
  });

  // ⭐ Utility function for ratings
  const RatingStars = ({ count }: { count: number }) => (
    <div className="flex mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 text-yellow-400 fill-yellow-400"
        />
      ))}
      {Array.from({ length: 5 - count }).map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 text-yellow-400 opacity-30"
        />
      ))}
    </div>
  );

  return (
    <section
      ref={testimonialsRef}
      className="bg-[#1E3A8A] py-16 text-white relative mb-14"
    >
      <div className="container relative z-10 px-4 mx-auto md:px-0">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <Badge className="mb-4 text-white bg-white/20 hover:bg-white/30">
            Testimonials
          </Badge>

          <h2 className="mb-4 text-4xl font-bold">
            What Our Users Say
          </h2>

          <p className="text-lg text-blue-200">
            Hear from event organizers and attendees who use our platform
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={testimonialsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto"
        >
          <Carousel className="w-full">
            <CarouselContent>

              {/* Testimonial - 1 */}
              <CarouselItem className="p-2 md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-8 bg-white/10 backdrop-blur-md rounded-2xl">
                  <div className="flex items-center mb-6">
                    <div className="mr-4 overflow-hidden border-2 rounded-full w-14 h-14 border-white/30">
                      <Image
                        src="/images/testimonial/user2.jpg"
                        alt="Robert Taylor"
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Robert Taylor</h4>
                      <p className="text-sm text-blue-200">
                        Conference Organizer
                      </p>
                    </div>
                  </div>

                  <RatingStars count={5} />

                  <p className="italic text-blue-100">
                    “EventHub transformed how we manage our annual tech conference. 
                    The payment integration and approval workflows save us countless 
                    hours of manual work.”
                  </p>
                </div>
              </CarouselItem>

              {/* Testimonial - 2 */}
              <CarouselItem className="p-2 md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-8 bg-white/10 backdrop-blur-md rounded-2xl">
                  <div className="flex items-center mb-6">
                    <div className="mr-4 overflow-hidden border-2 rounded-full w-14 h-14 border-white/30">
                      <Image
                        src="/images/testimonial/user3.jpg"
                        alt="Jennifer Kim"
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Jennifer Kim</h4>
                      <p className="text-sm text-blue-200">Community Leader</p>
                    </div>
                  </div>

                  <RatingStars count={5} />

                  <p className="italic text-blue-100">
                    “The private event option lets me create exclusive experiences 
                    for my community while keeping everything organized.”
                  </p>
                </div>
              </CarouselItem>

              {/* Testimonial - 3 */}
              <CarouselItem className="p-2 md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-8 bg-white/10 backdrop-blur-md rounded-2xl">
                  <div className="flex items-center mb-6">
                    <div className="mr-4 overflow-hidden border-2 rounded-full w-14 h-14 border-white/30">
                      <Image
                        src="/images/testimonial/user1.jpg"
                        alt="Marcus Johnson"
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Marcus Johnson</h4>
                      <p className="text-sm text-blue-200">
                        Regular Attendee
                      </p>
                    </div>
                  </div>

                  <RatingStars count={4} />

                  <p className="italic text-blue-100">
                    “I have discovered so many amazing events through EventHub. 
                    The payment process is seamless!”
                  </p>
                </div>
              </CarouselItem>

              {/* Testimonial - 4 */}
              <CarouselItem className="p-2 md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-8 bg-white/10 backdrop-blur-md rounded-2xl">
                  <div className="flex items-center mb-6">
                    <div className="mr-4 overflow-hidden border-2 rounded-full w-14 h-14 border-white/30">
                      <Image
                        src="/images/testimonial/user1.JPG"
                        alt="Sophia Williams"
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Sophia Williams</h4>
                      <p className="text-sm text-blue-200">Event Planner</p>
                    </div>
                  </div>

                  <RatingStars count={5} />

                  <p className="italic text-blue-100">
                    “The analytics and reporting features help me make better 
                    decisions for future events.”
                  </p>
                </div>
              </CarouselItem>

            </CarouselContent>

            {/* Carousel Buttons */}
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static mr-2 text-white translate-y-0 border-none bg-white/20 hover:bg-white/30" />
              <CarouselNext className="static ml-2 text-white translate-y-0 border-none bg-white/20 hover:bg-white/30" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
