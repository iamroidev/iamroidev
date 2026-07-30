#!/usr/bin/env python3
"""Build Richard Kwaku Opoku's structured CV PDF from structured content."""

from __future__ import annotations

from pathlib import Path

from fpdf import FPDF

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "cv" / "Richard_Kwaku_Opoku_CV.pdf"

INK = (24, 24, 24)
MUTED = (72, 72, 72)
ACCENT = (120, 90, 40)
RULE = (210, 210, 210)


class MastersCV(FPDF):
    def __init__(self) -> None:
        super().__init__(format="A4", unit="mm")
        self.set_auto_page_break(auto=True, margin=14)
        self.set_margins(16, 14, 16)

    def header_block(self) -> None:
        self.set_font("Helvetica", "B", 17)
        self.set_text_color(*INK)
        self.cell(0, 7, "RICHARD KWAKU OPOKU", ln=True)

        self.set_font("Helvetica", "", 9.5)
        self.set_text_color(*ACCENT)
        self.cell(
            0,
            5,
            "Cloud Security  |  Cloud & Full-Stack Engineering",
            ln=True,
        )

        self.set_font("Helvetica", "", 8.5)
        self.set_text_color(*MUTED)
        contact = (
            "richardkwakuopoku06@gmail.com  |  +233 55 150 0736  |  Tarkwa, Ghana\n"
            "linkedin.com/in/richardkwakuopoku982  |  github.com/iamroidev  |  richardkwakuopoku.site"
        )
        self.multi_cell(0, 4.2, contact)
        self.ln(1.5)
        self._rule()

    def _rule(self) -> None:
        y = self.get_y()
        self.set_draw_color(*RULE)
        self.set_line_width(0.25)
        self.line(16, y, 194, y)
        self.ln(3)

    def section(self, title: str) -> None:
        self.set_font("Helvetica", "B", 10)
        self.set_text_color(*INK)
        self.cell(0, 5.5, title.upper(), ln=True)
        y = self.get_y()
        self.set_draw_color(*ACCENT)
        self.set_line_width(0.35)
        self.line(16, y, 70, y)
        self.ln(2.5)

    def body(self, text: str) -> None:
        self.set_font("Helvetica", "", 8.8)
        self.set_text_color(*INK)
        self.multi_cell(0, 4.3, text)
        self.ln(1)

    def entry(
        self,
        title: str,
        subtitle: str = "",
        bullets: list[str] | None = None,
        right: str = "",
    ) -> None:
        self.set_font("Helvetica", "B", 9)
        self.set_text_color(*INK)
        if right:
            self.cell(140, 4.5, title)
            self.set_font("Helvetica", "I", 8.5)
            self.set_text_color(*MUTED)
            self.cell(0, 4.5, right, ln=True, align="R")
        else:
            self.cell(0, 4.5, title, ln=True)

        if subtitle:
            self.set_font("Helvetica", "I", 8.5)
            self.set_text_color(*MUTED)
            self.cell(0, 4.2, subtitle, ln=True)

        if bullets:
            self.set_font("Helvetica", "", 8.5)
            self.set_text_color(*INK)
            for bullet in bullets:
                x = self.get_x()
                self.cell(3, 4.1, "-")
                self.multi_cell(0, 4.1, bullet)
                self.set_x(x)
            self.ln(0.5)


