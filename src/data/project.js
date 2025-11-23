import cFlow from "../assets/cafe/cafe_flow.jpg";
import cafe from "../assets/cafe/cafe_header.jpg";
import cWireframe from "../assets/cafe/cafe_wireframe.png";
import detail from "../assets/cafe/job_detail.png";
import booking from "../assets/gravity/booking.png";
import gLogo from "../assets/gravity/gravity-logo.png";
import flow from "../assets/gravity/gravity_flow.jpg";
import gravityHeader from "../assets/gravity/hero-header.png";
import wireframe from "../assets/gravity/wireframe_flow.png";
import train from "../assets/train/train_header.jpg";
import vr from "../assets/vr/vr.png";
export const projects = [
    {
        slug: "product-design",
        title: "CaFe",
        cover: cafe,
        client: "Major banks in Taiwan",
        tools: ["Figma", "React"],
        role: ["Frontend Engineer", "UX Design"],
        year: "2024",
        headline: ["A community-driven event registration", "and sharing platform"],
        links: [{ label: "CaFe website", url: "https://cafe.cfhlab.studio/" }],
        overview: `
      CaFe is a federated learning framework independently developed by Cathay Financial Holdings based on open-source technologies.
      It provides a collaborative modeling platform for multi-party data cooperation, originally created to address data-isolation issues among the group’s subsidiaries caused by regulatory restrictions. The framework has since expanded to support cross-institution collaboration, enabling financial organizations to jointly build anti-fraud prediction applications.
      Under the premise that raw data never leaves its source, CaFe leverages cryptographic techniques and distributed computing to allow multiple parties to train machine-learning models together securely.
    `,
        gallery: [
            { title: "System Workflow Diagram", img: cFlow },
            { title: "Wireframes", img: cWireframe },
            { title: "Prototype", img: detail },
        ],
        // video: {
        //     type: 'youtube',
        //     id: '69Nz2L4DkMo'
        // },
        features: [
            "Designed interaction flows for job creation, model monitoring, error inspection, and output retrieval, ensuring that tasks aligned with users’ mental models and system constraints.",
        ],
        process: [
            {
                title: "Stakeholder Requirement Interviews",
                text: "Conducted requirement clarification sessions with product owners, backend engineers, and data scientists to understand cross-team workflows and identify critical user needs for the federated learning dashboard.",
            },
            {
                title: "Workflow & System Analysis",
                text: "Analysed the system architecture and data flow of the federated model training pipeline to map user responsibilities, identify coordination gaps, and define essential touchpoints in the dashboard.",
            },
            {
                title: "Pain Points",
                text: [
                    "Difficult to track multi-party model training progress",
                    "Lack of unified visibility over job failures",
                    "Inconsistent manual communication between institutions",
                    "High cognitive load when navigating raw logs and metrics",
                    "No consolidated view for model performance and data validation",
                ],
            },
            {
                title: "Design Goals",
                text: [
                    "Reduce cognitive load in job monitoring",
                    "Provide clear, real-time visual feedback",
                    "Support data scientists with structured error diagnosis",
                    "Enable cross-party transparency during federated learning",
                    "Unify scattered information into a single coherent UI",
                ],
            },
        ],
        reflection: "Working on CaFe taught me how much clarity and real-time feedback matter when people interact with complex, data-driven systems. I learned that users often struggle not because the system is technically difficult, but because important information is hidden, fragmented, or delivered too late. Collaborating with backend engineers and data scientists helped me understand the gaps between how systems work and how people expect them to work. Designing the interaction flows made me more aware of how system logic, mental load, and communication challenges influence the overall experience. If I were to extend this project, I would explore:",
        learning: ["better ways to help users interpret model-training status", "lightweight visual cues that reduce cognitive load", "clearer explanations to increase trust in machine-learning results"],
        conclusive: "This project strengthened my interest in building tools that make data-heavy or technical workflows easier for humans to understand."

    },
    {
        slug: "gravity",
        title: "Gravity",
        cover: gravityHeader,
        client: "",
        role: ["Frontend Engineer", "Database structure design", "UX Design"],
        tools: ["Figma", "React"],
        year: "2023",
        headline: [
            "A community-driven event registration and",
            " sharing platform",
        ],
        links: [{ label: "Gravity website", url: "https://gravity-01.web.app/" }],
        overview: `
      The local revitalization team needs a platform that allows individuals interested in their community initiatives to easily access up-to-date information and stay informed about ongoing activities. Research also indicates that participants value the ability to share their experiences after attending events, highlighting the importance of community visibility and peer-driven engagement. Therefore, a solution that supports timely content updates and encourages user-generated sharing is essential for sustaining interest and expanding the project’s community reach.
      `,
        gallery: [
            { title: "System Workflow Diagram", img: flow },
            { title: "Wireframes", img: wireframe },
            { title: "Prototype", img: booking },
        ],
        video: {
            title: "Gravity demo",
            type: "youtube",
            id: "69Nz2L4DkMo",
        },
        features: [
            "Local revitalization struggles with low visibility and short-lived influence.",
            "<strong>Gravity aims to create a vibrant community that amplifies stories and keeps engagement alive.</strong>",
        ],
        process: [
            {
                title: "User Research & Sensory Insight Exploration",
                text: "Conducted a mixed-method research study including 106 survey responses and 12 in-depth interviews with local residents.Developed a unique five-senses–based questionnaire (visual, auditory, olfactory, gustatory, tactile) inspired by cognitive psychology to capture how residents perceive and emotionally connect with their hometown. This sensory-driven approach uncovered deeper cultural identity cues and collective memories that conventional surveys often miss.",
            },
            {
                title: "Problem Definition & Cultural Identity Analysis",
                text: "Synthesized research findings to identify barriers such as low public visibility, short-lived engagement, and fragmented communication in local revitalization efforts. Analyzed sensory descriptors provided by residents to discover underlying themes of place identity, which informed the conceptual direction of the revitalization narrative and visual identity.",
            },
            {
                title: "Information Architecture & Interaction Concepting",
                text: "Applied insights from the research to design the structure of an interactive platform where:",
                bullets: [
                    "Residents can register for activities",
                    "Share experiences and upload photos",
                    "Express personal identity by drawing customizable avatars",
                    "Explore community stories shaped by sensory and emotional cues",
                ],
                footer:
                    "Framed interaction flows to reflect key UX principles such as visibility of system status, error prevention, user control, and emotional design that supports self-expression.",
            },
            {
                title: "Design Goals",
                text: [
                    "Provide clear and timely event information",
                    "Reduce cognitive load in browsing or submitting content",
                    "Encourage meaningful storytelling and community participation",
                    "Support long-term engagement with a simple and friendly interaction flow",

                ],
                img: gLogo,
            },
        ],
        reflection: "Gravity was a personal side project, and it taught me a lot about designing for community engagement. I realized that people participate not just because a platform has many features, but because it feels approachable and emotionally meaningful. While planning the interaction flow, I noticed a common challenge: to encourage people to share content, the platform needs flexibility; but too much flexibility creates confusion or extra effort. Finding a balance between clarity, guidance, and creative freedom became the main design challenge. If I continue developing this project, I would like to explore:",
        learning: ["what motivates people to contribute to a community", "how to support users with different levels of digital experience", "ways to surface meaningful stories through better content curation"],
        conclusive: "This project helped me understand how technology can strengthen community identity and how small interaction choices can influence participation."

    },
    {
        slug: "ar",
        title: "ReveAR",
        cover: vr,
        client: "AR course project",
        role: ["UI/UX", "Application Dev"],
        year: "2020",
        headline: "An AR app that redefines how designers present their work",
        overview: "互動裝置 + 網頁視覺化的小型實驗，聚焦在動畫與觸控手勢。",
        gallery: [],
        video: null,
        features: ["Canvas / WebGL 動態", "行為路徑記錄", "小型資料可視化"],
        process: [
            { title: "Prototype", text: "Processing / p5.js 互動原型" },
            { title: "UI Design", text: "視覺規範與元件化" },
        ],
        credits: [{ role: "Design & Dev", name: "Jolina Liang" }],
        customComponent: "ArProject",
    },
    {
        slug: "mock-project-1",
        title: "DIU DIU",
        cover: train,
        client: "User Interface course project",
        role: ["UI/UX"],
        year: "2019",
        headline: "Demo headline",
        links: [],
        overview: "這是範例專案 1。",
        gallery: [],
        video: null,
        features: [],
        process: [],
        credits: [],
        customComponent: "TrainProject",
    },
];

export function findProjectBySlug(slug) {
    return projects.find((p) => p.slug === slug);
}
