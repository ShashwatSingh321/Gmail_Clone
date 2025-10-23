https://gmail-clone-sand.vercel.app/emails/inbox <br>
<img width="513" height="837" alt="image" src="https://github.com/user-attachments/assets/5347a399-d79b-4a71-807c-751e26b53db8" />

**GmailClone** is a fully functional email client replicating Gmail's core features. Users can compose, send, receive, and manage emails through a responsive, intuitive interface with real-time inbox synchronization using SMTP protocol. **Fast. Reliable.**

## ✨ Features
- ✉️ Compose & Send emails
- 📥 Real-time inbox sync
- 📨 Receive & read emails
- 🗂️ Organized Gmail-like UI
- 📱 Fully responsive
- ⚡ Fast performance

## 🛠 Tech Stack
| Frontend | Backend | Database | Email |
|----------|---------|----------|-------|
| React.js | Node.js | MongoDB  | SMTP  |

## 🚀 Quick Start

### Backend
```bash
cd server
npm install
# Add .env with MongoDB & SMTP
npm run start
```
### Frontend
```bash
cd client
npm install
npm start
```
### Environment Variables
```bash
MONGODB_URI=your_mongodb_uri
SMTP_HOST=smtp.gmail.com
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
