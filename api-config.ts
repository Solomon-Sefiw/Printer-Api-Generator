const config: any = {
    schemaFile: "http://localhost:5023/swagger/v1/swagger.json", // Swagger URL
    apiFile: "./src/services/emptySplitApi.ts",                  // Base API file
    apiImport: "emptySplitApi",                                  // Import from base API
    outputFile: "./src/services/AIDAApi.ts",                     // Output API file
    exportName: "AIDAApi",                                       // Exported API name
    hooks: { queries: true, lazyQueries: true, mutations: true }, // Generate hooks
  };
  
  export default config;
  