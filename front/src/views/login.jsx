import React from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import Navbar from '../components/navbar';

const Login = props => {
    const { store, actions } = useContext(Context);

    return (
        <div id="allLogIn">
            <Navbar />
            <div className="container" id="container-logIn" >
                <div className="col-md-6 offset-md-3 col-xs-12" id="logIn" >
                    {
                        !!store.errors && (
                            <div className="row mt-4 text-center">
                                <div className="col-md-12">
                                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                        <strong>ERROR!</strong> {store.errors.msg}
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <br />
                    <h1 className="ligIn">Inicar Cesión</h1>
                    <br />
                    <form onSubmit={e => actions.login(e, props.history)}>
                        <div className="form-group">
                            <label htmlFor="inputUsuario">Usuario</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputUsuario"
                                aria-describedby="emailHelp"
                                name="email"
                                onChange={actions.handleChange}
                                value={store.email}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                name="password"
                                onChange={actions.handleChange}
                                value={store.password}
                            />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;