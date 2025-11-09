export const projects = [
    {
        slug: 'product-design',
        title: 'Product Design',
        cover: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1280&auto=format',
        client: 'ACME Co.',
        role: ['Industrial Designer', 'UX Research'],
        year: '2023',
        links: [
            { label: 'Behance', url: 'https://www.behance.net/gallery/102553695/portfolio' }
        ],
        overview: `
      這是一個產品設計專案的展示範例。內容包含市場研究、造型探索、
      結構設計與打樣，以及最終的行銷素材產出。
    `,
        gallery: [
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80&auto=format',
            'https://images.unsplash.com/photo-1502462041640-b3d7e50d0660?w=1200&q=80&auto=format',
            'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format'
        ],
        video: {
            type: 'youtube',
            id: 'dQw4w9WgXcQ' // DEMO：換成你的影片 ID
        },
        features: [
            '以模組化結構降低生產成本',
            '人體工學握持曲面優化',
            '多材質組合：PC + TPE',
            '可維修設計，提高產品壽命'
        ],
        process: [
            { title: 'Research', text: '使用者訪談 / 同理心地圖 / 市場競品分析' },
            { title: 'Ideation', text: '草圖與造型發想 / 低保真模型' },
            { title: 'Prototyping', text: 'Rhino 建模 / 3D 列印打樣 / KeyShot 視覺化' },
            { title: 'Validation', text: '使用者測試 / 設計修正 / 小量試產' }
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
        links: [
            { label: 'Behance: Processing', url: 'https://www.behance.net/gallery/172224277/Processing' }
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
