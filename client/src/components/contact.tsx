import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import type { CreateContactInput } from "@shared/routes";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { Mail, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react";
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
  const mutation = useCreateContactMessage(); // untouched
  const [submitted, setSubmitted] = useState(false);

  // ✅ CHANGE: mode added
  const form = useForm<CreateContactInput>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceNeeded: "",
      message: "",
    },
  });

  const onSubmit = (data: CreateContactInput) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
        setSubmitted(true);
      },
    });
  };

  const isValid = form.formState.isValid;

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">Get In Touch</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">Let's Discuss Your Project</h3>
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
            transition={{ duration: 0.6 }}
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
                  <h4 className="font-bold text-primary text-lg">{c.label}</h4>
                  <p className="text-foreground/80 font-medium">{c.value}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{c.sub}</p>
                </div>
              </a>
            ))}

            <div className="mt-4 rounded-3xl overflow-hidden border border-border/50 shadow-lg h-48">
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=70&auto=format&fit=crop"
                alt="Delhi NCR business district"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-border shadow-2xl shadow-primary/5 rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>

            {submitted && (
              <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-2xl px-5 py-4 mb-6">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">
                  Thank you! We'll connect with you soon.
                </span>
              </div>
            )}

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >

                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+91 98765 43210" {...field} />
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
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="CA Services">CA Services</SelectItem>
                        <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                        <SelectItem value="IT Services">IT Services</SelectItem>
                        <SelectItem value="Virtual Office">Virtual Office</SelectItem>
                        <SelectItem value="Designing & Branding">Designing & Branding</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                {/* ✅ BUTTON LOCK */}
                <Button
                  type="submit"
                  disabled={!isValid}
                  className="w-full h-14 rounded-xl bg-primary text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Submit Inquiry
                </Button>

              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}