def build() -> Path:
    pdf = MastersCV()
    pdf.add_page()
    pdf.header_block()

    pdf.section("Summary")
    pdf.body(
        "Year 3 Computer Science & Engineering student at UMaT (80.87 CWA, First Class standing). AWS re/Start graduate "
        "with strong cloud software engineering foundations, hands-on security training, and experience building and "
        "deploying live web applications (React, Next.js, Node.js, Python, MongoDB, and AWS EC2/Amplify)."
    )

    pdf.section("Education")
    pdf.entry(
        "Bachelor of Science in Computer Science and Engineering",
        "University of Mines and Technology (UMaT), Tarkwa, Ghana",
        right="Expected 2027",
        bullets=[
            "CWA: 80.87 (First Class standing)",
            "Relevant coursework: Data Structures & Algorithms, Software Engineering, Artificial Intelligence, Advanced Database Systems, Operating Systems, Embedded System Design, Web Programming, Object-Oriented Programming",
        ],
    )
    pdf.entry(
        "High School Diploma / WASSCE",
        "Kumasi Academy, Kumasi, Ghana",
        right="2019 - 2022",
    )

    pdf.section("Experience")
    pdf.entry(
        "AWS re/Start Graduate",
        "AmaliTech (Online)",
        right="Jan 2026 - Apr 2026",
        bullets=[
            "Completed intensive training in cloud architecture, IAM policies, VPC configuration, EC2, S3 bucket security, Linux systems administration, Python scripting, networking, and relational/NoSQL databases.",
        ],
    )

    pdf.section("Projects & Leadership")
    pdf.entry(
        "VoteEQ - real election platform used by ACSES",
        "voteeq.online",
        bullets=[
            "Built and deployed a paid nominee voting and event ticketing platform used officially by the UMaT Association of Computer Science and Engineering Students.",
            "Features Paystack hosted checkout, real-time leaderboard updates via WebSockets, libSQL database, nominee dashboards, and admin tooling. Frontend deployed on Vercel, API hosted on AWS EC2.",
        ],
    )
    pdf.entry(
        "Scholar - scholarship matching engine",
        "schorla.vercel.app",
        bullets=[
            "Implements NLP document parsing for CVs, transcripts, and SOPs; executes semantic matching algorithms to align profiles with verified funding opportunities.",
            "Built with Next.js, LlamaCloud, Supabase, and Stripe billing.",
        ],
    )
    pdf.entry(
        "InsightFlow - AI reading assistant",
        "appinsightflow.vercel.app",
        bullets=[
            "Converts books and documents into structured learning paths via RAG pipelines, generating guided text summaries and synthesized audio streams.",
            "Built with React, Vite, TypeScript, and Supabase.",
        ],
    )
    pdf.entry(
        "KaiRova - streetwear e-commerce showcase",
        "kai-rova.vercel.app",
        bullets=[
            "Built a premium clothing catalog and brand experience showcase for a friend's streetwear brand.",
            "Implemented category catalog filters, interactive detail galleries, size selector drawers, and dynamic user query forms. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.",
        ],
    )
    pdf.entry(
        "AWS re/Start Graduate Hackathon - AI medical queue application",
        "Team Hackathon Project",
        bullets=[
            "Collaborated in a team during the AmaliTech hackathon to design and build a hospital queue management system.",
            "Implemented user authentication and access control using AWS Cognito, serverless endpoints via Lambda + API Gateway, DynamoDB database, and AWS Amplify frontend hosting.",
        ],
    )
    pdf.entry(
        "AmaliTech Coding Club Organizer",
        "",
        bullets=[
            "Organized coding workshops, technical bootcamps, and peer-to-peer programming practice sessions.",
            "Coordinated student mentoring, algorithmic tutorials, and collaborative hacking events.",
        ],
    )

    pdf.section("Workshops & Seminars")
    pdf.entry(
        "AmaliTech Workshop - How to Actually Get Hired in Tech",
        "",
        right="24 July 2026",
    )

    pdf.section("Certifications")
    pdf.entry("AWS Certified Cloud Practitioner (CCP)", "Amazon Web Services (Credly)")
    pdf.entry("Certified in Cybersecurity (CC)", "ISC2")
    pdf.entry("Machine Learning Specialization", "Stanford University & DeepLearning.AI (Coursera)")

    pdf.section("Additional Training / Credentials")
    pdf.entry(
        "Hardware Projects / IoT & Embedded Systems",
        "UMaT / Robotics Club (AAENICS)",
        bullets=[
            "Completed hands-on training and built embedded prototypes using ESP32, MQTT protocols, Embedded C, and Raspberry Pi.",
        ],
    )
    pdf.entry(
        "UMaT Cybersecurity Club",
        "UMaT",
        right="2026 - Present",
        bullets=[
            "Participated in hands-on technical workshops focused on network scanning and enumeration using Nmap, and database vulnerability exploitation via SQL injection.",
        ],
    )

    pdf.section("Technical Skills")
    pdf.body(
        "Cloud & Infrastructure: AWS (Amplify, S3, IAM, Lambda, API Gateway, EC2, VPC), GCP, Firebase, Vercel, Docker, Cloud Architecture"
    )
    pdf.body(
        "Frontend: React, Next.js, TypeScript, Tailwind CSS, Vite, CSS, Three.js"
    )
    pdf.body(
        "Backend & Databases: Python, Node.js, Supabase, PostgreSQL, Prisma, REST APIs"
    )
    pdf.body(
        "AI / Machine Learning: Linear & Logistic Regression, Neural Networks, Deep Learning, K-Means Clustering, Recommender Systems, Anomaly Detection, Reinforcement Learning, NLP, RAG"
    )
    pdf.body(
        "Cybersecurity: Cloud Security, Networking, Information Security, Penetration Testing"
    )
    pdf.body(
        "IoT / Hardware: ESP32, MQTT, Embedded C, Raspberry Pi"
    )
    pdf.body(
        "Design: Canva"
    )

    pdf.section("Professional / Technical Interests")
    pdf.body(
        "Cloud Computing, Cloud Security, Cybersecurity, Artificial Intelligence, Machine Learning, Full-Stack Development, Software/Product Development, IoT & Embedded Systems, Entrepreneurship, UI/UX"
    )

    pdf.section("CV Interests")
    pdf.body(
        "Building software products, Cloud technologies, Artificial intelligence, Cybersecurity, Entrepreneurship, Emerging technologies, IoT and embedded systems"
    )

    pdf.section("Languages")
    pdf.body(
        "English - Fluent | Twi - Fluent"
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT))
    return OUT


if __name__ == "__main__":
    path = build()
    print(f"Wrote {path}")
