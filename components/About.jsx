import Head from "next/head";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  MailIcon,
  PhoneCall,
  Briefcase,
  MapPin,
  Calendar,
  Network,
} from "lucide-react";

const infoData = [
  {
    icon: <Briefcase size={20} />,
    text: "Gio Corporation",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+353 83 116 1066",
    link: "tel:+353831161066",
  },
  {
    icon: <MailIcon size={20} />,
    text: "dancewgio@gmail.com",
    link: "mailto:dancewgio@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 10 Mar, 2015",
  },
  {
    icon: <Network size={20} />,
    text: "7 employees",
  },
  {
    icon: <MapPin size={20} />,
    text: "YMCA Fitness, Aungier Street, Dublin 2, Ireland",
    link: "https://www.google.com/maps?q=YMCA+Fitness,+Aungier+Street,+Dublin+2,+Ireland",
  },
];

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Gio Corporation</title>
        <meta
          name="description"
          content="Learn about Gio Corporation, a team of professional choreographers, dancers, and entertainers bringing unforgettable performances to life."
        />
        <meta
          name="keywords"
          content="Gio Corporation, dance team, professional choreography, corporate events, wedding dance"
        />
        <meta property="og:title" content="About Us - Gio Corporation" />
        <meta
          property="og:description"
          content="Discover Gio Corporation, a team of professionals delivering spectacular dance performances and entertainment."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://giocorporation.com/about" />
        <meta property="og:image" content="/about/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <section className="xl:h-[860px] pb-12 xl:py-24">
        <div className="container mx-auto">
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            About Us
          </h2>
          <div className="flex flex-col xl:flex-row">
            {/* image */}
            <div className="hidden xl:flex flex-1 relative">
              <DevImg
                containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
                imgSrc="/about/developer.png"
              />
            </div>
            {/* tabs */}
            <div className="flex-1">
              <Tabs defaultValue="personal">
                <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                  <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                    Who We Are
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-[162px] xl:w-auto"
                    value="qualifications"
                  >
                    What We Do
                  </TabsTrigger>
                  <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                    Skills
                  </TabsTrigger>
                </TabsList>
                {/* tabs content */}
                <div className="text-lg mt-12 xl:mt-8">
                  {/* personal */}
                  <TabsContent value="personal">
                    <div className="text-center xl:text-left">
                      <h3 className="h3 mb-4">Welcome to Gio Corporation!</h3>
                      <p className="subtitle max-w-xl mx-auto xl:mx-0">
                        We specialize in providing exceptional entertainment for
                        all occasions. From high-energy performances to
                        personalized classes, we bring joy, rhythm, and elegance
                        to every event.
                      </p>
                      {/* icons */}
                      <div className="grid xl:grid-cols-2 gap-4 mb-12">
                        {infoData.map((item, index) => (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            {item.link ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" hover:underline"
                              >
                                {item.text}
                              </a>
                            ) : (
                              <div>{item.text}</div>
                            )}
                          </div>
                        ))}
                      </div>
                      {/* languages */}
                      <div className="flex flex-col gap-y-2">
                        <div className="text-primary">Language Skill</div>
                        <div className="border-b border-border"></div>
                        <div>English, Portuguese, Spanish, Italian</div>
                      </div>
                    </div>
                  </TabsContent>
                  {/* qualifications */}
                  <TabsContent value="qualifications">
                    {/* Add content */}
                  </TabsContent>
                  {/* skills */}
                  <TabsContent value="skills">
                    {/* Add content */}
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
