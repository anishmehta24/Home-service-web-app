import { Mail, MapPin, Phone } from 'lucide-react'
import Head from 'next/head'
import React from 'react'


function page() {
    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen">
            <Head>
                <title className=''>About Us - MSM</title>
            </Head>
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="font-bold text-4xl text-center text-primary">About Us</h1>
                </div>
            </header>
            <main className="container mx-auto px-4 py-8">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 ">Welcome to <span className='font-bold'>MSM</span></h2>
                    <p className="text-lg leading-relaxed">
                        Your trusted partner for all your home service needs. We are dedicated to providing top-notch, reliable, and professional services that make your life easier and your home a more comfortable place to live. Whether you need cleaning, repairs, or any other home maintenance service, our team of experienced professionals is here to help.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-lg leading-relaxed">
                        At MSM , our mission is to deliver exceptional home services that exceed our clients’ expectations. We believe in building long-lasting relationships with our customers by consistently providing high-quality work, outstanding customer service, and a personalized approach to every job.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                    <h3 className="text-lg leading-relaxed">
                        We offer a comprehensive range of home services tailored to meet the unique needs of our clients:
                    </h3>
                    <ul className="list-disc list-inside">
                        <li>Cleaning</li>
                        <li>Repairing</li>
                        <li>Painting</li>
                        <li>Plumbing</li>
                        <li>Laundry</li>
                    </ul>
                    <h3 className="text-lg leading-relaxed">
                       and many different other household day to day works.
                    </h3>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                    <h3 className="text-lg leading-relaxed">
                        <ul className="list-disc list-inside">
                            <li>Quality: We are committed to providing the highest quality services to ensure your complete satisfaction.</li>
                            <li>Reliability: You can count on us to be there on time and to complete the job efficiently and effectively.</li>
                            <li>Trustworthiness: We prioritize your trust and peace of mind, ensuring all our employees undergo rigorous background checks.</li>
                            <li>Personalized Service: We tailor our services to meet your specific needs, ensuring a personalized and hassle-free experience.</li>
                        </ul>
                    </h3>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                    <p className="text-lg leading-relaxed">
                        Ready to experience the best home services? Contact us today to schedule a service or to learn more about how we can help you. We look forward to serving you and making your home a better place.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6">Contact Us : </h2>
                    <div className="mt-4 flex gap-2 items-center">
                        <Mail/> <a href="mailto:am16211001@gmail.com" className="text-lg">am16211001@gmail.com</a>
                    </div>

                    <div className='flex gap-2 mt-3 text-lg'>
                        <Phone/><h2>+1 (555) 123-4567</h2>
                    </div>
                   
                    <div className=" flex gap-2 text-lg leading-relaxed mt-3">
                       <MapPin/><h2> MSM GROUP <br />
                        123 Home Service Street, <br />
                        New York, NY 10001, <br />
                        United States</h2>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default page