import Image from "next/image"
import me_pic from "../../public/me_pic.jpg"

export default function About() {
    return(
        <div className="flex flex-row flex-wrap justify-center items-center mt-8 mx-8">
            <div className="w-full h-full basis-1/5 flex justify-center">
                <Image 
                    // src="/public/me_pic.jpg"
                    src={me_pic}
                    width={280}
                    height={800}
                    alt="Personal Portrait"
                />
            </div>
            <div className="w-full h-full basis-4/5 text-xl bg-gray-600/[0.7]">
                <p>
                    I am a Junior at the University of Michigan Ann Arbor. 
                    I am majoring in Computer Science and minoring in Applied Statistics and Japanese. 
                    I am looking for an internship in Software Engineering / Full Stack Development.
                </p>
                <br />
                <p>
                    Two major classes I am taking at The University of Michigan Ann Arbor are EECS 445 (Intro to Machine Learning) and EECS 492 (Intro to Artificial Intelligence). 
                    In Machine Learning, I am learning the fundamentals of machine learning and the math behind different types of models. 
                    I am also using different models in projects to apply what I have learned. 
                    In Artificial Intelligence, I am learning different types of AI models and I am using the AI models in projects using python to increase my understanding of them.
                </p>
                <br />
                <p>
                    This past Winter Semester 2023, I took EECS 281 and EECS 370, and Japanese 126 at The University of Michigan Ann Arbor. 
                    EECS 281 is Data Structures and Algorithms, EECS 370 is Computer Architecture. 
                    EECS 281 and EECS 370 helped me prepare for demanding project deadlines because I had to balance 3-4 projects at a time that are due in around 2-3 weeks after the projects are released. 
                    Having 2-4 projects assigned and due on the same day helped me learn how to manage my time and work hard in completing the projects on time and getting 100% on each project.
                </p>
            </div>
        </div>
    )
}