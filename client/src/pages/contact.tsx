import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import type { CreateContactInput } from "@shared/routes";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { Mail, MapPin, Phone, Loader2, MessageCircle, Clock } from "lucide-react";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 99581 73726", href: "tel:+919958173726", color: "text-teal-500", bg: "bg-teal-500/10" },
  { icon: Mail, label: "Email", value: "5seassolution@gmail.com", href: "mailto:5seassolution@gmail.com", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: MapPin, label: "Location", value: "Gurgaon, India", href: "#", color: "text-rose-500", bg: "bg-rose-500/10" },
  { icon: Clock, label: "Business Hours", value: "Mon–Sat, 9am – 7pm", href: "#", color: "text-amber-500", bg: "bg-amber-500/10" },
];

export default function Contact() {
  const mutation = useCreateContactMessage();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<CreateContactInput>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: { name: "", email: "", phone: "", serviceNeeded: "", message: "" },
  });

  const onSubmit = (data: CreateContactInput) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 6000);
      },
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-sm font-bold uppercase tracking-wider text-secondary bg-white border border-border/50 px-4 py-1.5 rounded-full mb-5 shadow-sm">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary leading-tight mb-5">
              Let's Build Something Great Together
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your business and what you need. Our team will get back to you within one business day with a custom plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-white rounded-3xl p-8 border border-border/50 shadow-lg">
                <h2 className="text-2xl font-display font-bold text-primary mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  {contactInfo.map((c, i) => (
                    <a key={i} href={c.href} className="flex items-start gap-4 group">
                      <div className={`w-12 h-12 rounded-2xl ${c.bg} flex items-center justify-center flex-shrink-0`}>
                        <c.icon className={`w-5 h-5 ${c.color}`} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-0.5">{c.label}</p>
                        <p className={`font-medium text-foreground group-hover:${c.color} transition-colors`}>{c.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Prefer WhatsApp?</h3>
                <p className="text-white/80 text-sm mb-5">
                  Chat with us directly for a faster response. We typically reply within 30 minutes during business hours.
                </p>
                <Button
                  className="w-full bg-white text-primary hover:bg-white/90 rounded-xl"
                  onClick={() => window.open("https://wa.me/+919958173726?text=Hello%205SeasSolution%2C%20I%20need%20help%20with%20my%20business.", "_blank")}
                >
                  <MessageCircle className="mr-2 w-4 h-4" /> Open WhatsApp Chat
                </Button>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-8 border border-border/50 shadow-lg">
                <h2 className="text-2xl font-display font-bold text-primary mb-6">Send Us a Message</h2>

                {submitted && (
                  <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-2xl p-4 text-center font-medium">
                    Inquiry submitted! We'll connect with you soon.
                  </div>
                )}

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl><Input placeholder="Your name" className="bg-muted/50 border-border/50 rounded-xl" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl><Input type="email" placeholder="you@company.com" className="bg-muted/50 border-border/50 rounded-xl" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl><Input placeholder="+91 98765 43210" className="bg-muted/50 border-border/50 rounded-xl" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="serviceNeeded" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Needed</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-muted/50 border-border/50 rounded-xl">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="virtual-office">Virtual Office</SelectItem>
                              <SelectItem value="ca-services">CA Services</SelectItem>
                              <SelectItem value="it-services">IT Services</SelectItem>
                              <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                              <SelectItem value="branding">Designing & Branding</SelectItem>
                              <SelectItem value="multiple">Multiple Services</SelectItem>
                              <SelectItem value="other">Other / Not Sure</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us about your requirements, current challenges, and what you're looking to achieve..." className="bg-muted/50 border-border/50 min-h-[140px] rounded-xl resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <Button type="submit" disabled={mutation.isPending} className="w-full h-14 text-base rounded-xl bg-primary hover:bg-secondary text-white shadow-lg transition-all">
                      {mutation.isPending ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
