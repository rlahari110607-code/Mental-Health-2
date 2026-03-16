# Mental Health Platform - System Workflow

## Simple Workflow Diagram for Presentation

### 1. User Registration & Login Flow

```
START
  │
  ▼
┌──────────────────┐
│ Visit Website    │
└────────┬─────────┘
         │
         ▼
    ┌────────┐
    │New User?│──Yes──┐
    └────┬───┘       │
         │           ▼
         No    ┌──────────────┐
         │     │  Registration │
         │     │  - Enter Name │
         │     │  - Enter Email│
         │     │  - Password   │
         │     └───────┬───────┘
         │             │
         │             ▼
         │     ┌──────────────┐
         │     │   Validate   │
         │     │  Form Data   │
         │     └───────┬───────┘
         │             │
         ▼             ▼
    ┌──────────────────┐
    │      Login       │
    │  - Enter Email   │
    │  - Enter Pass    │
    └────────┬─────────┘
             │
             ▼
    ┌──────────────────┐
    │  Authenticate    │
    └────────┬─────────┘
             │
             ▼
    ┌──────────────────┐
    │   Dashboard      │
    └──────────────────┘
```

### 2. Main Application Flow

```
┌─────────────────────────────────────────────────────────┐
│                    DASHBOARD (Home)                      │
│  - View Daily Affirmation                               │
│  - Track Today's Mood                                   │
│  - View Mood Statistics                                 │
│  - See Recent Mood History                              │
└──────────────────┬──────────────────────────────────────┘
                   │
      ┌────────────┼────────────┐
      │            │            │
      ▼            ▼            ▼
┌──────────┐ ┌──────────┐ ┌──────────┐
│  Stress  │ │ Articles │ │ Chatbot  │
│  Relief  │ │          │ │          │
└──────────┘ └──────────┘ └──────────┘
      │            │            │
      ▼            ▼            ▼
┌──────────┐ ┌──────────┐ ┌──────────┐
│Emergency │ │  Forum   │ │  Logout  │
└──────────┘ └──────────┘ └──────────┘
```

### 3. Mood Tracking Process

```
User Opens Dashboard
        │
        ▼
┌──────────────────┐
│ See Mood Options │
│  😄  🙂  😐      │
│  😔  😢          │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Select Mood     │
│  (1 to 5 scale)  │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Add Optional     │
│ Note/Description │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Save to Local   │
│    Storage       │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Update Chart    │
│  Show Stats      │
└────────┬─────────┘
         │
         ▼
    Confirmation
```

### 4. Breathing Exercise Flow

```
User Selects Stress Relief
        │
        ▼
┌──────────────────┐
│ Choose Exercise  │
│  - 4-7-8         │
│  - Box Breathing │
│  - Calming       │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Press Start     │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   INHALE Phase   │
│   (Visual Cue)   │
│   Counter: 4,3,2 │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   HOLD Phase     │
│   (if applicable)│
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   EXHALE Phase   │
│   (Visual Cue)   │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Repeat Cycle    │
│  Track Progress  │
└────────┬─────────┘
         │
    ┌────┴────┐
    │         │
Continue   Finish
```

### 5. Chatbot Interaction Flow

```
User Opens Chatbot
        │
        ▼
┌──────────────────┐
│  Bot Greets User │
│  "How can I help"│
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ User Types Msg   │
│ or Selects Quick │
│    Response      │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Bot Analyzes    │
│  Keywords:       │
│  - anxiety       │
│  - stress        │
│  - sad           │
│  - crisis        │
└────────┬─────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌─────────┐ ┌──────────┐
│Normal   │ │ CRISIS   │
│Response │ │ Detected │
└────┬────┘ └─────┬────┘
     │            │
     │            ▼
     │     ┌──────────────┐
     │     │ Show Emergency│
     │     │  Resources   │
     │     │  988 Helpline│
     │     └──────────────┘
     │
     ▼
┌──────────────────┐
│ Bot Provides     │
│ Supportive Reply │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Continue Chat    │
│ or Exit          │
└──────────────────┘
```

### 6. Forum Posting Flow

```
User Opens Forum
        │
        ▼
┌──────────────────┐
│  View All Posts  │
│  (Anonymous)     │
└────────┬─────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌─────────┐ ┌──────────┐
│ Read    │ │ Create   │
│ Post    │ │ New Post │
└────┬────┘ └─────┬────┘
     │            │
     │            ▼
     │     ┌──────────────┐
     │     │ Enter Title  │
     │     │ Select Topic │
     │     │ Write Content│
     │     └──────┬───────┘
     │            │
     │            ▼
     │     ┌──────────────┐
     │     │  Submit Post │
     │     └──────┬───────┘
     │            │
     ▼            ▼
┌──────────────────┐
│   View Replies   │
└────────┬─────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌─────────┐ ┌──────────┐
│  Like   │ │  Reply   │
│  Post   │ │  to Post │
└─────────┘ └──────────┘
```

### 7. Data Storage Architecture

