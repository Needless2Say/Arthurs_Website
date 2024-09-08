// Projects Page
import Link from "next/link"



export default function Projects() {
    return(
        <div className="flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row justify-center my-8 mx-8 bg-gray-700/[0.60]">
                <div className="flex flex-row lg:flex-col flex-wrap text-3xl md:text-4xl lg:text-6xl font-bold basis-1/3 text-center m-4 justify-center items-center">
                    <div>Krieger</div>
                    <div>&nbsp;</div>
                    <div>Data</div>
                    <div>&nbsp;</div>
                    <div>Forge</div>
                </div>
                <div className="flex text-xl lg:text-2xl basis-2/3 px-3 my-4 justify-center">
                    <div>
                        <p>
                            Summary:
                            <br />
                            Full Stack Project that provides data to websites I or other developers create
                            <br />
                            <br />
                            Links To Videos of KriegerDataForge and Associated Websites:
                            <br />
                            <a href="https://youtu.be/emxHI2ybPJ4" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">KriegerDataForge POC</a>
                            <br />
                            <a href="https://youtu.be/j3F10BulHSs" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Calorie Tracker Website POC</a>
                            <br />
                            <br />
                            Overview:
                        </p>
                        <ul className="list-disc ml-10">
                            <li>Front End</li>
                            <ul className="list-disc pl-10">
                                <li>Websites that use data to display to users based on website usecase</li>
                                <li>Examples</li>
                                <ul className="list-disc pl-10">
                                    <li>Calorie Tracker</li>
                                    <li>Video Game Database</li>
                                </ul>
                                <li>Frameworks/Languages</li>
                                <ul className="list-disc pl-10">
                                    <li>Next.js</li>
                                </ul>
                            </ul>
                            <li>Back End</li>
                            <ul className="list-disc pl-10">
                                <li>Independent API that serves websites connect to API</li>
                                <li>Examples</li>
                                <ul className="list-disc pl-10">
                                    <li>Serves Calorie Tracker website with food data</li>
                                    <li>Serves Video Game Database website with video game related data</li>
                                </ul>
                                <li>Frameworks/Languages</li>
                                <ul className="list-disc pl-10">
                                    <li>FastAPI</li>
                                </ul>
                            </ul>
                            <li>Database</li>
                            <ul className="list-disc pl-10">
                                <li>1 database with 1 schema for each website containing many tables</li>
                                <li>PostgreSQL Relational Database</li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Embedded YouTube Videos */}
            <div className="flex flex-col xl:flex-row items-center mx-10 mb-10">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://youtu.be/emxHI2ybPJ4" 
                    title="KriegerDataForge POC" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-64 lg:h-96 xl:h-[450px] 2xl:h-[550px] mb-8 xl:mr-5"
                ></iframe>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://youtu.be/j3F10BulHSs" 
                    title="Calorie Tracker Website POC" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-64 lg:h-96 xl:h-[450px] 2xl:h-[550px] mb-8 xl:ml-5"
                ></iframe>
            </div>
        </div>
    )
}