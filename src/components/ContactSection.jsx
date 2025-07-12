import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill all the fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "This is a demo. Backend removed.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000); // Simulated delay
  };

 return (
  <section id="contact" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-3xl flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Get In <span className="text-primary">Touch</span>
      </h2>

      <p className="text-muted-foreground mb-12 max-w-xl">
        Have a project in mind or want to collaborate? Feel free to reach out.
        I'm always open to discussing new opportunities.
      </p>

      <div className="space-y-12 w-full">
        {/* Contact Information */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Contact Information</h3>

          {/* Email */}
          <div className="flex flex-col items-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Email</h4>
            <a
              href="mailto:arjun9654abc@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              arjun9654abc@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Phone</h4>
            <a
              href="tel:9565189654"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +91 9565189654
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Location</h4>
            <span className="text-muted-foreground">Lucknow, Uttar Pradesh, India</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-8">
          <h4 className="font-medium mb-4">Connect With Me</h4>
          <div className="flex space-x-6 justify-center">
            <a
              href="https://www.linkedin.com/in/arjun-maurya-8b1716299/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:scale-110 transition-transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/arjun-901"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:scale-110 transition-transform"
            >
              <Github className="w-6 h-6" />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  </section>
);
};