```
┌─────────────────────────────────────────┐
│           USER ACTIONS                  │
│  - Login                                │
│  - Track Mood                           │
│  - Create Post                          │
│  - Chat Messages                        │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│        REACT STATE MANAGEMENT           │
│  - useState (Component State)           │
│  - useEffect (Side Effects)             │
│  - Context (Global State)               │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│         DATA VALIDATION                 │
│  - Form Validation                      │
│  - Type Checking                        │
│  - Error Handling                       │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│      LOCALSTORAGE (Current)             │
│                                         │
│  Keys:                                  │
│  - mh_current_user                      │
│  - mh_users                             │
│  - mh_moods_{userId}                    │
│  - mh_forum_posts                       │
│  - daily_affirmation                    │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│         UI UPDATE                       │
│  - Re-render Components                 │
│  - Show Animations                      │
│  - Display Success/Error                │
└─────────────────────────────────────────┘
```

### 8. Emergency Feature Activation

```
User Navigates to Emergency Page
        │
        ▼
┌──────────────────┐
│  Display Crisis  │
│    Resources     │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Show Prominent   │
│  Emergency Btns  │
│  - 911           │
│  - 988 Lifeline  │
└────────┬─────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌─────────┐ ┌──────────┐
│24/7     │ │International│
│Hotlines │ │ Resources  │
└─────────┘ └──────────┘
         │
         ▼
┌──────────────────┐
│ Display Warning  │
│   Signs List     │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Online Support   │
│   Resources      │
└──────────────────┘
```

---

## Technology Integration Diagram

```
┌────────────────────────────────────────────────┐
│              FRONTEND LAYER                    │
├────────────────────────────────────────────────┤
│  React Components                              │
│  ├─ Login/Auth                                 │
│  ├─ Dashboard                                  │
│  ├─ Mood Tracker                               │
│  ├─ Breathing Exercises                        │
│  ├─ Chatbot                                    │
│  ├─ Forum                                      │
│  └─ Emergency Resources                        │
└──────────────┬─────────────────────────────────┘
               │
┌──────────────┴─────────────────────────────────┐
│          STYLING & ANIMATION                   │
├────────────────────────────────────────────────┤
│  - Tailwind CSS (Utility Styling)             │
│  - Motion/Framer Motion (Animations)          │
│  - shadcn/ui (Component Library)              │
└──────────────┬─────────────────────────────────┘
               │
┌──────────────┴─────────────────────────────────┐
│         ROUTING & NAVIGATION                   │
├────────────────────────────────────────────────┤
│  React Router v7                               │
│  - Client-side Routing                         │
│  - Protected Routes                            │
│  - Navigation Guards                           │
└──────────────┬─────────────────────────────────┘
               │
┌──────────────┴─────────────────────────────────┐
│         DATA VISUALIZATION                     │
├────────────────────────────────────────────────┤
│  Recharts                                      │
│  - Line Charts (Mood Trends)                   │
│  - Data Formatting                             │
│  - Responsive Charts                           │
└──────────────┬─────────────────────────────────┘
               │
┌──────────────┴─────────────────────────────────┐
│         STATE MANAGEMENT                       │
├────────────────────────────────────────────────┤
│  React Hooks                                   │
│  - useState (Local State)                      │
│  - useEffect (Side Effects)                    │
│  - useRef (DOM References)                     │
│  - Custom Hooks                                │
└──────────────┬─────────────────────────────────┘
               │
┌──────────────┴─────────────────────────────────┐
│       DATA PERSISTENCE (Current)               │
├────────────────────────────────────────────────┤
│  Browser localStorage                          │
│  - User Data                                   │
│  - Mood Entries                                │
│  - Forum Posts                                 │
│  - Preferences                                 │
└──────────────┬─────────────────────────────────┘
               │
┌──────────────┴─────────────────────────────────┐
│      FUTURE: BACKEND INTEGRATION               │
├────────────────────────────────────────────────┤
│  Supabase / Node.js + Express                  │
│  ├─ PostgreSQL Database                        │
│  ├─ Authentication API                         │
│  ├─ Real-time Subscriptions                    │
│  └─ File Storage                               │
└────────────────────────────────────────────────┘
```

---

## Module Interaction Diagram

```
                    ┌──────────────┐
                    │   USER APP   │
                    └──────┬───────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
         ▼                 ▼                 ▼
    ┌─────────┐      ┌─────────┐      ┌─────────┐
    │  AUTH   │      │  MOOD   │      │ STRESS  │
    │ MODULE  │      │ TRACKER │      │ RELIEF  │
    └────┬────┘      └────┬────┘      └────┬────┘
         │                │                 │
         │                ▼                 │
         │          ┌──────────┐            │
         │          │ RECHARTS │            │
         │          │  Charts  │            │
         │          └──────────┘            │
         │                                  │
         ▼                 ▼                ▼
    ┌──────────────────────────────────────────┐
    │         SHARED SERVICES                  │
    │  - localStorage Access                   │
    │  - Date/Time Utilities                   │
    │  - Validation Functions                  │
    └──────────┬───────────────────────────────┘
               │
         ┌─────┼─────┐
         │     │     │
         ▼     ▼     ▼
    ┌────────────────────────┐
    │  CHATBOT  │ FORUM │ EMERGENCY │
    └────────────────────────┘
```

---

## Security & Privacy Flow

```
User Data Input
      │
      ▼
┌──────────────┐
│  Validation  │
│  - Email     │
│  - Password  │
│  - Content   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Sanitization │
│ - XSS Check  │
│ - SQL Safe   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Anonymous   │
│   Option     │
│  (Forum)     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Storage    │
│ (Encrypted)  │
└──────┬───────┘
       │
       ▼
  Secure Access
```

---

**Note:** These diagrams are simplified representations for presentation purposes. For detailed technical implementation, refer to the source code and main documentation.
