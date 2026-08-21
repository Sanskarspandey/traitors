# Deployment Guide — The Estate / The Traitors Mumbai

This document outlines the step-by-step instructions for deploying **The Estate / The Traitors Mumbai** to production.

- **Frontend**: [Vercel](https://vercel.com) (React + Vite SPA)
- **Backend**: [Render](https://render.com) (Node.js + Express REST API)
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Managed Cloud Database)
- **GitHub Repository**: `Sanskarspandey/traitors`

---

## 1. Architecture Overview

```
User Browser (HTTPS)
       │
       ▼
 Vercel Frontend (React + Vite)
 ├── / (Main 8-section experience)
 ├── /take-part (Public Registration)
 └── /admin (Protected Admin Dashboard)
       │
       ▼  (HTTPS API calls with JWT)
 Render Backend (Node.js + Express)
 ├── POST /api/players (Public)
 ├── POST /api/auth/login (Admin Login)
 ├── GET /api/players (Protected with JWT)
 ├── GET /api/players/count (Protected with JWT)
 ├── PATCH /api/players/:id/status (Protected with JWT)
 └── DELETE /api/players/:id (Protected with JWT)
       │
       ▼  (Encrypted MongoDB Protocol)
 MongoDB Atlas (M0 Free Cluster)
 └── the-estate database
```

---

## 2. Step-by-Step Deployment Instructions

### Step A: MongoDB Atlas Setup
1. Log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new cluster (select **M0 Free Shared Cluster** in your closest region).
3. Under **Security → Database Access**:
   - Click **Add New Database User**.
   - Set **Authentication Method** to *Password*.
   - Create a database username (e.g. `estate_admin`) and a strong password.
   - Set Database User Privileges to **Read and write to any database**.
4. Under **Security → Network Access**:
   - Click **Add IP Address**.
   - Select **Allow Access from Anywhere (`0.0.0.0/0`)** so Render can connect.
5. Under **Database → Clusters**:
   - Click **Connect → Drivers** (Node.js).
   - Copy the connection string format:
     ```text
     mongodb+srv://<username>:<password>@<cluster-address>.mongodb.net/the-estate?retryWrites=true&w=majority
     ```
   - Replace `<username>` and `<password>` with your database user credentials, and ensure the database name is `the-estate`.

---

### Step B: Render Backend Deployment
1. Log in to [Render](https://render.com).
2. Click **New + → Web Service**.
3. Connect your GitHub repository: `Sanskarspandey/traitors`.
4. Configure the Web Service settings:
   - **Name**: `the-estate-api` (or your preferred name)
   - **Region**: Singapore / Frankfurt / Oregon (choose closest to your audience)
   - **Branch**: `main`
   - **Root Directory**: `server`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node src/server.js`
   - **Instance Type**: `Free`
5. In the **Environment Variables** section, add:

| Key | Value | Description |
| :--- | :--- | :--- |
| `PORT` | `5050` | Server listening port |
| `NODE_ENV` | `production` | Enables production optimizations & strict CORS |
| `MONGO_URI` | `mongodb+srv://...` | Your MongoDB Atlas connection URI |
| `ADMIN_USERNAME` | `your_admin_username` | Admin portal username |
| `ADMIN_PASSWORD` | `your_secure_admin_password` | Admin portal password |
| `JWT_SECRET` | `your_long_random_64_char_secret` | Secret key for signing JWT tokens |
| `CLIENT_URL` | `https://your-frontend-domain.vercel.app` | Your Vercel frontend URL (without trailing slash) |

6. Click **Deploy Web Service**.
7. Once deployed, copy your Render backend URL (e.g., `https://the-estate-api.onrender.com`).

---

### Step C: Vercel Frontend Deployment
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New... → Project**.
3. Import the GitHub repository: `Sanskarspandey/traitors`.
4. Configure the project:
   - **Framework Preset**: `Vite`
   - **Root Directory**: Click *Edit* and select **`client`**
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. In the **Environment Variables** section, add:

| Key | Value | Description |
| :--- | :--- | :--- |
| `VITE_API_URL` | `https://the-estate-api.onrender.com` | Your live Render backend URL (no trailing slash) |

6. Click **Deploy**.
7. Copy your assigned Vercel URL (e.g., `https://the-estate-mumbai.vercel.app`).
8. Return to your Render backend settings and ensure `CLIENT_URL` matches this exact Vercel URL.

---

## 3. Environment Variables Reference

### Backend (`server` on Render)
```env
PORT=5050
NODE_ENV=production
MONGO_URI=mongodb+srv://<db_user>:<db_password>@cluster0.xxxxx.mongodb.net/the-estate?retryWrites=true&w=majority
ADMIN_USERNAME=admin
ADMIN_PASSWORD=change_this_to_a_secure_password
JWT_SECRET=change_this_to_a_long_random_secret_string
CLIENT_URL=https://your-frontend-domain.vercel.app
```

### Frontend (`client` on Vercel)
```env
VITE_API_URL=https://your-backend-service.onrender.com
```

> **IMPORTANT**:
> - Never add `ADMIN_PASSWORD`, `JWT_SECRET`, or `MONGO_URI` to Vercel frontend environment variables.
> - Never commit `.env` files to GitHub.

---

## 4. Verification and Testing

### 1. Verify Health Endpoint
Open in your browser:
```text
https://your-backend-service.onrender.com/api/health
```
**Expected Response:**
```json
{
  "success": true,
  "message": "The Estate API is running"
}
```

### 2. Verify Public Registration
1. Navigate to `https://your-frontend-domain.vercel.app/take-part`.
2. Fill in:
   - **Full Name**: Test Participant
   - **Age**: 24
   - **Phone**: 9876543210
3. Click **REQUEST ENTRY →**.
4. Verify the **"REQUEST RECEIVED"** confirmation card appears.

### 3. Verify Admin Dashboard
1. Navigate to `https://your-frontend-domain.vercel.app/admin`.
2. Enter your `ADMIN_USERNAME` and `ADMIN_PASSWORD`.
3. Click **ENTER DASHBOARD →**.
4. Verify:
   - The test registration appears in the table.
   - Status can be updated (**Pending → Contacted → Confirmed → Rejected**).
   - WhatsApp and Call buttons function correctly.
   - CSV export works.
   - Logout clears session and returns to login screen.

---

## 5. Troubleshooting Common Issues

### Issue 1: "Unable to connect to the server" on Take Part form
- **Cause**: `VITE_API_URL` is missing on Vercel, has a trailing slash, or points to the wrong URL.
- **Fix**: Check Vercel project settings → Environment Variables → ensure `VITE_API_URL` is set to `https://your-render-url.onrender.com` (no trailing slash). Redeploy frontend.

### Issue 2: CORS Policy Error in Browser Console
- **Cause**: Backend `CLIENT_URL` does not match the frontend domain requesting the API.
- **Fix**: Check Render environment variables → ensure `CLIENT_URL` exactly matches `https://your-frontend-domain.vercel.app`.

### Issue 3: Direct reload on `/take-part` or `/admin` gives 404
- **Cause**: SPA rewrite rule missing.
- **Fix**: Ensure `client/vercel.json` contains:
  ```json
  {
    "rewrites": [
      {
        "source": "/(.*)",
        "destination": "/"
      }
    ]
  }
  ```
  *(Already configured in the repository)*.

### Issue 4: Render Free Tier Cold Starts
- **Behavior**: On Render free tier, the backend spins down after 15 minutes of inactivity. The first request may take 20–40 seconds to respond as the instance wakes up.
- **Fix**: This is normal for free tier instances. All subsequent requests will be fast.

---

## 6. Local Development Commands

To run both services on your local machine:

```bash
# Terminal 1 — Backend
cd server
npm install
npm run dev

# Terminal 2 — Frontend
cd client
npm install
npm run dev
```
