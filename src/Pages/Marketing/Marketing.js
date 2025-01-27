import React, { useState, useRef } from 'react';
import OT from "../../images/example.jpg";
import SEO from "./../../images/example.jpg";
import PPC from "./../../images/example.jpg";
import SMM from "./../../images/example.jpg";
import SMA from "./../../images/example.jpg";
import LB from "./../../images/example.jpg";
import WDD from "./../../images/example.jpg";
import MP from "./../../images/example.jpg";
import CM from "./../../images/example.jpg";
import RP from "./../../images/example.jpg";
import EC from "./../../images/example.jpg";
import OMM from "./../../images/example.jpg";
import axios from "axios";
import "./marketing.css";

const sectionData = [
  {
    name: "Digital Marketing",
    details: {
      AboutImg: OT,
      CompanyScene: "Digital Marketing 💻📈",
      CompanyDetails:
        "In today’s fast-paced and highly competitive business world, digital marketing has become more than just a tool—it’s the cornerstone of any successful business strategy. With consumers increasingly turning to online platforms for everything from product research to making purchasing decisions, a robust digital presence is vital for staying ahead of the curve. Digital marketing enables businesses to reach a broader audience, build brand awareness, and directly engage with potential customers in ways traditional marketing methods cannot. It allows for real-time communication, personalized interactions, and measurable outcomes, making it essential for driving growth, enhancing visibility, and ensuring long-term success.",
      CompanyDetails2:
        "At 9Dots Agency, we recognize that a one-size-fits-all approach doesn’t work in the digital space. That’s why we specialize in creating custom-tailored digital marketing strategies designed specifically for your business’s unique needs. From enhancing your website’s search engine rankings with Search Engine Optimization (SEO), to driving high-quality traffic through Pay-Per-Click (PPC) advertising, to building a strong and consistent brand voice across social media platforms, our team employs a holistic, data-driven approach. We focus on results—boosting not only visibility but also fostering meaningful customer engagement and loyalty. Our experts stay at the forefront of industry trends and use cutting-edge tools to ensure your campaigns are optimized for success. Whether you’re looking to increase web traffic, convert leads into customers, improve customer retention, or enhance your brand’s online reputation, 9Dots Agency is dedicated to helping you achieve impactful, long-term results that align with your business goals.",
      CompanyDetails3:
        "By partnering with us, you gain more than just a service provider—you gain a trusted ally in the competitive digital landscape, committed to delivering sustainable growth and measurable ROI. Let 9Dots Agency be your driving force in navigating the ever-evolving digital world, propelling your brand to new heights of success.",
      Checklist: [
        "Digital Marketing Services",
        "Online Marketing Strategies",
        "SEO Optimization",
        "Social Media Advertising",
        "PPC Campaigns",
        "Website Traffic Growth",
      ],
    },
  },
  {
    name: "SEO",
    details: {
      AboutImg: SEO,
      CompanyScene: "Search Engine Optimization (SEO) 🌐",
      CompanyDetails:
        "In the competitive digital world, SEO has become the backbone of a successful online strategy. As consumer behavior shifts increasingly towards online research and shopping, businesses must ensure that they not only have a presence but stand out amidst the clutter of websites and online content. SEO is the most effective way to achieve visibility and credibility in an increasingly crowded digital space. With search engines becoming the primary gateway to information, securing top rankings is essential for driving organic traffic and gaining the trust of your target audience. Without a strong SEO strategy, your business risks being overshadowed by competitors who have mastered this critical marketing tool.",
      CompanyDetails2:
        "At 9Dots Agency, we understand that SEO is much more than just keyword optimization—it's about crafting a comprehensive strategy that aligns with your business objectives and resonates with your audience. We take a holistic approach to SEO, starting with an in-depth analysis of your current online presence, identifying opportunities for improvement, and developing a custom strategy that covers every aspect of SEO, from on-page and technical optimization to authoritative link-building and content strategy. Our team of SEO experts uses the latest tools and industry insights to continuously optimize your website, ensuring that every element—from page speed to mobile-friendliness—is working in your favor to enhance both user experience and search engine ranking.",
      CompanyDetails3:
        "What sets 9Dots Agency apart is our unwavering focus on long-term, sustainable results. SEO is not a one-time effort, but an ongoing process that evolves with the digital landscape. Our data-driven approach means we continually monitor the performance of your SEO strategy and adapt it to stay ahead of algorithm changes and emerging trends. We emphasize creating high-quality, relevant content that speaks to your audience’s needs, while also building backlinks that increase your site’s authority and trustworthiness. Whether you’re aiming for local SEO dominance, global expansion, or simply improving your site’s visibility, we ensure that your brand stays at the forefront of search engine results and that your business grows organically. At 9Dots Agency, we’re not just improving your rankings—we’re driving long-term growth, brand awareness, and meaningful customer engagement.",
      Checklist: [
        "Search Engine Optimization",
        "SEO Services",
        "Increase Website Traffic",
        "SEO Strategy",
        "Organic Growth",
        "SEO Expert Agency",
      ],
    },
  },
  {
    name: "PPC Marketing",
    details: {
      AboutImg: PPC,
      CompanyScene: "Pay per Click Marketing",
      CompanyDetails:
        "PPC Marketing is an essential tool for businesses looking to generate immediate traffic, boost visibility, and drive conversions. It offers the advantage of targeted reach, allowing brands to position their message in front of users actively seeking specific products or services. By strategically placing ads on search engines, social media platforms, or even websites relevant to your industry, PPC can quickly generate high-quality leads and sales opportunities. What makes PPC especially effective is its measurable impact, where businesses can continuously refine their approach based on data to optimize their results.",
      CompanyDetails2:
        "At 9Dots Agency, we focus on a data-driven and results-oriented approach to PPC. We go beyond simple click-through rates to ensure your ad spend is converted into meaningful outcomes. Our team meticulously researches keywords, designs targeted campaigns, and continuously monitors performance to drive a return on investment (ROI) that exceeds expectations. Whether you're aiming to attract new customers or retarget existing leads, we craft campaigns that fit your specific objectives, ensuring your message is seen by the right people at the right time.",
      CompanyDetails3:
        "We don’t just push ads—we create comprehensive PPC strategies that integrate seamlessly with your overall marketing goals. Our attention to detail and expertise in campaign management allows us to fine-tune each ad to maximize efficiency and effectiveness. By continually optimizing bids, targeting, and creative elements, we ensure that your business stands out and thrives in a competitive digital landscape.",
      Checklist: [
        "PPC Campaign Management",
        "Paid Search Advertising",
        "Google Ads Optimization",
        "PPC Marketing Services",
        "Cost-Effective Advertising",
        "Lead Generation through PPC",
      ],
    },
  },
  {
    name: "Social Media Marketing",
    details: {
      AboutImg: SMM,
      CompanyScene: "Social Media Marketing 📱💬",
      CompanyDetails:
        "Social media has become an indispensable part of any successful business strategy. It offers a direct path to engage with potential customers, build brand awareness, and foster a sense of community around your products or services. The ability to share content in real-time, interact with customers, and create personalized experiences gives businesses the tools they need to grow their audience and convert them into loyal customers.",
      CompanyDetails2:
        "At 9Dots Agency, we create targeted, data-driven social media campaigns that are designed to amplify your brand’s presence across the right platforms. We don’t just focus on building followers—we focus on building relationships. Our approach includes tailored content creation, strategic ad placements, and active community engagement, all aimed at driving measurable results. Whether it’s growing your social following, generating leads, or increasing sales, we ensure every campaign aligns with your brand’s core message and objectives.",
      CompanyDetails3:
        "With our expertise, we maximize the potential of each social channel by leveraging analytics and real-time insights to optimize campaigns for peak performance. We understand the nuances of each platform, ensuring that your content resonates with the right audience, at the right time, and in the right way.",

      Checklist: [
        "Social Media Strategy",
        "Social Media Advertising",
        "Brand Engagement",
        "Content Creation for Social Media",
        "Targeted Social Campaigns",
        "Social Media Analytics",
      ],
    },
  },
  {
    name: "Social Media Advertising",
    details: {
      AboutImg: SMA,
      CompanyScene: "Social Media Advertising 📢🎯",
      CompanyDetails:
        "Social media advertising offers businesses a unique opportunity to precisely target their ideal customers and reach them with highly relevant messaging. Unlike traditional advertising, social media platforms provide in-depth analytics and advanced targeting features that allow brands to optimize their reach and maximize their return on investment. By leveraging data and behavioral insights, social media ads are designed to connect with users at key moments, turning awareness into action with measurable results.",
      CompanyDetails2:
        "At 9Dots Agency, we specialize in creating impactful, results-driven social media advertising strategies. From crafting attention-grabbing ads to choosing the best platforms for your business, our team ensures that your message not only reaches the right audience but also resonates with them. We develop customized ad campaigns that integrate seamlessly into the user experience while driving engagement, conversions, and brand growth.",
      CompanyDetails3:
        "Our approach combines creativity with data analysis to fine-tune every aspect of your campaign—whether it’s adjusting the targeting, refining the content, or testing different ad formats. With continuous monitoring and optimization, we guarantee that your ads perform at their best, providing long-term value and delivering real business results.",

      Checklist: [
        "Social Media Advertising Services",
        "Targeted Social Media Ads",
        "Social Media Campaign Management",
        "Effective Social Media Strategies",
        "Boost Brand Awareness Online",
        "Custom Social Media Marketing",
      ],
    },
  },
  {
    name: "Link Building",
    details: {
      AboutImg: LB,
      CompanyScene: "Link Building 🔗📈",
      CompanyDetails:
        "Link building is a cornerstone of effective SEO and plays a critical role in improving a website’s authority and visibility on search engines. Quality backlinks from reputable websites not only drive referral traffic but also signal to search engines that your site is trustworthy and valuable. As search algorithms continue to evolve, the importance of building a diverse and natural backlink profile has never been greater. Without strategic link-building efforts, even the best content may struggle to rank in competitive search results.",
      CompanyDetails2:
        "At 9Dots Agency, we employ a data-driven, hands-on approach to link building that focuses on acquiring high-quality backlinks from authoritative sources in your industry. We understand that building a robust link profile requires more than just outreach; it requires building relationships and providing valuable content that other sites genuinely want to link to. Our team takes the time to research and understand your brand’s unique value proposition, ensuring that each link we secure enhances both your SEO performance and your brand’s credibility.",
      CompanyDetails3:
        "By leveraging the latest industry techniques and staying ahead of algorithm updates, 9Dots ensures that your website doesn’t just gain links—it gains links that matter. We focus on sustainable, white-hat link-building practices that provide long-term benefits, driving organic traffic, improving search rankings, and enhancing overall digital authority. With our expertise, your business will gain the competitive edge needed to thrive in today’s ever-changing online landscape.",

      Checklist: [
        "High-Quality Backlinks",
        "Link Building Services",
        "SEO Backlink Strategy",
        "Authority Link Building",
        "Organic Traffic Growth",
        "Trusted Link Building Agency",
      ],
    },
  },
  {
    name: "Web Design",
    details: {
      AboutImg: WDD,
      CompanyScene: "Web Design and Development 💻🎨",
      CompanyDetails:
        "In the digital world, your website is often the first point of contact between your business and potential clients. A seamless blend of stunning design and robust functionality is essential for leaving a lasting impression. Great design not only attracts users but also enhances usability, navigation, and the overall user experience, which is crucial for keeping visitors engaged and converting them into loyal customers. However, behind the visually appealing interface, exceptional web development ensures that the site performs optimally across all devices, scales efficiently, and offers smooth interactions.",
      CompanyDetails2:
        "At 9Dots Agency, we specialize in building highly functional and visually captivating websites that cater to your specific business needs. Our expert development team combines the power of cutting-edge technologies, including responsive design, JavaScript, CSS3, and backend frameworks, to craft websites that are fast, secure, and scalable. We understand that your website must not only look beautiful but also work flawlessly under varying levels of traffic and functionality demands. Our development process focuses on optimization, ensuring that every feature is fine-tuned for performance, from load speed to accessibility, giving users a superior experience at every touchpoint.",
      CompanyDetails3:
        "We take a collaborative, agile approach to web development, ensuring that each project aligns with your brand’s identity and business objectives. Our team is proficient in both front-end and back-end development, ensuring smooth integration between design and code. Whether you need a simple landing page or a complex e-commerce platform, 9Dots guarantees a website that is not only technically sound but also built for the future. We focus on delivering a tailored, seamless experience that exceeds expectations and drives measurable results, establishing your brand’s presence with both style and performance.",

      Checklist: [
        "Responsive Web Design",
        "Custom Website Development",
        "UI/UX Design",
        "Mobile-Friendly Websites",
        "Website Performance Optimization",
        "SEO-Optimized Web Development",
      ],
    },
  },
  {
    name: "Media Production",
    details: {
      AboutImg: MP,
      CompanyScene: "Media Production 🎥📸",
      CompanyDetails:
        "In a digital age dominated by multimedia, high-quality visual content is vital for capturing attention and conveying your brand’s message effectively. From captivating videos to compelling photography, media production offers businesses the tools to engage with their audience in a more dynamic and impactful way. A well-crafted media piece can transcend simple promotion, telling a story, invoking emotion, and creating lasting impressions that drive customer loyalty and brand recognition.",
      CompanyDetails2:
        "At 9Dots Agency, we specialize in delivering premium media production services that help bring your vision to life. Whether it's creating stunning promotional videos, engaging product photography, or immersive animations, our creative team uses state-of-the-art equipment and industry-leading techniques to ensure each project stands out. We understand that every business has unique goals, and we tailor our media production process to match your brand's identity, message, and target audience. By combining creativity with technical expertise, we produce content that not only looks impressive but also resonates deeply with viewers.",
      CompanyDetails3:
        "Our media production services go beyond just creating beautiful visuals. We ensure that every piece of content is strategically crafted to support your overall marketing goals. From pre-production planning to post-production editing, we work closely with our clients to ensure the final product aligns with their objectives and maximizes engagement. Whether you're looking to boost brand awareness, promote a new product, or create shareable content for social media, 9Dots provides comprehensive media solutions that elevate your brand's digital presence and drive real results.",

      Checklist: [
        "Video Production Services",
        "Professional Photography",
        "Corporate Video Production",
        "Multimedia Content Creation",
        "Video Marketing Solutions",
        "Creative Media Production",
      ],
    },
  },
  {
    name: "Content Marketing",
    details: {
      AboutImg: CM,
      CompanyScene: "Content Marketing 📝📈",
      CompanyDetails:
        "Content marketing is more than just producing articles or blog posts—it’s about telling the right stories, at the right time, to the right audience. In an era where consumers are bombarded with information at every turn, businesses must go beyond traditional advertising and offer value through meaningful, relevant, and engaging content. The goal of content marketing is to establish authority, build trust, and create long-lasting relationships with your audience by providing them with content that educates, entertains, and solves their problems.",
      CompanyDetails2:
        "At 9Dots Agency, we specialize in crafting tailored content strategies that align with your brand’s values and objectives. Our approach is built on a deep understanding of your target audience, ensuring that every piece of content resonates with them. From blog posts and articles to videos, infographics, and social media campaigns, we create diverse content formats that engage users across multiple platforms. We believe in a data-driven strategy, continually analyzing performance to refine our content approach and ensure maximum impact.",
      CompanyDetails3:
        "Our team of expert writers, designers, and strategists work together to create high-quality content that not only captivates your audience but also drives results. By leveraging SEO best practices, we ensure that your content reaches a broader audience and ranks higher in search engines. Whether you're aiming to build thought leadership, improve customer engagement, or enhance your brand’s online presence, 9Dots Agency provides end-to-end content marketing services designed to support your business goals and boost your bottom line. Through compelling storytelling and consistent messaging, we help you create content that leaves a lasting impact and fosters long-term growth.",

      Checklist: [
        "Content Strategy",
        "SEO Content Creation",
        "Content Marketing Campaigns",
        "Content Marketing Agency",
        "Content Distribution",
        "Content Engagement",
      ],
    },
  },
  {
    name: "Reputation Management",
    details: {
      AboutImg: RP,
      CompanyScene: "Reputation Management ⭐🛡️",
      CompanyDetails:
        "In a digital-first world, a brand’s reputation can be its most valuable asset. Consumers today rely heavily on online reviews, social media feedback, and public perception when making purchasing decisions. A single negative review or an unresolved issue can tarnish years of hard-earned trust, making reputation management essential for long-term success. Maintaining a positive reputation is not just about addressing criticism—it's about proactively building a trustworthy, credible brand image that resonates with your audience and sets you apart from competitors.",
      CompanyDetails2:
        "At 9Dots Agency, we offer a comprehensive suite of reputation management services designed to protect and enhance your online presence. We understand that your reputation is shaped by multiple touchpoints, including customer reviews, social media mentions, and media coverage. Our team works tirelessly to monitor these channels and address any negative sentiment promptly. We also create and implement strategies to amplify positive feedback, ensuring that your brand’s strengths are front and center.",
      CompanyDetails3:
        "Our proactive approach goes beyond just damage control. We help you cultivate a positive narrative by creating high-quality content, engaging with your audience authentically, and encouraging satisfied customers to share their experiences. Whether you're facing a public relations crisis or simply looking to improve your brand’s online image, 9Dots Agency provides the expertise and tools necessary to strengthen your reputation, build customer loyalty, and foster trust in your brand. By taking a holistic approach to reputation management, we ensure that your business remains resilient in an ever-evolving digital landscape.",

      Checklist: [
        "Online Reputation Management",
        "Brand Reputation Management",
        "Reputation Repair Services",
        "Reputation Monitoring",
        "Negative Review Removal",
        "Online Brand Protection",
      ],
    },
  },
  {
    name: "E-commerce Marketing",
    details: {
      AboutImg: EC,
      CompanyScene: "E-commerce Marketing 🛍️📊",
      CompanyDetails:
        "In an increasingly crowded online marketplace, e-commerce marketing has become the driving force behind the success of online retail businesses. With consumers spending more time shopping online, businesses must not only attract visitors to their digital storefronts but also convert these visitors into loyal customers. E-commerce marketing encompasses a range of strategies, from search engine optimization (SEO) and targeted paid ads to email campaigns and social media promotions, all aimed at increasing sales and growing brand awareness. Without a tailored marketing strategy, even the most exceptional e-commerce products can go unnoticed.",
      CompanyDetails2:
        "At 9Dots Agency, we specialize in crafting bespoke e-commerce marketing strategies designed to elevate your brand and maximize your online sales. Our approach starts with understanding your unique business goals, target audience, and competitive landscape. From there, we leverage data-driven insights and industry best practices to create customized campaigns that boost traffic, optimize conversions, and build long-term customer relationships. We focus on key areas like SEO for e-commerce platforms, PPC advertising, content marketing, and social media management, ensuring that your online store stands out across multiple channels.",
      CompanyDetails3:
        "Our team of experts continuously monitors and analyzes performance metrics to fine-tune campaigns, ensuring the best possible return on investment (ROI). Whether you are a startup looking to establish a foothold in the market or an established brand aiming to expand, 9Dots Agency provides the tools and expertise necessary to drive sustainable growth. With our comprehensive, multi-channel approach to e-commerce marketing, we help you reach the right customers, at the right time, with the right message—ultimately leading to increased visibility, sales, and customer loyalty.",

      Checklist: [
        "E-commerce Marketing Strategy",
        "E-commerce SEO Optimization",
        "Online Store Advertising",
        "E-commerce Conversion Optimization",
        "Social Media for E-commerce",
        "Email Campaigns for Retailers",
      ],
    },
  },
  {
    name: "Online Marketplace Marketing",
    details: {
      AboutImg: OMM,
      CompanyScene: "Online Marketplace Marketing 🛍️📦",
      CompanyDetails:
        "Navigating the competitive landscape of online marketplaces like Amazon, eBay, and Etsy requires a strategic approach that goes beyond simply listing products. With millions of sellers vying for attention, standing out in these platforms requires a combination of optimized product listings, effective advertising campaigns, and smart promotional strategies. Online marketplace marketing is essential for businesses looking to boost visibility, increase product sales, and enhance their brand’s reputation within these vast digital ecosystems. It involves understanding platform-specific algorithms, consumer behavior, and leveraging tools that maximize product reach.",
      CompanyDetails2:
        "At 9Dots Agency, we specialize in designing targeted marketing strategies tailored to each online marketplace, ensuring that your products appear in front of the right customers. Our team works closely with you to optimize product listings by improving keywords, descriptions, and images—enhancing both visibility and conversion rates. We also implement data-driven advertising campaigns to drive targeted traffic to your products, using advanced techniques in paid search, display ads, and marketplace-specific promotions. With our expertise, we ensure that your brand's presence across major platforms is strong, consistent, and growth-driven.",
      CompanyDetails3:
        "We also recognize the unique challenges of selling in online marketplaces, from fierce competition to managing customer reviews. That’s why our strategies go beyond just product optimization—we help you manage your reputation, respond to customer feedback, and refine your approach based on analytics. Whether you're focused on boosting your Amazon rankings, enhancing your eBay store visibility, or expanding on Etsy, 9Dots Agency is committed to driving measurable results. By combining our deep understanding of marketplace dynamics with innovative marketing tactics, we help you turn your marketplace presence into a profitable, sustainable business.",

      Checklist: [
        "Marketplace Product Listings",
        "E-commerce Marketplace Marketing",
        "Amazon Product Optimization",
        "Marketplace Advertising Campaigns",
        "Online Retail SEO",
        "Marketplace Sales Strategy",
      ],
    },
  },
];

