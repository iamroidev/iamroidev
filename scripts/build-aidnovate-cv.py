#!/usr/bin/env python3
"""
Build Richard Kwaku Opoku's 1-Page ATS-Compliant CV for Aidnovate Full-Stack Developer Intern.
Outputs to:
  1. work-nss-prep/Richard_Kwaku_Opoku_CV_Aidnovate.pdf
  2. cv/Richard_Kwaku_Opoku_CV_Aidnovate.pdf
"""

from pathlib import Path
from fpdf import FPDF
from fpdf.enums import XPos, YPos

ROOT = Path(__file__).resolve().parents[1]
OUT1 = ROOT / "work-nss-prep" / "Richard_Kwaku_Opoku_CV_Aidnovate.pdf"
OUT2 = ROOT / "cv" / "Richard_Kwaku_Opoku_CV_Aidnovate.pdf"

INK = (20, 20, 20)
MUTED = (70, 70, 70)
ACCENT = (16, 75, 140)  # Professional tech navy
RULE = (215, 215, 215)


class AidnovateCV(FPDF):
    def __init__(self) -> None:
        super().__init__(format="A4", unit="mm")
        self.set_auto_page_break(auto=False)
        self.set_margins(12, 10, 12)

    def header_block(self) -> None:
        self.set_font("Helvetica", "B", 15)
        self.set_text_color(*INK)
        self.cell(0, 6.0, "RICHARD KWAKU OPOKU", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")

        self.set_font("Helvetica", "B", 9.2)
        self.set_text_color(*ACCENT)
        self.cell(
            0,
            4.4,
            "Full-Stack Developer  |  React.js  *  Node.js  *  PostgreSQL  *  Cloud Security",
            new_x=XPos.LMARGIN,
            new_y=YPos.NEXT,
            align="C",
        )

        self.set_font("Helvetica", "", 8.2)
        self.set_text_color(*MUTED)
        contact = (
            "+233 55 150 0736  *  richardkwakuopoku06@gmail.com  *  Tarkwa, Ghana\n"
            "Portfolio: richardkwakuopoku.site  *  GitHub: github.com/iamroidev  *  LinkedIn: in/richardkwakuopoku982"
        )
        self.multi_cell(0, 3.8, contact, align="C")
        self.ln(0.8)
        self._rule()

    def _rule(self) -> None:
        y = self.get_y()
        self.set_draw_color(*RULE)
        self.set_line_width(0.2)
        self.line(12, y, 198, y)
        self.ln(1.8)

    def section(self, title: str) -> None:
        self.set_font("Helvetica", "B", 9.2)
        self.set_text_color(*ACCENT)
        self.cell(0, 4.2, title.upper(), new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        y = self.get_y()
        self.set_draw_color(*ACCENT)
        self.set_line_width(0.3)
        self.line(12, y, 198, y)
        self.ln(1.5)

    def entry_header(self, title: str, subtitle: str = "", right: str = "") -> None:
        self.set_font("Helvetica", "B", 8.6)
        self.set_text_color(*INK)
        if right:
            self.cell(140, 4.0, title)
            self.set_font("Helvetica", "I", 8.0)
            self.set_text_color(*MUTED)
            self.cell(0, 4.0, right, new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="R")
        else:
            self.cell(0, 4.0, title, new_x=XPos.LMARGIN, new_y=YPos.NEXT)

        if subtitle:
            self.set_font("Helvetica", "I", 8.0)
            self.set_text_color(*MUTED)
            self.cell(0, 3.6, subtitle, new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    def bullet(self, text: str) -> None:
        self.set_font("Helvetica", "", 8.1)
        self.set_text_color(*INK)
        x = self.get_x()
        self.cell(3.2, 3.6, "-")
        self.multi_cell(0, 3.6, text)
        self.set_x(x)


def build() -> None:
    pdf = AidnovateCV()
    pdf.add_page()
    pdf.header_block()

    # --- Technical Skills ---
    pdf.section("Technical Skills")
    pdf.set_font("Helvetica", "", 8.1)
    pdf.set_text_color(*INK)
    skills = [
        ("Frontend Development:", "JavaScript (ES6+), TypeScript, React.js, Next.js, HTML5/CSS3, Tailwind CSS, Responsive UI, State Management"),
        ("Backend & REST APIs:", "Node.js, Express.js, RESTful API Design, JWT/Session Auth, WebSockets, Paystack API, Middleware"),
        ("Databases & Storage:", "PostgreSQL, MongoDB, SQLite / Turso, Relational Schema Design, Parameterized SQL Queries, Indexing"),
        ("Cloud, DevOps & Tools:", "AWS (EC2, S3, IAM, Amplify, Lambda), Linux / Bash, Git / GitHub CI/CD, Postman, Nginx"),
        ("Security & Best Practices:", "OWASP Top 10 Web Defense, SQL Injection Prevention, Secure Authentication & Authorization, CORS"),
    ]
    for label, val in skills:
        pdf.set_font("Helvetica", "B", 8.1)
        pdf.cell(41, 3.6, label)
        pdf.set_font("Helvetica", "", 8.1)
        pdf.multi_cell(0, 3.6, val)
        pdf.ln(0.2)
    pdf.ln(1)

    # --- Production Projects ---
    pdf.section("Production Software Engineering Projects")
    
    pdf.entry_header(
        "VoteEQ - Live High-Concurrency Voting & Ticketing Web Platform",
        "Stack: React.js, Node.js, Express, PostgreSQL / Turso, Paystack Webhooks, AWS EC2, WebSockets",
        right="https://voteeq.online"
    )
    pdf.bullet("Architected and deployed a live nominee voting and ticketing application adopted officially by the UMaT CS Student Association.")
    pdf.bullet("Engineered backend REST APIs with resilient ACID transactional integrity, processing 7,800+ real votes and ticketing settlements.")
    pdf.bullet("Integrated Paystack payment gateway with secure cryptographic webhook verification, idempotent payment handling, and real-time WebSockets.")
    pdf.bullet("Hardened production deployment on AWS EC2 with Nginx reverse proxy, HTTPS encryption, environment secrets, and rate-limiting.")
    pdf.ln(1)

    pdf.entry_header(
        "Scholar - Academic Management & Student Records Portal",
        "Stack: Next.js, TypeScript, React, REST APIs, Role-Based Access Control (RBAC)",
        right="https://schorla.vercel.app"
    )
    pdf.bullet("Built a responsive academic portal featuring role-based authentication, student record indexing, and dynamic dashboard views.")
    pdf.bullet("Implemented clean modular frontend architecture in TypeScript with robust API error handling and input validation.")
    pdf.ln(1)

    pdf.entry_header(
        "InsightFlow - Real-Time Analytics & Data Dashboard",
        "Stack: React.js, Node.js, REST APIs, Dynamic Client-Side Data Filtering",
        right="https://appinsightflow.vercel.app"
    )
    pdf.bullet("Developed a high-performance web dashboard parsing dynamic metric streams with customizable client-side visualization filters.")
    pdf.ln(1)

    # --- Work & Leadership Experience ---
    pdf.section("Work & Leadership Experience")
    
    pdf.entry_header(
        "AmaliTech - AWS re/Start Cloud Practitioner Program",
        "Cloud Practitioner Trainee & Intern",
        right="Jan 2026 - Apr 2026"
    )
    pdf.bullet("Completed 600+ hours of intensive training in cloud infrastructure, Linux systems administration, relational databases, and Python automation.")
    pdf.bullet("Collaborated in a 4-person team to build a serverless hospital queue application using AWS Cognito auth, Lambda, API Gateway, and DynamoDB.")
    pdf.ln(1)

    pdf.entry_header(
        "AmaliTech Coding Club, UMaT",
        "Club Organizer & Technical Peer Mentor",
        right="Jan 2026 - Present"
    )
    pdf.bullet("Organized developer workshops, code reviews, and programming challenge sessions for over 100 engineering students.")
    pdf.bullet("Mentored junior developers in Git/GitHub workflows, JavaScript fundamentals, API integration, and clean code hygiene.")
    pdf.ln(1)

    pdf.entry_header(
        "UMaT Cybersecurity Club",
        "Active Technical Member",
        right="Jan 2026 - Present"
    )
    pdf.bullet("Participated in weekly practical labs on network reconnaissance (Nmap) and database vulnerability assessments (SQL injection defense).")
    pdf.ln(1)

    # --- Education & Certifications ---
    pdf.section("Education & Certifications")
    pdf.entry_header(
        "University of Mines and Technology (UMaT)",
        "BSc Computer Science and Engineering - Year 4 (Final Year) | CWA: 80.87 / 100 (First Class Honours)",
        right="Expected June 2027"
    )
    pdf.bullet("Relevant Coursework: Data Structures & Algorithms, Database Systems, Software Engineering, Operating Systems, Web Programming, Cryptography.")
    pdf.ln(0.8)

    pdf.set_font("Helvetica", "B", 8.1)
    pdf.cell(24, 3.6, "Certifications:")
    pdf.set_font("Helvetica", "", 8.1)
    pdf.multi_cell(0, 3.6, "AWS Certified Cloud Practitioner (CCP) | ISC2 Certified in Cybersecurity (CC) | Machine Learning (Stanford / DeepLearning.AI)")

    OUT1.parent.mkdir(parents=True, exist_ok=True)
    OUT2.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT1))
    pdf.output(str(OUT2))
    print(f"Successfully compiled Aidnovate CV:")
    print(f"  -> {OUT1} ({OUT1.stat().st_size} bytes)")
    print(f"  -> {OUT2} ({OUT2.stat().st_size} bytes)")


if __name__ == "__main__":
    build()
