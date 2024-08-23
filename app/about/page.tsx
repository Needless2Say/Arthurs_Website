// About Page
import Image from "next/image"
import me_pic from "../../public/me_pic.jpg"

export default function About() {
    return(
        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center my-8 mx-8">
            <div className="w-full h-full basis-1/5 flex justify-center">
                <Image 
                    src={me_pic}
                    width={280}
                    height={800}
                    alt="Personal Portrait"
                />
            </div>
            <div className="w-full h-full basis-4/5 text-xl 2xl:text-2xl bg-gray-600/[0.7] p-3">
                <p>
                    I am a Senior at the University of Michigan Ann Arbor, and I&apos;m majoring in Computer Science and Minoring in Data Science.
                </p>
                <br />
                Some notable classes I&apos;ve taken at the University of Michigan include:
                <ul className="ml-8 list-disc">
                    <li>EECS 281 - Data Structures and Algorithms</li>
                    <li>EECS 370 - Intro to Computer Architecture</li>
                    <li>EECS 485 - Web Systems</li>
                    <li>EECS 445 - Intro to Machine Learning</li>
                    <li>EECS 492 - Intro to Artificial Intelligence</li>
                    <li>EECS 442 - Computer Vision (Currently Taking)</li>
                    <li>EECS 481 - Software Development (Currently Taking)</li>
                </ul>
                <br />
                <p>
                    This Fall 2024 Semester I am taking EECS 442 (Computer Vision) and EECS 481 (Software Development). I am going to be learning about
                    different types of Neural Networks and best practices for Software Development for large scale projects, like different levels of environments
                    for testing software before deploying to production and work flow for developing projects.
                    <br />
                    <br />
                    I am also going to be working on my personal project where I am going to be developing several websites, such as a calorie tracker and a video game database.
                    I am using Next.js to develop the front-end, FastAPI to develop the back-end, and PostgreSQL to host a relational database.
                    I have had a long standing interest for exercising and video games, and with my knowledge, I am developing an environment that I will be able to put my passion on full display.
                </p>
            </div>
        </div>
    )
}