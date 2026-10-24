# Aabzone — Amazon FBA Agency Website

Aabzone is a high-performance, dark-themed agency website engineered for Amazon FBA brand owners in the US, UK, and global marketplaces. The site highlights full-service account management, profit-first PPC advertising, listing optimization, and inventory logistics.

---

## 🌐 Custom Domain
The site is configured for the custom domain **`YOURDOMAIN.com`**:
- Base URL: `https://YOURDOMAIN.com`
- A `CNAME` file containing `YOURDOMAIN.com` is committed in the repository root.
- DNS A Records (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) point to GitHub Pages.

---

## 🚀 Live Pages Included

| Page | File | Description |
|---|---|---|
| **Home** | [`index.html`](index.html) | Brand introduction, TACoS philosophy, problem breakdown, social proof, and embedded Free Store Audit form (`#audit`). |
| **About** | [`about.html`](about.html) | Founder profile of Haseeb Qafi, Aabzone service highlights, marketplace coverage, and core values. |
| **Services** | [`services.html`](services.html) | PPC Management, Full-Service FBA, Listing Optimization, and Inventory Logistics. |
| **How We Help** | [`how-we-help.html`](how-we-help.html) | The 5-step Growth System (Audit, Architect, Accelerate, Automate, Analyze). |
| **Case Studies** | [`case-studies.html`](case-studies.html) | Detailed performance breakdowns with before/after ACoS, TACoS, and net margins. |
| **Testimonials** | [`testimonials.html`](testimonials.html) | 10 verified client reviews across the US, UK, UAE, Spain, and Australia. |
| **Seller FAQs** | [`faqs.html`](faqs.html) | Comprehensive answers on contracts, pricing, day-to-day operations, and access. |
| **Contact Us** | [`contact.html`](contact.html) | Two-column layout with SEO text block, general inquiry form, and next steps timeline. |
| **Blogs Hub** | [`blogs.html`](blogs.html) | Card grid listing all 10 in-depth Amazon FBA growth guides. |
| **Blog 1** | [`blog-1.html`](blog-1.html) | What Is Amazon FBA Management and Is It Worth It in 2026? |
| **Blog 2** | [`blog-2.html`](blog-2.html) | How to Choose a Profitable Product for Amazon FBA |
| **Blog 3** | [`blog-3.html`](blog-3.html) | Amazon Listing Optimization: Titles, Bullets, Images and A+ Content |
| **Blog 4** | [`blog-4.html`](blog-4.html) | Amazon PPC for Beginners: How to Cut ACOS and Grow Sales |
| **Blog 5** | [`blog-5.html`](blog-5.html) | Top 7 Amazon FBA Mistakes That Kill Your Profit (and How to Avoid Them) |
| **Blog 6** | [`blog-6.html`](blog-6.html) | Amazon Account Health: How to Prevent Suspensions and Policy Violations |
| **Blog 7** | [`blog-7.html`](blog-7.html) | Inventory Management on Amazon FBA: Avoid Stockouts and Storage Fees |
| **Blog 8** | [`blog-8.html`](blog-8.html) | How to Calculate Amazon FBA Fees and Real Profit Margins |
| **Blog 9** | [`blog-9.html`](blog-9.html) | Brand Registry and Amazon Brand Analytics: Why They Matter |
| **Blog 10** | [`blog-10.html`](blog-10.html) | In-House vs Agency: Should You Hire an Amazon FBA Management Agency? |
| **Privacy Policy** | [`privacy-policy.html`](privacy-policy.html) | GDPR/CCPA compliant privacy policy covering form data, cookies, and data rights. |
| **Terms of Service** | [`terms.html`](terms.html) | Agency terms, no-earnings guarantee disclaimer, and Amazon trademark disclaimers. |

---

## 🛠️ How to Run Locally

You can run the website locally using any standard static file server:

### Option A: Python HTTP Server (Recommended)
```bash
python -m http.server 8765
```
Then visit: [http://localhost:8765](http://localhost:8765)

### Option B: Node.js `npx serve`
```bash
npx serve .
```

---

## ⚙️ Form Submissions (Web3Forms / Formspree)

Both the Free Store Audit form on `index.html` and the Contact form on `contact.html` are pre-configured to work with Web3Forms or Formspree:
- In both forms, replace `YOUR_ACCESS_KEY_HERE` with your free access key from [Web3Forms](https://web3forms.com) or [Formspree](https://formspree.io).
- While left as `YOUR_ACCESS_KEY_HERE`, the forms automatically operate in **Simulation Mode** (validating input and displaying the success screen without throwing network errors).

---

## ⚖️ Amazon Compliance Notice
Aabzone is an independent service provider and is not affiliated with, endorsed by, or sponsored by Amazon.com, Inc. Amazon and FBA are trademarks of Amazon.com, Inc.