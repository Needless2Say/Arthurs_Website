




export default function Projects() {
    return(
        <div className="flex flex-col justify-center mt-10 ml-80 mr-48">
            <div className="flex flex-row justify-center items-center content-center ml-24 bg-gray-700/[0.60]">
                <div className="text-6xl basis-1/3 text-center">
                    <p>Gacha</p>
                    <br />
                    <p>Game</p>
                    <br />
                    <p>Database</p>
                </div>
                <div className="text-2xl basis-2/3">
                    <ul className="list-disc ml-10">
                        <li>Track game data from several gacha games</li>
                        <li>Front-End includes the following:
                            <ul className="list-disc pl-10">
                                <li>Next.js</li>
                                <li>Tailwind CSS</li>
                                <li>TypeScript/JavaScript</li>
                                <li>Python</li>
                                <li>REST API</li>
                                <li>JSON</li>
                                <li>SQL</li>
                            </ul>
                        </li>
                        <li>Back-End includes a SQL Database hosted on a server</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}