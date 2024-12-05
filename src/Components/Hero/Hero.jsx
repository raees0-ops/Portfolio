import React from 'react'
import './Hero.css'
const Hero = () => {
    return (
        <>
            <section className="hero-container">
                <div className="hero-content">
                    <h2>Code, Creativity, and Problem-Solving in Every Project</h2>
                    <p>Passionate software developer dedicated to crafting innovative, scalable solutions. I specialize in creating clean, efficient applications that solve real-world challenges and enhance user experiences.</p>
                </div>

                <div className="hero-img">
                    <div>
                        <div className="tech-icon">
                            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.png?f=webp" alt="" srcset="" />
                        </div>
                        <img src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/1fccc78d-e89a-4ba3-9a2b-6fca17acc699/4bbd6a5d-9d3d-498d-896c-9c2f474cf50f.png" alt="" srcset="" />
                    </div>

                    <div>
                        <div className="tech-icon">
                            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-java-3d-icon-download-in-png-blend-fbx-gltf-file-formats--object-oriented-jvm-logo-applications-coding-lang-pack-logos-icons-7578017.png?f=webp" alt="" srcset="" />
                        </div>
                        <div className="tech-icon">
                            <img src="https://media.licdn.com/dms/image/D4D12AQEICFOK-z0akA/article-cover_image-shrink_720_1280/0/1656604745399?e=2147483647&v=beta&t=-Fjm5QYiJOJNzJ89xGv9VYPNxMNxqIX4jscMWXB6VaM" alt="" srcset="" />
                        </div>
                        <div className="tech-icon">
                            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-vue-angular-coding-lang-pack-logos-icons-7577991.png?f=webp" alt="" srcset="" />
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Hero