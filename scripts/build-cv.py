#!/usr/bin/env python3
"""Build Richard Kwaku Opoku's MSc-oriented CV PDF from structured content."""

from __future__ import annotations

from pathlib import Path

from fpdf import FPDF

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "cv" / "Richard_Kwaku_Opoku_CV.pdf"

# Colours
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
            "Cybersecurity  |  Cloud Security  |  Network Security  |  MSc Applicant",
            ln=True,
        )

        self.set_font("Helvetica", "", 8.5)
        self.set_text_color(*MUTED)
        contact = (
            "richardkwakuopoku06@gmail.com  |  +233 55 150 0736  |  Tarkwa, Ghana\n"
            "linkedin.com/in/richardkwakuopoku982  |  github.com/iamroidev  |  iamroidev.vercel.app"
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

    # Academic Profile
    pdf.section("Academic Profile")
    pdf.body(
        "Final-year Computer Science & Engineering student (UMaT) applying to MSc programmes "
        "in cybersecurity, cloud security, and network security. Combines formal security training "
        "(OMC, Google Cybersecurity, ISC2 CC in progress) with hands-on cloud security labs on AWS "
        "and production systems where access control, network boundaries, and secure deployment are "
        "first-class concerns. Strong software engineering foundation supports building and evaluating "
        "secure, distributed systems."
    )
    pdf.body(
        "Research interests: cloud security architecture, identity & access management, network "
        "defence and monitoring, secure DevOps / cloud-native hardening, and applied risk management (NIST CSF)."
    )

    # Education
    pdf.section("Education")
    pdf.entry(
        "Bachelor of Science in Computer Science and Engineering",
        "University of Mines and Technology (UMaT), Tarkwa, Ghana",
        right="Expected 2027",
        bullets=[
            "Relevant coursework: Cloud Computing, Software Engineering, Database Systems, AI/ML Systems, IoT & Embedded Systems",
            "Security-aligned study: TCP/IP networking, Linux administration, SQL for security analytics, risk assessment, incident response, CIA triad, NIST CSF",
        ],
    )

    # Certifications
    pdf.section("Certifications & Security Training")
    pdf.entry(
        "AWS Certified Cloud Practitioner",
        "Amazon Web Services",
    )
    pdf.entry(
        "Google Cybersecurity Professional Certificate",
        "Foundations, Risk, Networks, Linux & SQL (4 of 8 courses completed)",
    )
    pdf.entry("OMC Cybersecurity Trainee", "One Million Coders")
    pdf.entry("ISC2 Certified in Cybersecurity (CC)", "In progress")
    pdf.entry(
        "AWS re/Start Graduate",
        "AmaliTech - cloud architecture, IAM, VPC, EC2, S3, Linux, Python, networking, databases",
    )
    pdf.entry(
        "Machine Learning Specialization",
        "Stanford University & DeepLearning.AI (Coursera)",
    )

    # Technical Skills
    pdf.section("Technical Skills")
    pdf.body(
        "Cybersecurity & networking: Linux, Bash, SQL; Wireshark, tcpdump; TCP/IP, DNS, DHCP, HTTP/S; "
        "firewalls, VPNs, network hardening; CIA triad, NIST CSF, risk assessment, security ethics, incident response planning"
    )
    pdf.body(
        "Cloud security: AWS (IAM, S3 policy hardening, Lambda execution roles, API Gateway, Amplify, EC2, VPC); "
        "least-privilege access; block public access; CI/CD pipeline security"
    )
    pdf.body(
        "Software (supporting): Python, Node.js, TypeScript, React/Next.js, PostgreSQL, MongoDB, Docker, Git"
    )

    # Security & Cloud Experience
    pdf.section("Security & Cloud Experience")
    pdf.entry(
        "AWS Hands-On Security Labs",
        "Personal AWS account (us-west-1)",
        bullets=[
            "Lab 1 - Secure CI/CD: Amplify Hosting + GitHub; HTTPS portfolio deploy; automated pipeline on push to main",
            "Lab 2 - Storage security: S3 with block public access; least-privilege IAM scoped to private/ prefix",
            "Lab 3 - Serverless API: Lambda + API Gateway HTTP API with dedicated IAM execution role",
        ],
    )
    pdf.entry(
        "Cybersecurity Trainee",
        "OMC / One Million Coders",
        bullets=[
            "Structured programme covering cybersecurity fundamentals, threat landscape, and practical security concepts",
        ],
    )

    # Projects
    pdf.section("Security-Relevant Projects")
    pdf.entry(
        "Quads - Campus marketplace",
        "quadsmarket.tech",
        bullets=[
            "RBAC (buyer/seller/admin), Paystack escrow, API on AWS EC2 behind Cloudflare, MongoDB Atlas",
            "Authentication boundaries and secure multi-tenant design in production",
        ],
    )
    pdf.entry(
        "Scholar - AI scholarship platform",
        "schorla.vercel.app",
        bullets=[
            "Document ingestion for CVs, transcripts, SOPs; Supabase auth; schema design and access control for sensitive data",
        ],
    )
    pdf.entry(
        "UMaTBOT (MINEBOT) - Campus helpdesk",
        "Telegram Bot, Python",
        bullets=["Automated FAQ and resource delivery with controlled bot access patterns"],
    )
    pdf.entry(
        "InsightFlow, StudyMate, Sheet2SaaS",
        "Shipped SaaS products",
        bullets=[
            "End-to-end ownership including auth, database security, and production deployment (Vercel/Supabase/PostgreSQL)",
        ],
    )

    # Additional Experience
    pdf.section("Additional Experience")
    pdf.entry(
        "IoT Hackathon Developer",
        "Robotics Club (AAENICS), UMaT - 2026",
        bullets=[
            "ESP32 + MQTT embedded prototypes; team-based automation challenge with panel evaluation",
        ],
    )
    pdf.entry(
        "Hackathon Participant",
        "Dept. of Computer Science & Engineering, UMaT - 2025",
        bullets=["Collaborative software solution design and presentation"],
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT))
    return OUT


if __name__ == "__main__":
    path = build()
    print(f"Wrote {path}")
