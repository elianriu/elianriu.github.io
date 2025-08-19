import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
        <div className="w-full flex  flex-col items-center justify-center p-10">
            <img className="rounded-full h-60" src="https://avatars.githubusercontent.com/u/25394435?v=4" alt=""/>
        </div>
        <div className="w-full flex  flex-col items-center justify-center p-10">
            <div className="sm:w-full md:w-full lg:w-3/5 xl:w-3/5">
            <h1 className="text-2xl font-bold">Hi! I'm Elian Riu .</h1>
            <div className="mt-5">Experienced  <b>Frontend Developer</b> adept in bringing forth expertise in design, installation, testing and maintenance of software systems.  Have been doing a lot of react native app development. Apart from my own forum, I have worked remotely with some of <b>Singapore's</b> start-ups</div>

            <div className="mt-5">
                I am currently Worked at <a href="https://dbs.com"><b>DBS Bank</b></a> as Backend Developer
            </div>
            <div className="mt-5">
                I am currently a Founder of <a href="https://garar.id"><b>Garar ID</b></a> Maintaining a database of 200 digital products, such as game vouchers, credit, electricity tokens
            </div>

            <div className="mt-5">
                Previously, I have worked as a Frontend Developer at <b>ProSpace</b>, and <b>Rushowl Singapore</b>
            </div>
            
            <div className="flex mt-5 text-blue-500">
                <a className="ml-0" target="_blank" rel="noopener noreferrer" href="https://github.com/elianriu">github</a>
                <a className="ml-10" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/elianriu/">linkedin</a>
                <a className="ml-10" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@elianriu">youtube</a>
                
            </div>
        </div>
        </div>
    </div>
  );
}
