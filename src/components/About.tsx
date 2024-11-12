export default function About() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Professional Journey</h3>
                    <p className="mb-4">
                        I am a software developer with four years of experience. During one of my past jobs at a furniture company,
                        I had the opportunity to manage a team and work directly with clients. This experience taught me the
                        importance of client satisfaction and effective team management.
                    </p>
                    <p className="mb-4">
                        In my current role at Mikronika, I coordinate directly with clients to understand and meet their expectations
                        while improving and maintaining the company's software solutions.
                    </p>
                    <p>
                        My approach to web design is rooted in the belief that there are no impossible tasks. With creativity,
                        persistence, and the right tools, any challenge can be overcome.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Skills & Tools</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>Java (Spring MVC, Spring Security, Spring Boot, Play, Hibernate)</li>
                        <li>JavaScript (React, AngularJS)</li>
                        <li>REST APIs</li>
                        <li>Version Control (Git, SVN)</li>
                        <li>Software Design Patterns</li>
                        <li>HTML, CSS</li>
                        <li>Scrum and Kanban management methods</li>
                        <li>Databases (MySQL, Oracle DBMS, SQL queries)</li>
                    </ul>
                    <h3 className="text-2xl font-semibold mb-4">Education</h3>
                    <p>Bachelor of Computer Science (Programming Focus)</p>
                    <p>Academy of Computer Science and Management "Copernicus" in Wrocław</p>
                    <p>September 2017 - January 2021</p>
                </div>
            </div>
        </div>
    )
}