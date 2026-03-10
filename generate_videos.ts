import { GoogleGenAI } from "@google/genai";

async function generateProjectVideos() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  console.log("Generating Lumina video...");
  const luminaOp = await ai.models.generateVideos({
    model: 'veo-3.1-fast-generate-preview',
    prompt: "A high-end, 3D 'Exploded View' render of a futuristic AI Dashboard called 'Lumina'. The UI is deconstructed into floating layers at a 45-degree isometric tilt. Layers include a navigation sidebar, main analytics charts, and action buttons, all floating at different Z-axis heights with soft, realistic drop shadows. Sleek glassmorphism effect on all UI cards. Deep space aesthetic with a pure black #000000 background. High-fidelity rendering with global illumination. 5-second seamless loop with a subtle 15-degree camera orbit and gentle breathing animation of the layers.",
    config: {
      numberOfVideos: 1,
      resolution: '1080p',
      aspectRatio: '16:9'
    }
  });

  console.log("Generating Vortex video...");
  const vortexOp = await ai.models.generateVideos({
    model: 'veo-3.1-fast-generate-preview',
    prompt: "A high-end, 3D 'Exploded View' render of a luxury e-commerce site called 'Vortex'. The UI is deconstructed into floating layers at a 45-degree isometric tilt. Layers include a product grid and checkout components floating above the main site background. Sleek glassmorphism effect on all UI cards. Deep space aesthetic with a pure black #000000 background. High-fidelity rendering with global illumination. 5-second seamless loop with a subtle 15-degree camera orbit and gentle breathing animation of the layers.",
    config: {
      numberOfVideos: 1,
      resolution: '1080p',
      aspectRatio: '16:9'
    }
  });

  return { luminaOp, vortexOp };
}

// This is a script to be run once to get the URLs
// I will poll them manually in my thought process or via multiple steps if needed.
