import React from "react";

const Offerings = () => {
  const offerings = [
    {
      id: 1,
      image: "/offerings/implementation-image.jpg", // Replace with actual image path
      title: "Enterprise Systems Implementation",
      description:
        "We offer a comprehensive suite of services, ranging from digital readiness assessment to complete system implementation. Our expertise includes Systems project management, Enterprise Resource Planning (ERP) solutions and Core Banking system implementation, integration and customization, data migration, training, and ongoing support. Recognizing the critical importance of a well-executed implementation process, we collaborate closely with our clients to ensure their systems are perfectly tailored to meet their unique business needs.",
      link: "/enterprise-systems-implementation",
    },
    {
      id: 2,
      image: "/offerings/integration-image.jpg", // Replace with actual image path
      title: "Enterprise Applications Integration",
      description:
        "Our services encompass synchronizing and integrating enterprise applications through middleware solutions, including API Management (APIM), Enterprise Service Bus (ESB) implementations, data processing tools, and other systems to maintain data accuracy and consistency across platforms. We deliver customized solutions to meet each client's unique requirements, offering expertise in data warehousing, ETL (extraction, transformation, and loading) processes, system and data migration, application integration, and more.",
      link: "/enterprise-application-integration",
    },
    {
      id: 3,
      image: "/offerings/identity-image.jpg", // Replace with actual image path
      title: "Identity & Access Management Solutions",
      description:
        "Our Identity and Access Management solution enhances organizational security and ensures compliance with industry standards and regulations. We offer a range of services, including access request and approval workflows, robust consumer authentication, password management, secure single sign-on, and detailed audit logging. Our IAM solutions provide a unified platform for managing user identities, roles, and groups, enabling organizations to control access to their systems and data with increased flexibility and precision",
      link: "/identity-access-management",
    },
    {
      id: 4,
      image: "/offerings/automation-image.jpg", // Replace with actual image path
      title: "AI & Process Automation Solutions",
      description:
        "We leverage cutting-edge technologies like Machine Learning (ML), Natural Language Processing (NLP), and Robotic Process Automation (RPA) to transform business processes. Our solutions encompass the implementation and optimization of Business Process Management (BPM) systems, enabling organizations to streamline workflows, improve decision-making, and enhance overall operational efficiency. We also specialize in developing and deploying intelligent automation solutions, such as AI-powered chatbots and virtual assistants, to improve customer service, enhance customer experiences, and drive greater customer satisfaction.",
      link: "#",
    },
  ];

  return (
    <section className="offerings">
      <div className="offerings__container">
        <h2 className="offerings__heading">Our Offerings</h2>
        <p className="offerings__subheading">
          Our services encompass Digital Transformation, Identity Management,
          and more, all customized to address your specific business needs.
        </p>

        <div className="offerings__grid">
          {offerings.map((offering) => (
            <div key={offering.id} className="offerings__card">
              <div className="offerings__image-wrapper">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="offerings__image"
                />
              </div>
              <div className="offerings__content">
                <h3 className="offerings__title">{offering.title}</h3>
                <p className="offerings__description">{offering.description}</p>
                <a href={offering.link} className="offerings__link">
                  Continue Reading
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
