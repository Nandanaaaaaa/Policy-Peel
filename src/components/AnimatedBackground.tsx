import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | undefined>(undefined);
  const gradientRef = useRef<CanvasGradient | null>(null);

  // Dark colors palette
  const darkColors = [
    '#1e3a8a', // Dark blue
    '#dc2626', // Red
    '#7c3aed', // Violet
    '#6b21a8', // Purple
    '#db2777', // Pink
    '#065f46', // Dark green
    '#4c1d95', // Deep purple
    '#831843', // Dark pink
    '#1e40af', // Royal blue
    '#b91c1c', // Dark red
    '#5b21b6', // Rich purple
    '#059669', // Emerald green
    '#9d174d', // Ruby
    '#1e3a8a', // Navy blue
    '#dc2626', // Crimson
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to be full viewport size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Create a darker gradient background
      gradientRef.current = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradientRef.current.addColorStop(0, 'rgba(15, 23, 42, 0.95)'); // Very dark blue
      gradientRef.current.addColorStop(0.5, 'rgba(30, 27, 75, 0.95)'); // Dark indigo
      gradientRef.current.addColorStop(1, 'rgba(76, 29, 149, 0.95)'); // Dark violet
      
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      particles.current = [];
      // Increase particle count significantly
      const particleCount = Math.min(Math.floor(window.innerWidth * 0.15), 250); 
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 2, // Larger particles
          speedX: (Math.random() - 0.5) * 0.5, // Slightly faster
          speedY: (Math.random() - 0.5) * 0.5, // Slightly faster
          opacity: Math.random() * 0.7 + 0.3, // Higher opacity
          color: darkColors[Math.floor(Math.random() * darkColors.length)]
        });
      }
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas || !gradientRef.current) return;
      
      // Fill with gradient background
      ctx.fillStyle = gradientRef.current;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
        
        // Add glow effect to particles
        ctx.shadowBlur = 8;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Draw connections between nearby particles with matching colors
        for (let j = index + 1; j < particles.current.length; j++) {
          const otherParticle = particles.current[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Increase connection distance
          if (distance < 150) { 
            // Brighter connections with higher opacity
            const connectionOpacity = 0.3 * (1 - distance / 150);
            
            // Extract color values without opacity
            const particleColor = particle.color.slice(0, 7);
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `${particleColor}${Math.floor(connectionOpacity * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 1.2; // Thicker lines
            ctx.stroke();
          }
        }
      });
      
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default AnimatedBackground; 