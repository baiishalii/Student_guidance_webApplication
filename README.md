Student Guidance Web Application
A simple and structured web application built using Java (Spring Boot) and MySQL, designed to guide B.Tech students by providing career roadmaps, required technologies, and role-based learning paths. The goal of this project is to help students understand what skills they need for different tech roles and how to prepare for placements effectively.

🚀 Features


Role-based career roadmaps (Developer, Data Analyst, Cloud, etc.)


Technology stack guidance for each role


Clean and responsive frontend using HTML + CSS


REST APIs built using Spring Boot


Centralized MySQL database for storing all roadmaps


Admin capability to manage roadmaps (add/update/delete)



🛠 Tech Stack
Backend: Java, Spring Boot
Frontend: HTML, CSS
Database: MySQL
Build Tool: Maven

📂 Project Structure
Student-Guidance-WebApp/
 ├── src/main/java/.../controller
 ├── src/main/java/.../service
 ├── src/main/java/.../repository
 ├── src/main/java/.../model
 ├── src/main/resources/templates (HTML)
 ├── src/main/resources/static/css (CSS)
 ├── src/main/resources/application.properties
 └── pom.xml


⚙️ How to Run the Project
1️⃣ Clone the Repository
git clone <your-repo-link>
cd Student-Guidance-WebApp

2️⃣ Configure MySQL
Create a database:
CREATE DATABASE student_guidance;

Update application.properties:
spring.datasource.url=jdbc:mysql://localhost:3306/student_guidance
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update

3️⃣ Run the Application
mvn spring-boot:run

Access the app at:
👉 http://localhost:8080

📘 Usage


Browse available roles


View roadmap + required technologies


Expand skills for detailed steps


Use the paths to plan your preparation



👩‍💻 Developer
Baishali Behera
Role: Frontend + Backend Integration (HTML/CSS + Spring Boot + MySQL)

If you want, I can also generate:
✔ API documentation
✔ SQL schema
✔ Roadmap JSON sample
✔ A GitHub-ready version with badges, screenshots, etc.
