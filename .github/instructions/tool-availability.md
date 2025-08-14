# Tool Availability and Failure Handling

## Figma MCP Tools Status

### Current Status
- `Figma-Dev-Mode-MCP-get_variable_defs`: ❌ UNAVAILABLE (HTTP 404)
- `Figma-Dev-Mode-MCP-get_code`: ❌ UNAVAILABLE (HTTP 404) 
- `Figma-Dev-Mode-MCP-get_image`: ❌ UNAVAILABLE (HTTP 404)

### Fallback Strategies

When Figma tools are unavailable:

1. **Document the failure** in PR/comments
2. **Search existing codebase** for design tokens and patterns
3. **Use GitHub MCP tools** to research MUI documentation:
   ```
   github-mcp-server-search_code: repo:mui/material-ui path:docs/data/material/components
   ```
4. **Examine existing implementations** in `/app/ui/design-tokens/` and `/app/ui/theme/overrides/`
5. **Note tool unavailability** explicitly when providing implementation

## GitHub MCP Tools

### Effective Usage
- Search MUI repo for component documentation
- Find existing patterns in current codebase
- Research component capabilities and limitations

### Example Searches
```
repo:mui/material-ui path:docs/data/material/components/chips filename:chips.md
repo:mui/material-ui path:packages/mui-material/src/Chip
```

## Playwright Browser Tools

### For Screenshots
- Use `playwright-browser_navigate` to Storybook
- Use `playwright-browser_take_screenshot` to capture component demos
- Attach actual screenshots instead of referencing non-existent ones

## Learning and Improvement

### Failure Documentation
When tools fail:
1. Note exact error message
2. Document which tools were attempted  
3. Explain fallback approach used
4. Update tool status in this file

### Continuous Learning
- Document patterns that work well
- Note when approaches fail and why
- Build library of effective tool combinations