
const Services = () => {
    return (
        <section className='black-color p-20' id="projects">
            <div class="flex-row justify-center items-centerpx-4 gap-8 max-w-screen-xl py-4 mx-auto">
                <div className="text-center">
                    <p className="text-3xl text-white font-bold mb-5">LATEST PROJECTS</p>
                    <p>In my portfolio, you'll find a diverse range of projects that showcase my skills in web development and design.</p>
                </div>
                <div className="md:flex gap-20 pt-10">
                    <div className="p-10 lg:p-0 h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 hover:text-white cursor-pointer">
                        <a href="https://astra-diploma.vercel.app/login" target="_blank" className="p-10 lg:p-0 h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 hover:text-white cursor-pointer">
                            <img className="rounded-lg" src="/images/astra.png"></img>
                            <p className="text-3xl font-bold pt-5">ASTRA WEBSITE</p>
                            <p className="pt-5">The platform aims to connect students, educators, and universities, creating a centralized space for learning, support, and professional connections. It helps students access valuable resources while giving teachers and universities a broader reach to assist and engage with a wider audience.</p>
                        </a>
                    </div>
                    <div className="p-10 lg:p-0 h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 hover:text-white cursor-pointer">
                        <a href="https://lepessov-project.netlify.app/" target="_blank" className="p-10 lg:p-0 h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 hover:text-white cursor-pointer">
                            <img className="rounded-lg" src="/images/3d.png"></img>
                            <p className="text-3xl font-bold pt-5">3D Furniture Customization
                            </p>
                            <p className="pt-5">This platform lets users customize furniture in 3D, including options for legs, handles, door colors, and textures. With an interactive interface, customers can instantly visualize and personalize their pieces before purchase.</p>
                        </a>
                    </div>
                
                </div>
            </div>
        </section>
    )
}

export default Services