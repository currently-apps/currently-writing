import React from 'react';
import "@currently-apps/currently-components/dist/assets/component-styles.css";
import { Header } from '@currently-apps/currently-components';


const HomePage: React.FC = () => {

  return (
    <>
      <Header serviceName={"Writing"} serviceIcon={"https://notes.currentlyapps.com/favicon.ico"} />
      <div className="prose prose-neutral mx-auto">
        <header>
          <h1>Currently Writing ✍️</h1>
          <p>A cloud & web-based Markdown editor</p>
        </header>

        <section>
          <h2>Boost Your Productivity with Currently Writing</h2>
          <p>Currently Writing is a powerful Markdown editor that helps you streamline your writing process and stay
            organized. With its user-friendly interface and cloud-based storage, you can access your documents from
            anywhere, collaborate with team members, and focus on what matters most: your writing.</p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Real-time collaboration: Work together with colleagues or co-authors on the same document
              simultaneously.
              🤝
            </li>
            <li>Cloud storage: Access your documents securely from any device with an internet connection. ☁️</li>
            <li>Markdown support: Write in Markdown format and export to various file formats, including HTML, PDF, and
              more. 📄
            </li>
            <li>Version control: Keep track of changes and revisions with our built-in version control system. 🔄</li>
            <li>Customizable interface: Tailor the editor to your preferences with customizable themes and layouts. 🎨
            </li>
          </ul>
        </section>

        <section>
          <h2>Get Started Today</h2>
          <p>Ready to enhance your writing experience? Sign up for Currently Writing and start writing, collaborating,
            and
            organizing your documents with ease.</p>
          <a href="https://your-app.com/signup" target="_blank">Sign Up Now</a>
        </section>

        <footer>
          <p>&copy; 2024 Currently Writing. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
