// export const templates = [
//   {
//     id: "blank",
//     label: "Blank Document",
//     imageUrl: "/blank-document.svg",
//     },
//   {
//     id: "business_letter",
//     label: "Business Letter",
//     imageUrl: "/business-letter.svg",
//   },
//   {
//     id: "cover_letter",
//     label: "Cover Letter",
//     imageUrl: "/cover-letter.svg",
//   },
//   {
//     id: "letter",
//     label: "Letter",
//     imageUrl: "/letter.svg",
//   },
//   {
//     id: "project_proposal",
//     label: "Project Proposal",
//     imageUrl: "/project-proposal.svg",
//   },
//   {
//     id: "software_proposal",
//     label: "Software Proposal",
//     imageUrl: "/software-proposal.svg",
//   },
//   {
//     id: "resume",
//     label: "Resume",
//     imageUrl: "/resume.svg",
//   },
// ];

export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "business_letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `<p><strong>[Your Name]</strong></p>
<p>[Your Address]</p>
<p>[City, State ZIP Code]</p>
<p>[Email Address]</p>
<p>[Phone Number]</p>
<p>[Date]</p>
<p></p>
<p><strong>[Recipient Name]</strong></p>
<p>[Title]</p>
<p>[Company Name]</p>
<p>[Address]</p>
<p>[City, State ZIP Code]</p>
<p></p>
<p>Dear [Recipient Name],</p>
<p></p>
<p>I am writing to [state the purpose of your letter]. [Provide context and relevant details about your business matter].</p>
<p></p>
<p>[Second paragraph: Elaborate on your main points, provide supporting information, and explain any relevant background].</p>
<p></p>
<p>[Third paragraph: Discuss next steps, propose solutions, or make your request clear].</p>
<p></p>
<p>Thank you for your time and consideration. I look forward to [hearing from you/discussing this matter further/your response].</p>
<p></p>
<p>Sincerely,</p>
<p></p>
<p>[Your Signature]</p>
<p>[Your Typed Name]</p>
<p>[Your Title]</p>`,
  },
  {
    id: "cover_letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `<p><strong>[Your Name]</strong></p>
<p>[Your Address]</p>
<p>[City, State ZIP Code]</p>
<p>[Email Address]</p>
<p>[Phone Number]</p>
<p>[Date]</p>
<p></p>
<p><strong>[Hiring Manager Name]</strong></p>
<p>[Company Name]</p>
<p>[Company Address]</p>
<p>[City, State ZIP Code]</p>
<p></p>
<p>Dear [Hiring Manager Name],</p>
<p></p>
<p>I am writing to express my strong interest in the [Position Title] position at [Company Name]. With my background in [relevant field/industry] and [X years] of experience in [relevant skills], I am confident I would be a valuable addition to your team.</p>
<p></p>
<p>In my current role at [Current Company], I have [describe key achievement or responsibility]. This experience has equipped me with [relevant skills] that directly align with the requirements outlined in your job posting. Specifically, I have [mention 2-3 relevant accomplishments with metrics if possible].</p>
<p></p>
<p>What particularly excites me about [Company Name] is [mention something specific about the company - their mission, culture, recent achievement, or project]. I am impressed by [specific detail] and would be thrilled to contribute to [specific goal or initiative].</p>
<p></p>
<p>I am eager to bring my expertise in [relevant skills] to your team and would welcome the opportunity to discuss how my background and skills would benefit [Company Name]. Thank you for considering my application.</p>
<p></p>
<p>Sincerely,</p>
<p></p>
<p>[Your Name]</p>`,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `<p><strong>[Your Name]</strong></p>
<p>[Your Address]</p>
<p>[City, State ZIP Code]</p>
<p>[Date]</p>
<p></p>
<p>Dear [Recipient Name],</p>
<p></p>
<p>I hope this letter finds you well. I am writing to [state the purpose of your letter].</p>
<p></p>
<p>[Main body paragraph: Provide details, context, or information relevant to your purpose].</p>
<p></p>
<p>[Additional paragraph: Continue your message with any additional points or information].</p>
<p></p>
<p>[Closing paragraph: Summarize your message and include any closing thoughts or next steps].</p>
<p></p>
<p>Thank you for your time and attention.</p>
<p></p>
<p>Warm regards,</p>
<p></p>
<p>[Your Name]</p>`,
  },
  {
    id: "project_proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `<h1><strong>Project Proposal: [Project Name]</strong></h1>
