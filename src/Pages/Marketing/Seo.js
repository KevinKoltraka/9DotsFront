import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaChartLine, FaLink, FaRocket, FaRegLightbulb } from "react-icons/fa";
import axios from "axios"; // For API requests (like fetching SEO data)
import "./Seo.css";

export default function Seo() {
    const [keywordData, setKeywordData] = useState([]);
    const [seoSuggestions, setSeoSuggestions] = useState({
        keywordResearch: "Start with long-tail keywords for niche targeting.",
        onPageOptimization: "Focus on improving page speed and mobile responsiveness.",
        linkBuilding: "Secure high-quality backlinks from trusted sources.",
        seoAudit: "Perform regular audits to track and fix SEO issues."
    });

    useEffect(() => {
        document.title = "SEO Services - 9Dots Marketing Agency";
        fetchKeywordData();
        fetchSeoSuggestions();
    }, []);

    const fetchKeywordData = async () => {
        try {
            const response = await axios.get("/api/keywords");
            setKeywordData(response.data);
        } catch (error) {
            console.error("Error fetching keyword data", error);
        }
    };

    const fetchSeoSuggestions = async () => {
        try {
            const response = await axios.get("/api/seo-suggestions");
            setSeoSuggestions(response.data);  // Assuming the API returns an object
        } catch (error) {
            console.error("Error fetching SEO suggestions", error);
        }
    };

    return (
        <motion.div
            className="seo-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            
            {/* Dynamic SEO Fluid Background */}
            <div className="fluid-background">
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 800 600"
                    width="100%"
                    height="100%"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: -1,
                        filter: 'blur(0px)', 
                    }}
                >
                    {/* Fluid Background Shapes */}
                    <motion.circle
                        cx="100"
                        cy="100"
                        r="50"
                        fill="#00bfae"
                        animate={{
                            cx: [100, 700, 100],
                            cy: [100, 500, 100],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: 'easeInOut',
                        }}
                    />

                    <motion.ellipse
                        cx="400"
                        cy="300"
                        rx="100"
                        ry="50"
                        fill="#ff007f"
                        animate={{
                            rx: [100, 150, 100],
                            ry: [50, 100, 50],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: 'easeInOut',
                        }}
                    />

                    <motion.rect
                        x="600"
                        y="400"
                        width="100"
                        height="100"
                        fill="#00bfae"
                        animate={{
                            x: [600, 200, 600],
                            y: [400, 100, 400],
                            rotate: [0, 90, 180, 270, 360],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: 'easeInOut',
                        }}
                    />

                    {/* SEO Text Path */}
                    <motion.text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="40"
                        fontFamily="Arial, sans-serif"
                        fontWeight="bold"
                        animate={{
                            opacity: [0, 1, 0],
                            y: [-50, 0, 50],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: 'easeInOut',
                        }}
                    >
                        SEO
                    </motion.text>
                </motion.svg>
            </div>

            {/* Header Section */}
            <motion.div
                className="seo-header"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="seo-title">
                    <span className="seo-main-text">Search Engine</span> Optimization
                    <motion.div
                        className="floating-icon"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            width="50"
                            height="50"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="4" fill="none" />
                        </motion.svg>
                    </motion.div>
                </h1>
            </motion.div>

            {/* Live Keyword Tracker */}
            <motion.div
                className="keyword-tracker"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <ul>
                    {keywordData.map((keyword, index) => (
                        <li key={index}>
                            <span>{keyword.name}</span> - <strong>{keyword.searchVolume}</strong> searches/month
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Service Cards */}
            <div className="seo-services-grid">
                {[
                    { icon: <FaSearch />, title: "Keyword Research", desc: "Discover high-value keywords with our interactive tools.", seoTip: seoSuggestions.keywordResearch },
                    { icon: <FaChartLine />, title: "On-Page Optimization", desc: "Optimize your website structure with on-the-fly suggestions.", seoTip: seoSuggestions.onPageOptimization },
                    { icon: <FaLink />, title: "Link Building", desc: "Get dynamic insights into backlinks of top-ranking sites.", seoTip: seoSuggestions.linkBuilding },
                    { icon: <FaRocket />, title: "SEO Audits", desc: "An interactive SEO audit that provides actionable insights.", seoTip: seoSuggestions.seoAudit }
                ].map((service, index) => (
                    <motion.div
                        key={index}
                        className="seo-card"
                        whileHover={{ scale: 1.05 }} // Keep the simple scale on hover
                        transition={{ duration: 0.2, ease: "easeInOut" }} // Shorter duration and smoother easing
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="seo-icon">{service.icon}</span>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                        <motion.div
                            className="seo-tip"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <FaRegLightbulb /> <strong>Tip:</strong> {service.seoTip}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
