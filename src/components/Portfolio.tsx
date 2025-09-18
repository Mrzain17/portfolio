import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Md Abdullah</h1>
        <p className="text-lg text-gray-600">Web Developer | React.js | Node.js | MongoDB</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700">
          I am an enthusiastic Web Developer skilled in building modern, responsive, and dynamic web applications.
          Experienced in React.js, Node.js, and MongoDB with a strong focus on clean design and performance.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-4 text-gray-700">
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>HTML5/CSS3</li>
          <li>TailwindCSS</li>
          <li>AWS Basics</li>
          <li>Git/GitHub</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">Personal Portfolio</h3>
              <p className="text-gray-600">React & TailwindCSS based portfolio showcasing skills, projects, and contact info.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">E-commerce Web App</h3>
              <p className="text-gray-600">Full-stack app with product listings, cart, and authentication using MERN stack.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">Blog Application</h3>
              <p className="text-gray-600">Blogging platform with CRUD operations and user authentication.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: your.email@example.com</p>
        <Button className="mt-4">Get in Touch</Button>
      </section>
    </main>
  ); 
}

