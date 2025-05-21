import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                Pratham Patel
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">Python Developer</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
                Entry-level Python Developer with expertise in RESTful API development, socket programming, and computer
                vision projects.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="gap-2">
                  <a href="#contact">
                    <Mail size={16} />
                    Contact Me
                  </a>
                </Button>
                <Button variant="outline" asChild className="gap-2">
                  <a href="/resume-pratham-patel.pdf" download>
                    <Download size={16} />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <Image src="/images/profile.jpeg" alt="Pratham Patel" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                I'm a Python Developer with hands-on experience in RESTful API development, socket programming, and
                computer vision projects. I've built robust facial recognition systems using CNN and OpenCV, and
                developed real-time backend services using FastAPI.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                I'm eager to contribute my technical expertise to innovative software products and grow within a
                collaborative engineering team.
              </p>
              <div className="flex flex-col space-y-2 pt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="text-gray-500 dark:text-gray-400" size={18} />
                  <span className="text-gray-700 dark:text-gray-300">Bhavnagar, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-gray-500 dark:text-gray-400" size={18} />
                  <span className="text-gray-700 dark:text-gray-300">patelpratham313@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="text-gray-500 dark:text-gray-400" size={18} />
                  <span className="text-gray-700 dark:text-gray-300">9157973748</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/photo1.jpeg"
                  alt="Pratham Patel"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/photo2.jpeg"
                  alt="Pratham Patel"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">
            Professional Experience
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Python Developer</CardTitle>
                    <CardDescription>Bonrix Software Systems</CardDescription>
                  </div>
                  <Badge>09/2023 - 01/2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    Developed multiple RESTful APIs using FastAPI, including PDF generation endpoints triggered by
                    frontend user actions.
                  </li>
                  <li>
                    Built real-time socket connections to enable seamless two-way communication between client and
                    server for dynamic data updates.
                  </li>
                  <li>
                    Designed and implemented a facial recognition module using OpenCV and multiple models, including
                    FisherFace and Convolutional Neural Networks (CNN), for user authentication.
                  </li>
                  <li>
                    Collected and preprocessed a dataset of over 400 facial images across users to train the recognition
                    system, significantly improving prediction accuracy.
                  </li>
                  <li>
                    Conducted model comparison and tuning, achieving high reliability across varying lighting conditions
                    and facial orientations.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="mt-8">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Internship Program</CardTitle>
                      <CardDescription>Brainly Beam Technologies</CardDescription>
                    </div>
                    <Badge variant="outline">Ahmedabad, India</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">
                    Participated in internship program of Python with Django.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              "Python",
              "Django",
              "Flask",
              "FastAPI",
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "MySQL",
              "Git",
              "GitHub",
              "OpenCV",
              "Machine Learning",
              "CNN",
              "Socket Programming",
              "RESTful API",
            ].map((skill) => (
              <Badge key={skill} variant="secondary" className="py-2 px-4 text-center justify-center text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Covid-19 Prediction Using X-ray</CardTitle>
                <CardDescription>Machine Learning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A system developed to predict COVID-19 using chest X-rays. This project was made with machine learning
                  and Convolutional Neural Network to analyze images and Streamlit for frontend.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  The final CNN model was integrated with a user interface and hosted on a web server for easy access,
                  allowing anyone to upload chest X-ray images and check the results.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle>Face Recognition Attendance System</CardTitle>
                <CardDescription>Machine Learning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  An automated system that uses facial recognition technology to record attendance. This project was
                  made with FisherRecognizer to capture images and OpenCV to train the model, providing a secure and
                  accurate way to record attendance while reducing the burden of manual tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle>Truth-Tellar-AI-Vision</CardTitle>
                <CardDescription>Deepfake Detection Web App</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Developed a web application that detects whether an image or video is a deepfake. The app allows users
                  to upload manipulated media for analysis, with customizable settings.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Analysis Type: Select the detection approach</li>
                  <li>Sensitivity Level: Adjust sensitivity to detect subtle manipulations</li>
                  <li>Manipulation Region Detection: Identify specific altered areas</li>
                  <li>Accuracy Prioritization: Optimize detection for higher confidence</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle>Electric Vehicle Recharge Bunk Web Application</CardTitle>
                <CardDescription>04/2025 - present</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Project for managing electric vehicle charging stations and booking.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>
                    Developed a web application to display nearby electric vehicle charging stations with real-time data
                  </li>
                  <li>Created an interactive UI using React and Tailwind CSS</li>
                  <li>Integrated Firebase Firestore for managing station data</li>
                  <li>Utilized Firebase Authentication for user management</li>
                  <li>Used Django Admin to efficiently update and manage charging station details</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">Education & Courses</h2>
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="education">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
              </TabsList>
              <TabsContent value="education" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>B.Tech in Computer Engineering</CardTitle>
                        <CardDescription>LDRP Institute of Technology and Research</CardDescription>
                      </div>
                      <Badge>07/2019 - 04/2023</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">Gandhinagar, India</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="courses" className="mt-6 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Crash Course on Python</CardTitle>
                    <CardDescription>Google, Coursera</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Python for Data Science</CardTitle>
                    <CardDescription>NPTEL</CardDescription>
                  </CardHeader>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">Get In Touch</h2>
          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">patelpratham313@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">9157973748</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Bhavnagar, India</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-6">
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a
                      href="https://github.com/pratham101201"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a
                      href="https://linkedin.com/in/pratham-patel-180938189"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-gray-300">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Pratham Patel. All rights reserved.</p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#experience" className="hover:text-white transition-colors">
                Experience
              </a>
              <a href="#skills" className="hover:text-white transition-colors">
                Skills
              </a>
              <a href="#projects" className="hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
