# GitHub Copilot Instructions

## At project start:
1. Create a React + Vite project and install it. Create Layout.jsx and delete App.jsx.

2. Delete App.css.

3. Edit index.css so it only contains general resets.

4. Create Layout.jsx with header, outlet, and footer.

5. Create folders: pages, components, styles, assets, context, utils (all inside src).

6. Create a router.jsx and use createBrowserRouter.



## General guidelines for the code:
 
## Copilot Behavior & Guidelines
- **Prioritize official documentation** over alternative solutions when suggesting code
- Ensure all recommendations align with React, Vite, and ESLint best practices
- Flag deprecated APIs or patterns before implementation
- Review existing code in `src/` before implementing new features
- Match established patterns and styles from current components
- Reuse existing utilities and hooks to avoid duplication
- Suggest code that is modular, maintainable, and adheres to the project's coding standards
 
## Code Style & Structure
- Use functional components with React hooks (useState, useEffect, etc.)
- Use arrow functions for callbacks
- Prefer const over let/var
- Write clear, descriptive variable and function names
- Add comments for complex logic
- Follow consistent indentation (2 spaces)
- Make code modular and reusable
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Extract features to separate components when appropriate
- Make separate files for functions when appropriate and possible
- Create dynamic code for simple reuse throughout the codebase rather than hardcoding when other options are available
 
## HTML & Accessibility
- Use semantic HTML elements (sections, articles over divs)
- Ensure all interactive elements are keyboard accessible
- Provide alt text for images
- Use ARIA roles and attributes where necessary
- Test components with screen readers to ensure usability
- Prefer vanilla forms - do not use form libraries
 
## File Structure & Organization
- Components go in `src/components/` with co-located style and test files
- Styles are co-located with components or in CSS files
- Assets are in `src/assets/`
- Extract schemas into separate files
- Extract loader and action functions to separate files
- Follow the ESLint rules defined in `eslint.config.js`
 
## Performance & Optimization
- Optimize rendering by using React.memo and useCallback where appropriate
- Avoid unnecessary re-renders by managing state effectively
- Lazy load components and assets when possible
- Monitor bundle size and optimize dependencies
- Prefer React Router in data mode
- Use loaders and actions when appropriate
 
## Security Best Practices
- Sanitize user inputs to prevent XSS attacks
- Avoid exposing sensitive information in the codebase
- Keep dependencies up to date to mitigate vulnerabilities
- Use HTTPS for all network requests
- Validate with Zod version 4
 
## Testing & Quality Assurance
- Write test cases for new features
- Use console.log sparingly; prefer proper debugging tools
- Test components with various props and states
- Ensure code follows the established style guidelines
- Check for potential performance issues
- Validate that security best practices are followed
 
## Version Control & Collaboration
- Follow GitHub flow for branching and pull requests
- Use feature branches for new developments and bug fixes
- Write clear, descriptive commit messages
- Review code changes thoroughly before merging
- Resolve merge conflicts promptly and carefully
- Communicate with team members for clarifications or suggestions
- Follow semantic versioning for releases
- Tag releases in Git with appropriate version numbers
 
## Documentation & Communication
- Keep documentation updated with any changes made to the codebase
- Maintain up-to-date documentation in the `docs/` folder
- Document new features and changes in the `CHANGELOG.md`
- Use JSDoc comments for functions and complex logic
- Create README files for new components or modules
- Use clear and concise language in code comments and documentation
- Keep team members informed about significant changes or updates
 
## Code Review Process
- Ensure code follows the established style guidelines
- Verify that new features are well-documented and tested
- Check for potential performance issues
- Confirm that accessibility standards are met
- Validate that security best practices are followed
- Ensure that the code is modular and reusable where appropriate
- Review commit messages for clarity and relevance
- Test the code locally before approving the pull request
- Encourage open discussion during code reviews and team meetings
 
## Deployment & CI/CD
- Ensure the build passes all tests before deployment
- Ensure all code changes trigger CI/CD pipelines
- Monitor build status and address any failures promptly
- Automate testing and linting in the CI/CD process
- Review deployment logs for any issues
- Keep CI/CD configuration files updated
- Monitor the application post-deployment for any issues
- Rollback procedures should be documented and tested
- Update environment variables as needed for different deployment environments
 
## Troubleshooting & Support
- Common issues and their solutions should be documented in the `TROUBLESHOOTING.md` file
- Encourage team members to document new issues and solutions as they arise
- Provide links to relevant Stack Overflow discussions or GitHub issues for complex problems
- Maintain a FAQ section for quick reference on common questions
 
## Project Management & Continuous Improvement
- Use project management tools (e.g., Jira, Trello) to track tasks and progress
- Prioritize tasks based on project deadlines and team capacity
- Regularly update task statuses to reflect current progress
- Conduct sprint planning and retrospectives to improve workflow
- Ensure all team members are aligned on project goals and timelines
- Regularly review and update these instructions based on team feedback
- Encourage team members to suggest improvements
- Conduct periodic code reviews to ensure adherence to guidelines
- Stay informed about updates to React, Vite, and ESLint that may impact the project
- Foster a culture of continuous learning and improvement within the team
 
## Additional Resources
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [ESLint Documentation](https://eslint.org/docs/user-guide/getting-started)