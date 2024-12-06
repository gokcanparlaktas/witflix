import { defineConfig } from "vite";

export default defineConfig({
  base: "/", // Eğer başka bir dizinde barındırıyorsanız, base yolunu buraya koyabilirsiniz

  build: {
    outDir: "dist", // 'dist' klasörüne çıkış yapmasını sağlıyoruz
  },

  server: {
    open: true, // Sunucu başlatıldığında tarayıcıyı otomatik olarak açar
  },
});
