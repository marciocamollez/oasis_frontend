import React from 'react';

import { Container, Jumbotron } from 'reactstrap';
import Link from 'next/link';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/index.css';

const Rodape = (props) => {
    return (
        <div>
            <Jumbotron fluid className="rodape">
                <Container>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4">
                            <h5>{props.data.tituloPg}</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link href="/">
                                        <a className="link-rodape">Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#historia">
                                        <a className="link-rodape">História</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#acustico">
                                        <a className="link-rodape">Acústico</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#discografia">
                                        <a className="link-rodape">Discografia</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 col-sm-12 col-md-4">
                            <h5>{props.data.tituloCont}</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="tel:11989489076" className="link-rodape">{props.data.telCont}</a>
                                </li>
                                <li>
                                    <Link href="mailto:marciocamollez@hotmail.com">
                                        <a className="link-rodape">{props.data.emailCont}</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4">
                            <h5>{props.data.tituloRedSoc}</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href={props.data.instLink} className="link-rodape" target="_black">{props.data.instTitulo}</a>
                                </li>
                                <li>
                                    <a href={props.data.gitLink} className="link-rodape" target="_black">{props.data.gitTitulo}</a>
                                </li>
                                <li>
                                    <a href={props.data.twiterLink} className="link-rodape" target="_black">{props.data.twiterTitulo}</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Rodape;