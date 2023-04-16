import React, { useState } from "react";
import { Logo, Navbar } from "../../components/Components.jsx"
import "./AllCoursesPage.css"
import { Link } from "react-router-dom";
import "./AllCoursesPage.css"

const currentCourses = [
    {id: 1, name: 'Introdução à Programação e Resolução de Problemas', link: '/courses/1'},
    {id: 2, name: 'Design e Multimédia', link: '/courses/1'}
];

const allCourses = [
    {
        name: "Licenciatura",
        courses: [
            {id: 1, name: '1º ano', link: '/courses/1'},
            {id: 2, name: '2º ano', link: '/courses/2'},
            {id: 3, name: '3º ano', link: '/courses/3'}
        ]   
    },
    {
        name: "Mestrado",
        courses: [
            {id: 4, name: '1º ano', link: '/courses/4'},
            {id: 5, name: '2º ano', link: '/courses/5'},
        ]   
    }
]

function CoursesPage() {

    return(
        <div className="app">
            <Navbar />
            <div className="courses-body">
                <div className="list">
                    <h1 className="title">Courses</h1>
                    {
                        currentCourses.map(course =>
                            <Link key={course.id} className="course-link" to="/teste">
                                {course.name}
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
        
    );
}

export default CoursesPage;