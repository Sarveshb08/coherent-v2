# Copilot Instructions for Repository

## Overview
This repository follows a **planning-first approach** for all development work. Copilot must provide detailed implementation plans before writing any code.

## Core Workflow Requirements

### 1. Planning Phase (MANDATORY)
When assigned to any issue, Copilot MUST:
- **NEVER start coding immediately**
- **ALWAYS provide a detailed implementation plan first**
- Wait for explicit approval before proceeding to implementation

### 2. Implementation Plan Structure
Every plan must include:

#### Technical Analysis
- Problem statement analysis
- Current codebase assessment
- Dependencies and affected components
- Potential risks and challenges

#### Proposed Solution
- High-level architecture approach
- Detailed step-by-step implementation plan
- File changes breakdown (which files will be created/modified/deleted)
- Code structure and organization

### 3. Approval Process
- Use the comment: "📋 **Implementation Plan Ready for Review**"
- Wait for explicit approval comment before proceeding
- Address any feedback or requested changes to the plan

### 4. Implementation Phase
Only proceed with coding after receiving approval comment 

## Code Quality Standards

### Architecture Principles
- Follow existing codebase patterns and conventions
- Maintain separation of concerns
- Implement proper error handling
- Ensure thread safety where applicable
- Follow SOLID principles

### Code Style
- Use consistent naming conventions
- Add comprehensive comments for complex logic
- Follow existing indentation and formatting
- Include proper JSDoc/documentation comments
- Maintain existing import/export patterns

## Security Guidelines
- Never hardcode sensitive information
- Follow secure coding practices
- Validate all inputs
- Use parameterized queries for database operations
- Implement proper authentication/authorization checks

## Performance Considerations
- Optimize for performance in critical paths
- Consider memory usage and garbage collection
- Implement efficient algorithms
- Use appropriate data structures
- Consider caching strategies where beneficial

## Error Handling
- Implement comprehensive error handling
- Use appropriate error types and messages
- Log errors appropriately
- Provide meaningful user feedback
- Handle edge cases gracefully

## Repository-Specific Guidelines

### Package Manager
- **ALWAYS use pnpm** for package management
- Never use npm or yarn in this repository
- Use `pnpm install`, `pnpm add`, `pnpm remove` for dependency management
- Use `pnpm run <script>` or `pnpm <script>` for running scripts
- Respect the locked versions in `pnpm-lock.yaml`

### Technology Stack Considerations
- Respect existing technology choices
- Suggest alternatives only when clearly beneficial
- Maintain consistency with current stack
- Consider team expertise and preferences

## Escalation Process
If unclear about requirements:
1. Ask clarifying questions in issue comments
2. Wait for clarification before proceeding
3. Document assumptions if proceeding with incomplete information

## Review and Feedback Integration
- Address all review comments thoroughly
- Explain reasoning for implementation choices
- Be open to alternative approaches
- Update plans based on feedback
- Maintain collaborative approach

---

## Example Plan Template

```markdown
## 📋 Implementation Plan for Issue #[NUMBER]

### Problem Analysis
[Detailed analysis of the issue]

### Proposed Solution
[High-level approach]

### Implementation Steps
1. [Step 1 with file changes]
2. [Step 2 with file changes]
3. [etc.]


### Impact Assessment
[Risks, breaking changes, performance impact]

📋 **Implementation Plan Ready for Review**
```