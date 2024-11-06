
const Footer = () => {
    return (
        <section>
            <footer class="bg-black">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" class="flex items-center">
                            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Good bye!</span>
                        </a>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold uppercase text-white">Social Media</h2>
                            <ul class=" text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="https://www.instagram.com/lepessov_" target="_blank" class="hover:underline">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/daulet-lepessov-bb2a42238/" target="_blank" class="hover:underline">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold uppercase text-white">Follow Me</h2>
                            <ul class=" text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="https://github.com/Lepessov" target="_blank" class="hover:underline ">Github</a>
                                </li>
                            </ul>
                        </div>
                       
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                </div>
            </footer>
        </section>
    )
}

export default Footer