import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    const disposables: Array<THREE.BufferGeometry | THREE.Material> = [];

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 28;

    const dotCount = 800;
    const dotPositions = new Float32Array(dotCount * 3);
    const dotScale = new Float32Array(dotCount);

    for (let index = 0; index < dotCount; index += 1) {
      dotPositions[index * 3] = (Math.random() - 0.5) * 70;
      dotPositions[index * 3 + 1] = (Math.random() - 0.5) * 55;
      dotPositions[index * 3 + 2] = (Math.random() - 0.5) * 30;
      dotScale[index] = Math.random();
    }

    const dotGeometry = new THREE.BufferGeometry();
    dotGeometry.setAttribute("position", new THREE.BufferAttribute(dotPositions, 3));
    dotGeometry.setAttribute("aScale", new THREE.BufferAttribute(dotScale, 1));

    const dotMaterial = new THREE.ShaderMaterial({
      vertexShader:
        "attribute float aScale; void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);gl_PointSize=aScale*2.0*(250.0/-mv.z);gl_Position=projectionMatrix*mv;}",
      fragmentShader:
        "void main(){float d=distance(gl_PointCoord,vec2(0.5));if(d>0.5)discard;gl_FragColor=vec4(1.0,1.0,1.0,(1.0-d*2.0)*0.18);}",
      transparent: true,
      depthWrite: false,
    });

    disposables.push(dotGeometry, dotMaterial);
    scene.add(new THREE.Points(dotGeometry, dotMaterial));

    const accentCount = 80;
    const accentPositions = new Float32Array(accentCount * 3);

    for (let index = 0; index < accentCount; index += 1) {
      accentPositions[index * 3] = (Math.random() - 0.5) * 60;
      accentPositions[index * 3 + 1] = (Math.random() - 0.5) * 45;
      accentPositions[index * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    const accentGeometry = new THREE.BufferGeometry();
    accentGeometry.setAttribute("position", new THREE.BufferAttribute(accentPositions, 3));

    const accentMaterial = new THREE.PointsMaterial({
      color: 0xe8192c,
      size: 0.08,
      transparent: true,
      opacity: 0.55,
    });

    disposables.push(accentGeometry, accentMaterial);
    scene.add(new THREE.Points(accentGeometry, accentMaterial));

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.025,
    });

    disposables.push(lineMaterial);

    for (let index = 0; index < 20; index += 1) {
      const geometry = new THREE.BufferGeometry();
      const vertices = new Float32Array(6);

      vertices[0] = (Math.random() - 0.5) * 60;
      vertices[1] = (Math.random() - 0.5) * 40;
      vertices[2] = 0;
      vertices[3] = (Math.random() - 0.5) * 60;
      vertices[4] = (Math.random() - 0.5) * 40;
      vertices[5] = 0;

      geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
      scene.add(new THREE.Line(geometry, lineMaterial));
      disposables.push(geometry);
    }

    let pointerX = 0;
    let pointerY = 0;
    let frameId = 0;

    const handleMouseMove = (event: MouseEvent) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      frameId = window.requestAnimationFrame(animate);

      const positions = dotGeometry.attributes.position.array as Float32Array;

      for (let index = 0; index < dotCount; index += 1) {
        positions[index * 3 + 1] += 0.008;

        if (positions[index * 3 + 1] > 27.5) {
          positions[index * 3 + 1] = -27.5;
        }
      }

      dotGeometry.attributes.position.needsUpdate = true;
      camera.position.x += (pointerX * 1.2 - camera.position.x) * 0.025;
      camera.position.y += (pointerY * 0.8 - camera.position.y) * 0.025;
      renderer.render(scene, camera);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      scene.clear();
      disposables.forEach((item) => item.dispose());
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="three-canvas" />;
}
