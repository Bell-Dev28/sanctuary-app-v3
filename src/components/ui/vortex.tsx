"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { createNoise3D } from "simplex-noise";

class Particle {
  x: number;
  y: number;
  z: number;
  radius: number;
  speed: number;
  hue: number;
  vx: number;
  vy: number;

  constructor(w: number, h: number, baseRadius: number, rangeRadius: number, baseSpeed: number, rangeSpeed: number, baseHue: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.z = Math.random() * 1000;
    this.radius = baseRadius + Math.random() * rangeRadius;
    this.speed = baseSpeed + Math.random() * rangeSpeed;
    this.hue = baseHue;
    this.vx = 0;
    this.vy = 0;
  }

  update(noise3D: (x: number, y: number, z: number) => number, w: number, h: number) {
    const noise = noise3D(
        (this.x * this.speed) / 1000,
        (this.y * this.speed) / 1000,
        this.z
    ) * Math.PI * 2;

    this.vx = Math.cos(noise) * this.speed;
    this.vy = Math.sin(noise) * this.speed;

    this.x += this.vx;
    this.y += this.vy;

    if (this.x > w || this.x < 0 || this.y > h || this.y < 0) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, 1)`;
    ctx.fill();
    ctx.closePath();
  }
}

export const Vortex = ({
  children,
  className,
  containerClassName,
  particleCount = 700,
  baseHue = 220,
  baseSpeed = 0.0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  backgroundColor = "black",
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlePool = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    // Add the safety check here
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx || !containerRef.current) return;

    const w = containerRef.current.offsetWidth;
    const h = containerRef.current.offsetHeight;
    canvas.width = w;
    canvas.height = h;

    const noise3D = createNoise3D();
    
    particlePool.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlePool.current.push(new Particle(w, h, baseRadius, rangeRadius, baseSpeed, rangeSpeed, baseHue));
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, w, h);

      for (const p of particlePool.current) {
        p.update(noise3D, w, h);
        p.draw(ctx);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [backgroundColor, particleCount, baseHue, baseSpeed, rangeSpeed, baseRadius, rangeRadius]);

  return (
    <div className={cn("relative h-full w-full", containerClassName)} ref={containerRef}>
      <canvas ref={canvasRef} className="absolute h-full w-full"></canvas>
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};