<p></p>
<h2><strong>Executive Summary</strong></h2>
<p>[Provide a brief overview of the project, its objectives, and expected outcomes in 2-3 sentences].</p>
<p></p>
<h2><strong>Project Overview</strong></h2>
<p><strong>Project Name:</strong> [Project Name]</p>
<p><strong>Prepared By:</strong> [Your Name]</p>
<p><strong>Date:</strong> [Date]</p>
<p><strong>Client/Stakeholder:</strong> [Client Name]</p>
<p></p>
<h2><strong>Problem Statement</strong></h2>
<p>[Describe the problem or opportunity that this project addresses. Be specific about the current situation and why action is needed].</p>
<p></p>
<h2><strong>Project Objectives</strong></h2>
<ul>
<li><p>[Objective 1: Clear, measurable goal]</p></li>
<li><p>[Objective 2: Clear, measurable goal]</p></li>
<li><p>[Objective 3: Clear, measurable goal]</p></li>
</ul>
<p></p>
<h2><strong>Proposed Solution</strong></h2>
<p>[Describe your proposed approach to solving the problem. Include methodology, strategies, and key activities].</p>
<p></p>
<h2><strong>Deliverables</strong></h2>
<ul>
<li><p>[Deliverable 1]</p></li>
<li><p>[Deliverable 2]</p></li>
<li><p>[Deliverable 3]</p></li>
</ul>
<p></p>
<h2><strong>Timeline</strong></h2>
<p><strong>Phase 1:</strong> [Duration] - [Key activities]</p>
<p><strong>Phase 2:</strong> [Duration] - [Key activities]</p>
<p><strong>Phase 3:</strong> [Duration] - [Key activities]</p>
<p></p>
<h2><strong>Budget</strong></h2>
<p><strong>Total Estimated Cost:</strong> $[Amount]</p>
<p>[Include breakdown of major cost categories if relevant]</p>
<p></p>
<h2><strong>Success Metrics</strong></h2>
<p>[Define how success will be measured. Include specific KPIs or metrics].</p>
<p></p>
<h2><strong>Conclusion</strong></h2>
<p>[Summarize the key benefits and value of implementing this project. Include a call to action].</p>`,
  },
  {
    id: "software_proposal",
    label: "Software Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `<h1><strong>Software Development Proposal</strong></h1>
