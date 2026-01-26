
export default function Home() {
  return (
    <div className="w-full">
        <div className="w-full flex  flex-col items-center justify-center p-10">
            <img className="rounded-full h-60" src="/static/images/profile-pic.jpg" alt=""/>
        </div>
        <div className="w-full flex  flex-col items-center justify-center p-10">
            <div className="sm:w-full md:w-full lg:w-3/5 xl:w-3/5">
            <h1 className="text-2xl font-bold">Hi! I'm Darvin S .</h1>
            <div className="mt-5">Experienced <b>Software Engineer</b> with 8+ years of expertise spanning frontend, backend, and microservices architecture. Recognized as <b>DBS Tech Hero 2024</b> in the Most Versatile category. Based in <b>Singapore</b>, progressed from frontend specialist to full-stack engineer to microservices architect.</div>

            <div className="mt-5">
                I am currently working at <a href=""><b>IBM</b></a> as IT Consultant
            </div>
            <div className="mt-5">
                Previously a Senior Associate &amp; Microservices Engineer at <a href=""><b>DBS Bank</b></a>, managing 16 microservices across production environments
            </div>
            <div className="mt-5">
                Founder of <a href=""><b>Garar ID</b></a>, an e-commerce platform managing 200+ digital products
            </div>

            <div className="mt-5">
                And I have worked as a Frontend Developer at <b>ProSpace</b>, <b>BusinessTakeover</b>, and <b>Rushowl Singapore</b>
            </div>

            <div className="flex mt-5 text-blue-500">
                <a className="ml-0" target="_blank" rel="noopener noreferrer" href="https://github.com/nagacoder">github</a>
                <a className="ml-10" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nagacoder">linkedin</a>

            </div>
        </div>
        </div>
    </div>
  );
}
