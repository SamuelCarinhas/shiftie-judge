import React, { useState } from "react";
import { Logo, Navbar, List } from "../../components/components.jsx"
import "./AllCoursesPage.css"
import { Link } from "react-router-dom";
import "./AllCoursesPage.css"

const currentCourses = [
    {id: 1, name: 'Hello World', link: '/courses/1'},
    {id: 2, name: 'Installation', link: '/courses/1'}
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
        <>
            <Navbar courses_link="/courses" tournaments_link="/tournaments" username="joao"/>
            <div className="courses-body">
                <div className="left sect">
                    <h1 className="left title">Current courses</h1>
                    <div className="left list left-list">
                        <List items={currentCourses}/>
                    </div>
                </div>
                <div className="right sect">
                    <h1 className="right title">All courses</h1>
                    <div>
                        {
                            allCourses.map((degree, index) => {
                                return <div key={index}>
                                <h2 className="right">{degree.name}</h2>
                                <div className="right list right-list">
                                    <List items={degree.courses}/>
                                </div>
                                </div>
                            })
                        }
                    </div>
                    
                    
                </div>
            </div>
        </>
        
    );
}

export default CoursesPage;