# ApexFBA — Amazon FBA Agency Website

ApexFBA is a high-performance, dark-themed agency website engineered for Amazon FBA brand owners in the US, UK, and global marketplaces. The site highlights full-service account management, profit-first PPC advertising, listing optimization, and inventory logistics.

---

## 🚀 Live Pages Included

| Page | File | Description |
|---|---|---|
| **Home** | [`index.html`](index.html) | Brand introduction, TACoS philosophy, problem breakdown, social proof, and primary audit CTA. |
| **Services** | [`services.html`](services.html) | PPC Management, Full-Service FBA, Listing Optimization, and Inventory Logistics. |
| **How We Help** | [`how-we-help.html`](how-we-help.html) | The 5-step Apex Growth System (Audit, Architect, Accelerate, Automate, Analyze). |
| **Case Studies** | [`case-studies.html`](case-studies.html) | Detailed performance breakdowns with before/after ACoS, TACoS, and net margins. |
| **Testimonials** | [`testimonials.html`](testimonials.html) | 10 verified client reviews across the US, UK, UAE, Spain, and Australia. |
| **FAQs** | [`faqs.html`](faqs.html) | Comprehensive answers on contracts, pricing, day-to-day operations, and access. |
| **Contact Us** | [`contact.html`](contact.html) | General inquiry form, contact cards, business hours, and next steps timeline. |
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

## ⚙️ Configuration & Placeholders Checklist

Before launching in production, search for and update the following placeholders:

1. **Domain Name**:
   - Replace `https://YOUR-DOMAIN.com` in:
     - All `<link rel="canonical">` tags
     - Open Graph (`og:url`) and Twitter tags
     - `sitemap.xml`
     - `robots.txt`
2. **Form Submissions (Web3Forms / Formspree)**:
   - In both `auditModalForm` (all pages) and `contactForm` (`contact.html`), replace `YOUR_ACCESS_KEY_HERE` with your free access key from [Web3Forms](https://web3forms.com) or [Formspree](https://formspree.io).
   - If left as `YOUR_ACCESS_KEY_HERE`, the forms automatically operate in **Simulation Mode** (validating input and displaying the success screen without throwing network errors).
3. **Contact Details**:
   - Replace `your-email@apexfba.com` with your real agency email.
   - Replace `+00 000 0000000` with your phone number and WhatsApp link (`https://wa.me/YOUR_PHONE`).
   - Replace `[City, Country]` with your physical location.
4. **Custom Domain (GitHub Pages)**:
   - When ready with your domain (e.g. `apexfba.com`), add a `CNAME` file to the root of this repo containing `apexfba.com`, and configure DNS A records (`185.199.108.153`, etc.) at your domain registrar.

---

## 🌐 Deploying to GitHub Pages

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Launch ApexFBA website"
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select Branch: **`main`** and Folder: **`/ (root)`**.
   - Click **Save**.
3. Your site will be published at `https://<your-username>.github.io/<repo-name>/`.

---

## ⚖️ Amazon Compliance Notice
ApexFBA is an independent service provider and is not affiliated with, endorsed by, or sponsored by Amazon.com, Inc. Amazon and FBA are trademarks of Amazon.com, Inc.