const Marketing = () => {
  const [activeSection, setActiveSection] = useState("Digital Marketing");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsRef = useRef(null);

  const navbarButtonsRef = useRef(null);
  const renderChecklist = (checklist) => (
    <ul>
      {checklist.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ error: 'Please fill in all the fields.' });
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      setFormStatus({ success: response.data.message });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus({ error: 'There was an error sending the message. Please try again later.' });
    }
  };

  const scrollNavbar = (direction) => {
    if (navbarButtonsRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      navbarButtonsRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const toggleExpansion = () => {
    if (isExpanded) {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="About">
      <div className="background-wrapper">
        

        {/* Horizontal Navbar */}
        <div className="section-navbar">
          <button className="nav-arrow nav-arrow-left" onClick={() => scrollNavbar('left')}>
            &#8592;
          </button>

          <div className="navbar-buttons-container" ref={navbarButtonsRef}>
            {sectionData.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(section.name)}
                className={activeSection === section.name ? 'active' : ''}
              >
                {section.name}
              </button>
            ))}
          </div>

          <button className="nav-arrow nav-arrow-right" onClick={() => scrollNavbar('right')}>
            &#8594;
          </button>
        </div>

        {/* Render Active Section */}
        {activeSection && (
          <div className="active-section-wrapper">
            {/* Close Button for the Active Section */}
            <button
              className="close-section-button"
              onClick={() => setActiveSection('')}
            >
              ✖
            </button>

            {/* Active Section Content */}
            <div className="about-section">
              <img
                src={sectionData.find((sec) => sec.name === activeSection).details.AboutImg}
                alt={activeSection}
                className="about-img"
              />
              <h2>
                {sectionData.find((sec) => sec.name === activeSection).details.CompanyScene}
              </h2>

              {/* Company Details with View More/View Less */}
              <p ref={detailsRef}>
                {isExpanded
                  ? sectionData.find((sec) => sec.name === activeSection).details.CompanyDetails
                  : sectionData
                    .find((sec) => sec.name === activeSection)
                    .details.CompanyDetails.split('. ')
                    .slice(0, 1)
                    .join('. ') + '.'}
                {!isExpanded && (
                  <>
                    <span>... </span>
                    <button className="view-toggle-btn" onClick={toggleExpansion}>View More</button>
                  </>
                )}
              </p>
              {isExpanded && (
                <>
                  <p>
                    {sectionData.find((sec) => sec.name === activeSection).details.CompanyDetails2}
                  </p>
                  <p>
                    {sectionData.find((sec) => sec.name === activeSection).details.CompanyDetails3}
                  </p>
                  <button className="view-toggle-btn" onClick={toggleExpansion}>
                    View Less
                  </button>
                </>
              )}

              {renderChecklist(
                sectionData.find((sec) => sec.name === activeSection).details.Checklist
              )}
            </div>
          </div>
        )}

        {/* Contact Form Section */}
        <div className="contact-form-section">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message"
                rows="4"
                required
              />
            </div>
            <button type="submit">Send Message</button>
          </form>

          {formStatus && (
            <div className={`form-status ${formStatus.error ? 'error' : 'success'}`}>
              {formStatus.error || formStatus.success}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketing;
