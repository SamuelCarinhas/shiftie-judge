import React, { useState } from "react";
import { Logo, Navbar, ScrollableList } from "../../components/Components.jsx"
import "./AllCoursesPage.css"
import { Link } from "react-router-dom";
import "./AllCoursesPage.css"

const currentCourses = {
    title: "",
    items: [
        {id: 1, name: 'Introdução à Programação e Resolução de Problemas', link: '/courses/1'},
        {id: 2, name: 'Design e Multimédia', link: '/courses/1'},
        {id: 3, name: 'Introdução à Programação e Resolução de Problemas', link: '/courses/1'},
        {id: 4, name: 'Design e Multimédia', link: '/courses/1'},
        {id: 5, name: 'Introdução à Programação e Resolução de Problemas', link: '/courses/1'},
        {id: 6, name: 'Design e Multimédia', link: '/courses/1'},
        {id: 7, name: 'Introdução à Programação e Resolução de Problemas', link: '/courses/1'},
        {id: 8, name: 'Design e Multimédia', link: '/courses/1'},
        {id: 10, name: 'Introdução à Programação e Resolução de Problemas', link: '/courses/1'},
        {id: 11, name: 'Introdução à Programação e Resolução de Problemas', link: '/courses/1'},
        {id: 12, name: 'Design e Multimédia', link: '/courses/1'},
        {id: 13, name: 'Introdução à Programação e Resolução de Problemas', link: '/courses/1'},
        {id: 14, name: 'Design e Multimédia', link: '/courses/1'},
        {id: 15, name: 'Introdução à Programação e Resolução de Problemas', link: '/courses/1'},
        {id: 10, name: 'Introdução à Programação e Resolução de Problemas', link: '/courses/1'},
        {id: 11, name: 'Introdução à Programação e Resolução de Problemas', link: '/courses/1'},
        {id: 12, name: 'Design e Multimédia', link: '/courses/1'},
        {id: 13, name: 'Introdução à Programação e Resolução de Problemas', link: '/courses/1'},
        {id: 14, name: 'Design e Multimédia', link: '/courses/1'},
        {id: 15, name: 'Introdução à Programação e Resolução de Problemas', link: '/courses/1'},
    ]
}

const allCourses = [
    {
        title: "Licenciatura",
        items: [
            {id: 1, name: '1º ano', link: '/courses/1'},
            {id: 2, name: '2º ano', link: '/courses/2'},
            {id: 3, name: '3º ano', link: '/courses/3'}
        ]   
    },
    {
        title: "Mestrado",
        items: [
            {id: 4, name: '1º ano', link: '/courses/4'},
            {id: 5, name: '2º ano', link: '/courses/5'},
        ]   
    }
]

function CoursesPage() {

    const degreesList = (data, index) => {
        return(
            <div key={index} className="sublist">
                <h2 className="subtitle">{data.title}</h2>
                <div className="subContent">
                    <ScrollableList data={data.items}/>
                </div>
            </div>

        );
    }

    return(
        <div className="app">
            <Navbar />
            <div className="courses-body">
                <div className="left sect">
                    <div className="list">
                        <h1 className="title">Courses</h1>
                        <div className="content">
                            <ScrollableList data={currentCourses.items}/>
                        </div>
                    </div>
                </div>
                <div className="right sect">
                    <div className="list">
                        <h1 className="title">All courses</h1>
                        <div className="sublists">
                            {
                                allCourses.map((degree, index) => degreesList(degree, index))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default CoursesPage;