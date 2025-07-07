import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Remplacement de loadFull par loadSlim

const Particle = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine); // Chargement de la version slim
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    return (
        <Particles
            className="w-full h-full absolute translate-z-0"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false },
                background: {
                    color: { value: "transparent" },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: { enable: true, mode: "push" },
                        onHover: { enable: true, mode: "repulse" },
                        resize: true,
                    },
                    modes: {
                        push: { quantity: 4 },
                        repulse: { distance: 200, duration: 0.3 },
                    },
                },
                particles: {
                    color: { value: "#be1734" },
                    links: {
                        color: "#be1734",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "bottom",
                        enable: true,
                        outModes: { default: "bounce" },
                        random: false,
                        speed: 1.6,
                        straight: false,
                    },
                    number: {
                        density: { enable: true, area: 800 },
                        value: 40,
                    },
                    opacity: { value: 0.5 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 5 } },
                },
                detectRetina: true,
            }}
        />
    );
};

export default Particle;
