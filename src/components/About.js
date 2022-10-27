import React, { Component } from "react";

import '../style/About.css';

class About extends Component {
    titles = [];

    constructor() {
        super();
        this.state = { checked: false };
    }

    render() {
        return (
            <header>

                <div className="about">
                    <div class="card">
                        <p>
                            Similar post
                        </p>
                        <h2>
                        Graduada em Gestão de TI, iniciei a carreira em 2018 na área de suporte,
                        atendendo chamados e configurando softwares e hardwares para os usuários. 
                        No final de 2020, integrei em uma nova empresa como estagiária de desenvolvimento web, 
                        e fui efetivada no início de 2022, atuando como analista de desenvolvimento jr, 
                        trabalhando em projetos com metodologia ágil, ajuste de bugs, utilizando linguagens como 
                        Javascript, Typescript e Java.
                        </h2>
                    </div>
                    <img src={require('../img/rofa.gif')} />
                </div>


            </header>
        );
    }
}

export default About;
