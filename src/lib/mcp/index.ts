import { defineMcp } from "@lovable.dev/mcp-js";
import listFeaturesTool from "./tools/list-features";
import listSolutionsTool from "./tools/list-solutions";
import requestDemoTool from "./tools/request-demo";

export default defineMcp({
  name: "smart-campuses-mcp",
  title: "Smart Campuses MCP",
  version: "0.1.0",
  instructions:
    "Tools for exploring Smart Campuses ERP & LMS. Use `list_features` to browse product modules, `list_solutions` to see institution-type offerings, and `request_demo_link` to get the demo scheduling URL.",
  tools: [listFeaturesTool, listSolutionsTool, requestDemoTool],
});