<h2><strong>[Project Name]</strong></h2>
<p></p>
<h2><strong>Executive Summary</strong></h2>
<p>[Brief overview of the software solution, its purpose, and key benefits].</p>
<p></p>
<h2><strong>Project Information</strong></h2>
<p><strong>Project Name:</strong> [Software Name]</p>
<p><strong>Prepared By:</strong> [Your Name/Company]</p>
<p><strong>Date:</strong> [Date]</p>
<p><strong>Client:</strong> [Client Name]</p>
<p></p>
<h2><strong>Current Situation</strong></h2>
<p>[Describe the client's current challenges, pain points, or limitations with existing systems].</p>
<p></p>
<h2><strong>Proposed Solution</strong></h2>
<p>[Describe the software solution and how it addresses the client's needs. Include key features and functionality].</p>
<p></p>
<h2><strong>Key Features</strong></h2>
<ul>
<li><p><strong>[Feature 1]:</strong> [Description]</p></li>
<li><p><strong>[Feature 2]:</strong> [Description]</p></li>
<li><p><strong>[Feature 3]:</strong> [Description]</p></li>
<li><p><strong>[Feature 4]:</strong> [Description]</p></li>
</ul>
<p></p>
<h2><strong>Technical Architecture</strong></h2>
<p><strong>Frontend:</strong> [Technologies]</p>
<p><strong>Backend:</strong> [Technologies]</p>
<p><strong>Database:</strong> [Technologies]</p>
<p><strong>Hosting/Infrastructure:</strong> [Platform]</p>
<p></p>
<h2><strong>Development Timeline</strong></h2>
<p><strong>Phase 1 - Planning &amp; Design:</strong> [Duration]</p>
<ul>
<li><p>Requirements gathering</p></li>
<li><p>UI/UX design</p></li>
<li><p>Technical architecture</p></li>
</ul>
<p></p>
<p><strong>Phase 2 - Development:</strong> [Duration]</p>
<ul>
<li><p>Core functionality implementation</p></li>
<li><p>Feature development</p></li>
<li><p>Integration with existing systems</p></li>
</ul>
<p></p>
<p><strong>Phase 3 - Testing &amp; Deployment:</strong> [Duration]</p>
<ul>
<li><p>Quality assurance testing</p></li>
<li><p>User acceptance testing</p></li>
<li><p>Deployment and launch</p></li>
</ul>
<p></p>
<h2><strong>Deliverables</strong></h2>
<ul>
<li><p>Fully functional web/mobile application</p></li>
<li><p>Source code and documentation</p></li>
<li><p>User training materials</p></li>
<li><p>Technical documentation</p></li>
<li><p>[X] months of post-launch support</p></li>
</ul>
<p></p>
<h2><strong>Investment</strong></h2>
<p><strong>Development Cost:</strong> $[Amount]</p>
<p><strong>Maintenance (Annual):</strong> $[Amount]</p>
<p></p>
<h2><strong>Expected Benefits</strong></h2>
<ul>
<li><p>[Benefit 1: e.g., Increased efficiency by X%]</p></li>
<li><p>[Benefit 2: e.g., Cost savings of $X annually]</p></li>
<li><p>[Benefit 3: e.g., Improved user experience]</p></li>
</ul>
<p></p>
<h2><strong>Next Steps</strong></h2>
<p>[Outline the process for moving forward with the project].</p>`,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `<h1><strong>[Your Full Name]</strong></h1>
<p>[Your Address] | [Phone Number] | [Email Address] | [LinkedIn Profile] | [Portfolio Website]</p>
<p></p>
<h2><strong>Professional Summary</strong></h2>
<p>[2-3 sentences highlighting your experience, key skills, and career objectives. Focus on what makes you unique and valuable to potential employers].</p>
<p></p>
<h2><strong>Work Experience</strong></h2>
<p></p>
<p><strong>[Job Title]</strong></p>
<p>[Company Name] | [City, State] | [Start Date] - [End Date]</p>
<ul>
<li><p>[Achievement or responsibility with measurable results]</p></li>
<li><p>[Achievement or responsibility with measurable results]</p></li>
<li><p>[Achievement or responsibility with measurable results]</p></li>
</ul>
<p></p>
<p><strong>[Job Title]</strong></p>
<p>[Company Name] | [City, State] | [Start Date] - [End Date]</p>
<ul>
<li><p>[Achievement or responsibility with measurable results]</p></li>
<li><p>[Achievement or responsibility with measurable results]</p></li>
<li><p>[Achievement or responsibility with measurable results]</p></li>
</ul>
<p></p>
<h2><strong>Education</strong></h2>
<p><strong>[Degree Name]</strong></p>
<p>[University Name] | [City, State] | [Graduation Year]</p>
<p>[Relevant coursework, honors, or GPA if strong]</p>
<p></p>
<h2><strong>Skills</strong></h2>
<p><strong>Technical Skills:</strong> [Skill 1, Skill 2, Skill 3, Skill 4]</p>
<p><strong>Soft Skills:</strong> [Skill 1, Skill 2, Skill 3, Skill 4]</p>
<p><strong>Languages:</strong> [Language 1 (Proficiency), Language 2 (Proficiency)]</p>
<p></p>
<h2><strong>Certifications</strong></h2>
<ul>
<li><p>[Certification Name] - [Issuing Organization] ([Year])</p></li>
<li><p>[Certification Name] - [Issuing Organization] ([Year])</p></li>
</ul>
<p></p>
<h2><strong>Projects</strong></h2>
<p><strong>[Project Name]</strong></p>
<p>[Brief description of the project, your role, and the outcome or impact]</p>
<p></p>
<p><strong>[Project Name]</strong></p>
<p>[Brief description of the project, your role, and the outcome or impact]</p>`,
  },
];
