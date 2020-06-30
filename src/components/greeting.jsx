import React, {Component} from 'react';
import './greeting.scss';
import ParticlesBg from "particles-bg";

class Greeting extends Component {
    render() {
        let config = {
            num: [2, 3],
            rps: 0.1,
            radius: [5, 40],
            life: [1.5, 3],
            v: [0.2, 0.5],
            tha: [-40, 40],
            alpha: [0.6, 0],
            scale: [.1, 0.4],
            position: "all",
            color: ["#EEFFFB"],
            cross: "dead",
            // emitter: "follow",
            random: 15
        };

        if (Math.random() > 0.85) {
            config = Object.assign(config, {
                onParticleUpdate: (ctx, particle) => {
                    ctx.beginPath();
                    ctx.rect(
                        particle.p.x,
                        particle.p.y,
                        particle.radius * 2,
                        particle.radius * 2
                    );
                    ctx.fillStyle = particle.color;
                    ctx.fill();
                    ctx.closePath();
                }
            });
        }
        return (
            <React.Fragment>
                <div className="flex-container">
                    <p id="intro">Hi, my name is</p>
                    <p id="name">Calvin Zheng.</p>
                    <p className="brief-intro">I’m a computer science junior at the University of Michigan in Ann Arbor, MI,
                        interested in software engineering, web development, machine learning, and
                        natural language processing.</p>
                </div>
                <ParticlesBg type="custom" config={config} bg={true} />
            </React.Fragment>
        )
    }
}

export default Greeting;
