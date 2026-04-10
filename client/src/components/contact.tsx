import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import type { CreateContactInput } from "@shared/routes";
import { Mail, MapPin, Phone, CheckCircle2, X } from "lucide-react";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CreateContactInput>({
    resolver: zodResolver(insertContactMessageSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceNeeded: "",
      message: "",
    },
  });

  const onSubmit = async (data: CreateContactInput) => {
    setIsSubmitting(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...data,
        }).toString(),
      });
    } catch {
      // Netlify submission may not be available in dev — continue anyway
    }
    form.reset();
    setIsSubmitting(false);
    setShowPopup(true);
  };

  return (
    <>
      {/* Success Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ backgroundColor: "rgba(15,23,42,0.60)", backdropFilter: "blur(6px)" }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-card border border-border rounded-3xl shadow-2xl p-10 max-w-sm w-full text-center"
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:bg-muted transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
              </div>

              <h3 className="text-2xl font-bold text-primary dark:text-[hsl(210_20%_92%)] mb-2">Thank You!</h3>
              <p className="text-muted-foreground leading-relaxed">
                We've received your inquiry and will get back to you shortly.
              </p>

              <Button
                onClick={() => setShowPopup(false)}
                className="mt-7 w-full h-12 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                Done
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/40 dark:from-background dark:to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-[hsl(210_20%_92%)] mb-6">Let's Discuss Your Project</h3>
            <p className="text-lg text-muted-foreground">
              Ready to take your business to the next level? Fill out the form and our experts will reach out to schedule a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              {[
                { icon: Phone, label: "Call Us", value: "+91 99581 73726", sub: "Mon–Sat, 9am to 7pm", href: "tel:+919958173726" },
                { icon: Mail, label: "Email Us", value: "5seassolution@gmail.com", sub: "Reply within 12–24 hours", href: "mailto:5seassolution@gmail.com" },
                { icon: MapPin, label: "Visit Us", value: "Gurgaon, India", sub: "Corporate Business Hub", href: "#" },
              ].map((c, i) => (
                <a key={i} href={c.href} className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <c.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary dark:text-[hsl(210_20%_92%)] text-lg">{c.label}</h4>
                    <p className="text-foreground/80 font-medium">{c.value}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{c.sub}</p>
                  </div>
                </a>
              ))}

              <div className="mt-4 rounded-3xl overflow-hidden border border-border/50 shadow-lg h-52 relative group">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=75&auto=format&fit=crop"
                  alt="Modern business office"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent" />
                <div className="absolute bottom-4 left-5 text-white">
                  <p className="text-sm font-semibold opacity-90">Gurgaon, India</p>
                  <p className="text-xs opacity-70">Corporate Business Hub</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border shadow-2xl shadow-primary/5 rounded-3xl p-8 md:p-10"
            >
              <h3 className="text-2xl font-bold text-primary dark:text-[hsl(210_20%_92%)] mb-6">Send a Message</h3>

              <Form {...form}>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="text" name="bot-field" style={{ display: "none" }} />

                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          className="h-11 rounded-xl focus-visible:ring-secondary/40"
                          data-testid="input-name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@company.com"
                            className="h-11 rounded-xl focus-visible:ring-secondary/40"
                            data-testid="input-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+91 98765 43210"
                            className="h-11 rounded-xl focus-visible:ring-secondary/40"
                            data-testid="input-phone"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="serviceNeeded" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Needed</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-11 rounded-xl focus:ring-secondary/40" data-testid="select-service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="CA Services">CA Services</SelectItem>
                          <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                          <SelectItem value="IT Services">IT Services</SelectItem>
                          <SelectItem value="Virtual Office">Virtual Office</SelectItem>
                          <SelectItem value="Designing & Branding">Designing &amp; Branding</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="serviceNeeded" value={form.watch("serviceNeeded")} />
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          className="rounded-xl min-h-[100px] focus-visible:ring-secondary/40 resize-none"
                          data-testid="textarea-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-13 rounded-xl bg-primary text-white hover:bg-secondary active:scale-[0.98] transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed font-semibold text-base"
                    data-testid="button-submit"
                  >
                    {isSubmitting ? "Sending…" : "Submit Inquiry"}
                  </Button>
                </form>
              </Form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
