
## Repository-Specific Guidelines

### Package Manager
- **ALWAYS use pnpm** for package management
- Never use npm or yarn in this repository
- Use `pnpm install`, `pnpm add`, `pnpm remove` for dependency management
- Use `pnpm run <script>` or `pnpm <script>` for running scripts
- Respect the locked versions in `pnpm-lock.yaml`

**Requirements**:
- Generate pixel-perfect code matching the Figma design
- Implement ALL variants shown in Figma
- Extract exact colors, fonts, spacing, and dimensions
- NO additional styling beyond what's shown in Figma
- Include all interactive states 
