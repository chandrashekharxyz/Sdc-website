
import React, { useEffect, useRef } from 'react';

const ParticleSystem = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle properties
    const particles = [];
    const particleCount = 100;
    const particleSize = 3;
    const particleSpeed = 0.5;
    const particleColor = 'rgba(255, 107, 53, 0.8)'; // SDC Orange with transparency

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * particleSize + 1,
        speedX: (Math.random() - 0.5) * particleSpeed,
        speedY: (Math.random() - 0.5) * particleSpeed,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = particleColor;

      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap particles around edges
        if (particle.x < 0) { particle.x = canvas.width; }
        if (particle.x > canvas.width) { particle.x = 0; }
        if (Math.random() < 0.005) { // 0.5% chance to change direction
          particle.speedX = (Math.random() - 0.5) * particleSpeed;
          particle.speedY = (Math.random() - 0.5) * particleSpeed;
        }
        if (particle.y < 0) { particle.y = canvas.height; }
        if (particle.y > canvas.height) { particle.y = 0; }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas absolute top-0 left-0 w-full h-full -z-10"
    ></canvas>
  );
};

export default ParticleSystem;


