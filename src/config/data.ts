export const portfolioData = {
    personal: {
        name: "Suprit Developer",
        role: "Full Stack | AI Specialist",
        tagline: "Building scalable systems and an interactive user experience.",
        summary: "I engineer high-performance software solutions with a focus on seamless user experiences and robust architectures. Specializing in modern React ecosystems and intelligent AI integrations, I bridge the gap between complex backend systems and intuitive frontend design.",
        email: "supritdas9133@gmail.com",
        linkedin: "https://www.linkedin.com/in/suprit-das",
        github: "https://github.com/suprit-06"
    },
    skills: {
        languages: ["TypeScript", "Python", "Java", "SQL"],
        frontend: ["React", "Next.js", "Tailwind CSS"],
        backend: ["Node.js", "Express", "FastAPI", "PostgreSQL", "Redis"],
        devops: ["Docker", "AWS", "CI/CD", "Vercel", "Linux"],
        tools: ["Git", "VS Code"]
    },
    projects: [
        {
            title: "Let's Talk",
            github: "https://github.com/suprit-06/Lets-talk",
            demo: "https://lets-talk-backend-h8ug.onrender.com/",
            problem: "Provide a high-performance, real-time AI chat platform with streaming responses, secure auth, and persistent conversation threads.",
            architecture: "FastAPI backend with SSE streaming to a Bootstrap-powered frontend; Groq API for LLM inference; SQLAlchemy for persistence; containerized with Docker and deployable to Render.",
            features: [
                "Ultra-fast AI powered by the Groq API",
                "JWT authentication with secure password hashing",
                "Real-time character-by-character responses via Server-Sent Events",
                "Multiple conversation threads and session management",
                "Sliding context window to optimize token usage",
                "Responsive, mobile-friendly UI built with Bootstrap 5"
            ],
            stack: ["FastAPI", "Groq API", "Python", "SQLAlchemy", "PostgreSQL/SQLite", "Uvicorn", "Bootstrap 5", "Jinja2", "Docker", "Render"]
        },
    ],
    experience: [] as { role: string; company: string; duration: string; description: string }[],
    education: [
        {
            institution: "Malla Reddy Institute of Technology and Science",
            degree: "B.Tech in Computer Science and Engineering",
            duration: "2023 - 2027",
            details: "CGPA: 8.3/10.0."
        }
    ],
    achievements: [] as string[]
};
