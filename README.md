# Docs Clone

A modern, collaborative document editor inspired by Google Docs. Built with Next.js 15, React 19, and TypeScript — featuring real-time collaboration, rich text editing, and seamless document management for teams and individuals.


## ✨ Features

* **Real-Time Collaboration**: Multiple users can edit the same document at the same time.
* **Rich Text Editing**: Headings, bold, italic, underline, lists, links, and more.
* **Extenstions**: Tables, Images, and more.
* **Comments and Annotations**: Real time comments and annotations in the document.
* **Notification**: Notifications for mentions.
* **Template Gallery**: Choose a document from template gallery with predefined initial content.
* **Downloading**: Multiple doucument downloading formats like JSON, HTML, pdf and txt.
* **Document Management**: Create, rename and delete documents.
* **Auto-Save**: Changes are saved automatically as you type.
* **Organizations**: Sharing documents between all members of the organization.
* **Responsive UI**: Works across desktop, tablet, and mobile.
* **Authentication**: Secure account-based access (Clerk).
* **Version History**: Track changes and restore previous versions.
* **Sharing & Permissions**: Invite collaborators with view/edit permissions.


## 🚀 Tech Stack

* **Frontend**: Next.js 15, React 19, TypeScript
* **Styling**: Tailwind CSS
* **Editor**: Tiptap
* **Backend / Database**: Convex
* **Real-time Collaboration**: Liveblocks
* **Authentication**: Clerk


## 📦 Installation

### Prerequisites

* Node.js 18+
* npm, yarn, pnpm, or bun
* Convex account and project (if using Convex)
* Clerk account (if using Clerk for auth)
* Liveblocks account (for real-time features)

### Setup

1. **Clone the repository**

```bash
git clone https://github.com/MurtazaD1410/Docs-clone.git
cd Docs-clone
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Environment configuration**

Copy the example environment file and update it with your keys:

```bash
cp .env.example .env.local
```

Then open `.env.local` and update the values. Example:

```env
# Convex Backend
CONVEX_DEPLOYMENT="your_convex_deployment_name"
NEXT_PUBLIC_CONVEX_URL="your_convex_url"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

# Liveblocks Real-time Collaboration
LIVEBLOCKS_SECRET_KEY="your_liveblocks_secret_key"
```

4. **Convex setup** (if applicable)

```bash
# Install Convex CLI globally (if not installed)
npm install -g convex

# Login to Convex
npx convex login

# Start Convex dev
npx convex dev
```

5. **Clerk configuration** (if applicable)

* Configure sign-in/sign-up flows on the Clerk dashboard.
* Add OAuth providers (Google, GitHub, etc.) if desired.
* Add your callback URLs and webhook endpoints.

6. **Liveblocks setup**

* Create a Liveblocks project and obtain the secret key.
* Configure rooms, presence, and permissions as needed.
* Integrate Liveblocks authentication with Clerk (or your auth provider).

7. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

8. **Open your browser**

```text
http://localhost:3000
```


⭐ If you found this project helpful, please give it a star on GitHub!
