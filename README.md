# SpendWise 💰

## Project Description
SpendWise is an interactive, personal budget and expense tracking web application designed to help individuals monitor their financial health. It enables users to dynamically add expense records, manage multiple financial entries, process data calculation flows, and view instant feedback on their spending habits via a clean dashboard interface. 

## Technologies Used
* **HTML5:** Structuring the dashboard layout and form components.
* **CSS3:** Styling user interface elements for a responsive dashboard design.
* **JavaScript (ES6):** Powering core interactive application logic, handling event listeners, updating the DOM dynamically, and managing stored data structures.
* **Git & GitHub:** Version control management and repository hosting.
* **Netlify:** Continuous deployment and cloud hosting infrastructure.

## GitHub Repository Information
* **Repository Link:** [https://github.com/sadiki-amuri/spendwise) 
* **Branch:** main

## Live Netlify Website URL
* **Live Site Link:**https://sadiki-spendwise.netlify.app/**

## Deployment Process Summary
1. **Repository Setup:** Initialized a local Git repository, committed all SpendWise project files (`index.html`, `style.css`, `script.js`), and pushed them to a public GitHub repository.
2. **Netlify Connection:** Logged into Netlify, linked my GitHub account, and selected the SpendWise project repository for deployment.
3. **Build Settings:** Configured the deployment branch to `main` and left build parameters default since it is a static web application.
4. **Continuous Integration Verification:** Modified a file locally, pushed changes back up to the public GitHub repository, and verified that Netlify triggered and completed an automated redeployment automatically.

## Challenges Encountered During Deployment
* **Relative File Path Issues:** Initially, script and style links utilized system-absolute paths which caused broken layouts upon initial cloud deployment. Resolved by switching all asset paths to relative paths.
* **Form Submission Default Behavior:** Faced an issue where submitting the entry form reloaded the page immediately and wiped current dashboard variables. Handled by implementing `event.preventDefault()` inside JavaScript handlers.

## Lessons Learned
* **Continuous Integration:** Gained a practical understanding of CI/CD pipelines by observing how code commits seamlessly trigger live netlify production updates.
* **DOM Continuity:** Learned how critical it is to cleanly decouple layout assets from underlying application script engines to prevent deployment pipeline failures.

