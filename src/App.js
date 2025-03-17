import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './BlogPost';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with AWS: A Beginner's Guide",
    author: "Jerome Yang",
    date: "March 10, 2025",
    content: "# Navigating the Basics of Amazon Web Services for Students\nAmazon Web Services offers a comprehensive suite of over 200 global cloud-based products, including compute, storage, databases, analytics, networking, mobile, developer tools, IoT, security, and enterprise applications. These services are available on-demand with pay-as-you-go pricing, allowing users to access resources as needed without significant upfront investments. For students at Mapua University, understanding AWS can be a gateway to numerous opportunities in cloud computing and IT infrastructure.\n\nTo embark on this journey, students can sign up for the AWS Free Tier, which provides limited access to various services at no cost for 12 months. This offering is an excellent way to explore and learn without financial commitment. Once registered, familiarizing oneself with the AWS Management Console—a web-based interface for managing AWS services—is crucial. AWS also offers extensive documentation and tutorials to assist newcomers, making the learning process both accessible and engaging.",
  },
  {
    id: 2,
    title: "Building Your First Serverless Application",
    author: "Marc Soquiat",
    date: "March 12, 2025",
    content: "# Leveraging AWS Lambda for Scalable Solutions\nServerless computing allows developers to build and run applications without managing server infrastructure. AWS Lambda is a key service in this paradigm, enabling code execution in response to events while automatically managing the underlying compute resources. This approach not only reduces operational overhead but also allows for scalable and cost-effective solutions.\n\nTo create a serverless application, developers can utilize AWS Lambda alongside other services like Amazon API Gateway for creating HTTP endpoints and Amazon DynamoDB for data storage. AWS provides various tools and frameworks, such as the AWS Serverless Application Model (SAM) and the AWS Cloud Development Kit (CDK), to streamline the development and deployment of serverless applications. These resources enable students and developers to focus on writing code that delivers value, without the complexities of managing server infrastructure. ",
  },
  {
    id: 3,
    title: "Enhancing Career Prospects with AWS Certifications",
    author: "Raphael Nano",
    date: "March 14, 2025",
    content: "# The Value of AWS Credentials for Emerging Professionals\nObtaining AWS certifications can significantly enhance a student's career prospects in the tech industry. These credentials validate one's expertise in AWS services and are recognized globally by employers. Certified individuals often experience increased job opportunities and earning potential. For instance, many AWS professionals report salary increases averaging 25% after certification. Additionally, AWS offers benefits like digital badges and access to exclusive events, further enriching one's professional profile.",
  },
  {
    id: 4,
    title: "AWS Educate: Empowering Students with Cloud Skills",
    author: "Gwen Evangelista",
    date: "March 16, 2025",
    content: "# Leveraging AWS Educate for Hands-on Learning Experiences\nAWS Educate is a global initiative by Amazon to provide students and educators with resources needed to accelerate cloud-related learning endeavors. It offers hands-on access to AWS technology, training resources, course content, and collaboration forums at no cost. By engaging with AWS Educate, students can gain practical experience with cloud services, enhancing their technical skills and preparing them for careers in the rapidly evolving cloud computing industry.",
  },
  {
    id: 5,
    title: "Innovating with AWS: Real-World Applications and Case Studies",
    author: "Josh Reyes",
    date: "March 18, 2025",
    content: "# Exploring How AWS Drives Innovation Across Industries\nAWS's robust infrastructure and diverse services have been instrumental in driving innovation across various sectors. For example, in Zaragoza, Spain, AWS established three data centers, significantly contributing to the region's technological growth and economy. These centers offer data storage and low latency services both nationally and internationally, showcasing AWS's impact on regional development. Additionally, AWS actively participates in local communities by supporting business associations and offering technology training programs, thereby fostering innovation and skill development.",
  },
  // Add more posts as needed
];

function App() {
  return (
    <Router>
      <div className="container mx-auto p-6">
        <Routes>
          <Route
            path="/"
            element={<BlogList posts={blogPosts} />}
          />
          <Route
            path="/post/:id"
            element={<BlogPost posts={blogPosts} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
