// vite.config.js
import { defineConfig } from "file:///C:/Users/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD/dev/demand-forecast-frontend/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD/dev/demand-forecast-frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    strictPort: true,
    port: 5173
  },
  optimizeDeps: {
    exclude: ["js-big-decimal"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxcdTA0MUFcdTA0M0VcdTA0M0RcdTA0NDFcdTA0NDJcdTA0MzBcdTA0M0RcdTA0NDJcdTA0MzhcdTA0M0RcXFxcZGV2XFxcXGRlbWFuZC1mb3JlY2FzdC1mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcXHUwNDFBXHUwNDNFXHUwNDNEXHUwNDQxXHUwNDQyXHUwNDMwXHUwNDNEXHUwNDQyXHUwNDM4XHUwNDNEXFxcXGRldlxcXFxkZW1hbmQtZm9yZWNhc3QtZnJvbnRlbmRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLyVEMCU5QSVEMCVCRSVEMCVCRCVEMSU4MSVEMSU4MiVEMCVCMCVEMCVCRCVEMSU4MiVEMCVCOCVEMCVCRC9kZXYvZGVtYW5kLWZvcmVjYXN0LWZyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICB3YXRjaDoge1xyXG4gICAgICB1c2VQb2xsaW5nOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGhvc3Q6IHRydWUsXHJcbiAgICBzdHJpY3RQb3J0OiB0cnVlLFxyXG4gICAgcG9ydDogNTE3M1xyXG4gIH0sXHJcbiAgb3B0aW1pemVEZXBzOiB7XHJcbiAgICBleGNsdWRlOiBbJ2pzLWJpZy1kZWNpbWFsJ11cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFgsU0FBUyxvQkFBb0I7QUFDM1osT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0EsTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLElBQ1osTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxnQkFBZ0I7QUFBQSxFQUM1QjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
