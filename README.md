# Dance App

Welcome to the **Dance App**! This app helps users sign up for and manage their dance activities, with features for both regular users and instructors. The app follows a **3-tier architecture** with a separate **frontend**, **backend API**, and **database layer**.

## Features

### **Welcome Screen**
- This screen appears every time the app is opened.
- A button at the bottom animates from invisible to visible after 1500ms.
- The button leads to the **Activities** page.

### **Activities Page**
- Displays a list of all available activities.
- Users can swipe vertically through the list of activities.
- The heading and the bottom drawer menu are static.
- Users can click on an activity card to view more details about the activity.

### **Activity Details**
- This page shows detailed information for a specific activity:
  - **Activity Name**
  - **Day of the Week**
  - **Time**
  - **Description**
  - **Age Limit**
- A button allows users to sign up for the activity.
  - If the user is already signed up, the button text changes to "Leave," and they can leave the activity.
  - If the user is not logged in, the button is not shown.
- Users cannot sign up for the same activity multiple times.
- Users cannot sign up for activities that occur on the same day of the week.
- Users cannot sign up for an activity if they do not meet the age limit.

### **Calendar (Default)**
- Regular users can see an overview of the activities they are signed up for.
- Instructors will see a list of activities they are an instructor for.
- Clicking on an activity will show its details for regular users.
- Instructors will see a **Calendar, Group Overview** if they click on an activity.

### **Calendar, Group Overview**
- Available only to instructors.
- Displays a list of sign-ups for an activity (first name and last name).

### **Search Page**
- Users can search for available activities.
- Results are shown only after the user starts typing in the search field.
- If no results are found, a message "No activities found. Try searching for something else." is displayed.

### **Common Features**
- A drawer menu is present at the bottom of the **Activities**, **Search**, **Activity Details**, **Default Calendar**, and **Group Overview Calendar** pages.
- The drawer menu includes:
  - **Home**: Leads to the Activities page.
  - **Search**: Leads to the Search page.
  - **Calendar**: Leads to the Calendar page.
- All forms in the app are validated and provide appropriate responses.

## 3-Tier Architecture

This app follows a **3-tier architecture** consisting of:

1. **Frontend (Client-side)**:  
   The user interface is built with **Next.js** and **Tailwind CSS**. The frontend runs on **localhost:3000**.

2. **Backend API (Server-side)**:  
   The backend API handles all business logic, database interactions, and serves data to the frontend. It runs on **localhost:4000**.

3. **Database Layer**:  
   The app connects to a database (PostgreSQL) to manage and store user and activity data. 

## Technologies Used
- **Frontend**: Next.js, CSS Modules, Tailwind CSS
- **Backend API**: Node.js (or your preferred backend framework)
- **Database**: (Specify your database here, e.g., MongoDB, PostgreSQL, etc.)
- **State Management**: React Context API
- **Others**: JavaScript, HTML

## Installation & Setup

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shoaibalirts/Dance-App-NextJS.git
