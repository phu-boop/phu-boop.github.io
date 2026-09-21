# PORTFOLIO_CONTEXT.md
> Master reference document for building the personal portfolio website.
> Last updated: 2026-09-22

---

## 👤 Personal Profile

| Field | Value |
|-------|-------|
| **Name** | Nguyễn Lê Anh Phú |
| **Location** | An Phú Đông, District 12, Ho Chi Minh City, Vietnam |
| **Education** | Bachelor of Information Technology — University of Transport Ho Chi Minh City (UTH) |
| **Expected Graduation** | 2026 |
| **GPA** | ~3.6 / 4.0 |
| **GitHub** | [github.com/phu-boop](https://github.com/phu-boop) |
| **LinkedIn** | [Nguyễn Lê Anh Phú](https://www.linkedin.com/in/nguyen-le-anh-phu-8392393a9) |
| **Email** | phudev23@gmail.com |

---

## 🎯 Portfolio Positioning

### Primary Title
> **Backend Software Engineer**

### Subtitle / Tagline
> Java • Spring Boot • TypeScript • REST APIs • PostgreSQL • MongoDB • Redis • Docker

### Hero Section Copy
```
NGUYỄN LÊ ANH PHÚ
Backend Software Engineer

I build reliable backend systems, scalable APIs, and production-oriented software
with Java, Spring Boot, TypeScript, and modern infrastructure.

[ View Projects ]  [ GitHub ]
```

### Career Direction
- **Primary Target:** Backend Software Engineer / Backend Fresher · Java / Spring Boot Backend Developer
- **Also Open To:** BA / ERP / SAP Intern · Application Support · System Operation · DevOps

### Core Positioning Statement
> Backend-focused Software Engineer who enjoys building scalable, reliable backend systems and solving real-world engineering problems.

---

## 🛠️ Technical Stack

### Backend
- Java · Spring Boot · Spring Security · REST API
- .NET / ASP.NET Core
- Node.js · Express.js · TypeScript

### Database
- PostgreSQL · MongoDB · SQL Server · Redis

### Architecture & Patterns
- RESTful API · Layered Architecture · Microservices
- Event-driven Architecture · Background Workers
- Distributed Processing · Transaction Consistency
- Concurrency / Optimistic Locking

### Messaging & AI
- Apache Kafka
- Spring AI · Gemini · RAG · Vector Database · Ollama

### DevOps / Infrastructure
- Docker · Docker Compose
- Kubernetes · Minikube
- GitHub Actions / CI
- Prometheus · Grafana
- SonarQube · Trivy · k6

### Tools
- Git / GitHub / GitLab
- Jira · Confluence
- Postman · Newman
- DataGrip · VS Code

---

## 🚀 Featured Projects

### 1. VoltNexus EV — Enterprise EV Ecosystem
- **GitHub:** [phu-boop/VoltNexus-EV-Enterprise-Ecosystem](https://github.com/phu-boop/VoltNexus-EV-Enterprise-Ecosystem)
- **Type:** Enterprise-scale EV ecosystem
- **Stack:** Java 21 · Spring Boot 3.5 · Kafka · Redis · Docker · Kubernetes/Minikube · Spring AI · Gemini · RAG · Prometheus · Grafana · SonarQube · Trivy · k6

#### Architecture
```
Client
  ↓
API Gateway (port 8080)
  ↓
┌──────────────────────────┐
│      Microservices        │
│  Account · Customer       │
│  Identity · Charging      │
│  Payment · Booking · ...  │
│  (~10 services total)     │
└──────────────────────────┘
  ↓
Kafka / Redis / Database
  ↓
AI / RAG / Forecasting
```

#### Key Highlights
- ~10 microservices with independent ports
- Distributed communication via Kafka
- AI/RAG integration for business knowledge
- Payment integration
- Full observability stack (Prometheus + Grafana)
- Automated testing with k6 + Newman
- Containerized with Docker + Kubernetes

---

### 2. Personal Expense Management
- **GitHub:** [phu-boop/personal-expense-management](https://github.com/phu-boop/personal-expense-management)
- **Stack:** React · Express · TypeScript · MongoDB · Redis · Background Workers

#### Architecture
```
Controller → Validator → Service → Repository → Router
                                      ↓
                              MongoDB + Redis + Worker
```

#### Engineering Depth (Key Talking Points)
| Problem | Solution |
|---------|----------|
| Financial consistency | Transactions as source of truth; wallet.currentBalance always accurate |
| Atomic updates | Atomic MongoDB operations |
| Negative balance protection | Pre-check + atomic update |
| Transaction retry | Optimistic concurrency with wallet.version |
| Decimal precision | MongoDB Decimal128 + decimal.js |
| Transaction ordering | date → createdAt → _id |
| Concurrency | MAX_TRANSACTION_RETRIES = 3 |

#### Large-Scale Export Benchmark
```
~1,000,000 transaction rows
→ PDF: 1,062,516 rows
→ 426 chunks
→ 27,626 pages
→ ~71 MB output
→ Peak RSS ~590 MB
→ Completed successfully ✅
```

#### Export Worker Architecture
```
API
 ├── create export job
 ↓
Redis Queue
 ↓
Export Worker
 ├── read data in chunks
 ├── generate PDF/XLSX
 └── cleanup temporary resources
```

---

### 3. Core Banking System
- **GitLab:** phu-boop/core-banking
- **Type:** Enterprise-grade core banking backend

#### Domains / Services
- Account · Core · Customer · Foundation · Identity

#### Tools & Process
- GitLab · Jira · Confluence · AI-assisted documentation

---

### 4. LMS — Learning Management System
- **Repository:** LMS-Source-3
- **Backend:** .NET 10 · ASP.NET Core (solution: Aig.Lms.sln)
- **Frontend:** Next.js

#### Roles
- LMS_ADMIN · TENANT_ADMIN · CLIENT

#### Features
- Multi-tenant architecture
- Notification · Ticket · Email modules

---

### 5. TVDT Library Management System
- **Repository:** lib.admin
- **Stack:** .NET · SQL Server · Docker · MinIO · Gotenberg · Ollama
- **Direction:** Document/library management with AI-assisted processing

---

## 🧪 Experience

### Hoàng Khánh — Intern (~6 months)
Relevant exposure:
- Backend development
- System analysis & documentation
- Testing
- Business/system understanding

### VoltNexus
Beyond coding — also involved in:
- UAT (User Acceptance Testing)
- Technical documentation
- Jira / Confluence project management
- API testing (Postman)
- Automation testing (Newman / k6)

---

## 🧠 Engineering Strengths

### 1. Backend Architecture
```
Controller → Service → Repository → Database
```
Disciplined, layered approach to organizing business logic.

### 2. Scalability
Benchmarked and handled production-scale data:
```
1M+ rows → Chunking → Streaming/incremental processing → Low memory usage
```

### 3. Distributed Systems
Hands-on experience with:
```
Microservices · Kafka · Redis · Workers · Docker · Kubernetes
```

### 4. Data Consistency
Especially in Personal Expense Management:
```
Transaction → Wallet Balance → Atomic Update → Consistency
```

### 5. AI Integration
Not just chatbots — application-level AI:
```
Application → Spring AI → Gemini → RAG → Vector DB → Business Knowledge
```

---

## 📊 Key Numbers (for portfolio showcasing)

| Area | Evidence |
|------|----------|
| GPA | 3.6 / 4.0 |
| Internship | ~6 months |
| VoltNexus | ~10 microservices |
| PEM export | 1M+ rows handled |
| PDF benchmark | 27,626+ pages |
| Export architecture | Redis + Worker pattern |
| Backend | Java / Spring Boot / Node / .NET |
| Infrastructure | Docker / Kubernetes |
| Messaging | Kafka / Redis |
| AI | RAG / Gemini / Spring AI |
| Testing | Postman / Newman / k6 |
| Observability | Prometheus / Grafana |
| GitHub | github.com/phu-boop |

---

## 🎨 UI/Design Direction (for Portfolio Website)

### Tone of Voice
- Professional but approachable
- Engineering-focused (concrete numbers, real problems)
- Confident without being arrogant
- Vietnamese identity, international presentation

### Visual Style
- **Mode:** Dark mode preferred (tech/engineering feel)
- **Color Palette:** Deep navy/slate base + accent (electric blue or green — fits EV/tech theme)
- **Typography:** Modern sans-serif (Inter, Outfit, or Space Grotesk)
- **Aesthetic:** Glassmorphism or subtle grid/code-line backgrounds
- **Animations:** Subtle entry animations, hover effects on project cards, typing effect on hero

### Sections to Include
1. **Hero** — Name, title, tagline, CTA buttons (Projects + GitHub)
2. **About** — Brief bio, engineering mindset, education
3. **Skills** — Grouped tech stack with visual indicators
4. **Experience** — Timeline (internship + project roles)
5. **Projects** — Cards with stack badges, key highlights, GitHub links
6. **Achievements/Numbers** — Key metrics in spotlight format
7. **Contact** — Email, GitHub, LinkedIn

---

## 🔗 Links

| Platform | URL |
|----------|-----|
| GitHub | https://github.com/phu-boop |
| LinkedIn | https://www.linkedin.com/in/nguyen-le-anh-phu-8392393a9 |
| Email | phudev23@gmail.com |
| Portfolio (this site) | https://phu-boop.github.io |
