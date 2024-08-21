




export default function Projects() {
    return(
        <div className="flex flex-col justify-center mt-10 ml-80 mr-48 mb-20">
            <div className="flex flex-row justify-center items-center content-center ml-24 bg-gray-700/[0.60]">
                <div className="text-6xl basis-1/3 text-center">
                    <p>Krieger</p>
                    <br />
                    <p>Data</p>
                    <br />
                    <p>Forge</p>
                </div>
                <div className="text-xl basis-2/3">
                    <p>
                        Overview:
                        <br />
                        Full Stack Project that provides data to websites I or other developers create
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