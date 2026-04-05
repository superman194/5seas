import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import type { CreateContactInput } from "@shared/routes";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function Contact() {
  const mutation = useCreateContactMessage();
  const [showToast, setShowToast] = useState(false);
  
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

  // const onSubmit = (data: CreateContactInput) => {
  // fetch("/", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //   body: new URLSearchParams({
  //     "form-name": "contact",
  //     name: data.name,
  //     email: data.email,
  //     phone: data.phone,
  //     serviceNeeded: data.serviceNeeded,
  //     message: data.message,
  //   }).toString(),
  //   });
  //    //  show toast
  //     setShowToast(true);
  //     setTimeout(() => setShowToast(false), 3000);
  //     // alert("Inquiry submitted! We'll connect you soon.");
  //     form.reset();
  //   };
        const onSubmit = async (data: CreateContactInput) => {
          try {
            const response = await fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams({
                "form-name": "contact",
                name: data.name,
                email: data.email,
                phone: data.phone,
                serviceNeeded: data.serviceNeeded,
                message: data.message,
              }).toString(),
            });

            if (response.ok) {
              //  only when success
              form.reset();
              setShowToast(true);

              setTimeout(() => setShowToast(false), 3000);
            } else {
              console.error("Submission failed");
            }
          } catch (error) {
            console.error("Error:", error);
          }
        };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
              Let's Discuss Your Project
            </h3>
            <p className="text-lg text-muted-foreground mb-10">
              Ready to take your business to the next level? Fill out the form, and our experts will reach out to schedule a free consultation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Call Us</h4>
                  <p className="text-muted-foreground">+91 99581 73726</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am to 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Email Us</h4>
                  <p className="text-muted-foreground">5seassolution@gmail.com</p>
                  <p className="text-sm text-muted-foreground mt-1">We typically reply within 12 - 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Visit Us</h4>
                  <p className="text-muted-foreground max-w-[200px]">Corporate Business Park, Metro Hub, City</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-border shadow-2xl shadow-primary/5 rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
            
            <Form {...form}>
                <form 
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={form.handleSubmit(onSubmit)} 
                  className="space-y-6"
                >
                <input type="hidden" name="form-name" value="contact" />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-muted/50 border-border/50 h-12 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" className="bg-muted/50 border-border/50 h-12 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+91 98765 43210" className="bg-muted/50 border-border/50 h-12 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="serviceNeeded"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Service Needed</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-muted/50 border-border/50 h-12 rounded-xl">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="CA Services">CA Services</SelectItem>
                          <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                          <SelectItem value="IT Services">IT Services</SelectItem>
                          <SelectItem value="Virtual Office">Virtual Office</SelectItem>
                          <SelectItem value="Designing & Branding">Designing & Branding</SelectItem>
                          <SelectItem value="Other">Other / Multiple</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your requirements..." 
                          className="bg-muted/50 border-border/50 min-h-[120px] rounded-xl resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full h-14 text-lg rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </Button>
                
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
          
        {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg z-50 transition-all duration-300">
          Inquiry submitted! We'll connect you soon.
        </div>
       )}
    </section>
  );
}
