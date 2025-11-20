import cafe from "../assets/cafe/job_list.png";
import booking from "../assets/gravity/booking.png";
import gLogo from "../assets/gravity/gravity-logo.png";
import flow from "../assets/gravity/gravity_flow.jpg";
import gravityHeader from "../assets/gravity/hero-header.png";
import wireframe from "../assets/gravity/wireframe_flow.png";
export const projects = [
    {
        slug: 'product-design',
        title: 'Product Design',
        cover: cafe,
        client: 'ACME Co.',
        role: ['Industrial Designer', 'UX Research'],
        year: '2023',
        headline: 'A community-driven event registration and sharing platform',
        links: [
            { label: 'CaFe website', url: 'https://cafe.cfhlab.studio/' }
        ],
        overview: `
      CaFe is a federated learning framework independently developed by Cathay Financial Holdings based on open-source technologies.
      It provides a collaborative modeling platform for multi-party data cooperation, originally created to address data-isolation issues among the group’s subsidiaries caused by regulatory restrictions. The framework has since expanded to support cross-institution collaboration, enabling financial organizations to jointly build anti-fraud prediction applications.
      Under the premise that raw data never leaves its source, CaFe leverages cryptographic techniques and distributed computing to allow multiple parties to train machine-learning models together securely.
    `,
        gallery: [
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80&auto=format',
            'https://images.unsplash.com/photo-1502462041640-b3d7e50d0660?w=1200&q=80&auto=format',
            'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format'
        ],
        // video: {
        //     type: 'youtube',
        //     id: '69Nz2L4DkMo'
        // },
        features: [
            'Designed interaction flows for job creation, model monitoring, error inspection, and output retrieval, ensuring that tasks aligned with users’ mental models and system constraints.'
        ],
        process: [
            { title: 'Stakeholder Requirement Interviews', text: 'Conducted requirement clarification sessions with product owners, backend engineers, and data scientists to understand cross-team workflows and identify critical user needs for the federated learning dashboard.' },
            { title: 'Workflow & System Analysis', text: 'Analysed the system architecture and data flow of the federated model training pipeline to map user responsibilities, identify coordination gaps, and define essential touchpoints in the dashboard.' },
            {
                title: 'Pain Points', text: ['·Difficult to track multi-party model training progress'
                    , 'Lack of unified visibility over job failures',
                    'Inconsistent manual communication between institutions',
                    'High cognitive load when navigating raw logs and metrics',
                    'No consolidated view for model performance and data validation',
                ]
            },
            { title: 'Design Goals', text: ['Reduce cognitive load in job monitoring', 'Provide clear, real-time visual feedback', 'Support data scientists with structured error diagnosis', 'Enable cross-party transparency during federated learning', 'Unify scattered information into a single coherent UI'] },
            { title: 'Interaction Flow Definition', text: [''] }
        ],
        credits: [
            { role: 'Design', name: 'Jolina Liang' },
            { role: 'CMF', name: 'Gravity Team' }
        ]
    },
    {
        slug: 'gravity',
        title: 'Gravity',
        cover: gravityHeader,
        client: '',
        role: ['Industrial Designer', 'UX Research'],
        year: '2023',
        headline: ['A community-driven event registration and', ' sharing platform'],
        links: [
            { label: 'Gravity website', url: 'https://gravity-01.web.app/' }
        ],
        overview: `
      The local revitalization team needs a platform that allows individuals interested in their community initiatives to easily access up-to-date information and stay informed about ongoing activities. Research also indicates that participants value the ability to share their experiences after attending events, highlighting the importance of community visibility and peer-driven engagement. Therefore, a solution that supports timely content updates and encourages user-generated sharing is essential for sustaining interest and expanding the project’s community reach.
      `,
        gallery: [{ title: 'User Flow Map', img: flow }, { title: 'Low-fidelity Wireframes', img: wireframe }
            , { title: 'High-fidelity Prototype', img: booking },
        ],
        video: {
            title: 'Interactive prototype demo',
            type: 'youtube',
            id: '69Nz2L4DkMo'
        },
        features: [
            'Local revitalization struggles with low visibility and short-lived influence.', '<strong>Gravity aims to create a vibrant community that amplifies stories and keeps engagement alive.</strong>'
        ],
        process: [
            { title: 'User Research & Sensory Insight Exploration', text: 'Conducted a mixed-method research study including 106 survey responses and 12 in-depth interviews with local residents.Developed a unique five-senses–based questionnaire (visual, auditory, olfactory, gustatory, tactile) inspired by cognitive psychology to capture how residents perceive and emotionally connect with their hometown. This sensory-driven approach uncovered deeper cultural identity cues and collective memories that conventional surveys often miss.' },
            { title: 'Problem Definition & Cultural Identity Analysis', text: 'Synthesized research findings to identify barriers such as low public visibility, short-lived engagement, and fragmented communication in local revitalization efforts. Analyzed sensory descriptors provided by residents to discover underlying themes of place identity, which informed the conceptual direction of the revitalization narrative and visual identity.' },
            {
                title: 'Information Architecture & Interaction Concepting',
                text: 'Applied insights from the research to design the structure of an interactive platform where:',
                bullets: [
                    'Residents can register for activities',
                    'Share experiences and upload photos',
                    'Express personal identity by drawing customizable avatars',
                    'Explore community stories shaped by sensory and emotional cues'
                ],
                footer: 'Framed interaction flows to reflect key UX principles such as visibility of system status, error prevention, user control, and emotional design that supports self-expression.'
            },
            { title: 'Design Goals', text: ['Reduce cognitive load in job monitoring', 'Provide clear, real-time visual feedback', 'Support data scientists with structured error diagnosis', 'Enable cross-party transparency during federated learning', 'Unify scattered information into a single coherent UI'], img: gLogo },
        ],
        credits: [
            { role: 'Design', name: 'Jolina Liang' },
            { role: 'CMF', name: 'Gravity Team' }
        ]
    },
    {
        slug: 'interaction-design',
        title: 'Interaction Design',
        cover: 'https://images.unsplash.com/photo-1520962922320-2038eebab146?q=80&w=1280&auto=format',
        client: 'Side Project',
        role: ['UI/UX', 'Frontend'],
        year: '2024',
        headline: 'A community-driven event registration and sharing platform',
        links: [
            { label: 'CaFe website', url: 'https://cafe.cfhlab.studio/' }
        ],
        overview: '互動裝置 + 網頁視覺化的小型實驗，聚焦在動畫與觸控手勢。',
        gallery: [],
        video: null,
        features: ['Canvas / WebGL 動態', '行為路徑記錄', '小型資料可視化'],
        process: [
            { title: 'Prototype', text: 'Processing / p5.js 互動原型' },
            { title: 'UI Design', text: '視覺規範與元件化' }
        ],
        credits: [{ role: 'Design & Dev', name: 'Jolina Liang' }]
    }
];


export function findProjectBySlug(slug) {
    return projects.find(p => p.slug === slug);
}
