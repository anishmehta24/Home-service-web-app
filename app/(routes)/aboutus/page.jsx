import { Mail, MapPin, Phone, Star, ShieldCheck, Smile } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import React from "react";


function page() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <Head>
        <title>About Us - MSM</title>
      </Head>
      <header className="bg-primary text-white shadow">
        <div className="container mx-auto px-4 py-6 text-center">
          <h1 className="font-bold text-5xl">About Us</h1>
          <p className="text-lg mt-2">Your trusted partner for all home services</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="mb-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-primary mb-4">Welcome to MSM</h2>
            <p className="text-lg leading-relaxed">
              Your trusted partner for all your home service needs. We are
              dedicated to providing top-notch, reliable, and professional
              services that make your life easier and your home a more
              comfortable place to live. Whether you need cleaning, repairs, or
              any other home maintenance service, our team of experienced
              professionals is here to help.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                At MSM, our mission is to deliver exceptional home services that
                exceed our clients’ expectations. We believe in building
                long-lasting relationships with our customers by consistently
                providing high-quality work, outstanding customer service, and a
                personalized approach to every job.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex items-center justify-center">
               <Image
                src="/logo.png"
                width={1000}
                height={1000}
                alt="Our Mission"
                className="rounded-lg object-cover w-[50%] h-[90%]"
              />
            </div>
            
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Cleaning", icon: <Smile className="h-8 w-8 text-primary" /> },
              { name: "Repairing", icon: <ShieldCheck className="h-8 w-8 text-primary" /> },
              { name: "Painting", icon: <Star className="h-8 w-8 text-primary" /> },
              { name: "Plumbing", icon: <ShieldCheck className="h-8 w-8 text-primary" /> },
              { name: "Laundry", icon: <Smile className="h-8 w-8 text-primary" /> },
              { name: "Day-to-Day Work", icon: <Star className="h-8 w-8 text-primary" /> },
            ].map((service, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-bold text-xl">{service.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-lg leading-relaxed">
              <li>
                <strong>Quality:</strong> We are committed to providing the
                highest quality services to ensure your complete satisfaction.
              </li>
              <li>
                <strong>Reliability:</strong> You can count on us to be there on
                time and to complete the job efficiently and effectively.
              </li>
              <li>
                <strong>Trustworthiness:</strong> All employees undergo rigorous
                background checks for your peace of mind.
              </li>
              <li>
                <strong>Personalized Service:</strong> We tailor our services to
                meet your specific needs for a hassle-free experience.
              </li>
            </ul>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex items-center justify-center">
            <Image
                src="/logo.png"
                width={1000}
                height={1000}
                alt="Why Choose Us"
                className="rounded-lg object-cover w-[50%] h-[90%]"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Get in Touch</h2>
          <p className="text-lg leading-relaxed text-center mb-6">
            Ready to experience the best home services? Contact us today to schedule a service or learn more about how we can help you. We look forward to serving you!
          </p>
          <div className="flex flex-col md:flex-row justify-around items-center bg-white shadow-lg rounded-lg p-6 gap-6">
            <div className="text-center">
              <Mail className="h-8 w-8 text-primary mx-auto" />
              <p className="mt-2 text-lg">am16211001@gmail.com</p>
            </div>
            <div className="text-center">
              <Phone className="h-8 w-8 text-primary mx-auto" />
              <p className="mt-2 text-lg">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto" />
              <p className="mt-2 text-lg">
                MSM Group <br />
                123 Home Service Street, <br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
