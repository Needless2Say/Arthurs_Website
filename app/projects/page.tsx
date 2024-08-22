// Projects Page




export default function Projects() {
    return(
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
    )
}