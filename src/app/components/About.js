import React, {PureComponent} from "react";

export default class About extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            team : [
                {
                    name: "Daan Teunissen",
                    role: "Founder & CEO of Xebia Group",
                    photo: "/assets/images/Daan-Teunissen.jpg"
                },
                {
                    name: "Michel den Braver",
                    role: "CFO of Xebia Group",
                    photo: "/assets/images/michel.jpg"
                },
                {
                    name: "Anand Sahay",
                    role: "CEO of Xebia India",
                    photo: "/assets/images/anand.jpg"
                },
                {
                    name: "Karan Nangru",
                    role: "COO of Xebia India",
                    photo: "/assets/images/karan.jpg"
                },
                {
                    name: "Aditya Kalia",
                    role: "CTO of Xebia India",
                    photo: "/assets/images/aditya.jpg"
                }
            ]
        };

    }

    render() {
        console.log("About render");

        return (
            <div> 
                <p>Xebia explores and creates new frontiers. Always one step ahead of what businesses need, 
                   we turn the latest technology trends into advantages for our customers. As a mainstream frontrunner, 
                   we create new solutions and build the future with our clients.</p>
                <h2>Team</h2>
                <ul>
                    {
                        this.state.team.map(member => (
                            <li key={member.name}> 
                                <img src={member.photo}></img>
                                <br/>
                                <b>{member.name}</b>
                                <br/>
                                {member.role}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
} 