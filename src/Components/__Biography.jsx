import React from 'react'
import { useSelector } from 'react-redux'

function Biography() {

    // Dark light logics
    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType;
    themeType == "ligth" ? bgType = "" : bgType = "bg-black"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
    // End dark light logics

    return (
        <>

            <section id="timeline" className={"timeline py-5 " + bgType + " " + textType}>
                <h1 className="section-title">Biography</h1>
                <p className="pb-0 section-description">Sit sint consectetur velit quisquam cupiditate impedit suscipit alias

                </p>

                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="timeline-title">Recap</h3>
                            <div className="timeline-item pb-0">
                                <h4 className="text-primary">John Doe</h4>
                                <p><em>developer with a passion for creating user-friendly and visually stunning websites. With over five years of experience in the field</em></p>
                                <p>
                                </p><ul>
                                    <li>130 Roman Rd, LEEDS, ME17 3RU</li>
                                    <li>(123) 456-7891</li>
                                    <li>yourmailaddress@example.com</li>
                                </ul>
                                <p></p>
                            </div>

                            <h3 className="timeline-title">Education</h3>
                            <div className="timeline-item">
                                <h4 className="text-primary">Lorem ipsum dolor sit amet.</h4>
                                <h5>2015 - 2016</h5>
                                <p><em>University Embankment, 7/9, 426 White Point Road Port Mouton  Nova Scotia</em></p>
                                <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                            </div>
                            <div className="timeline-item">
                                <h4 className="text-primary">Lorem ipsum dolor sit amet.</h4>
                                <h5>2010 - 2014</h5>
                                <p><em>University Embankment, 7/9, 426 White Point Road Port Mouton  Nova Scotia</em></p>
                                <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="timeline-title">Professional Experience</h3>
                            <div className="timeline-item">
                                <h4 className="text-primary">Lorem ipsum dolor sit amet.</h4>
                                <h5>2019 - Present</h5>
                                <p><em>University Embankment, 7/9, 426 White Point Road Port Mouton  Nova Scotia</em></p>
                                <p>
                                </p>
                                <ul>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit laudantium aut est eius id consequatur.</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit laudantium aut est eius id consequatur.</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit laudantium aut est eius id consequatur.</li>
                                </ul>
                                <p></p>
                            </div>
                            <div className="timeline-item">
                                <h4 className="text-primary">Lorem ipsum dolor sit amet.</h4>
                                <h5>2017 - 2018</h5>
                                <p><em>University Embankment, 7/9, 426 White Point Road Port Mouton  Nova Scotia</em></p>
                                <p>
                                </p>
                                <ul>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit laudantium aut est eius id consequatur.</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit laudantium aut est eius id consequatur.</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit laudantium aut est eius id consequatur.</li>
                                </ul>
                                <p></p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Biography