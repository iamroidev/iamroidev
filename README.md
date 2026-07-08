# Hi there, I'm Richard Kwaku Opoku! 🚀
*(Also known as **iamroidev**)*

Professional portfolio and technical showcase for **Richard Kwaku Opoku** — third-year Computer Science & Engineering student at UMaT, focusing on **Cloud Engineering** and **Cybersecurity**. 

🔗 **Live Portfolio Site:** [iamroidev.vercel.app](https://iamroidev.vercel.app) (Backup on AWS Amplify: [amplifyapp.com](https://main.dcgztfly74suw.amplifyapp.com/))

---

## ⚡ About Me

I keep my academic coursework honest by turning concepts into real, production-ready products. I love building tools that solve real problems, hardening cloud infrastructure, and applying security practices to everything I build.

- 🎓 **Education:** B.Sc. Computer Science & Engineering @ University of Mines and Technology (UMaT), Year 3
- 💼 **Goal:** Seeking Cloud and Cybersecurity Internships for 2026.
- ✉️ **Contact:** [richardkwakuopoku06@gmail.com](mailto:richardkwakuopoku06@gmail.com) | [LinkedIn](https://linkedin.com/in/richardkwakuopoku982) | [WhatsApp](https://wa.me/233508597910)

---

## 🎖️ Certifications

*   **AWS Certified Cloud Practitioner** — [Verify on Credly](https://www.credly.com/badges/0de7d0e0-e0b0-436c-84ac-8b52919ed987/public_url)
*   **Google Cybersecurity Professional Certificate** (4/8 Completed: Foundations, Risk, Networks, Linux & SQL)
*   **OMC Cybersecurity Trainee**
*   **Machine Learning Specialization** (DeepLearning.AI / Stanford) — [Verify on Coursera](https://coursera.org/share/099b28416aa04c09512a4d1fb1e9cc81)
*   **ISC2 Certified in Cybersecurity (CC)** — *(In Progress)*

---

## 🛠️ Tech Stack & Skills

*   **Cloud:** AWS (Amplify, S3, IAM, Lambda, API Gateway, EC2)
*   **Cybersecurity:** Linux, Bash, SQL, network security (TCP/IP, DNS, firewalls, VPNs), Wireshark, tcpdump, NIST CSF, incident response planning.
*   **Software (Frontend):** React, Next.js, TypeScript, Tailwind CSS, Vite
*   **Software (Backend):** Python, Node.js, Supabase, PostgreSQL, MongoDB, Prisma ORM
*   **AI/ML:** Gemini API, OpenAI API, LlamaCloud, RAG pipelines

---

## 🚀 Featured Projects

### 🏪 [Quads](https://quadsmarket.tech) (Campus Marketplace)
*   **Concept:** A trusted, UMaT-only marketplace with escrow payments and role-based student verification.
*   **Tech Stack:** React, Node.js, MongoDB, Paystack Escrow, AWS EC2, Cloudflare.
*   **Repo:** [github.com/iamroidev/quads](https://github.com/iamroidev/quads)

### 🎓 [Scholar](https://schorla.vercel.app) (AI Scholarships Platform)
*   **Concept:** An AI scholarship intelligence platform parsing CVs, transcripts & SOPs to match profiles with real funding opportunities.
*   **Tech Stack:** Next.js, Gemini API, Supabase, LlamaCloud, Stripe.

### 📈 [InsightFlow](https://appinsightflow.vercel.app) (AI Reading Habiteer)
*   **Concept:** Turns books into actionable intelligence with AI summaries, audio playback, streaks, and learning paths.
*   **Tech Stack:** React, Vite, TypeScript, Supabase.

### 📚 [StudyMate](https://studymatepro.vercel.app) (AI Study Assistant)
*   **Concept:** AI study assistant collapsing file uploads into interactive quizzes, flashcards, summaries, and customized study plans.
*   **Tech Stack:** Next.js, OpenAI API, PostgreSQL, Tailwind CSS.

---

## ☁️ Hands-on AWS Labs

I run and experiment with real-world infrastructure on my personal AWS account (`us-west-1` region):

*   **Lab 1: Frontend & CI/CD** — AWS Amplify Hosting with automatic GitHub deployment pipelines.
*   **Lab 2: Storage Security** — Hardened S3 bucket permissions with strict least-privilege IAM policies.
*   **Lab 3: Serverless Backend** — API Gateway HTTP API integrated with AWS Lambda.
*   *Verify the live deployment of these labs here:* [Amplify Deploy](https://main.dcgztfly74suw.amplifyapp.com/)

---

## 💼 About This Repository (`iamroidev/iamroidev`)

This repository is both my **GitHub Profile README** and the source code for my **Personal Portfolio Website** ([iamroidev.vercel.app](https://iamroidev.vercel.app)).

### Codebase Overview
It is designed as a **static, zero-build** page. Each section is a full-viewport slide governed by custom CSS animations and client-side slide routing.

*   `index.html` — Single-page HTML5 shell
*   `style.css` — Modern, premium custom layout, gradients, and typography
*   `main.js` — Client-side vanilla slide controller and navigation logic
*   `amplify.yml` — AWS Amplify build spec (deploys raw static assets directly to CDN)
*   `cv-work/` — Local python tools used to maintain CV and package assets

### Running Locally
To test the portfolio site locally, run:
```bash
git clone https://github.com/iamroidev/iamroidev.git
cd iamroidev
npx serve .
```
No build steps or environment variables are required!

---

### ☁️ Deployment

Amplify builds from the repository root with no compile step:

```yaml
# amplify.yml — artifact is the repo root
```

Push to the connected branch; Amplify publishes static files to the CDN.

---

**Author:** [iamroidev](https://github.com/iamroidev)
